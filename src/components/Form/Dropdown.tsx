type DropdownProps = {
  options: { name: string; url: string }[];
  value: string;
  onChange: (value: string) => void;
};

const Dropdown = ({ options, value, onChange }: DropdownProps) => {
  return (
    <select
      className='w-full rounded border border-gray-300 p-2'
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option) => (
        <option key={option?.name} value={option?.url}>
          {option?.name}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
