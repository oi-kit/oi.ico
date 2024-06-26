import type { FC } from 'react';
import DefatulLayout from '@/components/layouts/DefatulLayout';
import Hero from '@/components/Hero';
import Product from '@/components/Product';

const HomePage: FC = () => {
  return (
    <DefatulLayout>
      <Hero />
      <Product />
    </DefatulLayout>
  );
}

export default HomePage;