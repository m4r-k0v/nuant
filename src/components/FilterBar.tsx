import Input from './Form/Input';
import Dropdown from './Form/Dropdown';

type FilterBarProps = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  pokemonTypes: { name: string; value: string }[];
  selectedType: string;
  setSelectedType: (selectedType: string) => void;
  resetCallback: () => void;
};

export const FilterBar = ({
  searchTerm,
  setSearchTerm,
  pokemonTypes,
  selectedType,
  setSelectedType,
  resetCallback,
}: FilterBarProps) => {
  return (
    <>
      <div className='mb-4 flex gap-4'>
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
      <button
        className='cursor-pointer text-gray-800 underline hover:text-gray-600 hover:no-underline'
        onClick={resetCallback}
      >
        Clear filters
      </button>
    </>
  );
};
