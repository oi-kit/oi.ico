import type { ComponentProps, FC } from 'react';

import { Container } from '@/components/layouts';

import { GridSide } from '@/components/grid';

import { FeatureMain, FeatureSide } from '@/components/feature';

const Feature: FC<ComponentProps<'div'>> = ({ className, ...rest }) => {
  return (
    <Container {...rest}>
      <GridSide
        contentMain={<FeatureMain />}
        contentSide={<FeatureSide />}
        className={className}
      />
    </Container>
  );
};

export default Feature;