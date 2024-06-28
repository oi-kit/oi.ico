import type { FC } from 'react';
import SectionContainer from '@/components/containers/SectionContainer';
import SideBar from '@/components/sidebar';
import Panel from '@/components/Panel';

interface ProductProps { }

const Product: FC<ProductProps> = ({ }) => {
  return (
    <SectionContainer asChild className='flex gap-[60px]'>
      <SideBar />
      <div className='flex flex-col'>
        <h2 className='h2'>Arrows</h2>
        <div className='w-full flex flex-wrap gap-4 mt-6'>
          <Panel />
        </div>
      </div>
    </SectionContainer>
  );
}

export default Product;