'use client';

import type { FC } from 'react';

import { ThemeProvider } from 'next-themes';
import { ThemeProviderProps as NextThemeProviderProps } from 'next-themes/dist/types';

interface ThemeProviderProps extends NextThemeProviderProps { }

const NextThemeProvider: FC<ThemeProviderProps> = ({ children, ...rest }) => {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
      {...rest}
    >
      {children}
    </ThemeProvider>
  );
};

export default NextThemeProvider;