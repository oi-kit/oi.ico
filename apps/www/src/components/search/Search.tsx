'use client';

import type { FC } from 'react';
import { Command, CommandInput } from '@/components/ui/command';

interface SearchProps { }

const Search: FC<SearchProps> = ({ }) => {
  return (
    <div className='max-w-[460px] w-full'>
      <Command>
        <CommandInput
          placeholder="Search..."
          className="placeholder:text-muted"
        />
      </Command>
    </div>
  );
}

export default Search;