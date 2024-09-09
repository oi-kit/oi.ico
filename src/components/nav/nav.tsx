import type { ComponentProps, FC } from 'react';

import { Navbar, NavbarBody, NavbarItem } from '@/components/primitives/navbar';

import Logo from '@/components/logo';

import RepoLink from '@/components/repo-link';

import ThemeToggle from '@/components/theme-toggle';

import { cn } from '@/utils/cn';

interface NavProps extends ComponentProps<'header'> {
  isHideNav?: boolean;
}

const Nav: FC<NavProps> = ({ isHideNav, className, ...rest }) => {
  return (
    <header className={cn(
      'container w-full',
      isHideNav && 'hidden',
      className
    )} {...rest}>
      <Navbar>
        <NavbarBody>
          <NavbarItem>
            <Logo />
          </NavbarItem>
          <div className='flex items-center gap-4'>
            <NavbarItem>
              <RepoLink />
            </NavbarItem>
            <NavbarItem>
              <ThemeToggle />
            </NavbarItem>
          </div>
        </NavbarBody>
      </Navbar>
    </header>
  );
};

export default Nav;