import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const supabase = createClientComponentClient();

export async function signup({
  name,
  email,
  password,
}: {
  email: string;
  password: string;
  options: { data: { name: string } };
}) {
  const { data, error } = await supabase.auth.signUp({
    name,
    email,
    password,
    options: {
      emailRedirectTo: `${location.origin}/auth/callback`,
      data: {
        name,
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function logIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}
