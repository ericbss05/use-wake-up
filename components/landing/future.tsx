import React from 'react'
import { Mic, Play } from 'lucide-react';

const Future = () => {
    return (
        <section className="py-16 bg-white dark:bg-background-dark">
            <div className="text-center max-w-2xl mx-auto mb-12 px-4">
                <h2 className="text-3xl font-semibold text-black dark:text-white">
                    Wake Up évolue pour rendre vos révisions encore plus intelligentes et immersives.
                </h2>
                <p className="text-sm text-slate-500 dark:text-gray-400 mt-2">
                    Découvrez les fonctionnalités à venir qui transformeront vos révisions : écoute de vos cours, intégration
                    de vos sites favoris et simulations d’examens pour un apprentissage ultra-personnalisé.
                </p>
            </div>

            <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                <div className="bg-gray-50/70 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow border duration-300">
                    <h3 className="text-lg font-semibold text-black mb-3">Podcasts de cours</h3>
                    <p className="text-sm text-gray-500 mb-4">
                        Bientôt, écoutez vos cours partout. Wake Up transformera vos contenus en podcasts pour réviser sans effort,
                        à tout moment.
                    </p>
                    <div className="rounded-lg border border-gray-200 bg-white shadow-sm aspect-video p-4 flex flex-col justify-between">
                        <div className="flex items-center gap-3">
                            <div className="flex w-12 h-12 bg-indigo-100 rounded-lg items-center justify-center">
                               <Mic className="text-indigo-600"/>
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-gray-900">The AI Revolution</div>
                                <div className="text-sm text-gray-500">with DevTalks</div>
                            </div>
                        </div>
                        <div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                                <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: "35%" }}></div>
                            </div>
                            <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                                <span>12:15</span>
                                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg">
                                    <Play />
                                </div>
                                <span>38:40</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50/70 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow border duration-300">
                    <h3 className="text-lg font-semibold text-black mb-3">Intégration de sites web</h3>
                    <p className="text-sm text-gray-500 mb-4">
                        Ajoutez vos sites favoris pour enrichir l’IA. Wake Up apprendra de vos ressources en ligne pour des révisions
                        ultra-ciblées.
                    </p>
                    <div className="relative transform-gpu transition-transform duration-200 ease-in-out hover:translate-y-1">
                        <div className="rounded-lg border border-gray-200 bg-white shadow-sm aspect-video overflow-hidden">
                            <div className="bg-gray-100 h-8 flex items-center gap-1.5 px-3 border-b border-gray-200">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            </div>
                            <div className="p-3 space-y-3">
                                <div className="bg-indigo-500 h-8 w-1/3 rounded"></div>
                                <div className="space-y-1.5 pt-1">
                                    <div className="bg-gray-200 h-2 rounded-full"></div>
                                    <div className="bg-gray-200 h-2 w-5/6 rounded-full"></div>
                                    <div className="bg-gray-200 h-2 w-3/4 rounded-full"></div>
                                </div>
                                <div className="bg-indigo-100 h-16 w-full rounded-md"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50/70 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow border duration-300">
                    <h3 className="text-lg font-semibold text-black mb-3">Simulations d’examen</h3>
                    <p className="text-sm text-gray-500 mb-4">
                        Préparez vos examens comme jamais. L’IA générera des tests réalistes et vous montrera exactement où concentrer
                        vos efforts.
                    </p>
                    <div className="rounded-lg border border-gray-200 bg-white p-2 shadow-sm aspect-video flex items-start justify-end text-red-500 font-bold text-lg">
                        /20
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Future
