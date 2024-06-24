import type { FC } from 'react';
import { Image } from '../Image';
import { WHITE_LOGO, BLACK_LOGO } from '../../config/paths';
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';
import ThemeToggle from '../theme';

const Nav: FC = () => {
  return (
    <header className='sticky top-0 left-0 w-full bg-card z-50 shadow-md'>
      <nav className='max-w-7xl mx-auto flex justify-between items-center h-20 px-4'>
        <Link to='/'>
          <Image
            src={WHITE_LOGO}
            width={85}
            height={22}
            alt='oi.ico logo'
            className='block dark:hidden'
            priority
          />
          <Image
            src={BLACK_LOGO}
            width={85}
            height={22}
            alt='oi.ico logo'
            className='hidden dark:block'
            priority
          />
        </Link>
        <NavMenu />
        <ThemeToggle />
      </nav>
    </header>
  );
}

export default Nav;