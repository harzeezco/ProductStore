'use client'

import getProducts from '@/server/services/getProducts';
import { useQuery } from '@tanstack/react-query';

export default function useFlashSales() {
  const { isLoading, data } = useQuery({
    queryKey: ['flash-sales'],
    queryFn: () => getProducts('Flash Sales'),
  });

  return { isLoading, data }
}
