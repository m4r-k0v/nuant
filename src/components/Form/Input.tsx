type InputProps = {
  placeholder: string;
  type?: string;
  value: string;
  callback: (value: string) => void;
};

const Input = ({ placeholder, type = 'text', ...props }: InputProps) => {
  return (
    <input
      type={type}
      value={props.value}
      onChange={(e) => props.callback(e.target.value)}
      className='mb-4 w-full rounded-lg border border-gray-300 p-3 text-lg placeholder-gray-500 '
      placeholder={placeholder}
    />
  );
};

export default Input;
