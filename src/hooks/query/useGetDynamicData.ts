import { useQuery } from '@tanstack/react-query';
import { getDynamicData } from 'services/pokemonService';

export const useGetDynamicData = (url?: string) => {
  const { data, isLoading, isError } = useQuery({
    enabled: !!url,
    queryKey: ['pokemon', url],
    queryFn: () => getDynamicData(url),
  });

  return {
    data,
    isLoading,
    isError,
  };
};
