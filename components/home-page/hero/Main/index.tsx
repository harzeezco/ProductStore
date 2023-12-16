import React from 'react';
import HomeProducts from './home';
import IPhoneProducts from './iphone';
import MacBookProducts from './macbook';
import WatchProducts from './watch';
import IMacProducts from './imac';

function Main({
  active,
}: {
  active: string;
}) {
  return (
    <main className=''>
      {active === 'Home' && <HomeProducts />}
      {active === 'iPhone' && <IPhoneProducts />}
      {active === 'MacBook' && <MacBookProducts />}
      {active === 'Watch' && <WatchProducts />}
      {active === 'iMac' && <IMacProducts />}
    </main>
  );
}

export default Main;
