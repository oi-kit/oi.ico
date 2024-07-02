import type { FC } from 'react';
import { icons } from './SVGData';
import { IconTypes } from '@/types/icons';

export const iconSizes = {
  default: 24,
  small: 16,
  large: 32,
};

interface SVGProps {
  icon: IconTypes;
  size?: number | string;
  className?: string;
};

const SVG: FC<SVGProps> = ({
  icon,
  size = 24,
  className,
  ...props
}) => {
  const data = icons[icon];
  if (!data) return null;
  return (
    <svg
      width={size}
      height={size}
      fill='none'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
        d={data}
      />
    </svg>
  );
}

export default SVG;