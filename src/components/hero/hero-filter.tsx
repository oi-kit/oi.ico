'use client';

import { ChangeEvent, type ComponentProps, type FC } from 'react';

import { Input } from '@/components/primitives/input';

import SVG from '@/components/svg';

import { cn } from '@/utils/cn';

import { SEARCH } from '@/config/icons';

import { useFeature } from '@/components/feature/feature-context';

const HeroFilter: FC<ComponentProps<'div'>> = ({ className, ...rest }) => {
  const { searchQuery, setSearchQuery } = useFeature();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
  }

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
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
};

export default HeroFilter;