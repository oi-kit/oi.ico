import type { ComponentPropsWithoutRef, FC } from 'react';
import { usePopoverContext } from './PopoverProvider';
import { cn } from '../../helpers/cn';

interface PopoverListItemProps extends ComponentPropsWithoutRef<'button'> { }

const PopoverListItem: FC<PopoverListItemProps> = ({
  onClick,
  className,
  children,
}) => {
  const props = usePopoverContext();
  return (
    <button
      onClick={(e) => {
        onClick?.(e);
        props.onClose();
      }}
      className={cn(
        '',
        className
      )}
    >
      {children}
    </button>
  );
}

export default PopoverListItem;