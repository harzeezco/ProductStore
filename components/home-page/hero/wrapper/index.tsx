'use client';

import React, { ReactNode, useState } from 'react';

function Wrapper({ children }: { children: ReactNode }) {
  const [active, setActive] = useState('Home');

  return React.Children.map(children, (child) =>
    React.cloneElement(child, { active, setActive }),
  );
}

export default Wrapper;
