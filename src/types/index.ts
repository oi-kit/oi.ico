import { Dispatch, Ref, RefObject, SetStateAction } from 'react';

export type AnimationType = 'none'
  | 'scale'
  | 'left'
  | 'right'
  | 'bottom';

export interface AnimationConfig {
  type?: AnimationType;
  duration?: number;
  staggerDelay?: number;
  scaleOffset?: number;
  distanceOffset?: number;
}

export type AnyProps = Record<string, any>;


export type PossibleRef<T> = Ref<T> | undefined;

export type DialogContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  uniqueId: string;
  triggerRef: RefObject<HTMLDivElement>;
}

export type IconFile = {
  name: string;
  d: string;
}

export type IconFolder = {
  folder: string;
  files: IconFile[];
}

export type FeatureContextType = {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}