'use client';

import useUser from '@/authentication/useUser';
import Hero from '@/components/home-page/hero';
import { useRouter } from 'next/navigation';
import React from 'react';

function Home() {
  const router = useRouter();
  const { user } = useUser();

  if (!user) {
    return router.push('/auth/log-in');
  }

  return (
    <main>
      <Hero />
    </main>
  );
}

export default Home;
