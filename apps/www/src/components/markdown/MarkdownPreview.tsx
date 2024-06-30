import type { FC, PropsWithChildren } from 'react';
import { cn } from '@/helpers/utils';
import Markdown from 'react-markdown';
import MarkdownCopy from '@/components/markdown/MarkdownCopy';

interface MarkdownPreviewProps extends PropsWithChildren {
  className?: string;
  content: string;
}

const MarkdownPreview: FC<MarkdownPreviewProps> = ({ content, className }) => {
  const id = (Math.floor(Math.random() * 100) + 1).toString();
  const formattedContent = `\`\`\`\n${content}\n\`\`\``;

  return (
    <div className='relative flex items-center w-[280px]'>
      <div className={cn(
        'flex items-center px-4 bg-background h-10 rounded-sm border-b border-foreground w-full',
        className
      )} id={id}>
        <Markdown>{formattedContent}</Markdown>
      </div>
      <div className='absolute right-2 top-1/2 transform -translate-y-1/2'>
        <MarkdownCopy id={id} />
      </div>
    </div>
  );
}

export default MarkdownPreview;