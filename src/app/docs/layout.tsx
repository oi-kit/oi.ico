import type { FC, PropsWithChildren } from 'react';

import { Layout } from '@/components/layouts';

interface DocsLayoutProps extends PropsWithChildren { }

const DocsLayout: FC<DocsLayoutProps> = ({ children }) => {
  return (
    <Layout>
      {children}
    </Layout>
  );
}

export default DocsLayout;