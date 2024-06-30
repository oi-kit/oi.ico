import type { FC, PropsWithChildren } from 'react';
import { cn } from '@/helpers/utils';
import Markdown from 'react-markdown';

interface MarkdownPreviewProps extends PropsWithChildren {
  className?: string;
  content: string;
}

const MarkdownPreview: FC<MarkdownPreviewProps> = ({ content, className }) => {
  return (
    <Markdown className={cn(
      'flex items-center px-4 bg-background h-10',
      'rounded-sm border-b border-foreground w-[280px]',
      className
    )}>
      {content}
    </Markdown>
  );
}

export default MarkdownPreview;