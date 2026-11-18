import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '@/seo/SEO';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Button } from '@/components/common/Button';
import { INDUSTRIES } from '@/data/industries';
import { CASE_STUDIES } from '@/data/caseStudies';
import { Factory, Fuel, Plane, ShoppingCart, Landmark, Building, CheckCircle2, ArrowRight } from 'lucide-react';
import { ContactCTASection } from '@/components/sections/ContactCTASection';

export const IndustryDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = INDUSTRIES.find((i) => i.slug === slug);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  const iconMap: Record<string, React.ElementType> = {
    manufacturing: Factory,
    'energy-utilities': Fuel,
    aviation: Plane,
    'retail-distribution': ShoppingCart,
    'professional-services': Landmark,
    'smb-enterprises': Building,
  };
  const Icon = iconMap[industry.slug] || Building;

  const relatedCases = CASE_STUDIES.filter((cs) =>
    industry.caseStudySlugs.includes(cs.slug)
  );

  return (
    <>
      <SEO
        title={`${industry.title} Technology Solutions | CYGNUSA`}
        description={industry.heroSummary}
        canonical={`https://www.cygnusa.in/industries/${industry.slug}`}
      />

      <Breadcrumbs
        items={[
          { label: 'Industries', href: '/industries' },
          { label: industry.title },
        ]}
      />

      {/* Hero */}
      <section className="bg-white py-14 md:py-20 border-b border-cygnusa-border">
        <Container>
          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-[6px] bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 shrink-0">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-cygnusa-sky block">
                  Industry Focus
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-cygnusa-void tracking-tight">
                  {industry.title}
                </h1>
              </div>
            </div>

            <p className="text-base sm:text-lg text-cygnusa-mist font-sans leading-relaxed pt-2">
              {industry.heroSummary}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg" withArrow>
                Schedule Industry Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Solutions & Metrics */}
      <section className="bg-slate-50/70 py-16 md:py-20 border-b border-cygnusa-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 bg-white p-8 border border-cygnusa-border rounded-[8px] shadow-card space-y-6">
              <h2 className="text-xl font-bold font-heading text-cygnusa-void pb-3 border-b border-cygnusa-border/70">
                Tailored Solutions for {industry.title}
              </h2>
              <div className="space-y-4">
                {industry.keySolutions.map((sol, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cygnusa-sky shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold font-heading text-cygnusa-void">{sol}</h3>
                      <p className="text-xs text-cygnusa-mist mt-0.5 leading-relaxed">
                        Engineered to meet specific industry benchmarks, regulatory compliance, and operational efficiency.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 border border-cygnusa-border rounded-[8px] shadow-card">
                <h3 className="text-sm font-bold font-heading uppercase tracking-wider text-cygnusa-sky mb-4 pb-2 border-b border-cygnusa-border/70">
                  Verified Performance Metrics
                </h3>
                <div className="space-y-4">
                  {industry.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 border border-cygnusa-border/70 rounded-[5px]">
                      <span className="block text-2xl font-bold font-heading text-cygnusa-void">
                        {m.value}
                      </span>
                      <span className="text-xs text-cygnusa-mist font-medium">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {relatedCases.length > 0 && (
                <div className="bg-slate-50 p-6 border border-slate-200 rounded-[8px]">
                  <span className="text-xs font-bold uppercase tracking-wider text-cygnusa-sky block mb-2">
                    Featured Case Study
                  </span>
                  <h4 className="text-sm font-bold font-heading text-cygnusa-void">
                    {relatedCases[0].title}
                  </h4>
                  <p className="text-xs text-cygnusa-mist mt-1 line-clamp-2">
                    {relatedCases[0].challenge}
                  </p>
                  <Link
                    to="/case-studies"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cygnusa-sky hover:text-cygnusa-sky-hover mt-3"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      <ContactCTASection />
    </>
  );
};
