import type { FC } from 'react';
import NavItem from './NavItem';
import { nav } from './NavData';

const NavMenu: FC = () => {
  return (
    <div className='fixed bottom-0 left-0 bg-card shadow w-full h-16 grid content-center rounded-t-xl md:relative md:w-auto md:h-auto md:bg-transparent md:shadow-none md:flex md:items-center'>
      <div className='flex justify-around sm:justify-center sm:gap-10 gap-4'>
        {nav.map(({ href, content, target }, index) => (
          <NavItem
            to={href}
            key={index}
            content={content}
            target={target}
          />
        ))}
      </div>
    </div>
  );
}

export default NavMenu;