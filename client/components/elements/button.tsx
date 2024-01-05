import React, { ReactNode } from 'react';
import { cn } from '@/client/lib/utils';

const Variants = {
  primary: 'bg-primary text-white',
  transparent: 'bg-transparent text-black',
  black: 'bg-black text-white hover:bg-primary transition',
  success: 'bg-green-600 gray-50',
};

const sizes = {
  sm: 'px-3 py-2 rounded-sm',
  md: 'px-7 py-2 font-medium w-fit',
  lg: 'px-9 py-2 font-medium',
  full: 'w-full py-2 font-medium',
};

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string | ReactNode;
  variant?: keyof typeof Variants;
  size?: keyof typeof sizes;
  className?: string;
};

function Button({
  children = null,
  variant = 'primary',
  className = '',
  size = 'md',
  ...otherProps
}: ButtonType) {
  return (
    <button
      type='button'
      className={cn(
        'disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none hover:opacity-90',
        Variants[variant],
        sizes[size],
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
