import type { FC } from 'react';
import SectionContainer from './containers/SectionContainer';
import Search from './Search';
import Filter from './filter';

const Hero: FC = () => {
  return (
    <div className='bg-card rounded-b-[50px] w-full h-full'>
      <SectionContainer className='lg:!pt-[120px]'>
        <div className='flex flex-col'>
          <h1 className='max-w-3xl h1'>
            <span className='text-cyan-400'>Open-source </span>
            Icons Library For Designers And Developers, Free For Any Use.
          </h1>
        </div>
        <div className='flex gap-6 pt-[70px]'>
          <Search />
          <Filter />
        </div>
      </SectionContainer>
    </div>
  );
}

export default Hero;