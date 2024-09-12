'use client'

import { createContext, useContext, useState, type FC, type PropsWithChildren } from 'react';

import type { FeatureContextType } from '@/types';

const FeatureContext = createContext<FeatureContextType | undefined>(undefined);

const FeatureProvider: FC<PropsWithChildren> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  return (
    <FeatureContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </FeatureContext.Provider>
  );
};

export const useFeature = () => {
  const context = useContext(FeatureContext);
  if (!context) {
    throw new Error('useFeature must be used within a FeatureProvider');
  }
  return context;
};

export default FeatureProvider;