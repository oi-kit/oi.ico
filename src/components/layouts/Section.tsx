import type { FC, PropsWithChildren } from 'react';

import { cn } from '@/utils/cn';

interface SectionProps extends PropsWithChildren {
  className?: string;
  relative?: boolean;
}

const Section: FC<SectionProps> = ({
  children,
  className,
  relative = false,
  ...props
}) => {
  return (
    <section className={cn(
      relative && 'relative z-10',
      className
    )} {...props}>
      {children}
    </section>
  );
}

export default Section;