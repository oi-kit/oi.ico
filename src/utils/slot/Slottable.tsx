import type { FC, PropsWithChildren } from 'react';

interface SlottableProps extends PropsWithChildren { }

const Slottable: FC<SlottableProps> = ({ children }) => {
  return <>{children}</>;
}

export default Slottable;