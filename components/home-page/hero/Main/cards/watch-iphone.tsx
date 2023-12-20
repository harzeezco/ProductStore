import Button from '@/components/ui/button';
import PricingFavorite from '@/components/ui/price-fav';
import Image from 'next/image';
import React from 'react';

type WatchIphoneCardProps = {
  img: string;
  name: string;
  discount: number;
  price: number;
  description: string;
  btnText?: string;
  imgSrc?: string;
};

function WatchIphoneCard({
  img,
  imgSrc = '/png/home-assets/hero-assets/',
  name,
  discount,
  price,
  description,
  btnText = 'Buy Now',
}: WatchIphoneCardProps) {
  return (
    <li>
      <Image
        src={`${imgSrc}${img}`}
        alt={name}
        width={130}
        height={180}
        className='w-[12rem]'
      />
      <div className='mt-5 flex flex-col pl-3'>
        <h3 className='text-lg font-semibold'>{name}</h3>
        <span className='text-base text-gray-600'>{description}</span>
        <PricingFavorite discount={discount} price={price} className='my-3' />
        <Button onClick={() => {}} variant='primary'>
          {btnText}
        </Button>
      </div>
    </li>
  );
}

export default WatchIphoneCard;
