import React from 'react';
import HomeProducts from './home';
import IPhoneProducts from './iphone';
import MacBookProducts from './macbook';
import WatchProducts from './watch';
import IMacProducts from './imac';

function Main({
  active,
  setActive,
}: {
  active: string;
  setActive: (active: string) => void;
}) {
  return (
    <main className=''>
      {active === 'Home' && <HomeProducts setActive={setActive} />}
      {active === 'iPhone' && <IPhoneProducts />}
      {active === 'MacBook' && <MacBookProducts />}
      {active === 'Watch' && <WatchProducts />}
      {active === 'iMac' && <IMacProducts />}
    </main>
  );
}

export default Main;
