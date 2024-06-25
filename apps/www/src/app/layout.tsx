import type { FC, PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { inter } from '@/config/fonts';
import { cn } from '@/helpers/utils';
import ThemeProvider from '@/providers/theme-provider';

import '@/styles/globals.css';

interface RootLayoutProps extends PropsWithChildren { }

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html className={cn(inter)} lang='en'>
      <body className='min-h-screen min-w-[320px] flex flex-col antialiased'>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;