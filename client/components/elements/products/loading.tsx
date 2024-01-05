import React from "react";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "../carousel";
import { Skeleton } from "../skeleton";

const productLength = 8;

function Loading() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className='w-[80%] md:w-[90%] mx-auto mt-10'
    >
      <CarouselContent className='flex gap-4'>
        {Array.from({ length: productLength }).map((_, index) => (
          <div className='flex flex-col gap-2' key={index}>
            <Skeleton className='h-[250px] w-[300px]' />
            <div className='space-y-2'>
              <Skeleton className='h-8 w-[250px]' />
              <Skeleton className='h-8 w-[200px]' />
            </div>
          </div>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Loading;
