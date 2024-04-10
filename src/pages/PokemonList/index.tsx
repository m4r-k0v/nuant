import { useState } from 'react';
import { FilterBar } from 'components/FilterBar';
import { useDebounce } from 'utils/hooks';
import CardWrapper from 'components/CardWrapper';
import LoadMoreBtn from 'components/LoadMoreBtn';
import { usePokemons } from 'hooks/usePokemons';

const Pokedex = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const debouncedSearchTerm = useDebounce(searchTerm, 900);

  const { infiniteQuery, pokemons, pokemonTypes, isLoading } = usePokemons({
    selectedType,
    debouncedSearchTerm,
  });

  return (
    <div className='flex items-center justify-center bg-gray-100 p-4'>
      <div className='flex w-[1000px] flex-col rounded-lg bg-white p-6 shadow-xl'>
        <h1 className='mb-6 text-center text-3xl font-bold text-emerald-600'>Pokédex</h1>
        <FilterBar
          pokemonTypes={pokemonTypes ?? []}
          selectedType={selectedType}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setSelectedType={setSelectedType}
        />
        <CardWrapper isLoading={isLoading} pokemons={pokemons} />
        {(!selectedType || !searchTerm) && (
          <LoadMoreBtn
            fetchNextPage={infiniteQuery.fetchNextPage}
            hasNextPage={infiniteQuery.hasNextPage}
            isFetchingNextPage={infiniteQuery.isFetchingNextPage}
            isFetching={infiniteQuery.isFetching}
          />
        )}
      </div>
    </div>
  );
};

export default Pokedex;
