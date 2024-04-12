type LinkTextProps = {
  text: string;
  callback: () => void;
};

const LinkText = ({ text, callback }: LinkTextProps) => {
  return (
    <p
      className='mb-4 cursor-pointer text-gray-800 underline hover:text-gray-600 hover:no-underline'
      onClick={callback}
    >
      {text}
    </p>
  );
};

export default LinkText;
