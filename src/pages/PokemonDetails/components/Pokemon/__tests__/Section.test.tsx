import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Section from 'pages/PokemonDetails/components/Pokemon/Section';

describe('<Section />', () => {
  it('renders the title and children correctly', () => {
    const titleText = 'Section Title';
    const childText = 'Content of the section';

    render(
      <Section title={titleText}>
        <p>{childText}</p>
      </Section>
    );

    const title = screen.getByRole('heading', { name: titleText });
    expect(title).toBeDefined();

    const content = screen.getByText(childText);
    expect(content).toBeDefined();
  });
});
