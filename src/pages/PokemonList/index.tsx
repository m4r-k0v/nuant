import { useState } from 'react';
import { FilterBar } from 'components/FilterBar';
import { useDebounce } from 'utils/hooks';
import CardWrapper from 'components/CardWrapper';
import LoadMoreBtn from 'components/LoadMoreBtn';
import { usePokemonList } from 'hooks/usePokemonList';
import Title from '../../components/Title';
import Layout from '../../components/Layout';
import { useSearchParams } from 'react-router-dom';

const Pokedex = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>(type ?? '');
  const debouncedSearchTerm = useDebounce(searchTerm, 900);

  const { infiniteQuery, pokemons, pokemonTypes, isLoading } = usePokemonList({
    selectedType,
    debouncedSearchTerm,
  });

  return (
    <Layout>
      <Title title='Pokedex' />
      <FilterBar
        pokemonTypes={pokemonTypes ?? []}
        selectedType={selectedType}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setSelectedType={setSelectedType}
      />
      <CardWrapper isLoading={isLoading} pokemonArr={pokemons} />
      {(!selectedType || !searchTerm) && (
        <LoadMoreBtn
          fetchNextPage={infiniteQuery.fetchNextPage}
          hasNextPage={infiniteQuery.hasNextPage}
          isFetchingNextPage={infiniteQuery.isFetchingNextPage}
          isFetching={infiniteQuery.isFetching}
        />
      )}
    </Layout>
  );
};

export default Pokedex;
