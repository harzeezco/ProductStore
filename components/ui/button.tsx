import React, { ReactNode } from 'react';
import cn from '@/lib/utils';

type ButtonProp = {
  children: string | ReactNode;
  variant?: string;
  className?: string;
  onClick: () => void;
};

function Button({
  children = null,
  variant = 'primary',
  className = '',
  onClick,
  ...otherProps
}: ButtonProp) {
  switch (variant) {
    case 'primary':
      return (
        <button
          type='button'
          className={cn(
            'w-fit rounded-sm bg-primary px-7 py-2 font-medium text-white',
            className,
          )}
          onClick={onClick}
          {...otherProps}
        >
          {children}
        </button>
      );
    case 'sign-up':
      return (
        <button
          type='button'
          className='rounded-[18px] border-[1.5px] bg-white px-[18px] py-2 text-black'
        >
          {children}
        </button>
      );
    case 'submit':
      return (
        <button
          type='submit'
          className={cn(
            'w-fit rounded-sm bg-primary px-7 py-2 font-medium text-white',
            className,
          )}
        >
          {children}
        </button>
      );
    default:
      return null;
  }
}

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
