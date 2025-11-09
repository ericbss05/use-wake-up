import React from "react";

const Avantages: React.FC = () => {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-center text-black dark:text-white sm:text-4xl mb-12">
          Révisions classiques <span className="bg-blue-500 px-2 text-white rounded">vs</span> Wake Up
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Méthode classique */}
          <div className="bg-white dark:bg-[#1f1a30] border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg flex flex-col">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-600 dark:text-gray-400 tracking-wider uppercase">
                MÉTHODE CLASSIQUE
              </h3>
            </div>

            <ul className="grow p-6 space-y-4">
              <li className="flex items-start text-[#1F2937] dark:text-gray-300">
                <p className="font-semibold"><span className="text-red-500">✕</span> Tu relis 3 fois sans retenir</p>
              </li>
              <li className="flex items-start text-[#1F2937] dark:text-gray-300">
                <p className="font-semibold"><span className="text-red-500">✕</span> Anki pour flashcards, Notion pour notes, ChatGPT pour questions</p>
              </li>
              <li className="flex items-start text-[#1F2937] dark:text-gray-300">
                <p className="font-semibold"><span className="text-red-500">✕</span> Tu ne sais pas ce que tu maîtrises vraiment</p>
              </li>
              <li className="flex items-start text-[#1F2937] dark:text-gray-300">
                <p className="font-semibold"><span className="text-red-500">✕</span> Motivation qui s'effondre au bout de 2h</p>
              </li>
              <li className="flex items-start text-[#1F2937] dark:text-gray-300">
                <p className="font-semibold"><span className="text-red-500">✕</span> Pas de méthode, juste du bachotage</p>
              </li>
            </ul>

            <div className="p-4 bg-gray-50 dark:bg-black/20 rounded-b-xl text-center">
              <p className="text-gray-800 dark:text-gray-300 font-bold text-lg">Apprentissage passif</p>
              <p className="text-sm text-[#594c9a] dark:text-gray-400">Temps perdu, résultats aléatoires</p>
            </div>
          </div>

          {/* Wake Up */}
          <div className="bg-white dark:bg-[#1f1a30] border border-blue-500/50 dark:border-blue-500/70 rounded-xl shadow-lg flex flex-col scale-[1.02] transition-transform duration-300">
            <div className="p-6 border-b border-blue-500/20 dark:border-blue-500/40">
              <h3 className="text-lg font-bold text-blue-500 tracking-wider uppercase">
                AVEC WAKE UP
              </h3>
            </div>

            <ul className="grow p-6 space-y-4">
              <li className="flex items-start text-[#1F2937] dark:text-gray-300">
                <span className="text-green-500 mr-3 mt-1 text-2xl">✓</span>
                <p className="font-semibold">Tu <strong>testes</strong> ta compréhension (active recall)</p>
              </li>
              <li className="flex items-start text-[#1F2937] dark:text-gray-300">
                <span className="text-green-500 mr-3 mt-1 text-2xl">✓</span>
                <p className="font-semibold">Tout au même endroit : quiz, schémas, explications</p>
              </li>
              <li className="flex items-start text-[#1F2937] dark:text-gray-300">
                <span className="text-green-500 mr-3 mt-1 text-2xl">✓</span>
                <p className="font-semibold">L'IA t'indique tes lacunes et te conseils en consequence</p>
              </li>
              <li className="flex items-start text-[#1F2937] dark:text-gray-300">
                <span className="text-green-500 mr-3 mt-1 text-2xl">✓</span>
                <p className="font-semibold">Sessions courtes mais efficaces (Feynman)</p>
              </li>
              <li className="flex items-start text-[#1F2937] dark:text-gray-300">
                <span className="text-green-500 mr-3 mt-1 text-2xl">✓</span>
                <p className="font-semibold">Méthode scientifique, pas de hasard</p>
              </li>
            </ul>

            <div className="p-4 bg-blue-500/10 dark:bg-blue-500/20 rounded-b-xl text-center">
              <p className="text-blue-500 font-bold text-lg">Apprentissage actif</p>
              <p className="text-sm text-[#594c9a] dark:text-gray-300">Méthode éprouvée, efficacité maximale</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Avantages;
