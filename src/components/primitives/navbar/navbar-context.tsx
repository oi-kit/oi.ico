'use client';

import {
  FC, ComponentProps,
  createContext,
  useContext
} from 'react';

export interface NavbarProviderTypes extends ComponentProps<'nav'> {
  asLink?: boolean;
}

const NavbarContext = createContext<NavbarProviderTypes | undefined>(undefined);

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useNavbar must be used within a NavbarProvider');
  }
  return context;
};

const NavbarProvider: FC<NavbarProviderTypes> = ({ children, ...rest }) => {
  return <NavbarContext.Provider value={{ children, ...rest }}>
    {children}
  </NavbarContext.Provider>;
};

export default NavbarProvider;