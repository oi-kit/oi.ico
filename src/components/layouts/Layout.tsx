import type { FC, PropsWithChildren } from 'react';

import type { HideNavFooterState } from '@/config/state/LayoutState';

import { Nav } from '@/components/nav';

interface LayoutProps extends PropsWithChildren, HideNavFooterState { }

const Layout: FC<LayoutProps> = ({
  children,
  isHideNav,
  isHideFooter,
}) => {
  return (
    <>
      <Nav isHideNav={isHideNav} />
      <main>
        {children}
      </main>
    </>
  );
}

export default Layout;