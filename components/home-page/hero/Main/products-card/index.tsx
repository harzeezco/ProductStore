import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/button';
import PriceFav from '@/components/ui/price-fav';

type CardProps = {
  img: string;
  name: string;
  discount: number;
  price: number;
  description: string;
  btnText?: string;
  imgSrc?: string;
};

function Card({
  img,
  imgSrc = '/png/home-assets/hero-assets/',
  name,
  discount,
  price,
  description,
  btnText = 'Buy Now',
}: CardProps) {
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
        <p className='text-xl font-semibold'>{name}</p>
        <span className='text-base text-gray-600'>{description}</span>
        <PriceFav discount={discount} price={price} />
        <Button onClick={() => {}} variant='primary'>
          {btnText}
        </Button>
      </div>
    </li>
  );
}

Card.defaultProps = {
  btnText: 'Buy Now',
  imgSrc: '/png/home-assets/hero-assets/',
};

export default Card;
