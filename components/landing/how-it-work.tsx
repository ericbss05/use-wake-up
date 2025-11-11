// ./components/HowItWork.tsx
import React from 'react';
import { Feature1 } from './features/feature-1';
import { Feature2 } from './/features/feature-2';
import { Feature3 } from './features/feature-3';

const HowItWork = () => {
  return (
    <section
      id="comment_ca_marche"
      className="py-16 bg-white dark:bg-background-dark"
    >
      {/* En-tête de la section */}
      <div className="text-center max-w-2xl mx-auto mb-12 px-4">
        <h2 className="text-3xl font-semibold text-black dark:text-white">
          Comment ça marche
        </h2>
        <p className="text-sm text-slate-500 dark:text-gray-400 mt-2">
          Wake Up analyse tes cours et crée un parcours d&apos;apprentissage
          personnalisé. Tout est automatique, tu te concentres sur l&apos;essentiel :
          apprendre.
        </p>
      </div>

      {/* Rendu des 3 features */}
      <Feature1 />
      <Feature2 />
      <Feature3 />
      
    </section>
  );
};

export default HowItWork