import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Title from 'components/Title';

describe('Title component', () => {
  test('should show title', () => {
    render(
      <BrowserRouter>
        <Title title={'Testing'} />
      </BrowserRouter>
    );

    expect(screen.getByText('Testing')).toBeDefined();
  });
});
