'use client';

import { useState, type FC } from 'react';
import { cn } from '@/helpers/utils';

interface MarkdownCopyProps { id: string }

const MarkdownCopy: FC<MarkdownCopyProps> = ({ id }) => {
  const [onCopy, setOnCopy] = useState<boolean>(false);
  const [onSuccess, setSuccess] = useState<boolean>(false);

  const handleCopy = async () => {
    let text = document.getElementById(id)!.textContent;
    try {
      await navigator.clipboard.writeText(text!);
      setOnCopy(true);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className='relative rounded-md cursor-pointer'
    >
      <div
        className={cn(
          'cursor-pointer transition-all w-5 h-5 bg-foreground',
          onSuccess ? 'bg-green-400' : 'bg-foreground',
        )}
        onTransitionEnd={() => {
          setTimeout(() => {
            setSuccess(false);
            setOnCopy(false);
          }, 500);
        }}
      >
        Checkmar
      </div>
      <div className='h-full w-full absolute top-0 left-0 flex items-center justify-center'>
        <div
          className={cn(
            'transition-all w-5 h-5 bg-foreground',
            onCopy ? 'bg-green-400' : 'bg-foreground',
          )}
          onTransitionEnd={() => {
            if (onCopy) {
              setSuccess(true);
            }
          }}
        >
          Copy
        </div>
      </div>
    </button>
  );
}

export default MarkdownCopy;