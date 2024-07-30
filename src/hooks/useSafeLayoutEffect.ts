import { useEffect, useLayoutEffect } from 'react';

/**
 * A custom hook that conditionally selects between `useLayoutEffect` and `useEffect`
 * based on the environment. This hook ensures that `useLayoutEffect` is only used
 * in a browser environment where `document` is available, preventing potential
 * issues with server-side rendering (SSR).
 *
 * If the code is running in a browser (i.e., `globalThis.document` is defined),
 * it uses `useLayoutEffect`. Otherwise, it falls back to `useEffect`, which is
 * safe to use in SSR environments.
 *
 * @type {(callback: React.EffectCallback, deps?: React.DependencyList) => void}
 */
const useSafeLayoutEffect = Boolean(globalThis?.document)
  ? useLayoutEffect
  : useEffect;

export { useSafeLayoutEffect };