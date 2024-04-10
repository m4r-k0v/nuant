import Loader from 'components/Loader';

type CardWrapperProps = {
  pokemons: any;
  isLoading: boolean;
};

const CardWrapper = ({ pokemons, isLoading }: CardWrapperProps) => {
  if (isLoading)
    return (
      <div className='flex self-center'>
        <Loader />
      </div>
    );

  return (
    <div className='max-h-[calc(100vh-200px)] overflow-auto'>
      <div className='grid grid-cols-6 gap-4'>
        {!pokemons?.length && <p className='text-center'>No pokemons found</p>}
        {pokemons}
      </div>
    </div>
  );
};

export default CardWrapper;
