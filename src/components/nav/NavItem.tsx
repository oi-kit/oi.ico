import type {
  FC,
  HTMLAttributeAnchorTarget,
  PropsWithChildren
} from 'react';

import Link from 'next/link';

import { cn } from '@/helpers/cn';

interface NavItemProps extends PropsWithChildren {
  href: string | '#';
  target?: HTMLAttributeAnchorTarget | undefined;
  className?: string;
  content?: string;
}

const NavItem: FC<NavItemProps> = ({
  children,
  href,
  target,
  className,
  content,
  ...rest
}) => {
  return (
    <Link
      href={href}
      target={target}
      className={cn(
        'text-[16px]',
        className
      )} {...rest}>
      {content ?? children}
    </Link>
  );
}

export default NavItem;