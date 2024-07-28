import type { FC } from 'react';
import type { HideNavFooterState } from '@/config/state/LayoutState';

import { NavThemeToggle, NavItemsList } from '@/components/nav';
import Logo from '@/components/Logo';

import { cn } from '@/helpers/cn'

interface NavProps extends HideNavFooterState { }

const Nav: FC<NavProps> = ({ isHideNav }) => {
  return (
    <header className={cn(
      'w-full bg-card z-50 shadow-md',
      isHideNav && 'hidden'
    )}>
      <nav className='max-w-7xl mx-auto flex justify-between items-center h-20 px-4'>
        <Logo />
        <div className={cn(
          'fixed bottom-0 left-0 h-16 grid content-center w-full bg-card shadow rounded-t-xl',
          'md:relative md:w-auto md:h-auto md:bg-transparent md:shadow-none md:flex md:items-center',
        )}>
          <NavItemsList />
        </div>
        <NavThemeToggle />
      </nav>
    </header>
  );
}

export default Nav;