/**
 * This module exports utility functions for handling refs in components.
 *
 * - **`setRef`**: A utility function for setting a value on a ref, whether it is a callback or a ref object.
 * - **`composeRefs`**: A utility function for composing multiple ref callbacks into a single callback that sets a node on all refs.
 */
export { default as setRef } from './setRef';
export { default as composeRefs } from './composeRefs';