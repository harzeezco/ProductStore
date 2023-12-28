import { logIn } from '@/services/apiAuth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

export default function useLogin() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: loginUser, isLoading } = useMutation({
    mutationFn: logIn,
    onSuccess: (user) => {
      router.refresh();
      queryClient.setQueryData(['user'], user?.user);
      toast.success('Welcome');
    },
    onError: () => {
      toast.error('Provided email or password are incorrect');
    }
  });

  return { loginUser, isLoading };
}
