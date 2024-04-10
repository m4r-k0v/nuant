import { useInfiniteQuery } from '@tanstack/react-query';
import { getListPokemons } from 'services/pokemonService';

export const useGetListPokemons = (selectedTypeUrl: string, offset = 0, limit = 100) => {
  const {
    data,
    isLoading: isLoadingPokemons,
    isError: isErrorPokemons,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    enabled: !selectedTypeUrl,
    queryFn: getListPokemons,
    queryKey: ['pokemons', offset, limit],
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage?.next === null) return undefined;

      const url = new URL(lastPage?.next ?? '');
      const params = new URLSearchParams(url.search);
      return Number(params.get('offset'));
    },
  });

  return {
    pokemons: data?.pages,
    isLoadingPokemons,
    isErrorPokemons,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  };
};
