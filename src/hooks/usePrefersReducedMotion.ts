import { useEffect, useState } from 'react';

// Media query for detecting the user's preference for reduced motion
const MEDIA_QUERY_SELECTOR = '(prefers-reduced-motion: reduce)';
const MEDIA_QUERY_EVENT = 'change';

/**
 * Safely retrieves the MediaQueryList object if available in the global window object.
 * This is used to detect the user's preference for reduced motion.
 *
 * @returns {MediaQueryList | undefined} The MediaQueryList object or undefined if window is not defined.
 */
const safelyGetMediaQuery = () => typeof window !== 'undefined'
  ? window.matchMedia(MEDIA_QUERY_SELECTOR)
  : undefined;

/**
* Custom hook to determine the user's preference for reduced motion.
*
* @returns {boolean} true if the user prefers reduced motion, false otherwise.
*/
const usePrefersReducedMotion = () => {
  // State to store the user's preference for reduced motion
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(
    safelyGetMediaQuery()?.matches ?? false
  );

  useEffect(() => {
    const mediaQuery = safelyGetMediaQuery();

    // Listener function to update the state based on the media query match status
    const listener = () => {
      setPrefersReducedMotion(mediaQuery?.matches ?? false);
    };

    // Add event listener to respond to changes in the media query
    mediaQuery?.addEventListener(MEDIA_QUERY_EVENT, listener);
    // Cleanup the event listener on component unmount
    return () => mediaQuery?.removeEventListener(MEDIA_QUERY_EVENT, listener);
  }, []);

  return prefersReducedMotion;
};

export { usePrefersReducedMotion };