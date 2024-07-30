import { useCallback } from 'react';

import { composeRefs } from '@/utils/compose-refs';

import type { PossibleRef } from '@/types/PossibleRef';

/**
 * A custom React hook that composes multiple refs into a single callback ref.
 * This can be useful when you need to pass multiple refs to a single DOM element
 * or component, such as combining a ref from a parent component with a ref from
 * a forwarded ref.
 *
 * @param {...PossibleRef<T>[]} refs - An array of refs to be composed. These can be
 *                                     refs created using `useRef`, `createRef`, or
 *                                     callback refs.
 * @returns {function} A callback ref that can be attached to a DOM element or component.
 *
 * @template T
 */
function useComposedRefs<T>(...refs: PossibleRef<T>[]) {
  return useCallback(composeRefs(...refs), refs);
}

export { useComposedRefs };