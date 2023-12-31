import React from 'react';
import ErrorFallback from '@/client/components/elements/ErrorFallback';
import HomeProducts from './home';
import IPhoneProducts from './iphone';
import MacBookProducts from './macbook';
import WatchProducts from './watch';
import IMacProducts from './imac';

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

function Main({
  active,
  setActive,
}: {
  active: string;
  setActive: (active: string) => void;
}) {
  const filteredComponent = components.filter(
    (component) => component.name === active,
  );

  return (
    <main>
      {filteredComponent.length ? (
        filteredComponent.map(({ Component, name }) => (
          <Component key={name} setActive={setActive} />
        ))
      ) : (
        <ErrorFallback onClick={() => setActive('Home')} />
      )}
    </main>
  );
}

export default Main;
