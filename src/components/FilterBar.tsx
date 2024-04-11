import type { NamedAPIResource } from 'pokenode-ts';
import Input from './Form/Input';
import Dropdown from './Form/Dropdown';

type FilterBarProps = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  pokemonTypes: NamedAPIResource[];
  selectedType: string;
  setSelectedType: (selectedType: string) => void;
};

export const FilterBar = ({
  searchTerm,
  setSearchTerm,
  pokemonTypes,
  selectedType,
  setSelectedType,
}: FilterBarProps) => {
  return (
    <div className='mb-4'>
      <Input
        type='search'
        placeholder='Search by name'
        value={searchTerm}
        callback={setSearchTerm}
      />
      <Dropdown
        options={pokemonTypes}
        value={selectedType}
        onChange={setSelectedType}
      />
    </div>
  );
};
