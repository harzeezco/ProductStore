import React from 'react';
import Container from '@/client/components/elements/container';
import Button from '@/client/components/elements/button';
import StopTimer from '../../components/elements/stop-timer';
import NextImage from '@/client/components/elements/next-image';

export function Category() {
  return (
    <Container as='section' className='text-white'>
      <div className='bg-black flex flex-col md:flex-row justify-around items-center py-16'>
        <div>
          <span className='text-primary text-sm'>Category</span>
          <h1 className='h2 my-3'>Enhance Your Music Experience</h1>

          <StopTimer />

          <Button className='mt-6'>Buy Now</Button>
        </div>

        <div className='bg grid items-center'>
          <NextImage
            src='/png/home-assets/hand-speaker.png'
            alt='hand speaker'
            width={500}
            height={500}
          />
        </div>
      </div>
    </Container>
  );
}

