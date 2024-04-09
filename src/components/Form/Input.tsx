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
      className='mb-4 w-full rounded border border-gray-300 p-2'
      placeholder={placeholder}
    />
  );
};

export default Input;
