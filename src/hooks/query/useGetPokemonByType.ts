import { useQuery } from '@tanstack/react-query';
import { getPokemonByType } from 'services/pokemonService';

export const useGetPokemonByType = (selectedType?: string) => {
  const {
    data: pokemonsByType,
    isLoading: isLoadingPokemonsByType,
    isError: isErrorPokemonsByType,
  } = useQuery({
    enabled: !!selectedType,
    queryKey: ['pokemons-by-type', selectedType],
    queryFn: () => getPokemonByType(selectedType),
    select: (data) => {
      return data?.map(({ pokemon }) => ({
        name: pokemon.name,
        url: pokemon.url,
      }));
    },
  });

  return {
    pokemonsByType,
    isLoadingPokemonsByType,
    isErrorPokemonsByType,
  };
};
