import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/seo/SEO';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
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
  ArrowRight,
  CheckCircle2,
  Zap,
  Server,
  Layers,
} from 'lucide-react';
import { ContactCTASection } from '@/components/sections/ContactCTASection';

export const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

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

  const categories = ['All', 'Advisory', 'Operations', 'Security', 'Engineering', 'AI', 'Talent'];

  const filteredServices =
    activeCategory === 'All'
      ? SERVICES
      : SERVICES.filter((s) => s.category.toLowerCase().includes(activeCategory.toLowerCase()));

  // Single Accent Style Mapping (Page 7: Never combine multiple accents in the same UI composition)
  const getAccentBadgeStyle = (accentType: string) => {
    switch (accentType) {
      case 'violet': // Crown Violet: Premium & enterprise, used sparingly
        return {
          pill: 'bg-purple-50 text-[#7C3AED] border-purple-200',
          check: 'text-[#7C3AED]',
          dot: 'bg-[#7C3AED]',
          iconBg: 'bg-purple-50 text-[#7C3AED] border-purple-100',
        };
      case 'cyan': // Akasha Cyan: Data vis, telemetry, infographics
        return {
          pill: 'bg-cyan-50 text-[#06B6D4] border-cyan-200',
          check: 'text-[#06B6D4]',
          dot: 'bg-[#06B6D4]',
          iconBg: 'bg-cyan-50 text-[#06B6D4] border-cyan-100',
        };
      case 'green': // Abundance Green on Ether White: Success states
        return {
          pill: 'bg-emerald-50 text-[#10B981] border-emerald-200',
          check: 'text-[#10B981]',
          dot: 'bg-[#10B981]',
          iconBg: 'bg-emerald-50 text-[#10B981] border-emerald-100',
        };
      case 'gold': // Solar Gold: Highlights, partner awards
        return {
          pill: 'bg-amber-50 text-[#F59E0B] border-amber-200',
          check: 'text-[#F59E0B]',
          dot: 'bg-[#F59E0B]',
          iconBg: 'bg-amber-50 text-[#F59E0B] border-amber-100',
        };
      default: // Cygnusa Sky: Primary brand identity
        return {
          pill: 'bg-sky-50 text-[#0EA5E9] border-sky-100',
          check: 'text-[#0EA5E9]',
          dot: 'bg-[#0EA5E9]',
          iconBg: 'bg-sky-50 text-[#0EA5E9] border-sky-100',
        };
    }
  };

  return (
    <>
      <SEO
        title="Enterprise Technology Services | CYGNUSA Technologies"
        description="Explore CYGNUSA's 8 core technology capabilities: Virtual CTO, Managed IT & Cloud, Cybersecurity & Compliance, Software Engineering, AI Integration, Staff Augmentation, Offshore Centers, and Reseller."
        canonical="https://www.cygnusa.in/services"
      />

      <Breadcrumbs items={[{ label: 'Services' }]} />

      {/* Hero Header (60% Ether White Neutral Canvas) */}
      <section className="bg-gradient-to-b from-[#F0F9FF] to-white py-16 md:py-24 border-b border-cygnusa-border relative overflow-hidden">
        <div
          className="absolute -top-24 right-0 w-96 h-96 bg-cygnusa-sky/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cygnusa-sky mb-2 block">
              // ENTERPRISE SERVICE PRACTICES
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-cygnusa-void tracking-tight leading-tight">
              Enterprise Technology Services
            </h1>
            <p className="mt-4 text-base sm:text-lg text-cygnusa-mist font-sans leading-relaxed">
              We deliver structured technology consulting, modern software engineering, and 24/7 managed infrastructure operations tailored to fast-growth SMBs and established enterprises worldwide.
            </p>
          </div>

          {/* Key Value Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-cygnusa-sky shadow-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-sm font-bold font-heading text-cygnusa-void">ISO 27001 Certified</span>
                <span className="text-xs text-cygnusa-mist">Audit-Ready Controls</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-cygnusa-sky shadow-sm">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-sm font-bold font-heading text-cygnusa-void">99.9% Uptime SLA</span>
                <span className="text-xs text-cygnusa-mist">24/7/365 NOC Guard</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-cygnusa-sky shadow-sm">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-sm font-bold font-heading text-cygnusa-void">Multi-Cloud Ready</span>
                <span className="text-xs text-cygnusa-mist">AWS • Azure • GCP</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-cygnusa-sky shadow-sm">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-sm font-bold font-heading text-cygnusa-void">100% IP Ownership</span>
                <span className="text-xs text-cygnusa-mist">Full Code Custody</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Showcase Feed */}
      <section className="bg-slate-50/70 py-16 md:py-24 border-b border-cygnusa-border">
        <Container>
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-md text-xs font-semibold font-heading transition-all ${
                    activeCategory === cat
                      ? 'bg-cygnusa-sky text-white shadow-sm'
                      : 'bg-white border border-cygnusa-border text-cygnusa-void hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <span className="text-xs text-cygnusa-mist font-medium">
              Showing {filteredServices.length} Enterprise Capabilities
            </span>
          </div>

          {/* Service Cards Feed (Each Card follows Single Accent Rule) */}
          <div className="space-y-12">
            {filteredServices.map((service, index) => {
              const Icon = iconMap[service.iconName] || Code;
              const isEven = index % 2 === 1;
              const style = getAccentBadgeStyle(service.accentType);

              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className="bg-white border border-cygnusa-border rounded-xl shadow-card overflow-hidden hover:border-cygnusa-sky/60 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                    {/* Visual Media Column (5 cols) */}
                    <div
                      className={`lg:col-span-5 relative overflow-hidden bg-slate-900 min-h-[260px] lg:min-h-full ${
                        isEven ? 'lg:order-last' : ''
                      }`}
                    >
                      <img
                        src={service.imageUrl}
                        alt={`${service.title} enterprise technology capability`}
                        loading="lazy"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-950/60" />

                      {/* Overline Badge on Image */}
                      <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                        <span className="px-3 py-1 rounded bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-mono uppercase tracking-wider border border-white/20">
                          {service.category}
                        </span>
                      </div>

                      {/* Tagline Overlay on Mobile/Card bottom */}
                      <div className="absolute bottom-4 left-4 right-4 z-10">
                        <span className="text-xs font-semibold text-white/90 drop-shadow-md">
                          {service.tagline}
                        </span>
                      </div>
                    </div>

                    {/* Content Column (7 cols) */}
                    <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-lg ${style.iconBg} border flex items-center justify-center shrink-0 shadow-sm`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-cygnusa-sky block font-mono">
                              PRACTICE #{index + 1}
                            </span>
                            <h2 className="text-xl sm:text-2xl font-bold font-heading text-cygnusa-void">
                              {service.title}
                            </h2>
                          </div>
                        </div>

                        <p className="text-sm text-cygnusa-mist leading-relaxed font-sans">
                          {service.heroSummary}
                        </p>

                        {/* Capabilities Checklist using Card's Dedicated Single Accent */}
                        <div className="pt-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-2 font-mono">
                            Key Deliverables &amp; Architectures:
                          </span>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-cygnusa-mist">
                            {service.keyCapabilities.slice(0, 4).map((cap, cIdx) => (
                              <li key={cIdx} className="flex items-start gap-2">
                                <CheckCircle2 className={`w-4 h-4 ${style.check} shrink-0 mt-0.5`} />
                                <span className="text-slate-700 font-medium">{cap}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies Tags */}
                        <div className="pt-2">
                          <div className="flex flex-wrap gap-1.5">
                            {service.techStack.slice(0, 6).map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-[11px] bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded text-slate-700 font-mono"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Card Action Link */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <Link
                          to={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-cygnusa-sky hover:text-sky-600 transition-colors group/link"
                        >
                          <span>Explore Full Service Architecture</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                        </Link>

                        <Link
                          to="/contact"
                          className="text-xs font-medium text-slate-500 hover:text-cygnusa-void transition-colors"
                        >
                          Request Scope Call →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Enterprise Delivery Lifecycle Section (Cosmic Navy 30% structure rule) */}
      <section className="bg-gradient-to-br from-[#0A1E4A] via-[#0F172A] to-[#1E3A8A] py-20 md:py-28 text-white relative overflow-hidden border-b border-slate-800">
        <div
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-cygnusa-sky/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cygnusa-sky block">
              // ENGAGEMENT ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight">
              The Advise-Build-Run Lifecycle
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              Every CYGNUSA service practice operates under a three-phase institutional delivery methodology, ensuring audit-grade security, rapid execution, and seamless ongoing operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm relative group hover:border-cygnusa-sky/50 transition-colors">
              <span className="text-4xl font-extrabold font-mono text-cygnusa-sky/40 block mb-4">
                01
              </span>
              <h3 className="text-xl font-bold font-heading mb-2 text-white">
                Advise &amp; Architect
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Comprehensive 360° technology audit, total cost of ownership (TCO) benchmarks, architectural roadmaps, and compliance baseline evaluation.
              </p>
              <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cygnusa-sky" />
                  <span>Architecture Blueprints</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cygnusa-sky" />
                  <span>Vendor Cost Rationalization</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm relative group hover:border-cygnusa-sky/50 transition-colors">
              <span className="text-4xl font-extrabold font-mono text-cygnusa-sky/40 block mb-4">
                02
              </span>
              <h3 className="text-xl font-bold font-heading mb-2 text-white">
                Build &amp; Modernize
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Cloud-native engineering, automated CI/CD pipelines, microservices decomposition, and zero-trust security integration backed by senior architects.
              </p>
              <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cygnusa-sky" />
                  <span>Production-Grade Code</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cygnusa-sky" />
                  <span>DevSecOps &amp; Security Scans</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm relative group hover:border-cygnusa-sky/50 transition-colors">
              <span className="text-4xl font-extrabold font-mono text-cygnusa-sky/40 block mb-4">
                03
              </span>
              <h3 className="text-xl font-bold font-heading mb-2 text-white">
                Run &amp; Scale
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                24/7/365 NOC infrastructure monitoring, continuous FinOps cost governance, automated incident response, and proactive SLA-backed uptime.
              </p>
              <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cygnusa-sky" />
                  <span>&lt;15 Min Critical Incident SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cygnusa-sky" />
                  <span>Continuous FinOps Optimization</span>
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
