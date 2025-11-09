// ./components/Feature2.tsx
import React from 'react';

export const Feature2 = () => {
  return (
    <div className="px-4 pt-8 sm:px-6 md:px-12 lg:px-20 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="bg-blue-500 p-4 sm:p-6 relative">
            <div className="chat-container bg-white rounded-xl shadow-2xl overflow-hidden relative">
              <div className="px-3 py-4 sm:px-4 sm:py-5">
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-xs sm:text-sm font-semibold flex items-center gap-2">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      ></path>
                    </svg>
                    Chat IA Assistant
                  </h1>
                </div>
              </div>

              <div
                className="p-3 sm:p-4 relative"
                style={{
                  minHeight: '220px',
                  background: 'linear-gradient(to bottom, #fefefe 0%, #f8f9fa 100%)',
                }}
              >
                {/* Message utilisateur */}
                <div className="user-message relative mb-4 flex justify-end z-10">
                  <div className="flex items-end gap-2 flex-row-reverse">
                    {/* Avatar */}
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-500 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-white"
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
                    {/* Bulle */}
                    <div className="rounded-2xl rounded-tr-sm px-2 sm:px-3 py-1 sm:py-2 max-w-full bg-white shadow-sm">
                      <div className="text-[10px] sm:text-[11px] leading-relaxed">
                        Explique-moi la photosynthèse
                      </div>
                    </div>
                  </div>
                </div>

                {/* Indicateur de frappe */}
                <div className="typing-indicator relative mt-auto z-10">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-linear-to-br from-blue-500 via-blue-600 to-indigo-600 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-white"
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
                    <div className="bg-slate-100 rounded-2xl rounded-tl-sm px-3 sm:px-4 py-2 shadow-md">
                      <div className="flex gap-1">
                        <div className="typing-dot w-2 h-2 sm:w-2.5 sm:h-2.5 bg-slate-400 rounded-full"></div>
                        <div className="typing-dot w-2 h-2 sm:w-2.5 sm:h-2.5 bg-slate-400 rounded-full"></div>
                        <div className="typing-dot w-2 h-2 sm:w-2.5 sm:h-2.5 bg-slate-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Réponse IA */}
                <div className="ai-response relative mt-3 z-10">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-linear-to-br from-blue-500 via-blue-600 to-indigo-600 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-white"
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
                    <div className="px-2 sm:px-3 py-1 sm:py-2 max-w-[75%] bg-white rounded-2xl shadow-sm">
                      <div className="text-[10px] sm:text-[11px] leading-relaxed text-slate-700">
                        La photosynthèse est le processus par lequel les plantes
                        convertissent la lumière solaire en énergie...
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
            Chat en temps réel
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Pose toutes tes questions directement à l’IA et reçois des
            explications claires et personnalisées, instantanément, pour ne
            jamais rester bloqué.
          </p>
        </div>
      </div>
    </div>
  );
};
