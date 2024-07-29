import {
  Children,
  forwardRef,
  cloneElement,
  isValidElement,
  type PropsWithChildren,
} from 'react';

import { getElementRef } from '@/utils/getElementRef';
import { mergeProps } from '@/utils/mergeProps';
import { composeRefs } from '@/utils/compose-refs';

interface SlotCloneProps extends PropsWithChildren { }

const SlotClone = forwardRef<any, SlotCloneProps>((props, forwardedRef) => {
  const { children, ...slotProps } = props;

  if (isValidElement(children)) {
    const childrenRef = getElementRef(children);
    return cloneElement(children, {
      ...mergeProps(slotProps, children.props),
      // @ts-ignore
      ref: forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef,
    });
  }

  return Children.count(children) > 1 ? Children.only(null) : null;
});

SlotClone.displayName = 'SlotClone';

export default SlotClone;