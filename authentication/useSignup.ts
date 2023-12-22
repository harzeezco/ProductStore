import signup from '@/services/apiAuth';
import { useMutation } from '@tanstack/react-query';

export default function useSignup() {
  const { mutate: signupUser, isLoading } = useMutation({
    mutationFn: signup,
    onSuccess: (user) => {
      console.log(user);
    },
  });

  return { signupUser, isLoading };
}
