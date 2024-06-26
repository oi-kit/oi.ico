import type { FC } from 'react';
import SectionContainer from '@/components/containers/SectionContainer';
import DefatulLayout from '@/components/layouts/DefatulLayout';
import Search from '@/components/search';

const HomePage: FC = () => {
  return (
    <DefatulLayout>
      <div className='bg-card rounded-b-[50px] w-full h-full'>
        <SectionContainer asChild>
          <div className='flex flex-col'>
            <h1 className='max-w-3xl h1'>
              <span className='text-cyan-400'>Open-source </span>
              Icons Library For Designers And Developers, Free For Any Use.
            </h1>
          </div>
          <div className='flex gap-6 pt-[70px]'>
            <Search />
          </div>
        </SectionContainer>
      </div>
    </DefatulLayout>
  );
}

export default HomePage;