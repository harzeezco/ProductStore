import { logIn } from '@/services/apiAuth';
import { useMutation } from '@tanstack/react-query';

export default function useLogin() {
  const { mutate: loginUser, isLoading } = useMutation({
    mutationFn: logIn,
    onSuccess: (user) => {
      console.log(user);
    },
  });

  return { loginUser, isLoading };
}
