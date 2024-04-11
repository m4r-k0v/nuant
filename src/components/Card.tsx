import { Link } from 'react-router-dom';
import { extractIndexFromUrl } from 'utils/helpers';
import { POKEMON_ENTITY } from 'utils/const';

type CardProps = {
  name: string;
  link: string;
};

const Card = ({ name, link }: CardProps) => (
  <Link to={`${POKEMON_ENTITY}/${name}`}>
    <div className='cursor-pointer rounded-md border p-4 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl'>
      <img
        alt={name}
        className='mx-auto h-20 w-20 rounded-md'
        src={`${import.meta.env.VITE_POKEMON_API_IMAGE_URL}/${extractIndexFromUrl(link)}.png`}
      />
      <h2 className='mt-2 text-center font-bold text-amber-600'>{name}</h2>
    </div>
  </Link>
);

export default Card;
