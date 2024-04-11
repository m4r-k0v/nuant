import { useGetListPokemons } from './query/useGetListPokemons';
import { useGetPokemonTypes } from './query/useGetPokemonTypes';
import { useGetPokemonByType } from './query/useGetPokemonByType';
import { useGetPokemonByName } from './query/useGetPokemonByName';

type UsePokemonsProps = {
  selectedType?: string;
  pokemonName?: string;
  debouncedSearchTerm?: string;
};

export const usePokemonList = ({
  selectedType,
  debouncedSearchTerm,
}: UsePokemonsProps) => {
  const { pokemonTypes, isLoadingTypes, isErrorTypes } = useGetPokemonTypes();

  const {
    pokemons,
    isErrorPokemons,
    isLoadingPokemons,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useGetListPokemons(selectedType);

  const { pokemonsByType, isLoadingPokemonsByType, isErrorPokemonsByType } =
    useGetPokemonByType(selectedType);

  const { pokemonByName, isLoadingPokemonByName, isErrorPokemonByName } =
    useGetPokemonByName(debouncedSearchTerm ?? '');

  const prepareDataForCardWrapper = () => {
    if (debouncedSearchTerm) {
      return [
        {
          name: pokemonByName?.name,
          url: pokemonByName?.species.url,
        },
      ];
    }

    if (selectedType) {
      return pokemonsByType;
    } else {
      return pokemons?.flatMap((page) => page.results);
    }
  };

  return {
    pokemons: prepareDataForCardWrapper(),
    pokemonTypes,
    isLoadingTypes,
    isErrorTypes,
    isLoading:
      isLoadingPokemons || isLoadingPokemonsByType || isLoadingPokemonByName,
    isError: isErrorPokemons || isErrorPokemonsByType || isErrorPokemonByName,
    infiniteQuery: {
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage,
      isFetching,
    },
  };
};
