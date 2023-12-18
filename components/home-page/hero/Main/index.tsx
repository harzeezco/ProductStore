import React from 'react';
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
      {filteredComponent.map(({ Component }) => (
        <Component setActive={setActive} />
      ))}
    </main>
  );
}

export default Main;
