'use client';

import type { FC, PropsWithChildren } from 'react';
import { cn } from '@/helpers/utils';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MoonIcon } from '@radix-ui/react-icons';

interface PanelProps extends PropsWithChildren { className?: string }

const Panel: FC<PanelProps> = ({
  children,
  className
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild className={cn('rounded-sm', className)}>
        <Button variant='icon' size='icon'>
          <MoonIcon className='size-6' />
        </Button>
      </DialogTrigger>
      <DialogContent className='border-border bg-card sm:max-w-md'>
        <div className='flex gap-6'>
          <div className='flex items-center justify-center w-24 h-24 bg-card rounded-sm border border-border'>
            <MoonIcon className='size-9' />
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='h3'>icon-name</h3>
            <div className='flex gap-4 justify-between'>
              <div className='flex flex-col gap-2 mt-4'>

              </div>
              <div className='flex flex-row gap-2 mt-4'>

              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default Panel;