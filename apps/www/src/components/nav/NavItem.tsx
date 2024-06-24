import type { FC, PropsWithChildren, HTMLAttributeAnchorTarget } from 'react';
import { cn } from '../../helpers/cn';
import { Link } from 'react-router-dom';
import Button from '../Button';

interface NavItemProps extends PropsWithChildren {
  to: string;
  target?: HTMLAttributeAnchorTarget | undefined;
  className?: string;
  content?: string;
}

const NavItem: FC<NavItemProps> = ({
  to,
  target,
  className,
  content,
  children,
  ...props
}) => {
  return (
    <Link
      to={to || ''}
      target={target}
      className={cn(
        'text-base text-foreground',
        className
      )}
      {...props}
    >
      <Button size='small'>
        {children ?? content}
      </Button>
    </Link>
  );
}

export default NavItem;