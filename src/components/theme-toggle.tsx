'use client';

import type { FC, ComponentProps } from 'react';

import { Button } from '@/components/primitives/button';

import { useTheme } from 'next-themes';

import SVG from '@/components/svg';

import { MOON, SUN } from '@/config/icons';

import { cn } from '@/utils/cn';

const ThemeToggle: FC<ComponentProps<'button'>> = ({ className, ...rest }) => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme ===
      'light'
      ? 'dark'
      : 'light'
    );
  };

  return (
    <Button
      className={cn(
        'bg-transparent hover:bg-transparent',
        'border-none p-0',
        className
      )} onClick={() => toggleTheme()} {...rest}>
      {theme === 'light'
        ? <SVG
          className='size-6'
          stroke='currentColor'
          fill='none'
          d={MOON}
        />
        : <SVG
          className='size-6'
          stroke='currentColor'
          fill='none'
          d={SUN}
        />
      }
    </Button>
  );
};

export default ThemeToggle;