'use client';

import type { FC } from 'react';

import type { ThemeProviderProps as NextThemeProviderProps } from 'next-themes/dist/types';

import { ThemeProvider } from 'next-themes';

const NextThemeProvider: FC<NextThemeProviderProps> = ({ children, ...rest }) => {
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