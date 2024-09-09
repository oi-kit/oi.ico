import type { ComponentProps, FC } from 'react';

import { siteConfig } from '@/config/site';

import { cn } from '@/utils/cn';

const HeroHeading: FC<ComponentProps<'div'>> = ({ className, ...rest }) => {
  return (
    <div className={cn(
      'flex flex-col items-center text-center space-y-4',
      'lg:items-start lg:text-start',
    )}>
      <h1 className={cn(
        'font-bold text-4xl max-w-[600px]',
        className
      )} {...rest}>
        {siteConfig.hero[0].title}
      </h1>
    </div>
  );
};

export default HeroHeading;