import { ReactNode } from 'react';

type SectionProps = {
  title: string;
  children: ReactNode;
};

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className='mb-6 rounded-lg bg-white p-4 shadow'>
      <h1 className='mb-4 text-3xl font-bold text-gray-700'>{title}</h1>
      <div className='mb-4 border-b border-gray-300'></div>
      {children}
    </section>
  );
};

export default Section;
