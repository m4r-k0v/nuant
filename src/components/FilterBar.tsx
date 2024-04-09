import Input from './Form/Input';
import Dropdown from './Form/Dropdown';

type FilterBarProps = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  pokemonTypes: string[];
  selectedType: string;
};

export const FilterBar = ({ searchTerm, setSearchTerm, pokemonTypes, selectedType }: FilterBarProps) => {
  return (
    <div className='mb-4'>
      <Input placeholder='Search by name' value={searchTerm} callback={setSearchTerm} />
      <Dropdown options={pokemonTypes} value={selectedType} onChange={() => ({})} />
    </div>
  );
};
