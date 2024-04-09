import { PokemonClient } from 'pokenode-ts';

const api = new PokemonClient();

export const getListPokemons = async (offset: number, limit: number) => {
  try {
    const response = await api.listPokemons(offset, limit); // You can adjust the parameters as needed
    return response.results;
  } catch (error) {
    throw new Error('Failed to fetch pokemons');
  }
};

export const getTypes = async () => {
  try {
    const response = await api.listTypes();
    return response.results;
  } catch (error) {
    throw new Error('Failed to fetch types');
  }
};

export const getPokemonByName = async (name: string) => {
  try {
    const response = await api.getPokemonByName(name);
    return response;
  } catch (error) {
    throw new Error('Failed to fetch pokemon');
  }
};
