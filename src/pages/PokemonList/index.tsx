import { useState } from 'react';
import { useDebounce } from 'utils/hooks';
import { useSearchParams } from 'react-router-dom';
import CardWrapper from 'components/CardWrapper';
import LoadMoreBtn from 'components/LoadMoreBtn';
import Title from 'components/Title';
import Layout from 'components/Layout';
import { usePokemonList } from 'hooks/usePokemonList';
import { FilterBar } from './components/FilterBar';

const Pokedex = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get('type') ?? '';

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>(type);
  const debouncedSearchTerm = useDebounce(searchTerm, 900);

  const { infiniteQuery, pokemons, pokemonTypes, isLoading } = usePokemonList({
    selectedType,
    debouncedSearchTerm,
  });

  const showLoadMoreBtn = !selectedType.length && !debouncedSearchTerm;

  return (
    <Layout>
      <Title title='Pokedex' />
      <FilterBar
        pokemonTypes={pokemonTypes ?? []}
        selectedType={selectedType}
        searchTerm={searchTerm}
        setSearchTerm={(val) => {
          setSearchTerm(val);
          setSearchParams({ name: val });
        }}
        setSelectedType={(val) => {
          setSelectedType(val);
          setSearchParams({ type: val });
        }}
        resetCallback={() => {
          setSelectedType('');
          setSearchTerm('');
          setSearchParams();
        }}
      />

      <CardWrapper isLoading={isLoading} pokemonArr={pokemons} />

      {showLoadMoreBtn && (
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
