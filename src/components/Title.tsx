type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  return (
    <h1 className='mb-6 text-center text-3xl font-bold text-emerald-600'>
      {title}
    </h1>
  );
};

export default Title;
