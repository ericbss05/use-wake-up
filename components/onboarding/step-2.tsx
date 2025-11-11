'use client';

import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, UploadCloud, X } from 'lucide-react';

interface FileUploaderProps { 
  onBack: () => void;
}

const Step2: React.FC<FileUploaderProps> = ({ onBack }) => {
  const router = useRouter();
  const MAX_FILES = 50;
  const SUPPORTED_TYPES = ['application/pdf'];
  const inputRef = useRef<HTMLInputElement>(null);

  const [files, setFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  // Ajouter des fichiers
  const addFiles = (fileList: FileList | null) => {
    if (!fileList) return;
    const validFiles = Array.from(fileList)
      .filter(f => SUPPORTED_TYPES.includes(f.type))
      .filter(f => !files.some(existing => existing.name === f.name && existing.size === f.size))
      .slice(0, MAX_FILES - files.length);

    if (validFiles.length < fileList.length) {
      alert(`Certains fichiers ont été ignorés (doublons ou limite max ${MAX_FILES})`);
    }

    setFiles(prev => [...prev, ...validFiles]);
  };

  // Supprimer un fichier
  const removeFile = (index: number) => setFiles(prev => prev.filter((_, i) => i !== index));

  // Upload et redirection
  const uploadFiles = async () => {
    if (!files.length) return alert('Ajoutez au moins un fichier.');
    setIsUploading(true);

    try {
      let mainNamespace = '';

      for (const file of files) {
        const formData = new FormData();
        formData.append('file', file);

        const res = await fetch('/api/upload', { method: 'POST', body: formData });
        if (!res.ok) throw new Error('Erreur lors de l’upload');

        const data = await res.json();
        console.log('PDF analysé :', data);

        if (data.namespace) {
          mainNamespace = data.namespace;

          // Stockage dans localStorage
          const stored = localStorage.getItem('pineconeNamespaces');
          let namespaces: string[] = stored ? JSON.parse(stored) : [];
          if (!namespaces.includes(data.namespace)) {
            namespaces.push(data.namespace);
            localStorage.setItem('pineconeNamespaces', JSON.stringify(namespaces));
          }
          console.log('✅ Namespace enregistré dans localStorage :', data.namespace);
        }
      }

      alert('Tous les fichiers ont été analysés avec succès !');
      setFiles([]);

      // 🔹 Redirection vers /mvp/chat avec token
      const searchParams = new URLSearchParams(window.location.search);
      const token = searchParams.get('token');
      if (token) {
        router.push(`/mvp/chat?token=${token}`);
      } else {
        console.warn('Token absent dans l’URL, impossible de rediriger.');
      }
    } catch (err) {
      console.error(err);
      alert('Erreur pendant l’analyse du PDF.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      <Card className="w-full max-w-3xl border-0 backdrop-blur-sm bg-white/80 shadow-xl">
        {/* Header */}
        <CardHeader className="space-y-8 pt-12 pb-8 px-10">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="h-1.5 w-12 rounded-full bg-slate-900"></div>
              <div className="h-1.5 w-12 rounded-full bg-slate-900"></div>
            </div>
            <span className="text-xs font-medium text-slate-500">ÉTAPE 2/2</span>
          </div>

          <div className="space-y-5">
            <CardTitle className="text-3xl font-light text-slate-900">
              Importez votre document
            </CardTitle>
            <CardDescription className="text-base text-slate-600 font-light">
              Déposez un document à analyser et laissez{' '}
              <span className="font-semibold text-slate-800">Wake Up</span> détecter les concepts clés.
            </CardDescription>
          </div>
        </CardHeader>

        {/* Zone info */}
        <div className="px-10 pb-12 space-y-6">
          <div className="flex items-start p-3 rounded-lg bg-blue-50 border border-blue-200">
            <span className="text-blue-600 text-xl font-bold mr-3">ⓘ</span>
            <div>
              <p className="text-sm font-semibold text-gray-800">Information</p>
              <p className="text-xs text-gray-600 mt-1">
                Les fichiers sont utilisés uniquement pour l’analyse. Rien n’est stocké ni partagé.
              </p>
            </div>
          </div>

          {/* Zone drag & drop */}
          <div
            onClick={() => inputRef.current?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              addFiles(e.dataTransfer.files);
            }}
            className="flex flex-col items-center justify-center h-52 border-2 border-dashed border-gray-300 rounded-2xl p-6 hover:border-blue-500 bg-white/60 text-center cursor-pointer"
          >
            <UploadCloud className="h-10 w-10 text-gray-400 mb-3" />
            <input
              ref={inputRef}
              type="file"
              multiple
              onChange={e => addFiles(e.target.files)}
              className="hidden"
              accept=".pdf"
            />
            <p className="text-sm text-gray-700 font-medium">
              Glissez vos fichiers ici ou{' '}
              <span className="text-blue-600 font-semibold">sélectionnez-les</span>
            </p>
            <p className="text-xs text-gray-500 mt-2">Formats supportés : PDF</p>
          </div>

          {/* Liste des fichiers */}
          {files.length > 0 && (
            <div className="space-y-2">
              {files.map((f, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center text-sm bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg"
                >
                  <span className="truncate max-w-[75%]">{f.name}</span>
                  <button onClick={() => removeFile(i)} className="text-red-500 hover:text-red-700">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Barre de progression */}
          <div className="flex items-center text-xs mt-6">
            <span className="font-medium text-gray-600 mr-2">Fichiers ajoutés</span>
            <div className="flex-1 h-1.5 bg-gray-200 rounded-full mx-2 overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all"
                style={{ width: `${(files.length / MAX_FILES) * 100}%` }}
              />
            </div>
            <span className="font-medium text-gray-800">{files.length}/{MAX_FILES}</span>
          </div>
        </div>

        {/* Footer */}
        <CardFooter className="px-10 pb-10 flex justify-between">
          <Button variant="outline" size="lg" className="rounded-xl" onClick={onBack} disabled={isUploading}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour
          </Button>

          <Button
            size="lg"
            className="rounded-xl text-white px-8 h-12 font-medium"
            onClick={uploadFiles}
            disabled={isUploading || !files.length}
          >
            {isUploading ? 'Analyse en cours…' : 'Lancer l’analyse'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Step2;
