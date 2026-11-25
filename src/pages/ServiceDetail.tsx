import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { SEO } from '@/seo/SEO';
import { getServiceSchema } from '@/seo/schema';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
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
  ArrowRight,
  Server,
  Zap,
  Lock,
  ChevronRight,
  TrendingDown,
  Award,
  Target,
  Briefcase,
  Sliders,
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

  const isVirtualCTO = service.slug === 'virtual-cto';

  return (
    <>
      <SEO
        title={`${service.title} | Strategic Executive IT Advisory | CYGNUSA`}
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

      {/* ========================================================================= */}
      {/* 1. HERO SECTION: Editorial Asymmetrical Enterprise Hero (Hitachi Inspired) */}
      {/* ========================================================================= */}
      <section className="relative bg-[#080E1C] text-white pt-14 pb-20 md:pt-20 md:pb-28 border-b border-slate-800/80 overflow-hidden">
        {/* Subtle Precision Drafting Grid (Zero AI Glow) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Subtle Ambient Lighting */}
        <div className="absolute top-0 right-10 w-[500px] h-[400px] bg-sky-900/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-slate-800/20 rounded-full blur-[120px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Category Kicker */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-[11px] font-mono uppercase tracking-wider text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>{service.category.toUpperCase()} PRACTICE</span>
                <span className="text-slate-600">|</span>
                <span className="text-slate-400 font-sans">Fractional Leadership</span>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-sky-400 shrink-0 shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight leading-[1.08]">
                    {service.title}
                  </h1>
                </div>

                <p className="text-xl sm:text-2xl font-semibold text-sky-300 font-heading leading-snug">
                  {service.tagline}
                </p>
              </div>

              {/* Lead Description */}
              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-2xl">
                {service.heroSummary}
              </p>

              {/* CTAs: Primary Solid Sky + Secondary Ghost */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-cygnusa-sky hover:bg-sky-400 text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-md shadow-sky-950/60 group"
                >
                  <span>Consult Our Technical Team</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#case-studies"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700 text-slate-200 hover:text-white text-xs sm:text-sm font-medium transition-all duration-200"
                >
                  <span>View Related Case Studies</span>
                </a>
              </div>

              {/* Trust Indicators Strip Directly Below CTAs */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className="truncate">ISO 27001 Baseline</span>
                </div>
                <div className="flex items-center gap-2">
                  <Server className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className="truncate">Tier-1 Hyperscaler SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className="truncate">100% Code Ownership</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">25+ Yrs Leadership</span>
                </div>
              </div>
            </div>

            {/* Right Editorial Visual Composition (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group">
                <img
                  src={
                    isVirtualCTO
                      ? 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80'
                      : service.imageUrl
                  }
                  alt={`${service.title} Executive Advisory Session`}
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center filter brightness-[0.82] contrast-105 group-hover:scale-[1.02] transition-transform duration-700 select-none"
                  loading="eager"
                />

                {/* Scrim Gradient for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

                {/* Top Taxonomy Tag */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-slate-300">
                  <span className="px-2.5 py-1 rounded bg-slate-950/80 backdrop-blur-md border border-white/10 uppercase tracking-wider">
                    Executive Technology Advisory
                  </span>
                  <span className="px-2.5 py-1 rounded bg-emerald-950/80 backdrop-blur-md border border-emerald-500/30 text-emerald-300 font-sans font-medium">
                    Verified C-Suite Impact
                  </span>
                </div>

                {/* Docked Credential Card at Bottom */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md rounded-xl p-4 border border-white/15 text-white shadow-xl space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-mono text-sky-400">
                    <span>FRACTIONAL OPEX MODEL</span>
                    <span>ROI: 35%+</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-100 font-heading">
                    Enterprise Technical Governance Without C-Level Overhead
                  </p>
                  <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                    Direct access to veteran enterprise architects guiding roadmaps, vendor contracts, and security audits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 2. PROBLEM & SOLUTION: Editorial Asymmetrical Split (Hitachi Vantara)    */}
      {/* ========================================================================= */}
      <section className="bg-[#F8FAFC] py-20 md:py-28 border-b border-slate-200/90 relative">
        <Container>
          {/* Section Header */}
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cygnusa-sky block">
              // VALUE REALIZATION &amp; STRATEGIC ALIGNMENT
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-slate-950 tracking-tight leading-tight">
              Addressing Bottlenecks with Proven Engineering
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              How we diagnose operational roadblocks, eliminate architectural debt, and engineer high-availability production systems for fast-growth enterprises.
            </p>
          </div>

          {/* Asymmetrical Editorial Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: Operational Bottlenecks (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
              <div className="space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    DIAGNOSTIC ANALYSIS
                  </span>
                  <h3 className="text-lg font-bold font-heading text-slate-950 flex items-center gap-2">
                    <span>The Cost of Inaction</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-sans leading-relaxed">
                    Unresolved technical complexity creates an operational ceiling that throttles commercial growth.
                  </p>
                </div>

                <div className="space-y-5">
                  {service.businessChallenges.map((challenge, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 group">
                      <span className="font-mono text-xs font-semibold text-slate-400 group-hover:text-slate-800 transition-colors mt-0.5 shrink-0 w-6">
                        0{idx + 1}
                      </span>
                      <div className="space-y-1">
                        <p className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
                          {challenge}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>IMPACT: REVENUE AT RISK</span>
                <span className="text-rose-600 font-semibold">CRITICAL BOTTLENECK</span>
              </div>
            </div>

            {/* Right Column: 4-Pillar Methodology (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                    SYSTEMIC INTERVENTION · 4-PILLAR METHODOLOGY
                  </span>
                  <span className="text-xs font-semibold text-cygnusa-sky font-mono">
                    PROVEN EXECUTION
                  </span>
                </div>

                {/* 2x2 Clean Editorial Architecture Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.ourApproach.map((step, idx) => {
                    const [stepTitle, stepDesc] = step.includes(':')
                      ? step.split(/:(.+)/)
                      : [`Phase 0${idx + 1}`, step];

                    const iconList = [Compass, Target, Sliders, ShieldCheck];
                    const StepIcon = iconList[idx % iconList.length];

                    return (
                      <div
                        key={idx}
                        className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-sm hover:shadow-md hover:border-cygnusa-sky/50 transition-all duration-200 flex flex-col justify-between space-y-3 group"
                      >
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between">
                            <div className="w-8 h-8 rounded-lg bg-sky-50 text-cygnusa-sky flex items-center justify-center text-xs font-semibold">
                              <StepIcon className="w-4 h-4" />
                            </div>
                            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                              PILLAR 0{idx + 1}
                            </span>
                          </div>

                          <h4 className="text-xs sm:text-sm font-bold font-heading text-slate-950 group-hover:text-cygnusa-sky transition-colors">
                            {stepTitle}
                          </h4>

                          <p className="text-xs text-slate-600 font-sans leading-relaxed">
                            {stepDesc || step}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[10px] text-slate-400 font-mono">
                          <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                          <span>Audited Production Standard</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Assurance Bar */}
              <div className="p-4 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-sans text-slate-200">
                    Every recommendation is backed by vendor-neutral audits and ISO 27001 compliance standards.
                  </span>
                </div>
                <Link
                  to="/contact"
                  className="font-semibold text-sky-300 hover:text-white shrink-0 inline-flex items-center gap-1 transition-colors"
                >
                  <span>Request Assessment</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 3. ENTERPRISE BLUEPRINT: Alternating Editorial Storytelling (Hitachi)      */}
      {/* ========================================================================= */}
      {/* Story 1: Architectural Rigor & Zero-Trust Governance (Image Left, Text Right) */}
      <section className="bg-white py-20 md:py-28 border-b border-slate-200/90 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Architecture Image (6 cols) */}
            <div className="lg:col-span-6 relative group">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 aspect-[16/11]">
                <img
                  src={service.diagramUrl}
                  alt={`${service.title} Architecture Specification`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                {/* Docked Architecture Specification Badge */}
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-sky-400 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>PRODUCTION ARCHITECTURE SPECIFICATION</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold font-heading text-slate-100">
                    Enterprise Zero-Trust &amp; Resilient Multi-Cloud Blueprint
                  </p>
                </div>
              </div>
            </div>

            {/* Architecture Narrative (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cygnusa-sky block">
                // ARCHITECTURAL RIGOR
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-slate-950 leading-tight tracking-tight">
                Enterprise Blueprint &amp; Delivery Standard
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                Our deployments follow a strict zero-trust, cloud-native blueprint designed to eliminate single points of failure. Every engagement includes structured documentation, audit trails, and automated compliance gates.
              </p>

              {/* Clean Editorial Feature Blocks with Hairline Borders */}
              <div className="space-y-3.5 pt-1">
                <div className="p-4 sm:p-5 bg-[#F8FAFC] border border-slate-200/90 rounded-xl flex items-start gap-4 shadow-sm hover:border-cygnusa-sky/40 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-cygnusa-sky shrink-0 shadow-xs">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold font-heading text-slate-950">
                      Zero-Trust Security Controls
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed font-sans">
                      Role-based access controls (RBAC), end-to-end encryption in transit and at rest, and automated secret rotation meeting ISO 27001 mandates.
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 bg-[#F8FAFC] border border-slate-200/90 rounded-xl flex items-start gap-4 shadow-sm hover:border-cygnusa-sky/40 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-cygnusa-sky shrink-0 shadow-xs">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold font-heading text-slate-950">
                      High Availability &amp; Multi-Region Redundancy
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed font-sans">
                      Active-passive and active-active failover topologies with automated health checks, RPO under 15 minutes, and zero-downtime cutovers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/solutions"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cygnusa-sky hover:text-sky-700 transition-colors"
                >
                  <span>Explore Enterprise Cloud Architecture</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Story 2: Executive Stewardship & Boardroom Alignment (ALTERNATING: Text Left, Image Right!) */}
      <section className="bg-[#F8FAFC] py-20 md:py-28 border-b border-slate-200/90 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Executive Narrative (6 cols) */}
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cygnusa-sky block">
                // EXECUTIVE STEWARDSHIP
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-slate-950 leading-tight tracking-tight">
                Bridging the Gap Between Board Vision &amp; Engineering Velocity
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                Technology investments must translate directly into balance sheet advantages. We provide fractional CTO leadership to boardrooms, executive committees, and founders—attending strategy sessions, directing vendor negotiations, and aligning engineering milestones directly with commercial revenue goals.
              </p>

              {/* Clean Feature Blocks */}
              <div className="space-y-3.5 pt-1">
                <div className="p-4 sm:p-5 bg-white border border-slate-200/90 rounded-xl flex items-start gap-4 shadow-sm hover:border-cygnusa-sky/40 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-cygnusa-sky shrink-0 shadow-xs">
                    <TrendingDown className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold font-heading text-slate-950">
                      Fractional OpEx Predictability
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed font-sans">
                      Eliminate $250k+ full-time executive salary and equity overhead while securing seasoned C-level architecture directors on an agile retainer.
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 bg-white border border-slate-200/90 rounded-xl flex items-start gap-4 shadow-sm hover:border-cygnusa-sky/40 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-cygnusa-sky shrink-0 shadow-xs">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold font-heading text-slate-950">
                      100% Vendor-Neutral Advisory
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed font-sans">
                      Objective strategic guidance completely unclouded by software reseller commissions, proprietary lock-in, or hardware vendor quotas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cygnusa-sky hover:text-sky-700 transition-colors"
                >
                  <span>Schedule a Confidential Executive Briefing</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Alternating Image on Right (6 cols) */}
            <div className="lg:col-span-6 relative group order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 aspect-[16/11]">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
                  alt="CYGNUSA Strategic Technology Roadmap Session"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                {/* Docked Trust Seal */}
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>EXECUTIVE BOARDROOM STEWARDSHIP</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold font-heading text-slate-100">
                    60% Cost Efficiency vs Full-Time Executive Hire
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. CAPABILITIES & BUSINESS BENEFITS: Editorial Grid & High-Impact ROI Cards */}
      {/* ========================================================================= */}
      <section className="bg-white py-20 md:py-28 border-b border-slate-200/90">
        <Container>
          {/* Section Header */}
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cygnusa-sky block">
              // CAPABILITIES &amp; VALUE EQUATION
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-slate-950 tracking-tight leading-tight">
              Executive Capabilities. Measurable Business ROI.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              From foundational architecture audits to board-level strategic advisory, we deliver institutional-grade technology governance without full-time executive overhead.
            </p>
          </div>

          {/* Part 1: High-Impact Business ROI Counter Cards (Hitachi Vantara Trust Style) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm space-y-2 hover:border-cygnusa-sky/40 transition-colors">
              <span className="block text-3xl sm:text-4xl font-bold font-heading text-slate-950 tracking-tight">
                Up to 60%
              </span>
              <span className="text-xs font-bold font-heading text-cygnusa-sky uppercase tracking-wider block">
                Executive Cost Savings
              </span>
              <p className="text-xs text-slate-600 font-sans leading-relaxed pt-1">
                Compared to hiring a full-time enterprise C-level executive, with zero equity dilution.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm space-y-2 hover:border-cygnusa-sky/40 transition-colors">
              <span className="block text-3xl sm:text-4xl font-bold font-heading text-slate-950 tracking-tight">
                25+ Years
              </span>
              <span className="text-xs font-bold font-heading text-cygnusa-sky uppercase tracking-wider block">
                Battle-Tested Experience
              </span>
              <p className="text-xs text-slate-600 font-sans leading-relaxed pt-1">
                Immediate access to seasoned technology directors across cloud, security, and scale.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm space-y-2 hover:border-cygnusa-sky/40 transition-colors">
              <span className="block text-3xl sm:text-4xl font-bold font-heading text-slate-950 tracking-tight">
                100%
              </span>
              <span className="text-xs font-bold font-heading text-cygnusa-sky uppercase tracking-wider block">
                Vendor Neutrality
              </span>
              <p className="text-xs text-slate-600 font-sans leading-relaxed pt-1">
                Recommendations dictated solely by your business goals—zero vendor sales quotas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm space-y-2 hover:border-cygnusa-sky/40 transition-colors">
              <span className="block text-3xl sm:text-4xl font-bold font-heading text-slate-950 tracking-tight">
                Zero Risk
              </span>
              <span className="text-xs font-bold font-heading text-cygnusa-sky uppercase tracking-wider block">
                De-risked Scale &amp; Audits
              </span>
              <p className="text-xs text-slate-600 font-sans leading-relaxed pt-1">
                Comprehensive guardrails across cloud migration, AI adoption, and regulatory compliance.
              </p>
            </div>
          </div>

          {/* Part 2: Core Deliverables (Clean Editorial Grid) */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200/90 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-950 font-heading">
                Core Service Capabilities &amp; Deliverables
              </span>
              <span className="text-xs font-mono text-slate-400">
                05 Strategic Competencies
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.keyCapabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-slate-200/90 hover:border-cygnusa-sky/60 hover:shadow-md transition-all duration-200 space-y-3 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 text-cygnusa-sky flex items-center justify-center font-mono text-xs font-bold">
                      0{idx + 1}
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>

                  <h3 className="text-sm font-bold font-heading text-slate-950 group-hover:text-cygnusa-sky transition-colors leading-snug">
                    {cap}
                  </h3>

                  <p className="text-xs text-slate-500 font-sans leading-relaxed">
                    Formal enterprise specifications, structured architectural documentation, and executive board reporting.
                  </p>
                </div>
              ))}

              {/* Dedicated Capability CTA Tile */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 text-white flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-sky-400 block mb-1">
                    CUSTOM ENGAGEMENT SCOPE
                  </span>
                  <h4 className="text-sm font-bold font-heading text-white">
                    Need a tailored advisory pod?
                  </h4>
                  <p className="text-xs text-slate-400 mt-1.5 font-sans leading-relaxed">
                    We calibrate fractional CTO hours to your growth stage—from 10 hours/month advisory to full-time architecture leadership.
                  </p>
                </div>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-white transition-colors"
                >
                  <span>Inquire About Engagement Tiers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Part 3: Integrated Technologies & Standards Strip */}
          <div className="mt-14 pt-8 border-t border-slate-200/90">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 font-mono">
                ENGINEERING STANDARDS &amp; ARCHITECTURAL STACK:
              </span>

              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#F8FAFC] border border-slate-200/90 text-xs rounded-md text-slate-700 font-mono font-medium hover:border-cygnusa-sky/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5. RELATED CASE STUDIES: Deep Charcoal / Obsidian Band (Hitachi Inspired)   */}
      {/* ========================================================================= */}
      {relatedCases.length > 0 && (
        <section
          id="case-studies"
          className="bg-[#0A0F1D] py-20 md:py-28 text-white relative overflow-hidden border-b border-slate-800"
        >
          {/* Subtle Grid Lines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <Container className="relative z-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-800 pb-8">
              <div className="max-w-2xl space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 block">
                  // PROVEN OUTCOMES &amp; CASE EVIDENCE
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-white tracking-tight">
                  Related Case Studies
                </h2>
                <p className="text-sm text-slate-400 font-sans leading-relaxed">
                  Real-world production results achieved through our {service.title} and strategic engineering engagements.
                </p>
              </div>

              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 hover:text-sky-300 font-mono uppercase tracking-wider group shrink-0"
              >
                <span>View All Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* 3 Large Editorial Enterprise Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedCases.map((cs) => {
                // High-resolution real photography mapping for case studies
                const casePhotoMap: Record<string, string> = {
                  'gofuel-ecosystem':
                    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
                  'sop-management-system':
                    'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1000&q=80',
                  'performance-management-system':
                    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
                };
                const cardImage =
                  casePhotoMap[cs.slug] || cs.imageUrl || 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80';

                return (
                  <article
                    key={cs.id}
                    className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-sky-500/60 hover:shadow-xl hover:shadow-sky-950/40 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Real Technology Photography Banner */}
                      <div className="relative h-52 overflow-hidden bg-slate-950">
                        <img
                          src={cardImage}
                          alt={cs.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 filter brightness-[0.75] contrast-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                        {/* Domain Tag */}
                        <span className="absolute top-3 left-3 px-3 py-1 rounded bg-slate-950/85 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-wider border border-white/10">
                          {cs.domain}
                        </span>

                        {/* Top Metric Highlight Pill */}
                        {cs.metrics && cs.metrics[0] && (
                          <span className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded bg-emerald-950/90 text-emerald-300 text-[11px] font-mono font-bold border border-emerald-500/30">
                            {cs.metrics[0].label}: {cs.metrics[0].value}
                          </span>
                        )}
                      </div>

                      {/* Card Content */}
                      <div className="p-6 space-y-3">
                        <span className="text-[11px] font-mono text-sky-400 block font-semibold">
                          Client: {cs.client}
                        </span>

                        <h3 className="text-base sm:text-lg font-bold font-heading text-white group-hover:text-sky-300 transition-colors line-clamp-2 leading-snug">
                          {cs.title}
                        </h3>

                        <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed font-sans">
                          {cs.solution || cs.challenge}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="p-6 pt-0">
                      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                        <span className="text-[11px] font-mono text-slate-500">
                          Production Verified
                        </span>
                        <Link
                          to={`/case-studies#${cs.slug}`}
                          className="text-xs font-semibold text-white group-hover:text-sky-400 inline-flex items-center gap-1.5 transition-colors"
                        >
                          <span>Read Architecture</span>
                          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 6. FINAL CTA SECTION & GLOBAL FOOTER                                      */}
      {/* ========================================================================= */}
      <ContactCTASection />
    </>
  );
};

export default ServiceDetail;
