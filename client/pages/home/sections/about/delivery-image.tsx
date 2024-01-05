'use client';

import React, { useEffect, useRef, useState } from 'react';
import NextImage from '@/client/components/elements/next-image';
import useScrollTransform from '../../hooks/useScrollTransform';

function DeliveryImage() {
  const elementRef = useScrollTransform();

  return (
    <div
      ref={elementRef}
      className='delivery-img absolute top-0 left-0 translate-x-[-80px] transition-[0.5s_ease]'
    >
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
