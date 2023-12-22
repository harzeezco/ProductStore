import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const supabase = createClientComponentClient();

export default async function signup({
  name,
  email,
  password,
}: {
  email: string;
  password: string;
  options: { name: string };
}) {
  const { data, error } = await supabase.auth.signUp({
    name,
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}
