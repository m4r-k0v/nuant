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
      <div className='grid grid-cols-6 gap-4'>
        {!pokemonArr?.length && (
          <p className='text-center'>No pokemons found</p>
        )}
        {pokemonArr?.map((pokemon) => (
          <Card name={pokemon?.name} key={pokemon?.name} link={pokemon?.url} />
        ))}
      </div>
    </div>
  );
};

export default CardWrapper;
