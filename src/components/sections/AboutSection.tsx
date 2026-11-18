import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const differentiators = [
    {
      title: 'Business-First Technology Approach',
      description:
        'We measure engineering success not by code volume or software licenses, but by tangible business velocity, risk reduction, and commercial ROI.',
    },
    {
      title: 'Senior Leadership Involvement',
      description:
        'Every client engagement is directed by veteran enterprise technologists with 25+ years of combined experience—not handed off to junior consultants.',
    },
    {
      title: 'Unified IT, Cloud & Software Expertise',
      description:
        'Eliminate vendor finger-pointing. We unify strategic consulting (Advise), custom engineering (Build), and 24/7 managed operations (Run) under one roof.',
    },
    {
      title: 'Transparent Pricing & Governance',
      description:
        'Clear, predictable month-to-month contracts and deliverables. No opaque vendor markups, hidden fees, or surprise cost overruns.',
    },
    {
      title: 'Long-Term Partnership Mindset',
      description:
        'We invest in your long-term success. Over 90% of our clients work with us on multi-year retainers as an embedded extension of their core team.',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-b border-cygnusa-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Narrative & CTA */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              overline="Why CYGNUSA"
              title="Technology Partner. Not Just a Vendor."
              description="CYGNUSA Technologies was founded to bridge the critical gap between executive business strategy and ground-level technical execution."
              className="mb-6"
            />

            <p className="text-sm md:text-base text-cygnusa-mist leading-relaxed font-sans">
              Most IT vendors operate in silos—handing over static consulting slide decks or billing hours without taking accountability for operational reliability.
              At CYGNUSA, we take end-to-end ownership. We embed veteran technology leadership into your organization, design resilient cloud architectures,
              and build custom applications engineered to scale.
            </p>

            <div className="pt-2">
              <Button href="/about" variant="primary" size="lg" withArrow>
                Discover CYGNUSA
              </Button>
            </div>
          </div>

          {/* Right Column: 5 Differentiators */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-slate-50 border border-cygnusa-border rounded-[8px] p-6 sm:p-8 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-cygnusa-sky block">
                The 5 CYGNUSA Differentiators
              </span>

              <div className="space-y-4">
                {differentiators.map((diff, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-[6px] border border-cygnusa-border/70 flex items-start gap-3.5 hover:border-cygnusa-sky/50 transition-colors shadow-subtle"
                  >
                    <CheckCircle2 className="w-5 h-5 text-cygnusa-sky shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold font-heading text-cygnusa-void">
                        {diff.title}
                      </h4>
                      <p className="text-xs text-cygnusa-mist mt-1 leading-relaxed">
                        {diff.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
