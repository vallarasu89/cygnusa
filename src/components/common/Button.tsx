import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  withArrow?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  external,
  withArrow = false,
  className,
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium font-sans whitespace-nowrap transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cygnusa-sky focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none rounded-[5px]';

  const variants = {
    primary:
      'bg-cygnusa-sky hover:bg-cygnusa-sky-hover text-white shadow-subtle active:scale-[0.99]',
    secondary:
      'bg-cygnusa-sky hover:bg-cygnusa-sky-dark text-white shadow-subtle active:scale-[0.99]',
    outline:
      'border border-cygnusa-border bg-white text-cygnusa-void hover:bg-slate-50 hover:border-slate-300 active:scale-[0.99]',
    ghost:
      'bg-transparent text-cygnusa-void hover:bg-slate-100 hover:text-cygnusa-void active:scale-[0.99]',
    link:
      'bg-transparent text-cygnusa-sky hover:text-cygnusa-sky-hover p-0 h-auto font-medium hover:underline inline-flex items-center gap-1.5',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5',
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    variant !== 'link' && sizes[size],
    className
  );

  const content = (
    <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap">
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-150 group-hover:translate-x-1" />
      )}
    </span>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(classes, 'group')}
        >
          {content}
        </a>
      );
    }
    return (
      <Link to={href} className={cn(classes, 'group')}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(classes, 'group')} {...props}>
      {content}
    </button>
  );
};
