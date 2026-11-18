import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { INDUSTRIES } from '@/data/industries';
import { Factory, Fuel, Plane, ShoppingCart, Landmark, Building, ArrowRight } from 'lucide-react';

export const IndustriesSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    manufacturing: Factory,
    'energy-utilities': Fuel,
    aviation: Plane,
    'retail-distribution': ShoppingCart,
    'professional-services': Landmark,
    'smb-enterprises': Building,
  };

  return (
    <section className="bg-white py-16 md:py-24 border-b border-cygnusa-border">
      <Container>
        <SectionHeading
          overline="Domain Expertise"
          title="Technology Tailored Across Industries"
          description="We bring deep regulatory and operational knowledge to solve domain-specific challenges across critical industries."
          align="center"
          className="text-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {INDUSTRIES.map((ind) => {
            const Icon = iconMap[ind.slug] || Building;
            return (
              <div
                key={ind.id}
                className="bg-slate-50 border border-cygnusa-border rounded-[8px] p-6 hover:border-cygnusa-sky/50 transition-colors shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-[6px] bg-white border border-cygnusa-border flex items-center justify-center text-cygnusa-sky mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-cygnusa-void mb-2">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-cygnusa-mist leading-relaxed mb-4">
                    {ind.shortDescription}
                  </p>

                  <div className="pt-3 border-t border-cygnusa-border/60 space-y-1.5">
                    {ind.keySolutions.slice(0, 2).map((sol, idx) => (
                      <div key={idx} className="text-[11px] text-slate-600 truncate flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cygnusa-sky shrink-0"></span>
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-cygnusa-border/60">
                  <Link
                    to={`/industries/${ind.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cygnusa-sky hover:text-cygnusa-sky-hover group"
                  >
                    <span>View Industry Capabilities</span>
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
