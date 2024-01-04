import supabase from './supabase';

const tableName = 'store';

export default async function getProducts(title: string) {
  const { data, error } = await supabase
    .from(tableName)
    .select('items')
    .eq('title', title);

  if (error) {
    console.error('Error:', error.message);
  }
  return data;
}
