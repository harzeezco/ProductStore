'use client';

import React, { useState } from 'react';
import Sidebar from './sidebar';
import Main from './Main';

function Hero() {
  const [active, setActive] = useState('Home');

  return (
    <section className='container-max-w grid place-items-center'>
      <div
        className='custom-scrollbar relative grid h-[80vh] min-h-[70vh] w-[85vw] min-w-[80vw] max-w-[90vw] resize-x grid-cols-[auto_1fr] overflow-auto rounded-[2rem]'
        style={{ border: '0.1rem solid #c0c0c0', transition: 'all 0.1s' }}
      >
        <Sidebar active={active} setActive={setActive} />
        <Main active={active} />
      </div>
    </section>
  );
}

export default Hero;
