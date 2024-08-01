import type { AnimationConfig } from '@/types/AnimationConfig';

import { createContext, useContext } from 'react';

export interface AppStateContext {
  hasLoaded?: boolean;
  nextAnimation?: AnimationConfig;
  clearNextAnimation?: () => void;
  shouldDebugImageFallbacks?: boolean;
}

export const AppStateContext = createContext<AppStateContext>({});

export const useAppState = () => useContext(AppStateContext);