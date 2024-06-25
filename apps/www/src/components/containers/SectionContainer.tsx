import type { FC, PropsWithChildren } from 'react';
import { cn } from '@/helpers/utils';

interface SectionContainerProps extends PropsWithChildren {
  asChild?: boolean;
  className?: string;
};

const SectionContainer: FC<SectionContainerProps> = ({
  children,
  asChild = false,
  className,
}) => {
  const Section = asChild ? 'section' : 'div';
  return (
    <Section className={cn(
      'container py-14 lg:py-20 px-4',
      className
    )}>
      {children}
    </Section>
  );
}

export default SectionContainer;