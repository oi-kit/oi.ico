import type { ComponentProps, FC } from 'react';

import { Input } from '@/components/primitives/input';

import SVG from '@/components/svg';

import { cn } from '@/utils/cn';

import { SEARCH } from '@/config/icons';

const HeroFilter: FC<ComponentProps<'div'>> = ({ className, ...rest }) => {
  return (
    <div className={cn(
      'pt-14 text-muted',
      className,
    )} {...rest}>
      <div className='relative'>
        <SVG
          className='absolute left-3 top-1/2 transform -translate-y-1/2 size-5'
          d={SEARCH}
        />
        <Input
          className='pl-10 rounded-md placeholder:text-muted'
          placeholder='Search icons...'
        />
      </div>
    </div>
  );
};

export default HeroFilter;