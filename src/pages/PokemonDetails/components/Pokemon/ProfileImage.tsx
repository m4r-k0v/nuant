import { Pokemon } from 'pokenode-ts';

type ProfileImageProps = {
  pokemon: Pokemon;
};

const ProfileImage = ({ pokemon }: ProfileImageProps) => {
  return (
    <div className='flex h-auto justify-center'>
      <img
        src={`${import.meta.env.VITE_POKEMON_API_IMAGE_URL}/${pokemon?.id}.png`}
        alt={pokemon?.name}
      />
    </div>
  );
};

export default ProfileImage;
