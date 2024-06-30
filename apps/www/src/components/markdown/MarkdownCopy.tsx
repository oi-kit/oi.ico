'use client';

import { useState, type FC } from 'react';
import { cn } from '@/helpers/utils';

interface MarkdownCopyProps { id: string }

const MarkdownCopy: FC<MarkdownCopyProps> = ({ id }) => {
  const [onCopy, setOnCopy] = useState<boolean>(false);
  const [onSuccess, setSuccess] = useState<boolean>(false);

  const handleCopy = async () => {
    const element = document.getElementById(id);
    if (!element) return;

    const text = Array.from(element.childNodes)
      .map(node => node.textContent)
      .join('\n')
      .replace(/^\n+|\n+$/g, '');

    try {
      await navigator.clipboard.writeText(text!);
      setOnCopy(true);
      setSuccess(true);
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
          'cursor-pointer transition-all w-5 h-5',
          onSuccess ? 'bg-green-400' : 'bg-foreground',
        )}
        onTransitionEnd={() => {
          setTimeout(() => {
            setSuccess(false);
            setOnCopy(false);
          }, 500);
        }}
      >
        M
      </div>
      <div className='h-full w-full absolute top-0 left-0 flex items-center justify-center'>
        <div
          className={cn(
            'transition-all w-5 h-5',
            onCopy ? 'bg-green-400' : 'bg-card',
          )}
          onTransitionEnd={() => {
            if (onCopy) {
              setSuccess(true);
            }
          }}
        >
          C
        </div>
      </div>
    </button>
  );
}

export default MarkdownCopy;