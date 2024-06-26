'use client';

import type { FC } from 'react';
import { BLACK_LOGO_PATH, HOPE_PATH, WHITE_LOGO_PATH } from '@/config/path';
import { nav } from '@/components/nav/NavData';
import Link from 'next/link';
import NavItem from '@/components/nav/NavItem';
import ThemeToggle from '@/components/ThemeToggle';
import Image from 'next/image';
import { useTheme } from 'next-themes';

interface NavProps { isHideNav?: boolean; }

const Nav: FC<NavProps> = ({ isHideNav }) => {
  const { theme } = useTheme();

  if (isHideNav) return null;

  return (
    <header className='w-full bg-card z-50 shadow-md'>
      <nav className='max-w-7xl mx-auto flex justify-between items-center h-20 px-4'>
        <Link href={HOPE_PATH}>
          {theme === 'dark' ? (
            <Image
              src={WHITE_LOGO_PATH}
              alt='Light Logo'
              width={85}
              height={23}
              priority
            />
          ) : (
            <Image
              src={BLACK_LOGO_PATH}
              alt='Dark Logo'
              width={85}
              height={23}
              priority
            />
          )}
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
        <ThemeToggle />
      </nav>
    </header>
  );
}

export default Nav;