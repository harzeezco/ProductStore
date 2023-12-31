import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutApi } from '@/server/services/apiAuth';

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
