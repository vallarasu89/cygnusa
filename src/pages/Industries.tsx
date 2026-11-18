import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/seo/SEO';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { INDUSTRIES } from '@/data/industries';
import { Factory, Fuel, Plane, ShoppingCart, Landmark, Building, ArrowRight } from 'lucide-react';
import { ContactCTASection } from '@/components/sections/ContactCTASection';

export const Industries: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    manufacturing: Factory,
    'energy-utilities': Fuel,
    aviation: Plane,
    'retail-distribution': ShoppingCart,
    'professional-services': Landmark,
    'smb-enterprises': Building,
  };

  return (
    <>
      <SEO
        title="Industry Solutions | CYGNUSA Technologies"
        description="Explore CYGNUSA's enterprise technology solutions across Manufacturing, Energy & Utilities, Aviation, Retail, Professional Services, and SMBs."
        canonical="https://www.cygnusa.in/industries"
      />

      <Breadcrumbs items={[{ label: 'Industries' }]} />

      {/* Hero */}
      <section className="bg-white py-14 md:py-20 border-b border-cygnusa-border">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-cygnusa-sky mb-2 block">
              Vertical Specialization
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-cygnusa-void tracking-tight leading-tight">
              Technology Tailored Across Industries
            </h1>
            <p className="mt-4 text-base sm:text-lg text-cygnusa-mist font-sans leading-relaxed">
              We engineer mission-critical solutions addressing strict regulatory mandates, explosive safety standards, and operational workflows across specialized commercial verticals.
            </p>
          </div>
        </Container>
      </section>

      {/* Industries Grid */}
      <section className="bg-slate-50/70 py-16 md:py-24 border-b border-cygnusa-border">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((ind) => {
              const Icon = iconMap[ind.slug] || Building;
              return (
                <div
                  key={ind.id}
                  className="bg-white border border-cygnusa-border rounded-[8px] p-8 shadow-card flex flex-col justify-between hover:border-cygnusa-sky/50 transition-colors"
                >
                  <div>
                    <div className="w-12 h-12 rounded-[6px] bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold font-heading text-cygnusa-void mb-3">
                      {ind.title}
                    </h2>
                    <p className="text-xs text-cygnusa-mist leading-relaxed font-sans mb-6">
                      {ind.heroSummary}
                    </p>

                    {/* Solutions List */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-cygnusa-border/60">
                      <span className="text-xs font-bold uppercase tracking-wider text-cygnusa-void block mb-1">
                        Domain Solutions:
                      </span>
                      {ind.keySolutions.map((sol, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-cygnusa-mist">
                          <span className="w-1.5 h-1.5 rounded-full bg-cygnusa-sky mt-1 shrink-0"></span>
                          <span>{sol}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-cygnusa-border/60">
                    <Link
                      to={`/industries/${ind.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cygnusa-sky hover:text-cygnusa-sky-hover group"
                    >
                      <span>Explore Industry Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <ContactCTASection />
    </>
  );
};
