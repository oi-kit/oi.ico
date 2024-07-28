'use client';

import type { FC, PropsWithChildren } from 'react';

import { NextUIProvider, NextThemeProvider } from '.';

interface ProvidersProps extends PropsWithChildren { }

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <NextThemeProvider>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </NextThemeProvider>
  );
};

export default Providers;
