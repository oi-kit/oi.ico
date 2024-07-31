import { useCallback, useEffect } from 'react';

interface Props {
  htmlElements: (HTMLElement | null)[];
  onClick?: (event?: MouseEvent) => void;
  onClickInside?: (event?: MouseEvent) => void;
  onClickOutside?: (event?: MouseEvent) => void;
  shouldListenToClicks?: boolean;
}

/**
 * Custom hook to handle clicks inside or outside specified HTML elements.
 *
 * @param {Props} params - The parameters for the hook.
 * @param {(HTMLElement | null)[]} params.htmlElements - Array of HTML elements to check for click events.
 * @param {(event?: MouseEvent) => void} [params.onClick] - Callback function to handle all click events.
 * @param {(event?: MouseEvent) => void} [params.onClickInside] - Callback function to handle click events inside the specified elements.
 * @param {(event?: MouseEvent) => void} [params.onClickOutside] - Callback function to handle click events outside the specified elements.
 * @param {boolean} [params.shouldListenToClicks=true] - Whether to listen for click events.
 */
const useClickInsideOutside = ({
  htmlElements,
  onClick,
  onClickInside,
  onClickOutside,
  shouldListenToClicks = true,
}: Props) => {
  /**
 * Handles click events and determines if the click occurred inside or outside the specified elements.
 *
 * @param {MouseEvent} event - The mouse event object.
 */
  const handleClick = useCallback((event: MouseEvent) => {
    const target = event.target as HTMLElement;

    // Check if the click target is inside any of the specified HTML elements
    const htmlElementsContainTarget = htmlElements
      .some(element => element?.contains(target));

    // Invoke the onClick callback if provided
    onClick?.(event);
    if (htmlElementsContainTarget) {
      // Invoke the onClickInside callback if the click occurred inside the elements
      onClickInside?.(event);
    }
    if (!htmlElementsContainTarget) {
      // Invoke the onClickOutside callback if the click occurred outside the elements
      onClickOutside?.(event);
    }
  }, [onClick, onClickInside, onClickOutside, htmlElements]);

  useEffect(() => {
    if (shouldListenToClicks) {
      // Add the event listener for mousedown events
      document.addEventListener('mousedown', handleClick);
      return () => {
        // Remove the event listener on cleanup
        document.removeEventListener('mousedown', handleClick);
      };
    }
  }, [htmlElements, shouldListenToClicks, handleClick]);
}

export { useClickInsideOutside };