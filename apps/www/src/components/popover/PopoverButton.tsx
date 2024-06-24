import type { ComponentPropsWithoutRef, FC } from 'react';
import { usePopoverContext } from './PopoverProvider';
import Button from '../Button';
import { cn } from '../../helpers/cn';

interface PopoverButtonProps extends ComponentPropsWithoutRef<'button'> { }

const PopoverButton: FC<PopoverButtonProps> = ({
  children,
  className,
  onClick,
  ...rest
}) => {
  const { toggleOpen } = usePopoverContext();
  return (
    <Button
      asChild
      variant='active'
      size='small'
      className={cn(
        '!px-5 !py-2 w-[150px] h-[40px] relative z-20',
        'text-muted justify-start focus:bg-background',
        className
      )}
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onClick?.(e);
        toggleOpen();
      }}
      {...rest}
    >
      {children}
    </Button>
  );
}

export default PopoverButton;