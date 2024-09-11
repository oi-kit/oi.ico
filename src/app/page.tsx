import type { FC } from 'react';

import { Layout } from '@/components/layouts';

import { Hero } from '@/components/hero';

import { Feature } from '@/components/feature';

const HomePage: FC = () => {
  return (
    <Layout>
      <Hero />
      <Feature />
    </Layout>
  );
}

export default HomePage;