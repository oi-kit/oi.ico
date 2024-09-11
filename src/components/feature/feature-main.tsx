import type { ComponentProps, FC } from 'react';

const FeatureMain: FC<ComponentProps<'div'>> = ({ className, ...rest }) => {
  return (
    <div>
      FeatureMain
    </div>
  );
};

export default FeatureMain;