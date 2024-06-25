import type { FC } from 'react';
import SectionContainer from '../containers/SectionContainer';
import pkg from '../../../package.json';

interface FooterProps { isHideFooter?: boolean; }

const Footer: FC<FooterProps> = ({ isHideFooter }) => {
  if (isHideFooter) return null;
  return (
    <footer className='bg-card'>
      <SectionContainer className='!py-8 flex items-center justify-center'>
        <div className='flex flex-col gap-1 mt-auto text-center max-w-[255px] text-[14px]'>
          <p>Version {pkg.version}</p>
          <p>Terms & Conditions · Privacy Policy</p>
          <p>© All rights are reserved</p>
        </div>
      </SectionContainer>
    </footer>
  );
}

export default Footer;