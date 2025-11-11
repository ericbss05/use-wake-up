'use client';

import { useEffect, useState, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from "next/link";

// --- TYPES ---
interface SousBranche {
  nom: string;
  description: string;
  sous_branches?: SousBranche[];
}

interface BranchePrincipale extends SousBranche { }

interface MindmapStructure {
  notion_centrale: string;
  explication_centrale: string;
  branches_principales: BranchePrincipale[];
}

const CACHE_KEY_PREFIX = 'mindmapCache_';

export default function ResumePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get('token');

  const [loading, setLoading] = useState(true);
  const [mindmapData, setMindmapData] = useState<MindmapStructure | null>(null);
  const [namespace, setNamespace] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Rendu récursif des sous-branches
  const renderSubBranches = (branches: SousBranche[], level: number, parentId: string) => {
    const paddingLeft = level * 24;

    return (
      <div className="flex flex-col" style={{ paddingLeft: `${paddingLeft}px` }}>
        {branches.map((branch, idx) => {
          const nodeId = `${parentId}-${idx}`;
          const isHovered = hoveredNode === nodeId;

          return (
            <div key={idx} className="relative group">
              {/* Node */}
              <div
                className="relative py-1.5 mb-1"
                onMouseEnter={() => setHoveredNode(nodeId)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div className="flex items-center gap-2 cursor-pointer">
                  <div className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors"></div>
                  <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                    {branch.nom}
                  </span>
                </div>

                {/* Tooltip description */}
                {isHovered && (
                  <div className="absolute z-50 left-0 top-full mt-2 p-3 bg-white rounded-lg shadow-lg border border-gray-200 w-72 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="text-xs font-medium text-gray-900 mb-1">
                      {branch.nom}
                    </div>
                    <div className="text-xs text-gray-600 leading-relaxed">
                      {branch.description}
                    </div>
                  </div>
                )}
              </div>

              {/* Sous-branches récursives */}
              {branch.sous_branches && branch.sous_branches.length > 0 && (
                <div className="border-l border-gray-200 ml-3">
                  {renderSubBranches(branch.sous_branches, level + 1, nodeId)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  // Fetch et cache
  const fetchAndCacheSummary = useCallback(async (ns: string) => {
    setLoading(true);
    setError(null);
    setMindmapData(null);

    const cacheKey = CACHE_KEY_PREFIX + ns;
    const cachedData = localStorage.getItem(cacheKey);

    if (cachedData) {
      try {
        const parsedMap = JSON.parse(cachedData) as MindmapStructure;
        setMindmapData(parsedMap);
        setLoading(false);
        return;
      } catch (err) {
        console.warn("Cache corrompu", err);
      }
    }

    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ namespace: ns, prompt: 'Génère la carte mentale du document' }),
      });

      if (!res.ok) {
        const errorBody = await res.json().catch(() => ({}));
        throw new Error(errorBody.error || `Erreur API: ${res.status}`);
      }
      if (!res.body) throw new Error('Pas de corps de réponse');

      const reader = res.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let done = false;
      let fullResponseText = '';

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        if (value) {
          const chunk = decoder.decode(value, { stream: true });

          const lines = chunk.split('\n').filter(l => l.startsWith('data: '));
          for (const line of lines) {
            const jsonStr = line.replace(/^data:\s*/, '');
            if (jsonStr === '[DONE]') continue;

            try {
              const parsed = JSON.parse(jsonStr);
              if (parsed.delta) {
                fullResponseText += parsed.delta;
              }
            } catch (err) { }
          }
        }
      }

      if (fullResponseText) {
        try {
          const cleanedJsonText = fullResponseText
            .trim()
            .replace(/^```json\s*/, '')
            .replace(/\s*```$/, '');

          const parsedObject = JSON.parse(cleanedJsonText) as { mindmap: MindmapStructure };

          if (!parsedObject.mindmap || !parsedObject.mindmap.notion_centrale) {
            throw new Error('Format JSON invalide');
          }

          const parsedMindmap = parsedObject.mindmap;
          setMindmapData(parsedMindmap);
          localStorage.setItem(cacheKey, JSON.stringify(parsedMindmap));

        } catch (err) {
          console.error('Erreur parsing JSON:', err);
          setError(`Erreur de format JSON`);
        }
      } else {
        setError("Réponse IA vide");
      }
    } catch (err: any) {
      console.error("Erreur fetch:", err);
      setError(err.message || 'Erreur interne');
    } finally {
      setLoading(false);
    }
  }, []);

  // Init
  useEffect(() => {
    if (!token) {
      router.replace('/');
      return;
    }

    fetch(`/api/verify-token?token=${token}`)
      .then(res => res.json())
      .then(data => {
        if (!data.valid) {
          router.replace('/');
        } else {
          const stored = localStorage.getItem('pineconeNamespaces');
          if (stored) {
            const namespaces: string[] = JSON.parse(stored);
            if (namespaces.length > 0) {
              const ns = namespaces[namespaces.length - 1];
              setNamespace(ns);
              fetchAndCacheSummary(ns);
            } else {
              setError('Aucun namespace trouvé');
              setLoading(false);
            }
          } else {
            setError('Aucun document chargé');
            setLoading(false);
          }
        }
      })
      .catch(err => {
        console.error("Erreur token:", err);
        router.replace('/');
      });
  }, [token, router, fetchAndCacheSummary]);

  // --- RENDER ---
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-8 py-12">

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            Carte Mentale
          </h1>
          <p className="text-sm text-gray-500 max-w-2xl">
            Cette carte mentale illustre la structure hiérarchique et logique du document analysé.
            Elle permet de visualiser la <span className="font-medium text-gray-700 mx-1">notion centrale</span>
            ainsi que ses <span className="font-medium text-gray-700">branches principales</span> et leurs
            <span className="font-medium text-gray-700"> sous-idées</span>.
            Passez votre curseur sur les éléments pour afficher leurs explications détaillées.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-32">
            <div className="w-8 h-8 border-2 border-gray-200 border-t-blue-600 rounded-full animate-spin mb-3"></div>
            <p className="text-sm text-gray-500">Génération en cours...</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md text-sm">
            <span className="font-medium">Erreur :</span> {error}
          </div>
        )}

        {/* Mindmap */}
        {!loading && !error && mindmapData && (
          <div className="space-y-8">

            {/* Notion Centrale */}
            <div className="border-gray-200 pb-6 flex justify-center">
              <div
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredNode('central')}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="text-base font-medium text-gray-900">
                    {mindmapData.notion_centrale}
                  </span>
                </div>

                {hoveredNode === 'central' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 p-3 bg-white rounded-lg shadow-lg border border-gray-200 w-80 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="text-xs text-gray-600 leading-relaxed">
                      {mindmapData.explication_centrale}
                    </div>
                  </div>
                )}
              </div>
            </div>


            {/* Branches principales */}
            <div className="grid grid-flow-col justify-center gap-x-6">
              {mindmapData.branches_principales.map((branch, idx) => {
                const nodeId = `branch-${idx}`;
                const isHovered = hoveredNode === nodeId;

                return (
                  <div key={idx} className="border-gray-200 pl-6 hover:border-blue-500 transition-colors relative">

                    {/* Branche principale */}
                    <div
                      className="relative mb-3 group"
                      onMouseEnter={() => setHoveredNode(nodeId)}
                      onMouseLeave={() => setHoveredNode(null)}
                    >
                      <div className="flex items-center gap-2 cursor-pointer">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                        <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                          {branch.nom}
                        </span>
                      </div>

                      {isHovered && (
                        <div className="absolute z-50 left-1/2 -translate-x-1/2 top-full mt-2 p-3 bg-white rounded-lg shadow-lg border border-gray-200 w-80 animate-in fade-in slide-in-from-top-1 duration-150">
                          <div className="text-xs font-medium text-gray-900 mb-1">
                            {branch.nom}
                          </div>
                          <div className="text-xs text-gray-600 leading-relaxed">
                            {branch.description}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Sous-branches */}
                    {branch.sous_branches && branch.sous_branches.length > 0 && (
                      <div className="ml-6">
                        {renderSubBranches(branch.sous_branches, 1, nodeId)}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>


            {mindmapData.branches_principales.length === 0 && (
              <div className="text-center py-12 text-sm text-gray-400 border border-gray-200 rounded-lg">
                Aucune branche principale extraite
              </div>
            )}
          </div>
        )}
      </div>
      <div className='flex justify-end p-8'>
        <Link href="https://tally.so/r/WO9XQR" target="_blank" >
        <Button variant="outline">Que pensez-vous de cette fonctionnalité ?</Button>
        </Link>
      </div>
    </div>
  );
}