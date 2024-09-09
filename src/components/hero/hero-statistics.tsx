import type { ComponentProps, FC } from 'react';

const HeroStatistics: FC<ComponentProps<'div'>> = ({ className, ...rest }) => {
  return (
    <div className='flex flex-col items-center jsutify-center lg:flex-row gap-4 leading-6'>
      <div className='flex items-center gap-2'>
        <p className='text-sm text-muted'>0 icons</p>
        <svg
          viewBox="0 0 2 2"
          aria-hidden="true"
          className="w-0.5"
        >
          <circle className='fill-muted' cx="1" cy="1" r="1" />
        </svg>
        <p className='text-sm text-muted'>MIT license</p>
      </div>
    </div>
  );
};

export default HeroStatistics;