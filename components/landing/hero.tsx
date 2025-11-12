"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [, setMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            const res = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (!res.ok) throw new Error("Erreur d’envoi");
            setMessage("Merci ! Vérifie ta boîte mail.");
            setEmail("");
        } catch {
            setMessage("Une erreur est survenue.");
        } finally {
            setLoading(false);
        }
    };
    return (
        <section className="relative py-20 sm:py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-1">

                    {/* Texte principal */}
                    <div className="flex flex-col gap-6 text-center relative fade-in">
                        <h1 className="text-4xl font-black tracking-tighter sm:text-5xl lg:text-6xl text-black dark:text-white">
                            Réussis tes examens<br />
                            <span className="gradient-text text-blue-500">plus rapidement</span>, sans stress
                        </h1>

                        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                            Upload tes cours, pose tes questions, génère des schémas. Tout centralisé sur une plateforme. Plus besoin de jongler entre plusieurs apps.
                        </p>

                        {/* Avantages / bullet points */}
                        <div className="max-w-4xl mx-auto mt-8 text-center">
                            <div className="flex flex-wrap gap-6 mt-8 justify-center">
                                <div className="flex items-center gap-2">
                                    <svg
                                        className="w-5 h-5 text-green-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                                        🚀 Reçois toutes les infos et participe à la co-création de Wake Up
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <svg
                                        className="w-5 h-5 text-green-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                                        5 techniques scientifiques pour réviser efficacement
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Formulaire email */}
                        <form
                            onSubmit={handleSubmit}
                            className="mt-10 flex flex-col sm:flex-row justify-center gap-3"
                        >
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="ton-email@exemple.fr"
                                required
                                className="h-12 px-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition w-full sm:w-80"
                            />
                            <Button
                                type="submit"
                                disabled={loading}
                                className="h-12 px-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition w-full sm:w-auto"
                            >
                                {loading ? "Envoi..." : "Réserver ma place →"}
                            </Button>
                        </form>

                        {/* 📨 Petit message sous le formulaire */}
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 text-center">
                            📬 Si tu ne vois pas le mail dans les 2 minutes, vérifie ton dossier <strong>spam</strong> ou “<strong>Promotions</strong>”.
                        </p>
                    </div>

                    {/* Image / mockup */}
                    <div className="mt-12">
                        <Image
                            src="/images/main_mockup.png"
                            alt="Dashboard Wake Up"
                            className="w-full h-80 lg:h-[550px] rounded-xl shadow-2xl shadow-blue-500/20 object-cover"
                            width={1920} // largeur réelle ou approximative de ton image
                            height={550} // hauteur approximative pour l'optimisation
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
