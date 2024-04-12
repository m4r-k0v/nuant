import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from 'components/Form/Input';

describe('Form Input field', () => {
  it('renders with correct placeholder and type text as default option', () => {
    const placeholderText = 'Enter your name';
    render(<Input placeholder={placeholderText} value='' callback={vi.fn()} />);

    const inputElement = screen.getByPlaceholderText(
      placeholderText
    ) as HTMLInputElement;

    expect(inputElement).toBeDefined();
    expect(inputElement.type).toBe('text');
  });

  it('changes value upon user input', () => {
    const callbackMock = vi.fn();
    const startingValue = '';
    const newValue = 'Hello World';

    render(
      <Input
        placeholder='Type here'
        value={startingValue}
        callback={callbackMock}
      />
    );

    const inputElement = screen.getByPlaceholderText(
      'Type here'
    ) as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: newValue } });
    expect(callbackMock).toHaveBeenCalledWith(newValue);
  });

  it('accepts different input types', () => {
    const placeholderText = 'Enter your email';
    const inputType = 'email';

    render(
      <Input
        placeholder={placeholderText}
        type={inputType}
        value=''
        callback={vi.fn()}
      />
    );

    const inputElement = screen.getByPlaceholderText(
      placeholderText
    ) as HTMLInputElement;
    expect(inputElement.type).toBe(inputType);
  });
});
