import React from 'react';
import { Link } from 'react-router-dom';
import { MegaMenuCategory } from '@/data/navigation';
import { ArrowRight } from 'lucide-react';

interface MegaMenuFeatureCardProps {
  card: MegaMenuCategory['featureCard'];
  onLinkClick: () => void;
}

export const MegaMenuFeatureCard: React.FC<MegaMenuFeatureCardProps> = ({
  card,
  onLinkClick,
}) => {
  return (
    <div className="w-full h-full bg-slate-50/60 p-6 lg:p-8 flex flex-col justify-start">
      <div className="bg-white border border-cygnusa-border rounded-[8px] overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-200 flex flex-col h-full">
        {/* Feature Image Banner (Real Photography Banner) */}
        <div className="h-44 w-full relative overflow-hidden bg-slate-900 border-b border-cygnusa-border group">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Card Body */}
        <div className="p-5 flex flex-col flex-1 justify-between">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-cygnusa-sky font-sans">
              Featured Focus
            </span>
            <h4 className="mt-1 text-base font-bold font-heading text-cygnusa-void leading-snug">
              {card.title}
            </h4>
            <p className="mt-2 text-xs text-cygnusa-mist leading-relaxed font-sans">
              {card.description}
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-cygnusa-border/60">
            <Link
              to={card.linkHref}
              onClick={onLinkClick}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cygnusa-sky hover:text-cygnusa-sky-hover transition-colors group"
            >
              <span>{card.linkText}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
