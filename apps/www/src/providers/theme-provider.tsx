'use client';

import type { FC } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { ThemeProviderProps as NextThemeProviderProps } from 'next-themes/dist/types';

interface ThemeProviderProps extends NextThemeProviderProps { }

const ThemeProvider: FC<ThemeProviderProps> = ({ children, ...rest }) => {
  return (
    <NextThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
      {...rest}
    >
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;