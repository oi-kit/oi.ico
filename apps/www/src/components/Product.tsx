import type { FC } from 'react';
import SectionContainer from '@/components/containers/SectionContainer';
import SideBar from '@/components/sidebar';

interface ProductProps { }

const Product: FC<ProductProps> = ({ }) => {
  return (
    <SectionContainer asChild className='flex gap-[60px]'>
      <SideBar />
      <div>
        <h2>Arrows</h2>
      </div>
    </SectionContainer>
  );
}

export default Product;