'use client';

import type { FC } from 'react';

import Link from 'next/link';

import { useTheme } from 'next-themes';

import {
  BLACK_LOGO_PATH,
  WHITE_LOGO_PATH,
  HOPE_PATH,
} from '@/config/paths';

import Image from 'next/image';

import { cn } from '@/utils/cn';

interface LogoProps {
  className?: string;
  isHideLogo?: boolean;
}

const Logo: FC<LogoProps> = ({
  className,
  isHideLogo,
  ...rest
}) => {
  const { theme } = useTheme();

  return (
    <Link
      href={HOPE_PATH}
      className={cn(
        'flex items-center',
        isHideLogo && 'hidden',
        className,
      )} {...rest}>
      {theme !== 'dark' ? (
        <Image
          src={BLACK_LOGO_PATH}
          alt='Dark Logo'
          width={85}
          height={23}
        />
      ) : (
        <Image
          src={WHITE_LOGO_PATH}
          alt='Light Logo'
          width={85}
          height={23}
        />
      )}
    </Link>
  );
}

export default Logo;