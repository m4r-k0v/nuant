type StatItemProps = {
  title: string;
  description: number | string;
};

const StatItem = ({ title, description }: StatItemProps) => {
  return (
    <div className='mb-4 flex items-center justify-between rounded-lg bg-gray-50 p-2 hover:bg-gray-100'>
      <h2 className='text-lg font-semibold text-gray-700'>{title}:</h2>
      <p className='text-lg text-gray-600'>{description}</p>
    </div>
  );
};

export default StatItem;
