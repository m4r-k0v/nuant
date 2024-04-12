import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import StatItem from 'pages/PokemonDetails/components/Pokemon/StatItem';

describe('<StatItem />', () => {
  it('renders the title and description correctly', () => {
    const title = 'Total Hits';
    const description = '150';

    render(<StatItem title={title} description={description} />);

    const titleElement = screen.getByText(`${title}:`, { selector: 'h2' });
    expect(titleElement).toBeDefined();

    const descriptionElement = screen.getByText(description, { selector: 'p' });
    expect(descriptionElement).toBeDefined();
  });

  it('handles number type for description correctly', () => {
    const title = 'Score';
    const description = 88; // Using a number type for description

    render(<StatItem title={title} description={description} />);

    const descriptionElement = screen.getByText(description.toString(), {
      selector: 'p',
    });
    expect(descriptionElement).toBeDefined();
  });
});
