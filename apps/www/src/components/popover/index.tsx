'use client';

import { useState, type ComponentPropsWithoutRef, type FC } from 'react';
import { cn } from '../../helpers/cn';
import { PopoverContext } from './PopoverProvider';
import PopoverButton from './PopoverButton';
import PopoverList from './PopoverList';
import PopoverListItem from './PopoverListItem';

interface PopoverComponentProps extends ComponentPropsWithoutRef<'div'> { }

const PopoverComponent: FC<PopoverComponentProps> = ({
  className,
  children,
  ...rest
}) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(prevOpen => !prevOpen);

  return (
    <PopoverContext.Provider value={{ open, toggleOpen }}>
      <div
        className={cn(
          'relative',
          className
        )}
        {...rest}
      >
        {children}
      </div>
    </PopoverContext.Provider>
  );
}

const Popover = Object.assign(PopoverComponent, {
  Button: PopoverButton,
  List: PopoverList,
  ListItem: PopoverListItem,
});

export default Popover;