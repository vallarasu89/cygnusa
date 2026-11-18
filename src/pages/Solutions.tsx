import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/seo/SEO';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Button } from '@/components/common/Button';
import { SOLUTIONS } from '@/data/solutions';
import {
  CloudCog,
  RefreshCw,
  Layers,
  Briefcase,
  Server,
  Sparkles,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { ContactCTASection } from '@/components/sections/ContactCTASection';

export const Solutions: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    CloudCog,
    RefreshCw,
    Layers,
    Briefcase,
    Server,
    Sparkles,
  };

  return (
    <>
      <SEO
        title="Enterprise Technology Solutions | CYGNUSA Technologies"
        description="Explore CYGNUSA's enterprise solutions: Cloud & Infrastructure, Digital Transformation, Application Modernisation, Enterprise Apps, ITaaS, and AI & Automation."
        canonical="https://www.cygnusa.in/solutions"
      />

      <Breadcrumbs items={[{ label: 'Solutions' }]} />

      {/* Hero */}
      <section className="bg-white py-14 md:py-20 border-b border-cygnusa-border">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-cygnusa-sky mb-2 block">
              Architectural Solutions
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-cygnusa-void tracking-tight leading-tight">
              Unified Technology for Business Growth
            </h1>
            <p className="mt-4 text-base sm:text-lg text-cygnusa-mist font-sans leading-relaxed">
              We design and implement resilient digital architectures that break down operational data silos, optimize infrastructure costs, and prepare businesses for AI and cloud scale.
            </p>
          </div>
        </Container>
      </section>

      {/* Solutions Cards */}
      <section className="bg-slate-50/70 py-16 md:py-24 border-b border-cygnusa-border">
        <Container>
          <div className="space-y-12">
            {SOLUTIONS.map((sol) => {
              const Icon = iconMap[sol.iconName] || Layers;
              return (
                <div
                  key={sol.id}
                  id={sol.slug}
                  className="bg-white border border-cygnusa-border rounded-[8px] p-8 md:p-10 shadow-card space-y-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-[6px] bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold font-heading text-cygnusa-void">
                        {sol.title}
                      </h2>
                      <p className="mt-2 text-sm text-cygnusa-mist leading-relaxed font-sans max-w-3xl">
                        {sol.overview}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-cygnusa-border/70">
                    <div className="bg-slate-50 p-5 rounded-[6px] border border-cygnusa-border/70 space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                        <AlertCircle className="w-4 h-4 text-amber-500" />
                        Common Friction Points
                      </span>
                      <ul className="space-y-1.5 text-xs text-cygnusa-mist pt-1">
                        {sol.challenges.map((c, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1 shrink-0"></span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-[6px] border border-slate-200 space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-cygnusa-sky flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-cygnusa-sky" />
                        Delivered Business Outcomes
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-700 pt-1">
                        {sol.keyOutcomes.map((o, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cygnusa-sky mt-1 shrink-0"></span>
                            <span>{o}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <Button href="/contact" variant="primary" size="sm" withArrow>
                      Discuss Your Architecture
                    </Button>
                    <Link
                      to="/services"
                      className="text-xs font-semibold text-cygnusa-mist hover:text-cygnusa-sky transition-colors"
                    >
                      Explore Underlying Services →
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
