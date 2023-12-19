import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/button';

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
        <div className='my-3 flex items-center justify-between'>
          <div className='flex gap-1.5'>
            <span className='text-lg font-semibold text-primary'>{`${discount}$`}</span>
            <span className='text-base font-medium text-gray-300 line-through'>{`${price}$`}</span>
          </div>
          <button type='button' className='border-[1.5px] border-gray-100 p-1'>
            <Image
              src='/svg/favorite-icon.svg'
              alt='favorite'
              width={24}
              height={24}
            />
          </button>
        </div>
        <Button onClick={() => {}} variant='primary'>{btnText}</Button>
      </div>
    </li>
  );
}

Card.defaultProps = {
  btnText: 'Buy Now',
  imgSrc: '/png/home-assets/hero-assets/',
};

export default Card;
