import { useQuery } from '@tanstack/react-query';
import { getPokemonByType } from 'services/pokemonService';
import { Pokemon } from 'pokenode-ts';

export const useGetPokemonByType = (selectedTypeUrl: string) => {
  const {
    data: pokemonsByType,
    isLoading: isLoadingPokemonsByType,
    isError: isErrorPokemonsByType,
  } = useQuery({
    enabled: !!selectedTypeUrl,
    queryKey: ['pokemons-by-type', selectedTypeUrl],
    queryFn: () => getPokemonByType(selectedTypeUrl),
    select: (data) => {
      return data?.map(({ pokemon }: { pokemon: Pokemon }) => ({
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
