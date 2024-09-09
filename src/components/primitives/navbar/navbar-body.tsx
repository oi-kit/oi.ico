import type { ComponentProps, FC } from 'react';

import { cn } from '@/utils/cn';

const NavbarBody: FC<ComponentProps<'nav'>> = ({ children, className, ...rest }) => {
  return (
    <nav className={cn(
      'flex items-center justify-between flex-shrink-0',
      'w-full h-16 container',
    )} {...rest}>
      {children}
    </nav>
  );
};

export default NavbarBody;