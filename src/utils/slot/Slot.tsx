import {
  Children,
  forwardRef,
  cloneElement,
  isValidElement,
  type ReactNode,
  type HTMLAttributes,
  type PropsWithChildren,
} from 'react';

import { SlotClone } from '@/utils/slot';

import { isSlottable } from '@/utils/isSlottable';

interface SlotProps extends PropsWithChildren, HTMLAttributes<HTMLElement> { }

const Slot = forwardRef<HTMLElement, SlotProps>((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  const childrenArray = Children.toArray(children);
  const slottable = childrenArray.find(isSlottable);

  if (slottable) {
    const newElement = slottable.props.children as ReactNode;

    const newChildren = childrenArray.map((child) =>
      child === slottable
        ? Children.count(newElement) > 1
          ? Children.only(null)
          : isValidElement(newElement)
            ? (newElement.props.children as ReactNode)
            : null
        : child
    );

    return (
      <SlotClone {...slotProps} ref={forwardedRef}>
        {isValidElement(newElement)
          ? cloneElement(newElement, undefined, newChildren)
          : null}
      </SlotClone>
    );
  }

  return (
    <SlotClone {...slotProps} ref={forwardedRef}>
      {children}
    </SlotClone>
  );
});

Slot.displayName = 'Slot';

export default Slot;