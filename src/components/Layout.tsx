import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='flex items-center justify-center bg-gray-100 p-4'>
      <div className='flex w-[1000px] flex-col rounded-lg bg-white p-6 shadow-xl'>
        {children}
      </div>
    </div>
  );
};

export default Layout;
