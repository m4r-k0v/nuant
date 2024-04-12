import { PokemonClient } from 'pokenode-ts';
import axios from 'axios';

const api = new PokemonClient();

export const getListPokemons = async ({ pageParam = 0 }) => {
  try {
    // You can adjust the parameters as needed
    return await api.listPokemons(pageParam, 60);
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
    return await api.getPokemonByName(name);
  } catch (error) {
    throw new Error('Failed to fetch pokemon');
  }
};

export const getPokemonByType = async (selectedType?: string) => {
  if (!selectedType) {
    throw new Error('No Type provided');
  }

  try {
    const response = await api.getTypeByName(selectedType);
    return response?.pokemon || [];
  } catch (error) {
    throw new Error('Failed to fetch pokemon');
  }
};

export const getDynamicData = async (url?: string) => {
  if (!url) {
    throw new Error('No URL provided');
  }

  try {
    const response = await axios(url);
    return response?.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};
