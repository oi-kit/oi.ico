import { forwardRef, InputHTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, placeholder, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={cn(
          'flex h-10 w-full px-3 py-2 text-sm',
          'text-foreground bg-background',
          'focus:outline-none',
          className
        )} {...props} />
    );
  }
);

Input.displayName = 'Input';

export default Input;