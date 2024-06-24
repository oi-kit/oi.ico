import type { FC } from 'react';
import { useTheme } from './ThemeProvider';

interface ThemeToggleProps { }

const ThemeToggle: FC<ThemeToggleProps> = ({ }) => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }
  return (
    <button onClick={toggleTheme} className="flex items-center">
      {theme === 'light' ? (
        <div>
          Light
        </div>
      ) : (
        <div>
          Dark
        </div>
      )}
    </button>
  );
}

export default ThemeToggle;