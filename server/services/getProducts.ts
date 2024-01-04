import supabase from './supabase';

const tableName = 'store';

export default async function getProducts(
  title: string,
): Promise<Array<{ items: any }>> {
  const { data, error } = await supabase
    .from(tableName)
    .select('items')
    .eq('title', title);

  if (error) {
    throw new Error('Error loading products: ' + error.message);
  }
  return data;
}
