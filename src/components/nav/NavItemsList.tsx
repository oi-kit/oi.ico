import type { FC } from 'react';

import { NavItem } from '@/components/nav';

import { siteConfig } from '@/config/site';

const NavItemsList: FC = () => {
  return (
    <div className='flex justify-around sm:justify-center sm:gap-10 gap-4'>
      {siteConfig.navItems.map((item, index) => (
        <NavItem
          key={index}
          href={item.href}
          target={item.target}
          content={item.content}
        />
      ))}
      {/* TODO: make a modal window and add tabs here */}
      <span className='text-[16px]'>Modal 1</span>
      <span className='text-[16px]'>Modal 2</span>
    </div>
  );
}

export default NavItemsList;