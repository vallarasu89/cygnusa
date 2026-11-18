import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/common/Button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import heroBannerBg from '@/assets/images/Iinformation-technology.jpg';

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cloud' | 'security' | 'engineering' | 'ai'>('cloud');

  const tabContent = {
    cloud: {
      tag: 'HYBRID CLOUD & INFRASTRUCTURE',
      title: 'Powering Multi-Cloud & Unified Infrastructure for AI',
      description:
        'Deliver 99.9% uptime and bulletproof reliability with proactive 24/7 monitoring, FinOps cloud cost optimization across AWS, Azure and GCP, and automated multi-region disaster recovery.',
      ctaText: 'Discover Cloud Architecture',
      ctaHref: '/services/managed-it-cloud',
      pillText: 'Cloud Infrastructure',
      pillHref: '/services/managed-it-cloud',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
      alt: 'CYGNUSA Multi-Cloud Storage Array & Infrastructure Chassis',
    },
    security: {
      tag: 'ENTERPRISE CYBERSECURITY',
      title: 'Defense-in-Depth Security & Audit-Grade Compliance',
      description:
        'Safeguard enterprise data and client intellectual property with continuous vulnerability assessments, Zero-Trust network access, managed EDR protection, and ISO 27001 readiness.',
      ctaText: 'Explore Security Governance',
      ctaHref: '/services/security-compliance',
      pillText: 'Cybersecurity & Compliance',
      pillHref: '/services/security-compliance',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
      alt: 'CYGNUSA Zero-Trust HSM Security Appliance',
    },
    engineering: {
      tag: 'SOFTWARE & PRODUCT ENGINEERING',
      title: 'High-Performance Modern Enterprise Software',
      description:
        'Architect, engineer, and scale modular TypeScript microservices, high-traffic SaaS platforms, and cross-platform mobile apps with automated zero-downtime CI/CD pipelines.',
      ctaText: 'Explore Engineering Stack',
      ctaHref: '/services/software-engineering',
      pillText: 'Software Engineering',
      pillHref: '/services/software-engineering',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
      alt: 'CYGNUSA Modular High-Density Compute Node Chassis',
    },
    ai: {
      tag: 'PRAGMATIC AI & AUTOMATION',
      title: 'Operationalizing Secure Private Enterprise AI',
      description:
        'Move past generative AI hype. Deploy private Retrieval-Augmented Generation (RAG) knowledge assistants, automated document OCR, and workflow orchestrations that protect corporate data.',
      ctaText: 'Explore AI Solutions',
      ctaHref: '/services/ai-automation',
      pillText: 'Enterprise AI Solutions',
      pillHref: '/services/ai-automation',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
      alt: 'CYGNUSA Neural AI Tensor Accelerator Server Unit',
    },
  };

  const current = tabContent[activeTab];

  return (
    <div className="relative bg-cygnusa-void text-white pt-16 sm:pt-20 pb-36 sm:pb-40 lg:pb-52 border-b border-slate-800 overflow-visible">
      {/* Background Image Layer (Custom IT Ecosystem Banner Illustration) */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
        <img
          src={heroBannerBg}
          alt="CYGNUSA Information Technology Banner"
          className="w-full h-full object-cover object-center scale-100 filter brightness-[0.75] contrast-105 opacity-85"
          loading="eager"
        />

        {/* Light Dark / Mild Overlay (Balanced visibility of the IT illustration + crisp white text readability) */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/50 to-slate-950/80" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/30 to-slate-950/70" />
      </div>

      <Container className="relative z-10">
        {/* Top Centered Hero Content */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-slate-100 uppercase tracking-wider">
            Enterprise Technology &amp; Cloud Infrastructure
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-heading tracking-tight leading-[1.12] text-white drop-shadow-sm">
            Building the foundation for <br className="hidden sm:inline" />
            what's next
          </h1>

          <p className="text-base sm:text-lg text-slate-200 font-sans max-w-2xl mx-auto leading-relaxed drop-shadow">
            Unified technology, global cybersecurity, and pragmatic AI innovation engineered for fast-growing SMBs and forward-thinking enterprises.
          </p>

          <div className="pt-2 flex items-center justify-center gap-4">
            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="rounded-full border-white/40 text-white bg-slate-900/60 backdrop-blur-sm hover:bg-white hover:text-cygnusa-void px-8 py-3 text-sm font-semibold transition-all shadow-md"
            >
              Explore the platform
            </Button>
          </div>
        </div>

        {/* Floating Overlapping White Card (Hitachi Vantara Reference Centerpiece) */}
        <div className="relative mt-14 sm:mt-16 lg:mt-20 -mb-48 sm:-mb-52 lg:-mb-64 z-30">
          <div className="bg-white text-cygnusa-void rounded-[12px] border border-cygnusa-border shadow-2xl overflow-hidden transition-all duration-200">
            {/* Horizontal Tabs Header (Hitachi Vantara Reference Style) */}
            <div
              role="tablist"
              aria-label="Capabilities"
              className="flex bg-white border-b border-slate-200/90 divide-x divide-slate-200/80 overflow-x-auto no-scrollbar"
            >
              {[
                { id: 'cloud', label: 'Multi-Cloud & Infrastructure' },
                { id: 'security', label: 'Cybersecurity & ISO 27001' },
                { id: 'engineering', label: 'Software Engineering' },
                { id: 'ai', label: 'AI & Automation' },
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={cn(
                      'relative flex-1 min-w-[200px] py-4 sm:py-5 px-6 text-sm font-heading transition-all duration-200 text-center select-none focus-visible:outline-none focus-visible:bg-slate-50',
                      isActive
                        ? 'text-cygnusa-void font-bold bg-white'
                        : 'text-slate-500 font-medium hover:text-cygnusa-void hover:bg-slate-50/70'
                    )}
                  >
                    <span>{tab.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeTabUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[3px] bg-cygnusa-sky"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Tab Body (Split View with Smooth Crossfade Animation) */}
            <div className="p-8 sm:p-12 lg:p-14 overflow-hidden min-h-[380px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
                >
                  {/* Left Narrative */}
                  <div className="lg:col-span-7 space-y-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-cygnusa-sky block">
                      {current.tag}
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-cygnusa-void tracking-tight leading-tight">
                      {current.title}
                    </h2>
                    <p className="text-sm sm:text-base text-cygnusa-mist font-sans leading-relaxed">
                      {current.description}
                    </p>

                    <div className="pt-4 flex flex-wrap items-center gap-5">
                      <Button
                        href={current.ctaHref}
                        variant="outline"
                        size="lg"
                        className="rounded-full border-2 border-cygnusa-sky text-cygnusa-sky hover:bg-cygnusa-sky hover:text-white px-8 py-3 font-semibold transition-all duration-200 text-sm shadow-sm"
                      >
                        {current.ctaText}
                      </Button>
                      <a
                        href="/contact"
                        className="text-sm font-semibold text-cygnusa-mist hover:text-cygnusa-void inline-flex items-center gap-1.5 transition-colors"
                      >
                        <span>Talk to an expert</span>
                        <ArrowRight className="w-4 h-4 text-cygnusa-sky" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Clean Enterprise Hardware / Storage Chassis (Hitachi Vantara Reference) */}
                  <div className="lg:col-span-5 flex items-center justify-center">
                    <div className="relative w-full rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-950 aspect-[4/3] flex items-center justify-center group">
                      <img
                        src={current.image}
                        alt={current.alt}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />

                      {/* Subtle bottom shadow overlay for pill contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                      {/* Floating Product Badge (Hitachi Vantara Reference Style) */}
                      <a
                        href={current.pillHref}
                        className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 text-xs font-semibold text-cygnusa-void shadow-lg backdrop-blur-md border border-slate-200/80 hover:bg-white hover:text-cygnusa-sky transition-all duration-200 group-hover:shadow-xl"
                      >
                        <span>{current.pillText}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-cygnusa-sky transition-transform group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
