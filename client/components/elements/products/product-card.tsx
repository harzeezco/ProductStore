import React from 'react';
import NextImage from '../next-image';
import StarRatings from 'react-star-ratings';
import { Star, Eye } from 'lucide-react';

import { calculateDiscountPrice } from '@/client/pages/home/lib/utils';
import Button from '../button';

interface ProductCardTypes {
  images: string[];
  title: string;
  rating?: number;
  reviews?: number;
  price: number;
  discountPercentage: number;
}

function ProductCard({
  images,
  title,
  rating,
  reviews,
  price,
  discountPercentage,
}: ProductCardTypes) {
  return (
    <div className='relative w-fit flex flex-col gap-1 border border-solid p-2 shadow-md'>
      <NextImage
        src={images[0]}
        alt='product card'
        width={300}
        height={300}
        className='h-[250px] w-[300px]'
      />

      <div className='absolute z-10 top-3 right-3 grid gap-2'>
        <button
          type='button'
          className='bg-white h-10 w-10 rounded-full grid place-items-center'
        >
          <Star className='text-black/70' />
        </button>
        <button
          type='button'
          className='bg-white h-10 w-10 rounded-full grid place-items-center'
        >
          <Eye className='text-black/70' />
        </button>
      </div>

      <div className='mt-2'>
        <h2 className='h3-semibold line-clamp-1' title={title}>
          {title}
        </h2>

        <div className='flex gap-2 mt-1'>
          <p className='text-primary text-lg font-semibold'>
            $
            {calculateDiscountPrice(
              price,
              discountPercentage,
            )?.toFixed(0)}
          </p>
          <p className='text-sm font-medium text-gray-300 line-through'>
            ${`${price}`}
          </p>
        </div>

        <div className='flex items-center gap-2'>
          <StarRatings
            rating={rating}
            starRatedColor='orange'
            numberOfStars={5}
            name='rating'
            starDimension='20px'
            starSpacing='2px'
          />
          {reviews && <span>{`(${reviews})`}</span>}
        </div>

        <Button variant='black' size='full' className='mt-3'>
          Add To Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
