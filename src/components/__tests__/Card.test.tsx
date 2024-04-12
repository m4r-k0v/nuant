import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Card from 'components/Card';

describe('<Card />', () => {
  it('renders correctly and contains a link to the pokemon entity', () => {
    const name = 'bulbasaur';
    const link = 'https://pokeapi.co/api/v2/pokemon/1';

    render(
      <MemoryRouter>
        <Card name={name} link={link} />
      </MemoryRouter>
    );

    const cardLink = screen.getByRole('link');
    expect(cardLink.getAttribute('href')).toBe(`/pokemon/${name}`);

    const image = screen.getByRole('img', { name }) as HTMLImageElement;

    expect(image.src).toBe(
      `${import.meta.env.VITE_POKEMON_API_IMAGE_URL}/1.png`
    );
    expect(screen.getByText(name)).toBeDefined();
  });
});
