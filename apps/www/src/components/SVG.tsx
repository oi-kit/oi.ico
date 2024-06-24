import type { FC } from 'react';

interface SVGProps {
  icon: string;
  width?: number;
  height?: number;
}

const SVG: FC<SVGProps> = ({
  icon,
  width = 24,
  height = 24,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d={icon}
        fill="hsl(var(--foreground))"
      />
    </svg>
  );
}

export default SVG;