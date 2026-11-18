import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { SOLUTIONS } from '@/data/solutions';
import {
  CloudCog,
  RefreshCw,
  Layers,
  Briefcase,
  Server,
  Sparkles,
  ArrowRight,
  Check,
} from 'lucide-react';

export const SolutionsSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    CloudCog,
    RefreshCw,
    Layers,
    Briefcase,
    Server,
    Sparkles,
  };

  return (
    <section className="bg-white py-16 md:py-24 border-b border-cygnusa-border">
      <Container>
        <SectionHeading
          overline="Strategic Solutions"
          title="Unified Technology for Business Growth"
          description="We align modern technology architecture with your commercial priorities—building resilient, cloud-first systems that grow with your enterprise."
          align="center"
          className="text-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {SOLUTIONS.map((sol) => {
            const Icon = iconMap[sol.iconName] || Layers;
            return (
              <div
                key={sol.id}
                className="bg-slate-50 border border-cygnusa-border rounded-[8px] p-7 flex flex-col justify-between hover:border-cygnusa-sky/50 transition-colors shadow-subtle"
              >
                <div>
                  <div className="w-10 h-10 rounded-[6px] bg-white border border-cygnusa-border flex items-center justify-center text-cygnusa-sky mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-cygnusa-void mb-2">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-cygnusa-mist font-sans leading-relaxed mb-5">
                    {sol.shortDescription}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-cygnusa-sky block">
                      Key Outcomes
                    </span>
                    {sol.keyOutcomes.slice(0, 2).map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-cygnusa-mist">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-cygnusa-border/70">
                  <Link
                    to="/solutions"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cygnusa-sky hover:text-cygnusa-sky-hover group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
