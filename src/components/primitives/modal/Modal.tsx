'use client';

import {
  type FC,
  type PropsWithChildren,
  useEffect,
  useRef,
  useState
} from 'react';

import { useRouter } from 'next/navigation';

import { motion } from 'framer-motion';

import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { useMetaThemeColor } from '@/hooks/useMetaThemeColor';
import { useClickInsideOutside } from '@/hooks/useClickInsideOutside';

import { HOPE_PATH } from '@/config/paths';

import { cn } from '@/utils/cn';

interface ModalProps extends PropsWithChildren {
  onClosePath?: string;
  onClose?: () => void;
  anchor?: 'top' | 'center';
}

const Modal: FC<ModalProps> = ({
  children,
  onClosePath,
  onClose,
  anchor = 'center',
}) => {
  const router = useRouter();

  const prefersReducedMotion = usePrefersReducedMotion();

  const contentRef = useRef<HTMLDivElement>(null);

  const [htmlElements, setHtmlElements] = useState<HTMLDivElement[]>([]);

  useEffect(() => {
    if (contentRef.current) {
      setHtmlElements([contentRef.current]);
    }
  }, []);

  useMetaThemeColor({ colorLight: '#333' });

  useClickInsideOutside({
    htmlElements,
    onClickOutside: () => {
      if (onClose) {
        onClose();
      } else {
        router.push(
          onClosePath ?? HOPE_PATH,
          { scroll: false },
        );
      }
    },
  });

  return (
    <motion.div
      className={cn(
        'fixed inset-0 z-50 flex justify-center',
        anchor === 'top'
          ? 'items-start pt-4 sm:pt-24'
          : 'items-center',
        'bg-card',
      )}
      initial={!prefersReducedMotion
        ? { backgroundColor: 'rgba(0, 0, 0, 0)' }
        : false}
      animate={{
        backgroundColor: 'rgba(0, 0, 0, 0.80)'
      }}
      transition={{
        duration: 0.3,
        easing: 'easeOut'
      }}>
      {children}
    </motion.div>
  );
}

export default Modal;