import { cn } from '@/helpers/utils';
import type { FC, PropsWithChildren } from 'react';

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
      <main className={cn(
        'flex flex-col min-h-screen w-full mx-auto',
        className
      )}>
        {children}
      </main>
    </>
  );
};

export default DefatulLayout;