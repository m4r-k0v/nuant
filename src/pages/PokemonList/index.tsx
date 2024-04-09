import { useState } from 'react';
import Card from 'components/Card';
import { FilterBar } from 'components/FilterBar';
import { useGetListPokemons } from 'hooks/query/useGetListPokemons';
import { useGetPokemonTypes } from 'hooks/query/useGetPokemonTypes';
import { useGetPokemonByName } from 'hooks/query/useGetPokemonByName';

const Pokedex = () => {
  const [selectedType, setSelectedType] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const { pokemons, isErrorPokemons, isLoadingPoekmons } = useGetListPokemons();
  const { pokemonTypes, isLoadingTypes, isErrorTypes } = useGetPokemonTypes();

  const { pokemonByName, isLoadingPokemonByName, isErrorPokemonByName } = useGetPokemonByName(searchTerm);

  if (isLoadingPoekmons || isLoadingTypes || isLoadingPokemonByName) return <div>Loading...</div>;
  if (isErrorPokemons || isErrorTypes || isErrorPokemonByName) return <div>An error occurred</div>;

  return (
    <div className='flex items-center justify-center bg-gray-100 p-4'>
      <div className='flex w-[1000px] flex-col rounded-lg bg-white p-6 shadow-xl'>
        <h1 className='mb-6 text-center text-3xl font-bold'>Pokédex</h1>
        <FilterBar
          pokemonTypes={pokemonTypes ?? []}
          selectedType={selectedType}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <div className='max-h-[calc(100vh-200px)] overflow-auto'>
          <div className='grid grid-cols-6 gap-4'>
            {pokemons.map((pokemon) => (
              <Card name={pokemon.name} key={pokemon.name} link={pokemon.url} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
