import { useQuery } from '@tanstack/react-query';
import { getPokemonByName } from 'services/pokemonService';

export const useGetPokemonByName = (name: string) => {
  const {
    data: pokemonByName,
    isLoading: isLoadingPokemonByName,
    isError: isErrorPokemonByName,
  } = useQuery({
    enabled: !!name,
    queryKey: ['pokemon', name],
    queryFn: () => getPokemonByName(name),
  });

  return {
    pokemonByName,
    isLoadingPokemonByName,
    isErrorPokemonByName,
  };
};
