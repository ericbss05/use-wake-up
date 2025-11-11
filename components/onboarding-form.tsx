'use client';

import React, { useState } from 'react';
import Step1 from '@/components/onboarding/step-1';
import Step2 from '@/components/onboarding/step-2';
import { motion, AnimatePresence } from 'framer-motion';

const OnboardingForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [namespace, setNamespace] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-100">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="w-full"
          >
            <Step1 onNext={() => setStep(2)} />
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="w-full"
          >
            <Step2
              onBack={() => setStep(1)}
              onUploadComplete={(namespaceValue: string) => {
                setNamespace(namespaceValue);
                setStep(3);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OnboardingForm;
