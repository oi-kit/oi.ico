import type { FC } from 'react';

import { Layout, Container, Section } from '@/components/layouts';

import { Hero } from '@/components/hero';

const HomePage: FC = () => {
  return (
    <Layout>
      <Section>
        <Container>
          HomePage
          <Hero />
        </Container>
      </Section>
    </Layout>
  );
}

export default HomePage;