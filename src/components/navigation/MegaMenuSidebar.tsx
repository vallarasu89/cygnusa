import React from 'react';
import { MegaMenuCategory } from '@/data/navigation';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

interface MegaMenuSidebarProps {
  categories: MegaMenuCategory[];
  activeCategoryId: string;
  onSelectCategory: (categoryId: string) => void;
}

export const MegaMenuSidebar: React.FC<MegaMenuSidebarProps> = ({
  categories,
  activeCategoryId,
  onSelectCategory,
}) => {
  return (
    <div className="w-full h-full bg-slate-50 border-r border-cygnusa-border p-5 lg:p-6 flex flex-col justify-start">
      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3 px-3 font-sans">
        Categories
      </span>
      <ul className="space-y-1">
        {categories.map((category) => {
          const isActive = category.id === activeCategoryId;
          return (
            <li key={category.id}>
              <button
                type="button"
                onClick={() => onSelectCategory(category.id)}
                onMouseEnter={() => onSelectCategory(category.id)}
                className={cn(
                  'w-full flex items-center justify-between text-left px-3.5 py-2.5 rounded-r-[6px] rounded-l-[2px] font-sans text-sm transition-colors duration-150',
                  isActive
                    ? 'bg-white text-cygnusa-sky font-bold shadow-subtle border-l-4 border-cygnusa-sky'
                    : 'text-slate-700 font-semibold hover:bg-white/80 hover:text-cygnusa-sky'
                )}
                aria-selected={isActive}
              >
                <span className="truncate">{category.title}</span>
                <ChevronRight
                  className={cn(
                    'w-4 h-4 shrink-0 transition-transform duration-150',
                    isActive ? 'text-cygnusa-sky translate-x-0.5' : 'text-slate-400'
                  )}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
