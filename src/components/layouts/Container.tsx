import type { FC, PropsWithChildren } from 'react';

import { cn } from '@/helpers/cn';

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn(
      'container py-14 lg:py-20 px-4',
      className
    )} {...props}>
      {children}
    </div>
  );
}

export default Container;