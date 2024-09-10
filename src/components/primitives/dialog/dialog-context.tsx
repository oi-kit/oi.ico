import { createContext, useContext } from 'react';

import type { DialogContextType } from '@/types';

const DialogContext = createContext<DialogContextType | null>(null);

export default DialogContext;

export function useDialog() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider');
  }
  return context;
}