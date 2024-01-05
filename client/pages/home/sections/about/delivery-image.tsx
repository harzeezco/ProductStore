'use client';

import React, { useEffect, useRef, useState } from 'react';
import NextImage from '@/client/components/elements/next-image';

function DeliveryImage() {
  const deliveryBoyRef = useRef<HTMLDivElement>(null);
  const [deliveryBoyMove, setDeliveryBoyMove] = useState<number>(-80);
  const lastScrollPos = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = deliveryBoyRef.current;

      if (element) {
        const deliveryBoyTopPos = element.getBoundingClientRect().top;

        if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
          const activeScrollPos = window.scrollY;

          if (lastScrollPos.current < activeScrollPos) {
            setDeliveryBoyMove((prevMove) => prevMove + 1);
          } else {
            setDeliveryBoyMove((prevMove) => prevMove - 1);
          }

          lastScrollPos.current = activeScrollPos;
          element.style.transform = `translateX(${deliveryBoyMove}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [deliveryBoyMove]);

  return (
    <div ref={deliveryBoyRef} className='delivery-img'>
      <NextImage
        src='/svg/delivery-boy.svg'
        width='1000'
        height='880'
        alt='delivery boy'
        className='w-100'
      />
    </div>
  );
}

export default DeliveryImage;
