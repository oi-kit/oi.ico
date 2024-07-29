import { useCallback } from 'react';

import { composeRefs } from '@/utils/compose-refs';

import type { PossibleRef } from '@/types/PossibleRef';

function useComposedRefs<T>(...refs: PossibleRef<T>[]) {
  return useCallback(composeRefs(...refs), refs);
}

export { useComposedRefs };