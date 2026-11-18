import React from 'react';
import { SEO } from '@/seo/SEO';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Button } from '@/components/common/Button';
import { CASE_STUDIES } from '@/data/caseStudies';
import { CheckCircle2 } from 'lucide-react';
import { ContactCTASection } from '@/components/sections/ContactCTASection';

export const CaseStudies: React.FC = () => {
  return (
    <>
      <SEO
        title="Customer Success Stories & Case Studies | CYGNUSA Technologies"
        description="Read verified case studies from CYGNUSA Technologies across automotive after-sales, licensed fuel-tech distribution, aviation ground handling, and enterprise logistics."
        canonical="https://www.cygnusa.in/case-studies"
      />

      <Breadcrumbs items={[{ label: 'Case Studies' }]} />

      {/* Hero */}
      <section className="bg-white py-14 md:py-20 border-b border-cygnusa-border">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-cygnusa-sky mb-2 block">
              Proven Track Record
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-cygnusa-void tracking-tight leading-tight">
              Customer Success Stories &amp; Case Studies
            </h1>
            <p className="mt-4 text-base sm:text-lg text-cygnusa-mist font-sans leading-relaxed">
              Real-world engineering challenges solved through strategic advisory, custom software engineering, and mission-critical cloud operations.
            </p>
          </div>
        </Container>
      </section>

      {/* Case Studies Detail Feed */}
      <section className="bg-slate-50/70 py-16 md:py-24 border-b border-cygnusa-border">
        <Container>
          <div className="space-y-16">
            {CASE_STUDIES.map((cs) => (
              <div
                key={cs.id}
                id={cs.slug}
                className="bg-white border border-cygnusa-border rounded-[8px] p-8 md:p-12 shadow-card space-y-8"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-cygnusa-border/70">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-cygnusa-sky block">
                      {cs.domain}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold font-heading text-cygnusa-void mt-1">
                      {cs.title}
                    </h2>
                  </div>
                  <div className="px-4 py-2 bg-slate-50 border border-cygnusa-border rounded text-xs font-semibold text-cygnusa-void shrink-0">
                    Client: {cs.client}
                  </div>
                </div>

                {/* Challenge & Solution Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-slate-50 p-6 rounded-[6px] border border-cygnusa-border/70 space-y-2">
                    <h3 className="text-sm font-bold font-heading uppercase tracking-wider text-slate-800">
                      The Enterprise Challenge
                    </h3>
                    <p className="text-sm text-cygnusa-mist leading-relaxed font-sans">
                      {cs.challenge}
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-[6px] border border-cygnusa-border/70 space-y-2">
                    <h3 className="text-sm font-bold font-heading uppercase tracking-wider text-cygnusa-sky">
                      CYGNUSA's Solution
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed font-sans">
                      {cs.solution}
                    </p>
                  </div>
                </div>

                {/* Impact & Verified Metrics */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
                  <div className="lg:col-span-7 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-cygnusa-void">
                      Delivered Impact &amp; Operational Outcomes:
                    </h4>
                    <ul className="space-y-2 text-xs text-cygnusa-mist">
                      {cs.impact.map((imp, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-cygnusa-sky shrink-0 mt-0.5" />
                          <span>{imp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {cs.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-slate-50 border border-cygnusa-border/70 rounded-[6px] flex flex-col justify-center"
                      >
                        <span className="text-2xl font-bold font-heading text-cygnusa-sky">
                          {m.value}
                        </span>
                        <span className="text-[11px] text-cygnusa-mist leading-tight mt-1">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Footer */}
                <div className="pt-4 border-t border-cygnusa-border/60 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-slate-500 mr-2">
                      Stack:
                    </span>
                    {cs.technologiesUsed.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-slate-100 border border-cygnusa-border text-xs rounded text-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button href="/contact" variant="primary" size="sm" withArrow>
                    Build a Similar Solution
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTASection />
    </>
  );
};
