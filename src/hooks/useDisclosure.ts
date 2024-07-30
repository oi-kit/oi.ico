import { useCallback, useId } from 'react';

import { useControlledState } from '@react-stately/utils';

import { useCallbackRef } from '@/hooks/useCallbackRef';

import { chain } from '@/utils/chain';

interface UseDisclosureProps {
  isOpen?: boolean;
  defaultOpen?: boolean;
  onClose?(): void;
  onOpen?(): void;
  onChange?(isOpen: boolean | undefined): void;
  id?: string;
}

/**
 * A custom hook that manages the open/closed state of a disclosure component
 * (such as a modal, dropdown, or accordion). It provides functions to open,
 * close, and toggle the disclosure, and supports both controlled and uncontrolled
 * usage patterns.
 *
 * @param {UseDisclosureProps} [props={}] - The properties to configure the disclosure.
 * @param {boolean} [props.isOpen] - Controls the open state if provided.
 * @param {boolean} [props.defaultOpen] - The default open state for uncontrolled mode.
 * @param {Function} [props.onClose] - Callback function called when the disclosure is closed.
 * @param {Function} [props.onOpen] - Callback function called when the disclosure is opened.
 * @param {Function} [props.onChange] - Callback function called when the open state changes.
 * @param {string} [props.id] - The ID for the disclosure element, used for accessibility.
 * 
 * @returns {UseDisclosureReturn} - An object containing state and functions for managing the disclosure.
 */
export const useDisclosure = (props: UseDisclosureProps = {}) => {
  const {
    id: idProp,
    defaultOpen,
    isOpen: isOpenProp,
    onClose: onCloseProp,
    onOpen: onOpenProp,
    onChange = () => { },
  } = props;

  const onOpenPropCallbackRef = useCallbackRef(onOpenProp);
  const onClosePropCallbackRef = useCallbackRef(onCloseProp);
  const [isOpen, setIsOpen] = useControlledState(isOpenProp, defaultOpen || false, onChange);

  const reactId = useId();
  const id = idProp || reactId;
  const isControlled = isOpenProp !== undefined;

  const onClose = useCallback(() => {
    if (!isControlled) {
      setIsOpen(false);
    }
    onClosePropCallbackRef?.();
  }, [isControlled, onClosePropCallbackRef]);

  const onOpen = useCallback(() => {
    if (!isControlled) {
      setIsOpen(true);
    }
    onOpenPropCallbackRef?.();
  }, [isControlled, onOpenPropCallbackRef]);

  const onOpenChange = useCallback(() => {
    const action = isOpen ? onClose : onOpen;

    action();
  }, [isOpen, onOpen, onClose]);

  return {
    isOpen: !!isOpen,
    onOpen,
    onClose,
    onOpenChange,
    isControlled,
    getButtonProps: (props: any = {}) => ({
      ...props,
      'aria-expanded': isOpen,
      'aria-controls': id,
      onClick: chain(props.onClick, onOpenChange),
    }),
    getDisclosureProps: (props: any = {}) => ({
      ...props,
      hidden: !isOpen,
      id,
    }),
  };
}

export type UseDisclosureReturn = ReturnType<typeof useDisclosure>;