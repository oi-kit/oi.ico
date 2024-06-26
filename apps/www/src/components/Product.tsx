import type { FC } from 'react';
import SectionContainer from '@/components/containers/SectionContainer';

interface ProductProps { }

const Product: FC<ProductProps> = ({ }) => {
  return (
    <SectionContainer asChild>
      Product
    </SectionContainer>
  );
}

export default Product;