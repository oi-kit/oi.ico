import { type FC, type ComponentProps } from 'react';

import { Nav } from '@/components/nav';

import { cn } from '@/utils/cn';

const Layout: FC<ComponentProps<'div'>> = ({ children, className }) => {
  return (
    <>
      <Nav />
      <main className={cn('min-h-screen min-w-[180px]', className)}>
        {children}
      </main>
    </>
  );
};

export default Layout;