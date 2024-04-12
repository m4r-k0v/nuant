import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Pill from 'pages/PokemonDetails/components/Pokemon/Pill';

describe('<Pill />', () => {
  it('renders the children correctly', () => {
    const testText = 'Test Type';
    render(<Pill type='normal'>{testText}</Pill>);

    expect(screen.getByText(testText)).toBeDefined();
  });

  it('applies correct background class based on type', () => {
    render(<Pill type='fire'>Fire</Pill>);
    const pill = screen.getByText('Fire');
    3;

    expect(pill.className).toContain('bg-red-500');

    render(<Pill type='water'>Water</Pill>);
    const pillWater = screen.getByText('Water');

    expect(pillWater.className).toContain('bg-blue-500');

    render(<Pill type='unknown'>Unknown</Pill>);
    const pillUnknown = screen.getByText('Unknown');

    expect(pillUnknown.className).toContain('bg-gray-300');
  });

  it('applies default background class if type is invalid', () => {
    const testType = 'nonexistent';
    render(<Pill type={testType}>Invalid Type</Pill>);

    const pill = screen.getByText('Invalid Type');

    expect(pill.className).toContain('bg-gray-200');
  });
});
