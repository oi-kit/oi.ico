import { MutableRefObject } from 'react';

import type { PossibleRef } from '@/types/PossibleRef';

function setRef<T>(ref: PossibleRef<T>, value: T) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref !== null && ref !== undefined) {
    (ref as MutableRefObject<T>).current = value;
  }
}

export default setRef;