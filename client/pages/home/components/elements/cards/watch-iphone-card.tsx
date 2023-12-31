'use client';

import React, { useState } from 'react';
import Button from '@/client/components/elements/button';
import NextImage from '@/client/components/elements/next-image';
import ProductTag from '@/client/components/elements/product-tag';

type WatchIphoneCardProps = {
  img?: string;
  defaultImg?: string;
  animateImg?: string;
  name: string;
  discount: number;
  price: number;
  description: string;
  btnText?: string;
  imgPath?: string;
};

function WatchIphoneCard({
  img,
  defaultImg,
  animateImg,
  imgPath = '/png/home-assets/hero-assets/',
  name,
  discount,
  price,
  description,
  btnText = 'Buy Now',
}: WatchIphoneCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const appleWatchImg = isHovered ? animateImg : defaultImg;

  return (
    <li>
      <NextImage
        src={`${imgPath}${img || appleWatchImg}`}
        alt={name}
        width={130}
        height={180}
        className='w-[12rem] transition-all hover:scale-110'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <div className='mt-5 flex flex-col pl-3'>
        <h3 className='text-lg font-semibold'>{name}</h3>
        <span className='text-base text-gray-600'>{description}</span>
        <ProductTag
          discount={discount}
          price={price}
          className='my-3'
        />
        <Button onClick={() => {}}>{btnText}</Button>
      </div>
    </li>
  );
}

export default WatchIphoneCard;
