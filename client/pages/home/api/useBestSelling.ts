'use client';

import getProducts from '@/server/services/getProducts';
import { useQuery } from '@tanstack/react-query';
import { IProduct } from '../types';

export default function useBestSelling() {
  const { isLoading, data } = useQuery<{
    isLoading: boolean;
    data: IProduct[];
  }>({
    queryKey: ['Best-Selling'],
    queryFn: () =>
      getProducts('Best Selling Products') as Promise<unknown> as Promise<{
        isLoading: boolean;
        data: IProduct[];
      }>,
  });

  return { isLoading, data };
}
