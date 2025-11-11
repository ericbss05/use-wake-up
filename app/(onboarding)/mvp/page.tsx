import { Suspense } from 'react';
import MVPPageContent from './mvp-page-content';

export default function MVPPage() {
  return (
    <Suspense fallback={
      <p style={{ textAlign: 'center', marginTop: '100px' }}>Chargement...</p>
    }>
      <MVPPageContent />
    </Suspense>
  );
}