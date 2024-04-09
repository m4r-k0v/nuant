import { useQuery } from '@tanstack/react-query';
import { getListPokemons } from 'services/pokemonService';

export const useGetListPokemons = (offset = 0, limit = 100) => {
  const {
    data: pokemons,
    isLoading: isLoadingPoekmons,
    isError: isErrorPokemons,
  } = useQuery({
    queryKey: ['pokemons', offset, limit],
    queryFn: () => getListPokemons(offset, limit),
  });

  return {
    pokemons,
    isLoadingPoekmons,
    isErrorPokemons,
  };
};
