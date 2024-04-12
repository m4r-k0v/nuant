import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from 'components/Form/Dropdown';

describe('<Dropdown />', () => {
  const options = [
    { name: 'Option 1', value: '1' },
    { name: 'Option 2', value: '2' },
    { name: 'Option 3', value: '3' },
  ];

  it('renders all options correctly', () => {
    render(<Dropdown options={options} value='1' onChange={vi.fn()} />);

    const selectElement = screen.getByRole('combobox');

    expect(selectElement).toBeDefined();
    options.forEach((option) => {
      expect(screen.getByText(option.name)).toBeDefined();
    });
  });

  it('sets the correct initial selected value', () => {
    render(<Dropdown options={options} value='2' onChange={vi.fn()} />);

    const selectElement = screen.getByRole('combobox') as HTMLSelectElement;

    expect(selectElement.value).toBe('2');
  });

  it('updates on user interaction', () => {
    const onChangeMock = vi.fn();

    render(<Dropdown options={options} value='1' onChange={onChangeMock} />);

    const selectElement = screen.getByRole('combobox') as HTMLSelectElement;

    fireEvent.change(selectElement, { target: { value: '3' } });
    expect(onChangeMock).toHaveBeenCalledWith('3');
  });
});
