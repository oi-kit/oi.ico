import { setRef } from '@/utils/compose-refs';

import type { PossibleRef } from '@/types/PossibleRef';

function composeRefs<T>(...refs: PossibleRef<T>[]) {
  return (node: T) => refs.forEach((ref) => setRef(ref, node));
}

export default composeRefs;