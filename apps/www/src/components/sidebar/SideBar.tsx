import type { FC } from 'react';
import { filter } from '../filter/FilterData';
import Link from 'next/link';

interface SideBarProps { }

const SideBar: FC<SideBarProps> = ({ }) => {
  return (
    <ul className='flex flex-col gap-2'>
      {filter.map((item, index) => (
        <li
          key={index}
          className='text-sm'
        >
          <Link
            href={'#' + item.filter}
            className='text-muted hover:text-foreground transition'
          >
            {item.filter}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SideBar;