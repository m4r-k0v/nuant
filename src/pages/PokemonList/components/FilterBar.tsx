import Input from 'components/Form/Input';
import Dropdown from 'components/Form/Dropdown';

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
      <div className='flex gap-x-4'>
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
      <p
        className='mb-4 cursor-pointer text-gray-800 underline hover:text-gray-600 hover:no-underline'
        onClick={resetCallback}
      >
        Clear filters
      </p>
    </>
  );
};
