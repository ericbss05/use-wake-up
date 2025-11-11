import React from 'react';

export const Feature3 = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-slate-50">
      <div className="w-full max-w-4xl mx-auto">
        {/* Card avec animation */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          {/* Animation Background */}
          <div className="bg-linear-to-br from-blue-500 via-blue-600 to-indigo-600 p-4 sm:p-6">
            <div className="flex items-center justify-center p-3 sm:p-6">
              <div className="container w-full max-w-3xl">
                {/* Chat Interface */}
                <div className="bg-white border border-gray-200 rounded-lg sm:rounded-xl shadow-sm overflow-hidden">
                  <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                    {/* Message utilisateur */}
                    <div className="user-message message-hover rounded-lg p-2 sm:p-3 -mx-2 sm:-mx-3 transition-colors">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-linear-to-br from-purple-100 to-purple-200 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-700"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex-1 pt-0.5 sm:pt-1">
                          <div className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                            Crée un schéma du cycle de l&apos;eau
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Indicateur de génération */}
                    <div className="thinking-indicator message-hover rounded-lg p-2 sm:p-3 -mx-2 sm:-mx-3 transition-colors">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex-1 pt-0.5 sm:pt-1">
                          <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-gray-50 rounded-lg">
                            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-gray-400 rounded-full animate-pulse"></div>
                            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-gray-400 rounded-full animate-pulse delay-100"></div>
                            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-gray-400 rounded-full animate-pulse delay-200"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Schéma généré */}
                    <div className="diagram-container message-hover rounded-lg p-2 sm:p-3 -mx-2 sm:-mx-3 transition-colors">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="border border-gray-200 rounded-lg p-3 sm:p-6 bg-gray-50/50">
                            {/* Schéma simplifié avec des cases */}
                            <div className="space-y-3 sm:space-y-4">
                              {/* Ligne 1: Soleil et Nuages */}
                              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center items-center">
                                <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-yellow-700">
                                  ☀️ Soleil
                                </div>
                                <div className="text-indigo-500 text-lg sm:text-xl font-bold">→</div>
                                <div className="bg-indigo-100 border-2 border-indigo-400 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-indigo-700">
                                  ☁️ Nuages
                                </div>
                              </div>

                              {/* Ligne 2: Évaporation */}
                              <div className="flex justify-center">
                                <div className="bg-blue-50 border-2 border-dashed border-blue-300 rounded-lg px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-blue-600">
                                  Évaporation ↑
                                </div>
                              </div>

                              {/* Ligne 3: Océan */}
                              <div className="flex justify-center">
                                <div className="bg-blue-200 border-2 border-blue-500 rounded-lg px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-blue-800">
                                  🌊 Océan
                                </div>
                              </div>

                              {/* Ligne 4: Flèches bidirectionnelles */}
                              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center items-center">
                                <div className="text-indigo-500 text-lg sm:text-xl font-bold">↓</div>
                                <div className="bg-purple-50 border-2 border-dashed border-purple-300 rounded-lg px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-purple-600">
                                  Précipitation
                                </div>
                                <div className="text-indigo-500 text-lg sm:text-xl font-bold">↓</div>
                              </div>

                              {/* Ligne 5: Montagnes et Ruissellement */}
                              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center items-center">
                                <div className="bg-gray-200 border-2 border-gray-400 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-gray-700">
                                  ⛰️ Montagnes
                                </div>
                                <div className="text-indigo-500 text-lg sm:text-xl font-bold">→</div>
                                <div className="bg-cyan-50 border-2 border-dashed border-cyan-300 rounded-lg px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-cyan-600">
                                  Ruissellement
                                </div>
                              </div>
                            </div>

                            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
                              <p className="text-xs font-medium text-gray-600">
                                Le cycle de l&apos;eau
                              </p>
                              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                                L&apos;eau circule continuellement entre l&apos;océan,
                                l&apos;atmosphère et la terre
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Description */}
        <div className="mt-4 sm:mt-6">
          <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-2">
            Chat en temps réel avec représentation visuelle
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Transforme tes notions complexes en schémas et représentations
            visuelles en un clic. Comprends les concepts plus rapidement et
            mémorise l&apos;essentiel sans frustration.
          </p>
        </div>
      </div>
    </div>
  );
};