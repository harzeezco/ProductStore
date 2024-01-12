import React from 'react';
import { FooterNavLinks } from '@/client/lib/placeholders';
import NextLink from '../../elements/next-link';
import { Input } from '../../forms/input';

export function Footer() {
  const backgroundImage =
    'url(/png/shared-assets/footer-illustration.png)';

  return (
    <footer className='overflow-hidden'>
      <div
        className='footer-top bg-contain relative bg-no-repeat bg-bottom flex flex-col md:flex-row gap-10 p-20 md:items-center'
        style={{
          backgroundImage,
          backgroundSize: 'cover',
          borderBlockEnd: '2px solid hsla(245, 17%, 29%, 0.3)',
        }}
      >
        <div className='flex-[1.5] relative z-50'>
          <h3 className='h3-bold mb-2'>Exclusive</h3>
          <p className='h3-medium mb-2'>Subscribe</p>
          <span className='mb-1'>Get 10% off your first order</span>

          <Input
            placeholder='Enter your email'
            className='max-w-xs'
          />
        </div>

        <nav className='flex-1 relative z-50'>
          <ul className='flex gap-20'>
            {FooterNavLinks.map(({ label, links }) => (
              <li key={label}>
                <h3 className='h3-medium mb-5 whitespace-nowrap'>{label}</h3>
                <div className='flex flex-col gap-3'>
                  {links.map((link) => (
                    <NextLink {...link}>{link.label}</NextLink>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className='py-[20px] text-center'>
        <p>
          &copy; 2022{' '}
          <a href='#' className='inline-block'>
            wakilabdulazeez
          </a>{' '}
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
