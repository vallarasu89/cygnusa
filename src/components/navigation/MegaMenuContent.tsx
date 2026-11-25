import React from 'react';
import { Link } from 'react-router-dom';
import { MegaMenuCategory } from '@/data/navigation';
import { ArrowRight } from 'lucide-react';
import { handleSectionLinkNavigation } from '@/lib/scrollUtils';

interface MegaMenuContentProps {
  category: MegaMenuCategory;
  onLinkClick: () => void;
}

export const MegaMenuContent: React.FC<MegaMenuContentProps> = ({
  category,
  onLinkClick,
}) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    handleSectionLinkNavigation(e, href, onLinkClick);
  };

  return (
    <div className="w-full h-full bg-white p-6 lg:p-8 border-r border-cygnusa-border flex flex-col justify-start">
      {/* Category Heading & Description */}
      <div className="mb-6 pb-4 border-b border-cygnusa-border/60">
        <h3 className="text-xl sm:text-2xl font-bold font-heading text-cygnusa-void tracking-tight">
          {category.heading}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-cygnusa-mist leading-relaxed font-sans max-w-xl">
          {category.description}
        </p>
      </div>

      {/* Relevant Links List */}
      <div className="space-y-3">
        {category.links.map((link, index) => (
          <Link
            key={index}
            to={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
            className="group block p-3 -mx-2 rounded-[6px] hover:bg-slate-50/80 transition-colors duration-150"
          >
            <div className="flex items-center justify-between text-sm font-bold text-cygnusa-void group-hover:text-cygnusa-sky transition-colors duration-150">
              <span>{link.title}</span>
              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 text-cygnusa-sky shrink-0 ml-2" />
            </div>
            <p className="mt-1 text-xs text-cygnusa-mist leading-relaxed">
              {link.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
