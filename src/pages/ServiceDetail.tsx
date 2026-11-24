import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { SEO } from '@/seo/SEO';
import { getServiceSchema } from '@/seo/schema';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Button } from '@/components/common/Button';
import { SERVICES } from '@/data/services';
import { CASE_STUDIES } from '@/data/caseStudies';
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
  ArrowRight,
  Server,
  Zap,
  Lock,
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

  // Find related case studies
  const relatedCases = CASE_STUDIES.filter((cs) =>
    service.relatedCaseStudySlugs.includes(cs.slug)
  );

  return (
    <>
      <SEO
        title={`${service.title} | Enterprise Technology Services`}
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

      {/* Hero Header with Background Photography & Deep Navy Gradient */}
      <section className="relative bg-slate-950 py-16 md:py-24 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={service.heroImage}
            alt={`${service.title} Hero Banner`}
            className="w-full h-full object-cover object-center opacity-30 blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1E4A] via-[#0A1E4A]/90 to-[#0F172A]/95" />
        </div>

        <div
          className="absolute -top-24 right-0 w-96 h-96 bg-cygnusa-sky/20 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-cygnusa-sky shrink-0 shadow-lg">
                <Icon className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cygnusa-sky block">
                  // {service.category.toUpperCase()} PRACTICE
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
                  {service.title}
                </h1>
              </div>
            </div>

            <p className="text-lg sm:text-xl font-semibold text-sky-300 font-heading">
              {service.tagline}
            </p>

            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-3xl">
              {service.heroSummary}
            </p>

            {/* CTAs & Trust Badges: Sky on Void per Page 7 approved pairing */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="primary" size="lg" withArrow className="bg-cygnusa-sky hover:bg-sky-400 text-white shadow-lg shadow-sky-500/20">
                Consult Our Technical Team
              </Button>
              <Button href="/case-studies" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                View Related Case Studies
              </Button>
            </div>

            {/* Trust Points */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-300 font-mono">
              <span className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-cygnusa-sky" />
                ISO 27001 Security Baseline
              </span>
              <span className="flex items-center gap-2">
                <Server className="w-4 h-4 text-cygnusa-sky" />
                Tier-1 Hyperscaler SLA
              </span>
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-cygnusa-sky" />
                100% Client Code Ownership
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Challenges & Approach Grid (Alternating Clean White) */}
      <section className="bg-white py-16 md:py-24 border-b border-cygnusa-border">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cygnusa-sky block">
              // VALUE REALIZATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-cygnusa-void">
              Addressing Bottlenecks with Proven Engineering
            </h2>
            <p className="text-sm text-cygnusa-mist font-sans">
              How we diagnose operational roadblocks and translate requirements into high-availability production solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Business Challenges */}
            <div className="bg-slate-50/80 p-8 border border-slate-200 rounded-xl shadow-sm space-y-5">
              <div className="flex items-center gap-2.5 pb-4 border-b border-slate-200">
                <AlertCircle className="w-5 h-5 text-slate-700 shrink-0" />
                <h3 className="text-base font-bold font-heading text-cygnusa-void">
                  Operational &amp; Business Challenges We Eliminate
                </h3>
              </div>
              <ul className="space-y-3.5">
                {service.businessChallenges.map((challenge, cIdx) => (
                  <li key={cIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Methodological Approach: Single Accent Cygnusa Sky */}
            <div className="bg-[#F0F9FF]/80 p-8 border border-sky-200/80 rounded-xl shadow-sm space-y-5">
              <div className="flex items-center gap-2.5 pb-4 border-b border-sky-200/80">
                <CheckCircle2 className="w-5 h-5 text-cygnusa-sky shrink-0" />
                <h3 className="text-base font-bold font-heading text-cygnusa-void">
                  Our Methodological Approach
                </h3>
              </div>
              <ul className="space-y-3.5">
                {service.ourApproach.map((step, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-cygnusa-sky mt-2 shrink-0"></span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Technical Architecture & Blueprint Showcase */}
      <section className="bg-gradient-to-b from-[#F0F9FF] to-slate-50 py-16 md:py-24 border-b border-cygnusa-border overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Architecture Image (6 cols) */}
            <div className="lg:col-span-6 relative group">
              <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 aspect-[16/10]">
                <img
                  src={service.diagramUrl}
                  alt={`${service.title} Architecture Diagram & Blueprint`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-mono text-cygnusa-sky uppercase block">
                    Architecture Specification
                  </span>
                  <p className="text-xs font-semibold text-slate-200 mt-0.5">
                    Production Blueprint for {service.title} Deployments
                  </p>
                </div>
              </div>
            </div>

            {/* Architecture Narrative (6 cols) */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cygnusa-sky block">
                // ARCHITECTURAL RIGOR
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-cygnusa-void leading-tight">
                Enterprise Blueprint &amp; Delivery Standard
              </h2>
              <p className="text-sm text-cygnusa-mist leading-relaxed font-sans">
                Our deployments follow a strict zero-trust, cloud-native blueprint designed to eliminate single points of failure. Every engagement includes structured documentation, audit trails, and automated compliance gates.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 bg-white border border-slate-200 rounded-lg flex items-start gap-3 shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-cygnusa-sky shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold font-heading text-cygnusa-void uppercase tracking-wider">
                      Zero-Trust Security Controls
                    </h4>
                    <p className="text-xs text-cygnusa-mist mt-0.5 leading-relaxed">
                      Role-based access controls (RBAC), end-to-end encryption in transit and at rest, and secret rotation.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-lg flex items-start gap-3 shadow-sm">
                  <Server className="w-5 h-5 text-cygnusa-sky shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold font-heading text-cygnusa-void uppercase tracking-wider">
                      High Availability &amp; Multi-Region Redundancy
                    </h4>
                    <p className="text-xs text-cygnusa-mist mt-0.5 leading-relaxed">
                      Active-passive and active-active failover topologies with automated health checks and instant recovery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities & Business Benefits Grid */}
      <section className="bg-white py-16 md:py-24 border-b border-cygnusa-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Deliverables (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cygnusa-sky block mb-1">
                  // CORE DELIVERABLES
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-cygnusa-void">
                  Key Service Capabilities
                </h2>
              </div>

              <div className="space-y-3">
                {service.keyCapabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm font-semibold text-cygnusa-void flex items-center gap-3 hover:border-cygnusa-sky/40 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-cygnusa-sky shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Commercial ROI & Tech Stack (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cygnusa-sky block mb-1">
                  // COMMERCIAL VALUE
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-cygnusa-void">
                  Measurable Business Benefits
                </h2>
              </div>

              <div className="space-y-3">
                {service.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-700 leading-relaxed flex items-start gap-3"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-cygnusa-sky mt-1.5 shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Matrix */}
              <div className="pt-6 border-t border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-3 font-mono">
                  Integrated Technologies &amp; Standards:
                </span>
                <div className="flex flex-wrap gap-2">
                  {service.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-slate-100 border border-slate-200 text-xs rounded-md text-slate-800 font-mono font-medium hover:border-cygnusa-sky/40 transition-colors"
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

      {/* Related Case Studies Section (Cosmic Navy 30% rule) */}
      {relatedCases.length > 0 && (
        <section className="bg-gradient-to-br from-[#0A1E4A] via-[#0F172A] to-[#1E3A8A] py-16 md:py-24 text-white relative overflow-hidden border-b border-slate-800">
          <Container className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cygnusa-sky block mb-2">
                  // PROVEN SUCCESS
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                  Related Case Studies
                </h2>
                <p className="text-sm text-slate-300 font-sans mt-2">
                  Real-world production results achieved through our {service.title} practice.
                </p>
              </div>

              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 text-xs font-semibold text-cygnusa-sky hover:text-sky-300 font-mono uppercase tracking-wider"
              >
                <span>View All Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedCases.map((cs) => (
                <div
                  key={cs.id}
                  className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm hover:border-cygnusa-sky/60 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img
                      src={cs.imageUrl || 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'}
                      alt={cs.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-slate-900/80 text-white text-[10px] font-mono uppercase tracking-wider border border-white/20">
                      {cs.domain}
                    </span>
                  </div>

                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold font-heading text-white group-hover:text-cygnusa-sky transition-colors line-clamp-2">
                        {cs.title}
                      </h3>
                      <p className="text-xs text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                        {cs.challenge}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-cygnusa-sky font-semibold">
                        Client: {cs.client}
                      </span>
                      <Link
                        to={`/case-studies#${cs.slug}`}
                        className="text-xs font-semibold text-white group-hover:text-cygnusa-sky inline-flex items-center gap-1"
                      >
                        Read ROI <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      <ContactCTASection />
    </>
  );
};
