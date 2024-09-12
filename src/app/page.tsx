import type { FC } from 'react';

import { Layout } from '@/components/layouts';

import { Hero } from '@/components/hero';

import { Feature, FeatureProvider } from '@/components/feature';

const HomePage: FC = () => {
  return (
    <Layout>
      <FeatureProvider>
        <Hero />
        <Feature />
      </FeatureProvider>
    </Layout>
  );
}

export default HomePage;