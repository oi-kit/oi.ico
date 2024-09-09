import type { ComponentProps, FC } from 'react';

import { Container } from '@/components/layouts';

import { HeroStatistics, HeroHeading } from '@/components/hero';

const Hero: FC<ComponentProps<'div'>> = ({ className, ...rest }) => {
  return (
    <Container sectionClassName='bg-card' padding='loose' {...rest}>
      <HeroStatistics />
      <HeroHeading />
    </Container>
  );
};

export default Hero;