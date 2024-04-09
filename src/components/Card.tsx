import { extractIndexFromUrl } from '../utils/helpers';

type CardProps = {
  name: string;
  link: string;
};

const Card = ({ name, link }: CardProps) => (
  <div
    className='card cursor-pointer rounded-md border p-4 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl'
    onClick={() => {}}
  >
    <img
      src={`${import.meta.env.VITE_POKEMON_API_URL}/${extractIndexFromUrl(link)}.png`}
      alt={name}
      className='mx-auto h-20 w-20 rounded-md'
    />
    <h2 className='mt-2 text-center font-bold text-amber-600'>{name}</h2>
  </div>
);

export default Card;
