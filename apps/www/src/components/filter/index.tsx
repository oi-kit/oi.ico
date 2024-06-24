'use client';

import { useCallback, useEffect, useState, type FC } from 'react';
import Popover from '../popover';
import { TFilter } from '../../types/TFilter';
import { getFilters } from './FilterData';

interface FilterProps { }

const Filter: FC<FilterProps> = ({ }) => {
  const [filter, setFilter] = useState<TFilter[]>([]);

  const getFilterData = useCallback(async () => {
    const data = await getFilters();
    setFilter(data);
  }, []);

  useEffect(() => {
    getFilterData();
  }, [getFilterData]);

  return (
    <div>
      <Popover className='relative'>
        <Popover.Button>All</Popover.Button>
        <Popover.List>
          {filter.map((item) => (
            <Popover.ListItem key={item.filter}>
              {item.filter}
            </Popover.ListItem>
          ))}
        </Popover.List>
      </Popover>
    </div>
  );
}

export default Filter;