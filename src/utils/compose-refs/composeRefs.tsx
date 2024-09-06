import { setRef } from '@/utils/compose-refs';

import type { PossibleRef } from '@/types';

/**
 * Composes multiple ref callbacks into a single callback function. When the returned 
 * function is called with a node, it sets the node on all provided refs.
 *
 * @param {...PossibleRef<T>[]} refs - Multiple ref callbacks or ref objects to be composed.
 * @returns {(node: T) => void} - A single callback function that sets the node on all refs.
 *
 * @template T - The type of the node that will be referenced.
 */
function composeRefs<T>(...refs: PossibleRef<T>[]) {
  return (node: T) => refs.forEach((ref) => setRef(ref, node));
}

export default composeRefs;