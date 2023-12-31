import Link from 'next/link';
import React from 'react';
import {
  User,
  ShoppingBag,
  XCircle,
  Star,
  LogOut,
} from 'lucide-react';
import useLogout from '@/client/features/authentication/useLogout';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';

const user = [
  {
    Icon: User,
    label: 'Manage My Account',
    href: '',
  },
  {
    Icon: ShoppingBag,
    label: 'My Order',
    href: '',
  },
  {
    Icon: XCircle,
    label: 'My Cancellations',
    href: '',
  },
  {
    Icon: Star,
    label: 'My Reviews',
    href: '',
  },
  {
    Icon: LogOut,
    label: 'Logout',
    href: '',
  },
];

function UserIcon() {
  const { logout } = useLogout();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button
          type='button'
          aria-label='user-account'
          className='rounded-full bg-primary p-3'
        >
          <User className='text-white' />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='mr-6 grid gap-1 bg-gray-100'>
        {user.map(({ Icon, label, href }) => (
          <DropdownMenuItem
            className='flex cursor-pointer items-center gap-2 px-3 text-gray-400 hover:!bg-primary hover:!text-gray-50 focus:!bg-primary focus:!text-gray-50'
            asChild
            key={label}
          >
            {label === 'Logout' ? (
              <button
                type='submit'
                className='w-full'
                onClick={logout}
              >
                <Icon />
                <span>Logout</span>
              </button>
            ) : (
              <Link href={href}>
                <Icon className='text-inherit' />
                <span>{label}</span>
              </Link>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserIcon;
