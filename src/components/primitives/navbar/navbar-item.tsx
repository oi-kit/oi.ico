import type { ComponentProps, FC } from 'react';

import { cn } from '@/utils/cn';

const NavbarItem: FC<ComponentProps<'div'>> = ({ children, className, ...rest }) => {
  return (
    <div className={cn(className)} {...rest}>
      {children}
    </div>
  );
};

export default NavbarItem;