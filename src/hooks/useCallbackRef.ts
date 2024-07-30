/**
 * Part of this code is taken from @chakra-ui/system
 */

import { DependencyList, useCallback, useRef } from 'react';

import { useSafeLayoutEffect } from '@/hooks/useSafeLayoutEffect';

/**
 * React hook to persist any value between renders,
 * but keeps it up-to-date if it changes.
 *
 * @param fn the function to persist
 * @param deps the function dependency list
 */

function useCallbackRef<T extends (...args: any[]) => any>(
  fn: T | null | undefined,
  deps: DependencyList = [],
): T {
  const ref = useRef(fn);

  useSafeLayoutEffect(() => {
    ref.current = fn;
  });

  return useCallback(((...args) => ref.current?.(...args)) as T, deps);
}

export { useCallbackRef };