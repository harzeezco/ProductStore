'use client';

import getProducts from '@/server/services/getProducts';
import { useQuery } from '@tanstack/react-query';
import { IProduct } from '../types';

export default function useFlashSales() {
  const { isLoading, data } = useQuery<{
    isLoading: boolean;
    data: IProduct[];
  }>({
    queryKey: ['flash-sales'],
    queryFn: () =>
      getProducts('Flash Sales') as Promise<unknown> as Promise<{
        isLoading: boolean;
        data: IProduct[];
      }>,
  });

  return { isLoading, data };
}
