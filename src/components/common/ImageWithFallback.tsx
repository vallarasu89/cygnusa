import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ImageOff } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  fallbackText?: string;
  containerClassName?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackSrc = '/logos/cygnusa-emblem.png',
  fallbackText,
  className,
  containerClassName,
  ...props
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn('relative overflow-hidden bg-slate-100 flex items-center justify-center', containerClassName)}>
      {!error && src ? (
        <img
          src={src}
          alt={alt || 'CYGNUSA Technologies'}
          loading="lazy"
          onError={() => setError(true)}
          onLoad={() => setLoaded(true)}
          className={cn(
            'w-full h-full object-cover transition-opacity duration-200',
            loaded ? 'opacity-100' : 'opacity-0',
            className
          )}
          {...props}
        />
      ) : fallbackSrc ? (
        <img
          src={fallbackSrc}
          alt={alt || 'CYGNUSA Technologies Fallback'}
          className={cn('w-16 h-16 object-contain opacity-40', className)}
          {...props}
        />
      ) : (
        <div className="flex flex-col items-center justify-center p-4 text-cygnusa-mist">
          <ImageOff className="w-8 h-8 mb-1 opacity-50" />
          {fallbackText && <span className="text-xs">{fallbackText}</span>}
        </div>
      )}
    </div>
  );
};
