import Link from 'next/link';
import type { FC } from 'react';
import { HOPE_PATH } from '@/config/path';
import { nav } from '@/components/nav/NavData';
import NavItem from './NavItem';

interface NavProps { isHideNav?: boolean; }

const Nav: FC<NavProps> = ({ isHideNav }) => {
  if (isHideNav) return null;
  return (
    <header className='w-full bg-card z-50 shadow-md'>
      <nav className='max-w-7xl mx-auto flex justify-between items-center h-20 px-4'>
        <Link href={HOPE_PATH}>
          Logo
        </Link>
        <div className='fixed bottom-0 left-0 bg-card shadow w-full h-16 grid content-center rounded-t-xl md:relative md:w-auto md:h-auto md:bg-transparent md:shadow-none md:flex md:items-center'>
          <div className='flex justify-around sm:justify-center sm:gap-10 gap-4'>
            {nav.map((item, index) => (
              <NavItem
                key={index}
                href={item.href}
                target={item.target}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;