import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

interface Step1Props {
  onNext: () => void;
}

const Step1: React.FC<Step1Props> = ({ onNext }) => {
  return (
    <div className='min-h-screen flex items-center justify-center p-6 relative overflow-hidden'>
      <Card className="w-full max-w-3xl border-0 backdrop-blur-sm bg-white/80 relative z-10 overflow-hidden">
        <CardHeader className="space-y-8 pt-12 pb-8 px-10">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="h-1.5 w-12 rounded-full bg-slate-900"></div>
              <div className="h-1.5 w-1.5 rounded-full bg-slate-200"></div>
            </div>
            <span className="text-xs font-medium text-slate-500 tracking-wide">
              ÉTAPE 1/2
            </span>
          </div>

          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200">
              <Sparkles className="h-4 w-4 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">
                Analyse intelligente
              </span>
            </div>

            <CardTitle className="text-4xl font-light tracking-tight text-slate-900 leading-tight">
              Bienvenue sur
              <span className="font-semibold text-4xl flex">
                <Image
                  src="/images/Logo-black.svg"
                  alt="Logo"
                  width={70}
                  height={70}
                />
                ake Up
              </span>
            </CardTitle>

            <CardDescription className="text-lg text-slate-600 leading-relaxed max-w-2xl font-light">
              Vous êtes à la première étape de notre application de révision
              intelligente. Nous vous proposons de tester notre première
              fonctionnalité — <span className="font-medium">l’analyse automatique de vos fichiers</span> —
              pendant que d’autres arrivent bientôt ✨
            </CardDescription>
          </div>
        </CardHeader>

        <CardFooter className="px-10 pb-12 pt-8">
          <Button
            size="lg"
            className="group text-white px-8 h-12 rounded-xl font-medium transition-all duration-200"
            onClick={onNext}
          >
            Commencer
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Step1;
