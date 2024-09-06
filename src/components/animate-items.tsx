'use client';

import {
  useRef,
  type FC,
  type ReactNode
} from 'react';

import type { AnimationConfig } from '@/types';

import { Variant, motion } from 'framer-motion';

import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

import { useAppState } from '@/config/state/AppState';

interface AnimateItemsProps extends AnimationConfig {
  className?: string;
  classNameItem?: string;
  items: ReactNode[];
  itemKeys?: string[];
  canStart?: boolean;
  animateFromAppState?: boolean;
  animateOnFirstLoadOnly?: boolean;
  staggerOnFirstLoadOnly?: boolean;
  onAnimationComplete?: () => void;
}

const AnimateItems: FC<AnimateItemsProps> = ({
  className,
  classNameItem,
  items,
  itemKeys,
  canStart = true,
  type = 'scale',
  duration = 0.6,
  staggerDelay = 0.1,
  scaleOffset = 0.9,
  distanceOffset = 20,
  animateFromAppState,
  animateOnFirstLoadOnly,
  staggerOnFirstLoadOnly,
  onAnimationComplete,
}) => {
  const {
    hasLoaded,
    nextAnimation,
    clearNextAnimation,
  } = useAppState();

  const prefersReducedMotion = usePrefersReducedMotion();

  const hasLoadedInitial = useRef(hasLoaded);
  const nextAnimationInitial = useRef(nextAnimation);

  const shouldAnimate = type !== 'none' &&
    !prefersReducedMotion &&
    !(animateOnFirstLoadOnly && hasLoadedInitial.current);
  const shouldStagger =
    !(staggerOnFirstLoadOnly && hasLoadedInitial.current);

  const typeResolved = animateFromAppState
    ? (nextAnimationInitial.current?.type ?? type)
    : type;

  const durationResolved = animateFromAppState
    ? (nextAnimationInitial.current?.duration ?? duration)
    : duration;

  const getInitialVariant = (): Variant => {
    switch (typeResolved) {
      case 'left': return {
        opacity: 0,
        transform: `translateX(${distanceOffset}px)`,
      };
      case 'right': return {
        opacity: 0,
        transform: `translateX(${-distanceOffset}px)`,
      };
      case 'bottom': return {
        opacity: 0,
        transform: `translateY(${distanceOffset}px)`,
      };
      default: return {
        opacity: 0,
        transform: `translateY(${distanceOffset}px) scale(${scaleOffset})`,
      };
    }
  };

  return (
    <motion.div
      className={className}
      initial={shouldAnimate ? 'hidden' : false}
      animate={canStart || true ? 'show' : 'hidden'}
      variants={shouldStagger ? {
        show: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      } : undefined}
      onAnimationComplete={() => {
        if (animateFromAppState) clearNextAnimation?.();
        onAnimationComplete?.();
      }}>
      {items.map((item, index) =>
        <motion.div
          key={itemKeys ? itemKeys[index] : index}
          className={classNameItem}
          variants={{
            hidden: getInitialVariant(),
            show: {
              opacity: 1,
              transform: 'translateX(0) translateY(0) scale(1)',
            },
          }}
          transition={{
            duration: durationResolved,
            easing: 'easeOut',
          }}>
          {item}
        </motion.div>)}
    </motion.div>
  );
}

export default AnimateItems;