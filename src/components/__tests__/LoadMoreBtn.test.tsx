import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import LoadMoreBtn from 'components/LoadMoreBtn';

describe('Load More Button', () => {
  it('calls fetchNextPage on button click when there are more pages', () => {
    const fetchNextPageMock = vi.fn();
    render(
      <LoadMoreBtn
        fetchNextPage={fetchNextPageMock}
        hasNextPage={true}
        isFetchingNextPage={false}
        isFetching={false}
      />
    );

    const button = screen.getByRole('button', { name: 'Load More' });
    fireEvent.click(button);

    expect(fetchNextPageMock).toHaveBeenCalled();
  });

  it('does not call fetchNextPage on button click when there are no more pages', () => {
    const fetchNextPageMock = vi.fn();
    render(
      <LoadMoreBtn
        fetchNextPage={fetchNextPageMock}
        hasNextPage={false}
        isFetchingNextPage={false}
        isFetching={false}
      />
    );

    const button = screen.getByRole('button', { name: 'Nothing more to load' });
    fireEvent.click(button);

    expect(fetchNextPageMock).not.toHaveBeenCalled();
  });

  it('disables the button while fetching the next page', () => {
    render(
      <LoadMoreBtn
        fetchNextPage={() => {}}
        hasNextPage={true}
        isFetchingNextPage={true}
        isFetching={false}
      />
    );

    const button = screen.getByRole('button', { name: 'Loading more...' });
    expect(button).toHaveProperty('disabled', true);
  });

  it('shows the fetching message when isFetching is true and not fetching next page', () => {
    render(
      <LoadMoreBtn
        fetchNextPage={() => {}}
        hasNextPage={true}
        isFetchingNextPage={false}
        isFetching={true}
      />
    );

    expect(screen.getByText('Fetching...')).toBeDefined();
  });

  it('does not show the fetching message when not fetching', () => {
    render(
      <LoadMoreBtn
        fetchNextPage={() => {}}
        hasNextPage={true}
        isFetchingNextPage={false}
        isFetching={false}
      />
    );

    expect(screen.queryByText('Fetching...')).toBeNull();
  });
});
