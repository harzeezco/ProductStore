import { User } from 'lucide-react';
import React from 'react';

function UserIcon() {
  return (
    <button
      type='button'
      aria-label='user-account'
      className='rounded-full bg-primary p-3'
    >
      <User className='text-white' />
    </button>
  );
}

export default UserIcon;
