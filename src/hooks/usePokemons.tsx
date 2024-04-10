import { useGetListPokemons } from './query/useGetListPokemons';
import { useGetPokemonTypes } from './query/useGetPokemonTypes';
import { useGetPokemonByType } from './query/useGetPokemonByType';
import { useGetPokemonByName } from './query/useGetPokemonByName';
import React from 'react';
import Card from '../components/Card';

type UsePokemonsProps = {
  selectedType: string;
  debouncedSearchTerm: string | number | object;
};

export const usePokemons = ({ selectedType, debouncedSearchTerm }: UsePokemonsProps) => {
  const { pokemons, isErrorPokemons, isLoadingPokemons, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useGetListPokemons(selectedType);
  const { pokemonTypes, isLoadingTypes, isErrorTypes } = useGetPokemonTypes();
  const { pokemonsByType, isLoadingPokemonsByType } = useGetPokemonByType(selectedType);

  const { pokemonByName, isLoadingPokemonByName, isErrorPokemonByName } = useGetPokemonByName(debouncedSearchTerm);

  const prepareDataForCardWrapper = () => {
    if (!selectedType) {
      return pokemons?.map((page, i) => (
        <React.Fragment key={i}>
          {page.results?.map((pokemon) => <Card name={pokemon.name} key={pokemon.name} link={pokemon.url} />)}
        </React.Fragment>
      ));
    } else {
      return pokemonsByType?.map((pokemon) => <Card name={pokemon.name} key={pokemon.name} link={pokemon.url} />);
    }
  };

  return {
    pokemons: prepareDataForCardWrapper(),
    pokemonTypes,
    isLoading: isLoadingPokemons || isLoadingPokemonsByType,
    isError: isErrorPokemons,
    infiniteQuery: {
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage,
      isFetching,
    },
  };
};
