'use client';

import React from 'react';
import ErrorFallback from '@/client/components/elements/ErrorFallback';
import HomeProducts from './home';
import IPhoneProducts from './iphone';
import MacBookProducts from './macbook';
import WatchProducts from './watch';
import IMacProducts from './imac';
import { useActive } from '../../../providers/hero-context.provider';

const components = [
  {
    name: 'Home',
    Component: HomeProducts,
  },
  {
    name: 'iPhone',
    Component: IPhoneProducts,
  },
  {
    name: 'MacBook',
    Component: MacBookProducts,
  },
  {
    name: 'Watch',
    Component: WatchProducts,
  },
  {
    name: 'iMac',
    Component: IMacProducts,
  },
];

export function Main() {
  const { active, setActive } = useActive();

  const filteredComponent = components.filter(
    (component) => component.name === active,
  );

  return (
    <main>
      {filteredComponent.length ? (
        filteredComponent.map(({ Component, name }) => (
          <Component key={name} />
        ))
      ) : (
        <ErrorFallback onClick={() => setActive('Home')} />
      )}
    </main>
  );
}
