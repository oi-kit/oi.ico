import type { FC, ComponentProps } from 'react';

import { cn } from '@/utils/cn';

const SVG: FC<ComponentProps<'svg'>> = ({
  d,
  fill = 'currentColor',
  width = 24,
  height = 24,
  className,
  fillRule = 'evenodd',
  clipRule = 'evenodd',
  stroke,
  viewBox = '0 0 24 24',
  strokeWidth,
  strokeLinecap,
  strokeLinejoin,
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      stroke={stroke}
      strokeWidth={strokeWidth}
      viewBox={viewBox}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(className)}
      {...rest}
    >
      <path
        d={d}
        fill={fill}
        fillRule={fillRule}
        clipRule={clipRule}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      />
    </svg>
  );
};

export default SVG;