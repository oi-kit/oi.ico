import { MutableRefObject } from 'react';

import type { PossibleRef } from '@/types';

/**
 * Sets the value of a ref, either by calling a ref callback or by assigning to a ref object.
 *
 * @param {PossibleRef<T>} ref - The ref to be set. Can be a callback function or a ref object.
 * @param {T} value - The value to set on the ref.
 *
 * @template T - The type of the value to be set.
 */
function setRef<T>(ref: PossibleRef<T>, value: T) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref !== null && ref !== undefined) {
    (ref as MutableRefObject<T>).current = value;
  }
}

export default setRef;