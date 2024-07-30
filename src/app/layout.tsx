import type { FC, PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import { inter } from '@/config/fonts';
import { siteConfig } from '@/config/site';

import { NextProvides as Providers } from '@/providers';

import { cn } from '@/utils/cn';

import '@/styles/global.css';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

interface layoutProps extends PropsWithChildren { }

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn(
        'min-h-screen min-w-[320px] antialiased',
        inter.className,
      )}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

export default layout;