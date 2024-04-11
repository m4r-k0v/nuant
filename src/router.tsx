import { createBrowserRouter } from 'react-router-dom';
import PokemonList from 'pages/PokemonList';
import PokemonDetails from 'pages/PokemonDetails';
import { POKEMON_ENTITY } from 'utils/const';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PokemonList />,
  },
  {
    path: `${POKEMON_ENTITY}/:pokemonName`,
    element: <PokemonDetails />,
  },
]);
