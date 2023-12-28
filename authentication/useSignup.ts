import { signup } from '@/services/apiAuth';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

export default function useSignup() {
  const { mutate: signupUser, isLoading } = useMutation({
    mutationFn: signup,
    onSuccess: (user) => {
      toast.success(
        "Account successfully created! Please verufy the new account from the user's email address.",
      );
    },
  });

  return { signupUser, isLoading };
}
