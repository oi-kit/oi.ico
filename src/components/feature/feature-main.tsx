'use client';

import type { ComponentProps, FC } from 'react';

import { Button } from '@/components/primitives/button';

import { Dialog, DialogContainer, DialogContent, DialogTrigger } from '@/components/primitives/dialog';

const FeatureMain: FC<ComponentProps<'div'>> = ({ className, ...rest }) => {
  return (
    <div className='space-y-4' {...rest}>
      <h2 className='text-2xl'>Icon</h2>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(4rem,1fr))] gap-6'>
        <Dialog>
          <Button asChild variant='icon' size='icon'>
            <DialogTrigger>
              Icon
            </DialogTrigger>
          </Button>
          <DialogContainer>
            <DialogContent>
              Icon
            </DialogContent>
          </DialogContainer>
        </Dialog>
      </div>
    </div>
  );
};

export default FeatureMain;