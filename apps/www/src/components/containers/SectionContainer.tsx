import type { FC, PropsWithChildren } from 'react';
import { cn } from '../../helpers/cn';

interface SectionContainerProps extends PropsWithChildren { className?: string }

const SectionContainer: FC<SectionContainerProps> = ({ className, children }) => {
  return (
    <div className={cn(
      'container py-14 lg:py-20 px-4',
      className
    )}>
      {children}
    </div>
  );
}

export default SectionContainer;