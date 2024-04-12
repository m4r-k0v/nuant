type DropdownProps = {
  options: { name: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
};

const Dropdown = ({ options, value, onChange }: DropdownProps) => {
  return (
    <select
      className='mb-4 w-full rounded-lg border border-gray-300 bg-white p-3 text-lg text-gray-700'
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value='' disabled={value !== ''}>
        {value ? '' : 'Please select an option'}
      </option>

      {options.map((option) => (
        <option key={option?.name} value={option?.value}>
          {option?.name}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
