'use client'

import React from 'react';
import useFlashSales from '../../api/useFlashSales';

function Products() {
  const { isLoading, data } = useFlashSales();
  console.log(data);

  if (isLoading) {
    return 'loading...';
  }

  return <div>Products</div>;
}

export default Products;
