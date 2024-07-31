import { useTheme } from 'next-themes';

import { useEffect } from 'react';

interface Props {
  colorLight?: string;
  colorDark?: string;
}

/**
 * Custom hook for setting the theme color meta tag based on the current theme.
 *
 * @param {Object} params - Parameters for setting the meta theme color.
 * @param {string} [params.colorLight] - The color to use when the theme is light.
 * @param {string} [params.colorDark] - The color to use when the theme is dark.
 */
const useMetaThemeColor = ({
  colorLight,
  colorDark,
}: Props) => {
  const { resolvedTheme } = useTheme();

  // Determine the preferred theme color based on the current theme
  const preferredThemeColor = resolvedTheme === 'light'
    ? colorLight
    : colorDark;

  useEffect(() => {
    if (preferredThemeColor) {
      // Create a meta tag for the theme color and set its content
      // This is especially useful for mobile browsers and overlays
      const meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.content = preferredThemeColor;

      // Append the meta tag to the document head
      document.getElementsByTagName('head')[0]?.appendChild(meta);

      // Cleanup: remove the meta tag when the component is unmounted or the theme changes
      return () => meta.remove();
    }
  }, [preferredThemeColor]);
}

export { useMetaThemeColor };