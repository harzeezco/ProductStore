import { cn } from '@/lib/utils';
import React from 'react';

interface Props<C extends React.ElementType> {
  as?: C;
  children: React.ReactNode;
  className: string;
}

type ContainerTypes<C extends React.ElementType> = Props<C> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof Props<C>>;

// Source: www.benmvp.com/blog/polymorphic-react-components-typescript/

function Container<C extends React.ElementType = 'div'>({
  as,
  children,
  className,
  ...otherProps
}: ContainerTypes<C>) {
  const Component = as ?? 'div';

  return (
    <Component
      {...otherProps}
      className={cn('max-w-[1185px] mx-auto px-6', className)}
    >
      {children}
    </Component>
  );
}

export default Container;
