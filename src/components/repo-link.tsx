import type { ComponentProps, FC } from 'react';

import Link from 'next/link';

import SVG from '@/components/svg';

import { GITHUB } from '@/config/icons';

import { cn } from '@/utils/cn';

const RepoLink: FC<ComponentProps<'span'>> = ({ className, ...rest }) => {
  return (
    <span className={cn(
      'inline-flex items-center whitespace-nowrap',
      'text-muted hover:text-foreground',
    )} {...rest}>
      <Link
        href='https://github.com/oi-kit/oi.ico'
        target='_blank'
        className={cn(
          'flex items-center gap-1',
          'hover:underline underline-offset-4',
        )}>
        <span className='hidden sm:inline-block'>
          Made with
        </span>
        <SVG
          fill='none'
          stroke='currentColor'
          className='size-4'
          d={GITHUB}
        />
        oi-ico
      </Link>
    </span>
  );
};

export default RepoLink;