import type { ComponentProps, FC } from 'react';

import { Button } from '@/components/primitives/button';

import { cn } from '@/utils/cn';

const NavbarItem: FC<ComponentProps<'button'>> = ({ children, className, ...rest }) => {
  return (
    <Button className={cn(className)} {...rest}>
      {children}
    </Button>
  );
};

export default NavbarItem;