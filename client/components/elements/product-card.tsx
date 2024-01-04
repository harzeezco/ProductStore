import React from 'react';
import NextImage from './next-image';
import StarRatings from 'react-star-ratings';
import { Star, Eye } from 'lucide-react';

function ProductCard({images, title, rating, reviews, price, discountPercentage}) {
  return (
    <div className='relative w-fit'>
      <NextImage
        src={images[0]}
        alt='product card'
        width={300}
        height={300}
        className='h-[250px] w-[300px]'
      />

      <div className='absolute z-10 top-2 right-2 grid gap-2'>
        <div className='bg-white p-3 rounded-full'>
          <Star className='text-black/70' />
        </div>
        <div className='bg-white p-3 rounded-full'>
          <Eye className='text-black/70' />
        </div>
      </div>

      <div>
        <h2 className='h3-medium'>{title}</h2>

        <div className='flex gap-2'>
          <p className='text-primary text-lg font-semibold'>${`${price}`}</p>
          <p className='text-base font-medium text-gray-300 line-through'>${`${discountPercentage}`}</p>
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
          <span>{`(${reviews})`}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
