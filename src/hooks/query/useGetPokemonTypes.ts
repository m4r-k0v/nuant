import { useQuery } from '@tanstack/react-query';
import { getTypes } from 'services/pokemonService';

export const useGetPokemonTypes = () => {
  const {
    data: pokemonTypes,
    isLoading: isLoadingTypes,
    isError: isErrorTypes,
  } = useQuery({
    queryKey: ['pokemon-types'],
    queryFn: getTypes,
  });

  return {
    pokemonTypes,
    isLoadingTypes,
    isErrorTypes,
  };
};
