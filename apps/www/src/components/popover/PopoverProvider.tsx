import { createContext, useContext } from 'react';

interface PopoverContextProps {
  open: boolean;
  toggleOpen: () => void;
}

export const PopoverContext = createContext<PopoverContextProps>(null!);

export const usePopoverContext = () => {
  const props = useContext(PopoverContext);
  if (!props) {
    throw new Error('usePopoverContext must be used within a PopoverProvider');
  }
  return props;
};