import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { SEO } from '@/seo/SEO';
import { getServiceSchema } from '@/seo/schema';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { SERVICES } from '@/data/services';
import {
  Compass,
  Cloud,
  ShieldCheck,
  Code,
  Cpu,
  Users,
  Building2,
  ShoppingBag,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { ContactCTASection } from '@/components/sections/ContactCTASection';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const iconMap: Record<string, React.ElementType> = {
    Compass,
    Cloud,
    ShieldCheck,
    Code,
    Cpu,
    Users,
    Building2,
    ShoppingBag,
  };
  const Icon = iconMap[service.iconName] || Code;

  const serviceSchema = getServiceSchema(
    service.title,
    service.shortDescription,
    `https://www.cygnusa.in/services/${service.slug}`
  );

  return (
    <>
      <SEO
        title={`${service.title} | Enterprise Services`}
        description={service.heroSummary}
        canonical={`https://www.cygnusa.in/services/${service.slug}`}
        structuredData={serviceSchema}
      />

      <Breadcrumbs
        items={[
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
      />

      {/* Hero Header */}
      <section className="bg-white py-14 md:py-20 border-b border-cygnusa-border">
        <Container>
          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-[6px] bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 shrink-0">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-cygnusa-sky block">
                  {service.category} Service
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-cygnusa-void tracking-tight">
                  {service.title}
                </h1>
              </div>
            </div>

            <p className="text-lg font-semibold text-cygnusa-sky pt-2">
              {service.tagline}
            </p>

            <p className="text-base sm:text-lg text-cygnusa-mist font-sans leading-relaxed">
              {service.heroSummary}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="primary" size="lg" withArrow>
                Consult Our Technical Team
              </Button>
              <Button href="/case-studies" variant="outline" size="lg">
                View Related Case Studies
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Challenges & Approach Grid */}
      <section className="bg-slate-50/70 py-16 md:py-20 border-b border-cygnusa-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Business Challenges */}
            <div className="bg-white p-8 border border-cygnusa-border rounded-[8px] shadow-card space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-cygnusa-border/70">
                <AlertCircle className="w-5 h-5 text-amber-500" />
                <h3 className="text-base font-bold font-heading text-cygnusa-void">
                  Operational &amp; Business Challenges We Solve
                </h3>
              </div>
              <ul className="space-y-3">
                {service.businessChallenges.map((challenge, cIdx) => (
                  <li key={cIdx} className="flex items-start gap-2.5 text-xs text-cygnusa-mist leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Methodological Approach */}
            <div className="bg-white p-8 border border-cygnusa-border rounded-[8px] shadow-card space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-cygnusa-border/70">
                <CheckCircle2 className="w-5 h-5 text-cygnusa-sky" />
                <h3 className="text-base font-bold font-heading text-cygnusa-void">
                  Our Methodological Approach
                </h3>
              </div>
              <ul className="space-y-3">
                {service.ourApproach.map((step, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2.5 text-xs text-cygnusa-mist leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-cygnusa-sky mt-1.5 shrink-0"></span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities & Enterprise Benefits */}
      <section className="bg-white py-16 md:py-24 border-b border-cygnusa-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6 space-y-4">
              <SectionHeading
                overline="Deliverables"
                title="Key Service Capabilities"
                className="mb-6"
              />
              <div className="space-y-3">
                {service.keyCapabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-slate-50 border border-cygnusa-border/70 rounded-[6px] text-xs font-semibold text-cygnusa-void flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cygnusa-sky shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <SectionHeading
                overline="Commercial ROI"
                title="Measurable Business Benefits"
                className="mb-6"
              />
              <div className="space-y-3">
                {service.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-slate-50 border border-slate-200 rounded-[6px] text-xs text-slate-700 leading-relaxed flex items-start gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-cygnusa-sky mt-1 shrink-0"></span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="pt-6">
                <span className="text-xs font-bold uppercase tracking-wider text-cygnusa-mist block mb-2">
                  Integrated Technologies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {service.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 border border-cygnusa-border text-xs rounded text-slate-800 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ContactCTASection />
    </>
  );
};
