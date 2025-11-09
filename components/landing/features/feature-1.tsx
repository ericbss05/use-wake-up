// ./components/Feature1.tsx
import React from 'react';

export const Feature1 = () => {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-20 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="bg-linear-to-br from-blue-500 via-blue-600 to-indigo-600 p-4 sm:p-6 relative">
            <div className="quiz-container bg-white rounded-xl shadow-2xl overflow-visible relative">
              <div className="px-3 py-3 sm:px-4 sm:py-4">
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-xs sm:text-sm font-semibold">AI Quiz Design</h1>
                  <div className="text-[9px] sm:text-xs font-medium">1 sur 4</div>
                </div>

                <div className="relative">
                  <div className="text-[8px] sm:text-[10px] mb-1">Progression</div>
                  <div className="w-full bg-black/20 rounded-full h-1.5 sm:h-2 overflow-hidden backdrop-blur-sm">
                    <div
                      className="progress-bar h-full bg-blue-500 rounded-full shadow-lg"
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                  <div className="text-[8px] sm:text-[10px] mt-0.5 text-right">15%</div>
                </div>
              </div>

              <div className="p-3 sm:p-4 relative overflow-visible">
                <div className="mb-3 sm:mb-4">
                  <div className="inline-block bg-blue-50 text-blue-700 text-[8px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-full mb-2">
                    Question à choix multiple
                  </div>
                  <h2 className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed">
                    Quelle est la fonction principale du générateur de Quiz IA ?
                  </h2>
                </div>

                <div className="space-y-2 mb-3 relative">
                  {['A', 'B', 'C', 'D'].map((option, i) => (
                    <div
                      key={option}
                      className={`border-2 rounded-lg px-3 py-2 cursor-pointer flex items-center gap-2 bg-white transition-all
                        ${option === 'B' ? 'option-selected relative' : ''}
                        ${['C', 'D'].includes(option) ? 'opacity-50' : 'hover:shadow-md'}
                      `}
                    >
                      <div className="flex w-5 h-5 sm:w-6 sm:h-6 rounded bg-slate-100 items-center justify-center text-slate-600 font-semibold text-[10px] sm:text-xs">
                        {option}
                      </div>
                      <p className="text-slate-700 text-xs sm:text-sm leading-tight flex-1">
                        {option === 'A' && 'Convertir des documents en quiz'}
                        {option === 'B' && 'Quiz adaptés au niveau'}
                        {option === 'C' && 'Proposer des cours vidéo'}
                        {option === 'D' && 'Créer des jeux éducatifs'}
                      </p>

                      {option === 'B' && (
                        <div className="checkmark right-2 top-1/2 -translate-y-1/2 absolute">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center">
                            <svg
                              className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                  <button className="px-2 sm:px-3 py-1 sm:py-1.5 text-slate-600 text-[10px] sm:text-xs font-medium rounded hover:bg-slate-100 transition-all flex items-center gap-1">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      ></path>
                    </svg>
                    Précédent
                  </button>

                  <button className="next-button px-3 sm:px-4 py-1 sm:py-1.5 bg-linear-to-r from-blue-600 to-indigo-600 text-white text-[10px] sm:text-xs font-semibold rounded hover:shadow-lg transition-all flex items-center gap-1">
                    Suivant
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                </div>

                {/* Feedback Notification */}
                <div className="feedback-notification left-0 right-0 bottom-0 px-3 sm:px-4 pb-4 pointer-events-none z-60">
                  <div className="from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-3 shadow-2xl pointer-events-auto">
                    <div className="flex items-start gap-2">
                      <div className="flex w-6 h-6 sm:w-7 sm:h-7 bg-blue-600 rounded-full items-center justify-center">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          ></path>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-blue-900 font-semibold mb-1 text-[10px] sm:text-xs">
                          Excellente réponse !
                        </h3>
                        <p className="text-blue-800 text-[8px] sm:text-[10px] leading-relaxed">
                          Le Quiz IA analyse ton niveau et crée des questions personnalisées
                          qui s'adaptent à tes points forts et faibles.
                        </p>
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
            Quiz IA adaptatifs
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            L’IA analyse tes cours et crée des quiz adaptés à ton niveau. Chaque
            question cible tes lacunes pour que tu passes moins de temps sur ce
            que tu maîtrises déjà et te concentres sur l’essentiel.
          </p>
        </div>
      </div>
    </div>
  );
};
