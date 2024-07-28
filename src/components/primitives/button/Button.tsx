'use client';

import {
  Ref,
  forwardRef,
  isValidElement,
  cloneElement,
  type ButtonHTMLAttributes,
  type PropsWithChildren,
} from 'react';

import Slot from '@/components/Slot';

import { cn } from '@/helpers/cn';

interface ButtonProps extends
  ButtonHTMLAttributes<HTMLButtonElement>,
  PropsWithChildren {
  asChild?: boolean;
  className?: string;
  [key: string]: any;
  variant?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, children, className, variant, ...rest }, ref) => {
    const Comp = asChild ? Slot : 'button';

    const stylesForButton = () => {
      switch (variant) {
        case 'secondary':
          return cn(
            'bg-card border-b border-foreground rounded-sm',
          );
        case 'link':
          return cn(
            'text-foreground underline-offset-4 hover:underline',
          );
        case 'icon':
          return cn(
            'bg-card text-foreground hover:text-muted'
          )
        default:
          return cn(
            'bg-card',
            'hover:border-muted hover:transparent hover:transition',
            'sm:border-b sm:border-card sm:hover:border-foreground sm:rounded-sm'
          );
      }
    };

    if (asChild && isValidElement(children)) {
      return cloneElement(children as React.ReactElement, {
        ref: ref as Ref<any>,
        className: cn(className, children.props.className),
        ...rest,
      });
    }

    return (
      <Comp
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center',
          'whitespace-nowrap rounded-md text-sm',
          'ring-offset-background transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          stylesForButton(),
          className
        )} {...rest}>
        {children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export default Button;