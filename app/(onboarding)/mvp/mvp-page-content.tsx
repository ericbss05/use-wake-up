'use client';

import OnboardingForm from '@/components/onboarding-form';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function MVPPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get('token');

  const [, setValid] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      router.replace('/');
      return;
    }

    fetch(`/api/verify-token?token=${token}`)
      .then(res => res.json())
      .then(data => {
        if (!data.valid) {
          router.replace('/'); // redirection si token invalide
        } else {
          setValid(true); // token valide
        }
      })
      .finally(() => setLoading(false));
  }, [token, router]);

  if (loading) return <p style={{ textAlign: 'center', marginTop: '100px' }}>Chargement...</p>;

  return (
    <div>
      <OnboardingForm />
    </div>
  );
}