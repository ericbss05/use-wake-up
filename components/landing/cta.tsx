"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react";

const Cta = () => {
  const [email, setEmail] = useState("");
      const [loading, setLoading] = useState(false);
      const [message, setMessage] = useState<string | null>(null);
  
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
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center bg-linear-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-10 lg:p-16 border-2 border-primary/20">
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-5xl mb-6">
            Prêt à révolutionner
            <br />
            tes révisions ?
          </h2>

          {/* Stats inline */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-green-500"
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
              <span className="text-gray-800 dark:text-gray-200 font-semibold">
                Reçois toutes les infos et participe à la co-création de Wake Up
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-green-500"
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
              <span className="text-gray-800 dark:text-gray-200 font-semibold">
                Sans carte bancaire
              </span>
            </div>
          </div>

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
        </div>
      </div>
    </section>
  );
};

export default Cta;
