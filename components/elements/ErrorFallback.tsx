import React from 'react';
import Button from './button';

type ErrorFallbackProps = {
  errorText?: string;
  errorMessage?: string;
  btnText?: string;
  onClick: () => void;
};

function ErrorFallback({
  errorText = '404 Not Found',
  errorMessage = 'Your visited page not found. You may go home.',
  btnText = 'Refresh',
  onClick,
}: ErrorFallbackProps) {
  return (
    <div
      aria-label='alert'
      className='flex h-full flex-col items-center justify-center gap-4'
    >
      <h1 className='text-6xl font-medium'>{errorText}</h1>
      <pre>{errorMessage}</pre>
      <Button aria-label='' onClick={onClick}>
        {btnText}
      </Button>
    </div>
  );
}

export default ErrorFallback;
