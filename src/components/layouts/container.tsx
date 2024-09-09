import type { FC, ComponentProps } from 'react';

import { cn } from '@/utils/cn';

interface ContainerProps extends ComponentProps<'div'> {
  padding?: 'tight' | 'normal' | 'loose';
  centered?: boolean;
  spaceChildren?: boolean;
}

const Container: FC<ContainerProps> = ({
  children,
  className,
  padding = 'normal',
  centered = false,
  spaceChildren = true,
}) => {
  const getPaddingClasses = () => {
    switch (padding) {
      case 'loose': return 'py-16 md:py-24';
      case 'normal': return 'py-4 md:py-8';
      case 'tight': return 'py-1.5';
    }
  };

  return (
    <section className={cn(
      'rounded-md container',
      getPaddingClasses(),
    )}>
      <div className={cn(
        centered && 'flex flex-col items-center',
        spaceChildren && 'space-y-4',
        className
      )}>
        {children}
      </div>
    </section>
  );
};

export default Container;