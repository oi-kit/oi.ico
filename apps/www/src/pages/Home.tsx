import type { FC } from 'react';
import Hero from '../components/Hero';
import Product from '../components/Product';

const Home: FC = () => {
  return (
    <>
      <Hero />
      <Product />
    </>
  );
}

export default Home;