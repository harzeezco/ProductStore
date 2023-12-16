import React from 'react';
import HomeProducts from './home';

function Main({
  active,
  setActive,
}: {
  active: string;
  setActive: (active: string) => void;
}) {
  return (
    <main className=''>
      <HomeProducts />
    </main>
  );
}

export default Main;
