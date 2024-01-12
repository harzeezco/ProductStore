import React from 'react';
import Container from '../../elements/container';
import { FooterNavLinks } from '@/client/lib/placeholders';
import NextLink from '../../elements/next-link';
import { Input } from '../../forms/input';

export function Footer() {
  const image = 'url(/png/shared-assets/footer-illustration.png)';

  return (
    <footer className='overflow-hidden'>
      <div
        className='footer-top flex gap-10 p-20 items-center'
        style={{
          backgroundImage: image,
          backgroundSize: 'cover',
        }}
      >
        <div className='flex-[1.5] relative z-50'>
          <h3 className='h3-bold mb-2'>Exclusive</h3>
          <p className='h3-medium mb-2'>Subscribe</p>
          <span className='mb-1'>Get 10% off your first order</span>

          <Input placeholder='Enter your email' className='max-w-xs'/>
        </div>

        <nav className='flex-1 relative z-50'>
          <ul className='flex gap-20'>
            {FooterNavLinks.map(({ label, links }) => (
              <li key={label}>
                <h3 className='h3-medium mb-5'>{label}</h3>
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

      <div className='footer-bottom'>
        <div className='container'>
          <p className='copyright-text'>
            &copy; 2022{' '}
            <a href='#' className='copyright-link'>
              wakilabdulazeez
            </a>{' '}
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
