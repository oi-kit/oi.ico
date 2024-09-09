import type { FC, ComponentProps } from 'react';

import { NavbarProvider } from '@/components/primitives/navbar';

const Navbar: FC<ComponentProps<'nav'>> = ({ children }) => {
  return <NavbarProvider>{children}</NavbarProvider>;
};

export default Navbar;