'use client';

import { ChangeEvent, type FC } from 'react';
import Button from './Button';

const Search: FC = () => {
  return (
    <Button
      size='small'
      variant='active'
      className='w-[260px] md:w-[460px] h-[40px] !px-5 !py-2 justify-start'
    >
      <div className='flex items-center'>
        <input
          type='text'
          value={''}
          placeholder='Search'
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            console.log(e.target.value);
          }}
          className='placeholder:text-muted font-normal'
        />
      </div>
    </Button>
  );
}

export default Search;