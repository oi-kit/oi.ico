import type { FC, HTMLAttributeAnchorTarget, PropsWithChildren } from 'react';
import Link from 'next/link';
import { cn } from '@/helpers/utils';
import { Button } from '@/components/ui/button';

interface NavItemProps extends PropsWithChildren {
  href: string | undefined;
  target?: HTMLAttributeAnchorTarget | undefined;
  className?: string;
  content?: string;
};

const NavItem: FC<NavItemProps> = ({
  href,
  target,
  className,
  content,
  children,
  ...rest
}) => {
  return (
    <Link
      href={href || ''}
      target={target}
      className={cn(className)}
      {...rest}
    >
      <Button size='sm' className='text-base'>
        {content ?? children}
      </Button>
    </Link>
  );
};

export default NavItem;