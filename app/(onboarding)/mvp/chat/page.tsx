import { Suspense } from 'react';
import Mindmap from '@/components/mindmap';

export default function ResumePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
          <p className="text-sm text-gray-500">Chargement...</p>
        </div>
      </div>
    }>
      <Mindmap />
    </Suspense>
  );
}