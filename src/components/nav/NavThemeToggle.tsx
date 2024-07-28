'use client';

import type { FC } from 'react';

import { useTheme } from 'next-themes';

const NavThemeToggle: FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme}>
      <span className='dark:hidden'>dark</span>
      <span className='hidden dark:inline'>light</span>
    </button>
  );
}

export default NavThemeToggle;