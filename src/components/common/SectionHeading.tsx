import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  overline?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  overline,
  title,
  description,
  align = 'left',
  className,
  dark = false,
}) => {
  const alignments = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={cn('flex flex-col mb-10 md:mb-14 max-w-3xl', alignments[align], className)}>
      {overline && (
        <span
          className={cn(
            'text-xs md:text-sm font-semibold tracking-wider uppercase mb-2.5',
            dark ? 'text-cygnusa-sky' : 'text-cygnusa-sky'
          )}
        >
          {overline}
        </span>
      )}
      <h2
        className={cn(
          'text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight leading-tight',
          dark ? 'text-white' : 'text-cygnusa-void'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-3.5 text-base sm:text-lg leading-relaxed font-sans',
            dark ? 'text-slate-300' : 'text-cygnusa-mist'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
