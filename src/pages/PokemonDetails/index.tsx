import { Link, useNavigate, useParams } from 'react-router-dom';
import Layout from 'components/Layout';
import Title from 'components/Title';
import { useGetDynamicData } from 'hooks/query/useGetDynamicData';
import { useGetPokemonByName } from 'hooks/query/useGetPokemonByName';
import Loader from 'components/Loader';
import ProfileImage from './components/Pokemon/ProfileImage';
import StatItem from './components/Pokemon/StatItem';
import Pill from './components/Pokemon/Pill';
import Section from './components/Pokemon/Section';

const PokemonDetails = () => {
  const navigate = useNavigate();

  const { pokemonName } = useParams<{ pokemonName: string }>();
  const { pokemonByName, isLoadingPokemonByName } = useGetPokemonByName(
    pokemonName ?? ''
  );
  const { data: speciesInfo, isLoading } = useGetDynamicData(
    pokemonByName?.species?.url
  );

  const mappedTypes = pokemonByName?.types.map(({ type }) => {
    return (
      <Link to={`/?type=${type?.name}`}>
        <Pill key={type.name} type={type?.name} children={type?.name} />
      </Link>
    );
  });

  const mappedStats = pokemonByName?.stats.map((stat) => (
    <StatItem
      key={stat.stat.name}
      title={stat.stat.name}
      description={stat.base_stat}
    />
  ));

  return (
    <Layout>
      <Title title='Pokédex' />
      <p
        className='mb-4 cursor-pointer text-gray-800 underline hover:text-gray-600 hover:no-underline'
        onClick={() => navigate(-1)}
      >
        {'< Back to List'}
      </p>
      <div>
        {isLoadingPokemonByName ? (
          <Loader />
        ) : (
          pokemonByName && (
            <div>
              <Section title='Basic Information'>
                <div className='flex flex-col items-center justify-around md:flex-row md:items-start'>
                  <ProfileImage pokemon={pokemonByName} />
                  <p className='mt-4 text-center md:mt-0 md:w-1/3 md:text-left'>
                    {!isLoading &&
                      speciesInfo?.flavor_text_entries[0].flavor_text}
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
                    <StatItem
                      title='Height'
                      description={pokemonByName?.height}
                    />
                    <StatItem
                      title='Weight'
                      description={`${pokemonByName?.weight} lbs`}
                    />
                  </div>
                </div>
              </Section>
              <Section title='Types'>{mappedTypes}</Section>
              <Section title='Stats'>{mappedStats}</Section>
            </div>
          )
        )}
      </div>
    </Layout>
  );
};

export default PokemonDetails;
