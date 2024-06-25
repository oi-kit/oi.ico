import type { FC, PropsWithChildren } from 'react';
import { cn } from '@/helpers/utils';
import Footer from '@/components/footer';
import Nav from '@/components/nav';

interface DefatulLayoutProps extends PropsWithChildren {
  className?: string;
  isHideNav?: boolean;
  isHideFooter?: boolean;
};

const DefatulLayout: FC<DefatulLayoutProps> = ({
  children,
  className,
  isHideNav = false,
  isHideFooter = false
}) => {
  return (
    <>
      <Nav isHideNav={isHideNav} />
      <main className={cn(
        'flex flex-col min-h-screen w-full mx-auto',
        className
      )}>
        {children}
      </main>
      <Footer isHideFooter={isHideFooter} />
    </>
  );
};

export default DefatulLayout;