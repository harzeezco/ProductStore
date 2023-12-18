import mergeClasses from '@/lib/utils';
import React, { ReactNode } from 'react';

type ButtonProp = {
  children: string | ReactNode;
  variant: string;
};

function Button({ children = null, variant = 'blue' }: ButtonProp) {
  switch (variant) {
    case 'primary':
      return (
        <button
          type='button'
          className='w-fit rounded-sm bg-primary px-7 py-2 font-medium text-white'
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
    case 'blue':
      return (
        <button
          type='button'
          className={mergeClasses(
            'btn-blue flex w-auto items-center justify-center rounded-[25px] border-none bg-blue-700 px-[30px] py-3 font-semibold text-white transition-pop-up',
          )}
        >
          {children}
        </button>
      );
    default:
      return null;
  }
}

export default Button;
