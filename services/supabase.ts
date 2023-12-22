import { createClient } from '@supabase/supabase-js';

const supabase = createClient(supabaseUrl, supabaseApiKey);

// Function to handle user signup
const signUpUser = async (email: string, password: string) => {
  try {
    // Sign up the user with email and password
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error('Error signing up:', error.message);
      return null; // Handle error appropriately in your application
    }

    console.log('User signed up successfully:', user);
    return user; // Return the user object or handle it as needed
  } catch (error) {
    console.error('Error:', error.message);
    return null; // Handle error appropriately in your application
  }
};

export default signUpUser;
