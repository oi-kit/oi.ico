'use client';

import type { FC, PropsWithChildren } from 'react';
import { cn } from '@/helpers/utils';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MoonIcon } from '@radix-ui/react-icons';
import MarkdownPreview from '@/components/markdown/MarkdownPreview';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

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
      <DialogContent className='w-full border-border bg-card max-w-[735px]'>
        <div className='w-full flex gap-6'>
          <div className='flex items-center justify-center w-24 h-24 bg-card rounded-sm border border-border'>
            <MoonIcon className='size-9' />
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='h3'>icon-name</h3>
            <div className='flex gap-[80px] justify-between'>
              <div className='flex flex-col gap-4 mt-4'>
                <MarkdownPreview content='<i class=”dfvdfnvkdf”></i>' />
                <MarkdownPreview content='Panel' />
              </div>
              <div className='flex flex-col gap-4 mt-4 max-w-[200px] w-full'>
                <Popover>
                  <PopoverTrigger
                    asChild
                    className='justify-between w-[200px] text-muted'
                  >
                    <Button
                      variant='secondary'
                      className='bg-background border-none text-foreground'
                    >
                      Size
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className='w-[200px] bg-background border-none rounded-sm py-2'>
                    <div className='grid gap-2 pt-2'>
                      <span>Default</span>
                      <span>16px</span>
                      <span>24px</span>
                      <span>36px</span>
                    </div>
                  </PopoverContent>
                </Popover>
                <div className='flex justify-between gap-2'>
                  <Button
                    variant='secondary'
                    className='w-full border-none bg-foreground text-card text-sm'
                  >
                    SVG
                  </Button>
                  <Button
                    variant='secondary'
                    className='w-full border-none bg-foreground text-card text-sm'
                  >
                    PNG
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default Panel;