import type { FC } from 'react';
import SectionContainer from '@/components/containers/SectionContainer';
import Search from '@/components/search';
import Filter from '@/components/filter';

const Hero: FC = () => {
  return (
    <section className='bg-card rounded-b-[50px] w-full h-full'>
      <SectionContainer>
        <div className='flex flex-col'>
          <h1 className='max-w-3xl h1'>
            <span className='text-cyan-400'>Open-source </span>
            Icons Library For Designers And Developers, Free For Any Use.
          </h1>
        </div>
        <div className='flex flex-col md:flex-row gap-6 pt-[70px]'>
          <Search />
          <Filter />
        </div>
      </SectionContainer>
    </section>
  );
}

export default Hero;