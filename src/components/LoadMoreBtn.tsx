type LoadMoreBtnProps = {
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  isFetching: boolean;
};

const LoadMoreBtn = ({
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  isFetching,
}: LoadMoreBtnProps) => (
  <>
    <div className='mt-4 text-center'>
      <button
        onClick={fetchNextPage}
        disabled={!hasNextPage || isFetchingNextPage}
        className={`rounded-full px-6 py-2 text-lg font-semibold ${
          !hasNextPage || isFetchingNextPage
            ? 'cursor-not-allowed bg-gray-400 text-white'
            : 'bg-yellow-400  hover:bg-yellow-500 '
        }`}
      >
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
      </button>
    </div>
    {isFetching && !isFetchingNextPage && (
      <div className='mt-2 text-sm text-gray-500'>Fetching...</div>
    )}
  </>
);

export default LoadMoreBtn;
