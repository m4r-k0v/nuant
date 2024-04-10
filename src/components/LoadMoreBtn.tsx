type LoadMoreBtnProps = {
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  isFetching: boolean;
};

const LoadMoreBtn = ({ fetchNextPage, hasNextPage, isFetchingNextPage, isFetching }: LoadMoreBtnProps) => (
  <>
    <div>
      <button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
        {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'Nothing more to load'}
      </button>
    </div>
    <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
  </>
);

export default LoadMoreBtn;
