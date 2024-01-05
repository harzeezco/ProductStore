import Button from '@/client/components/elements/button';
import Container from '@/client/components/elements/container';
import NextImage from '@/client/components/elements/next-image';
import React from 'react';
import DeliveryImage from './delivery-image';

function About() {
  return (
    <Container
      as='section'
      className='section-divider lg:ml-16 relative gray grid md:grid-cols-2 items-center gap-[50px]'
    >
      <div>
        <h2 className='h1-semibold max-w-[450px]'>
          A Moments Of Delivered On{' '}
          <span className='text-primary'>Right Time</span> & Place
        </h2>

        <p className='my-[15px]'>
          The restaurants in Hangzhou also catered to many northern
          Chinese who had fled south from Kaifeng during the Jurchen
          invasion of the 1120s, while it is also known that many
          restaurants were run by families.
        </p>

        <Button>Order Now</Button>
      </div>

      <figure className='aspect-[1_/0.86] relative'>
        <NextImage
          src='/png/home-assets/delivery-banner-bg.png'
          width='700'
          height='602'
          alt='clouds'
          className='w-100'
        />

        <DeliveryImage />
      </figure>
    </Container>
  );
}

export default About;
