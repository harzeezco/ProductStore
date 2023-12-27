import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutApi } from '@/services/apiAuth';
import { useRouter } from 'next/navigation';

export default function useLogout() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      router.refresh();
    },
  });

  return { logout, isLoading };
}
