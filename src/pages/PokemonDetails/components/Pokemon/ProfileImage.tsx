import { Pokemon } from 'pokenode-ts';

type ProfileImageProps = {
  pokemon: Pokemon;
};

const ProfileImage = ({ pokemon }: ProfileImageProps) => {
  return (
    <div className='flex h-auto w-1/6 justify-center'>
      <img
        src={`${import.meta.env.VITE_POKEMON_API_IMAGE_URL}/${pokemon?.id}.png`}
        alt={pokemon?.name}
      />
    </div>
  );
};

export default ProfileImage;
