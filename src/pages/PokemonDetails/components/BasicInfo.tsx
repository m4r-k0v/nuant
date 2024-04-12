import ProfileImage from './Pokemon/ProfileImage';
import StatItem from './Pokemon/StatItem';
import Section from './Pokemon/Section';
import { Pokemon, PokemonSpecies } from 'pokenode-ts';

type BasicInfoProps = {
  pokemonByName: Pokemon;
  isLoading: boolean;
  speciesInfo: PokemonSpecies;
};

const BasicInfo = ({
  pokemonByName,
  isLoading,
  speciesInfo,
}: BasicInfoProps) => {
  return (
    <Section title='Basic Information'>
      <div className='flex flex-col items-center justify-around md:flex-row md:items-start'>
        <p className='mt-4 text-center md:mt-0 md:w-1/3 md:text-left'>
          <ProfileImage pokemon={pokemonByName} />
          {!isLoading && speciesInfo?.flavor_text_entries[0].flavor_text}
        </p>
        <div className='mt-4 w-full rounded-2xl p-4 shadow-lg md:mt-0 md:w-1/3'>
          <StatItem title='Name' description={pokemonByName?.name} />
          <StatItem
            title='Abilities'
            description={pokemonByName?.abilities
              .map((ability) => ability.ability.name)
              .join(', ')}
          />
          <StatItem
            title='Capture Rate'
            description={speciesInfo?.capture_rate}
          />
          <StatItem
            title='Base Experience'
            description={pokemonByName?.base_experience}
          />
          <StatItem title='Height' description={pokemonByName?.height} />
          <StatItem
            title='Weight'
            description={`${pokemonByName?.weight} lbs`}
          />
        </div>
      </div>
    </Section>
  );
};

export default BasicInfo;
