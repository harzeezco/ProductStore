import { logIn } from '@/services/apiAuth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export default function useLogin() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: loginUser, isLoading } = useMutation({
    mutationFn: logIn,
    onSuccess: (user) => {
      router.refresh();
      queryClient.setQueryData(['user'], user?.user);
    },
  });

  return { loginUser, isLoading };
}
