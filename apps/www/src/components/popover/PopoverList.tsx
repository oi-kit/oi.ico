import type { ComponentPropsWithoutRef, FC } from 'react';
import { usePopoverContext } from './PopoverProvider';
import { cn } from '../../helpers/cn';
import useOnClickOutside from '../../hooks/useClickOutside';

interface PopoverListProps extends ComponentPropsWithoutRef<'div'> {
  show?: boolean;
}

const PopoverList: FC<PopoverListProps> = ({
  children,
  className,
  ...rest
}) => {
  const { open, toggleOpen } = usePopoverContext();
  const ref = useOnClickOutside(toggleOpen);
  if (!open) return null;

  return (
    <div
      ref={ref}
      className={cn(
        'w-[150px] bg-background rounded shadow p-5 absolute top-8 right-0 z-50',
        'flex flex-col items-start gap-2',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export default PopoverList;