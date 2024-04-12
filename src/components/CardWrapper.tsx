import Loader from 'components/Loader';
import Card from './Card';
import { NamedAPIResource } from 'pokenode-ts';

type CardWrapperProps = {
  pokemonArr?: NamedAPIResource[];
  isLoading: boolean;
};

const CardWrapper = ({ pokemonArr, isLoading }: CardWrapperProps) => {
  if (isLoading)
    return (
      <div className='flex self-center'>
        <Loader />
      </div>
    );

  return (
    <div className='max-h-[calc(100vh-200px)] overflow-auto'>
      {!pokemonArr?.length && <p className='text-center'>No pokemon found</p>}
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
        {pokemonArr?.map((pokemon) => (
          <Card name={pokemon?.name} key={pokemon?.name} link={pokemon?.url} />
        ))}
      </div>
    </div>
  );
};

export default CardWrapper;
