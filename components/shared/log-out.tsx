import React from 'react';
import useLogout from '@/authentication/useLogout';
import Button from '../ui/button';

function Logout() {
  const { logout } = useLogout();

  return <Button onClick={logout}>Logout</Button>;
}

export default Logout;
