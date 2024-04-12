import { Link, useNavigate, useParams } from 'react-router-dom';
import Layout from 'components/Layout';
import Title from 'components/Title';
import { useGetDynamicData } from 'hooks/query/useGetDynamicData';
import { useGetPokemonByName } from 'hooks/query/useGetPokemonByName';
import Loader from 'components/Loader';
import Linktext from 'components/Linktext';
import StatItem from './components/Pokemon/StatItem';
import Pill from './components/Pokemon/Pill';
import Section from './components/Pokemon/Section';
import BasicInfo from './components/BasicInfo';

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
      <Linktext text={'< Back to List'} callback={() => navigate(-1)} />
      <div>
        {isLoadingPokemonByName ? (
          <Loader />
        ) : (
          pokemonByName && (
            <div>
              <BasicInfo
                speciesInfo={speciesInfo}
                pokemonByName={pokemonByName}
                isLoading={isLoading}
              />
              <Section title='Types'>{mappedTypes}</Section>
              <Section title='BasicInfo'>{mappedStats}</Section>
            </div>
          )
        )}
      </div>
    </Layout>
  );
};

export default PokemonDetails;
