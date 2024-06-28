import type { FC } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { filter } from '@/components/filter/FilterData';

const Filter: FC = () => {
  return (
    <Popover>
      <PopoverTrigger
        asChild
        className='justify-between w-[150px] text-muted'
      >
        <Button
          variant='secondary'
          className='bg-background z-50'
        >
          All
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[150px] -mt-3 border-none bg-background rounded-none rounded-b-sm !z-40'>
        <div className='grid gap-2 pt-2'>
          {filter.map((item, index) => (
            <span key={index}>
              {item.filter}
            </span>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default Filter;