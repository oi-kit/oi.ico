'use client';

import type { FC, ComponentProps } from 'react';

import { Button } from '@/components/primitives/button';
import { useTheme } from 'next-themes';

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
    <Button onClick={() => toggleTheme()}>
      {theme === 'light' ? '🌞' : '🌚'}
    </Button>
  );
};

export default ThemeToggle;