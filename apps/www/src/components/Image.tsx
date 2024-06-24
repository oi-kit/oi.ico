import React, { forwardRef } from 'react';
import type {
  DetailedHTMLProps,
  ImgHTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
  Ref
} from 'react';

type PlaceholderValue = 'blur' | 'empty';
type OnLoadingComplete = (img: HTMLImageElement) => void;
type StaticImport = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string
};
type ObjectFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
type ObjectPosition =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'center'
  | `${number}px ${number}px`
  | `${number}% ${number}%`
  | `${number}em ${number}em`;

interface ImageProps extends Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
  'height' | 'width' | 'loading' | 'ref' | 'alt' | 'src' | 'srcSet'> {
  src: string | StaticImport;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  fill?: boolean;
  quality?: number | `${number}`;
  priority?: boolean;
  loading?: 'eager' | 'lazy';
  placeholder?: PlaceholderValue;
  blurDataURL?: string;
  unoptimized?: boolean;
  onLoadingComplete?: OnLoadingComplete;
  layout?: string;
  objectFit?: ObjectFit;
  objectPosition?: ObjectPosition;
  lazyBoundary?: string;
  lazyRoot?: string;
}

export const Image: ForwardRefExoticComponent<ImageProps & RefAttributes<HTMLImageElement>> = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      alt,
      width,
      height,
      fill,
      quality,
      priority,
      loading,
      placeholder,
      blurDataURL,
      unoptimized,
      onLoadingComplete,
      layout,
      objectFit,
      objectPosition,
      lazyBoundary,
      lazyRoot,
      ...rest
    },
    ref
  ) => {
    const handleLoadingComplete = (event: React.SyntheticEvent<HTMLImageElement>) => {
      if (onLoadingComplete) {
        onLoadingComplete(event.currentTarget);
      }
    };

    const imgSrc = typeof src === 'string' ? src : src.src;

    return (
      <img
        ref={ref as Ref<HTMLImageElement>}
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        loading={loading || 'lazy'}
        style={{
          objectFit: objectFit as ObjectFit,
          objectPosition: objectPosition,
        }}
        onLoad={handleLoadingComplete}
        {...rest}
      />
    );
  }
);