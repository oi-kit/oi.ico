import type { FC, RefObject } from 'react';

import { cn } from '@/utils/cn';

interface GridSideProps {
  containerRef?: RefObject<HTMLDivElement>;
  className?: string;
  contentMain: JSX.Element;
  contentSide?: JSX.Element;
  sideFirstOnMobile?: boolean;
  sideHiddenOnMobile?: boolean;
  contentMainClassName?: string;
  contentSideClassName?: string;
}

const GridSide: FC<GridSideProps> = ({
  containerRef,
  className,
  contentMain,
  contentSide,
  sideFirstOnMobile,
  sideHiddenOnMobile,
  contentMainClassName,
  contentSideClassName
}) => {
  return (
    <div ref={containerRef} className={cn(
      'grid',
      'grid-cols-1 lg:grid-cols-12',
      'gap-x-4 lg:gap-x-6',
      'gap-y-4',
      className,
    )}>
      {contentSide &&
        <div className={cn(
          'col-span-1 lg:col-span-2',
          sideFirstOnMobile && 'order-2 lg:order-none',
          contentSideClassName
        )}>
          {contentSide}
        </div>}
      {contentMain &&
        <div className={cn(
          'col-span-1 lg:col-span-10',
          sideFirstOnMobile && 'order-1 lg:order-none',
          sideHiddenOnMobile && 'hidden lg:block',
          contentMainClassName
        )}>
          {contentMain}
        </div>}
    </div>
  );
};

export default GridSide;