import { type FC, type ComponentProps, Component } from 'react';

import { cn } from '@/utils/cn';

const Layout: FC<ComponentProps<'div'>> = ({ children, className }) => {
  return (
    <Component>
      <main className={cn('min-h-screen min-w-[180px]', className)}>
        {children}
      </main>
    </Component>
  );
};

export default Layout;