import type { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react';
import { cn } from '../helpers/cn';

interface ButtonPropsBase extends PropsWithChildren {
  variant?: 'default' | 'icon' | 'active';
  size?: 'small' | 'medium' | 'large';
  asChild?: boolean;
  className?: string;
}

type ButtonElementProps = ButtonPropsBase & ComponentPropsWithoutRef<'button'>;
type DivElementProps = ButtonPropsBase & ComponentPropsWithoutRef<'div'>;

const Button: FC<ButtonElementProps | DivElementProps> = ({
  variant = 'default',
  size = 'medium',
  asChild = false,
  className,
  children,
  ...props
}) => {
  if (asChild) {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center',
          setVariant(variant),
          setSize(size),
          className
        )}
        {...props as ButtonElementProps}
      >
        {children}
      </button>
    );
  }

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center',
        setVariant(variant),
        setSize(size),
        className
      )}
      {...props as DivElementProps}
    >
      {children}
    </div>
  );
};

const setVariant = (variant: ButtonPropsBase['variant']) => {
  switch (variant) {
    case 'icon':
      return 'bg-card rounded-sm hover:shadow-md hover:transition';
    case 'active':
      return 'bg-card border-b border-foreground rounded-sm';
    default:
      return 'bg-card sm:border-b sm:border-card sm:hover:border-foreground sm:rounded-sm hover:border-muted hover:transparent hover:transition';
  }
};

const setSize = (size: ButtonPropsBase['size']) => {
  switch (size) {
    case 'small':
      return 'sm:px-2 sm:py-1.5';
    case 'medium':
      return 'sm:p-4';
    case 'large':
      return 'sm:p-6';
    default:
      return 'medium';
  }
};

export default Button;
