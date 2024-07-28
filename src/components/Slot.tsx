'use client';

import type { ElementType, FC, HTMLProps } from 'react';

interface SlotProps extends Omit<HTMLProps<HTMLElement>, 'as'> {
  as?: ElementType;
}

const Slot: FC<SlotProps> = ({
  as: Component = 'div', ...rest
}) => {
  return <Component {...rest} />;
}

export default Slot;