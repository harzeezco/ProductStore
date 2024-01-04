'use client';

import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';

type ActiveType = {
  active: string;
  setActive: (active: string) => void;
};

const WrapperContext = createContext<ActiveType>({} as ActiveType);
WrapperContext.displayName = 'WrapperContext';

function Wrapper({ children }: { children: ReactNode }) {
  const [active, setActive] = useState('Home');

  return (
    <WrapperContext.Provider value={{ active, setActive }}>
      {children}
    </WrapperContext.Provider>
  );
}

type UseActiveReturnType = {
  active: string;
  setActive: (active: string) => void;
};

export function useActive() {
  const context = useContext(WrapperContext);
  
  if (!context) {
    throw new Error('useActive must be used within a WrapperProvider');
   
  }
  
  return context
}

export default Wrapper;
