import { useQuery } from '@tanstack/react-query';

async function fetchData(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }
  return res.json();
}

function useFetch<T>(url: string) {
  return useQuery<T, Error>({
    queryKey: ['data'],
    queryFn: () => fetchData(url),
  });
}

export default useFetch;
