import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Container } from '@/components/layout/Container';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <div className="bg-slate-50 border-b border-cygnusa-border/60 py-2.5 text-xs text-cygnusa-mist">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2">
          <Link
            to="/"
            className="flex items-center hover:text-cygnusa-sky transition-colors duration-150"
            title="Home"
          >
            <Home className="w-3.5 h-3.5" />
          </Link>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <React.Fragment key={index}>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                {isLast || !item.href ? (
                  <span className="font-medium text-cygnusa-void truncate max-w-[240px]">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    className="hover:text-cygnusa-sky transition-colors duration-150 truncate max-w-[200px]"
                  >
                    {item.label}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </Container>
    </div>
  );
};
