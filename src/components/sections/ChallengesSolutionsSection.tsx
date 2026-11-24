import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { motion, AnimatePresence } from 'framer-motion';

interface SolutionItem {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  webinarTitle: string;
  webinarLink: string;
  quote: string;
  quoteAuthor: string;
  imageUrl: string;
}

export const ChallengesSolutionsSection: React.FC = () => {
  const solutions: SolutionItem[] = [
    {
      id: 'storage-platforms',
      title: 'Storage Platforms',
      description:
        'Deliver data faster with a more predictable user experience and guaranteed availability.',
      ctaText: 'Learn more',
      ctaHref: '/services/managed-it-cloud',
      webinarTitle: 'Modernization: Expert Insights with Scott Sinclair',
      webinarLink: 'Watch the Webinar →',
      quote:
        "In healthcare, we can't compromise on reliability and performance — downtime directly impacts patient care and can be life-threatening. Our infrastructure needs to guarantee continuous availability for critical medical systems. That's why we trust CYGNUSA.",
      quoteAuthor: 'Mauro Guzelotto, VP of Cloud Services North America, T-Systems',
      imageUrl:
        'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'data-management',
      title: 'Data Management',
      description:
        'Unify disparate silos, automate governance, and unlock enterprise intelligence with zero-friction data pipelines.',
      ctaText: 'Learn more',
      ctaHref: '/services/ai-automation',
      webinarTitle: 'Unified Data Fabric: Breaking Silos at Enterprise Scale',
      webinarLink: 'Explore Solution Architecture →',
      quote:
        'Consolidating our distributed telemetry into a unified data architecture reduced analysis cycle times from weeks to hours without losing compliance auditability.',
      quoteAuthor: 'Siddharth N., Chief Data Officer, Coforge Global Accounts',
      imageUrl:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'hybrid-cloud',
      title: 'Hybrid Cloud Infrastructure',
      description:
        'Bridge on-premise resilience with multi-cloud agility across AWS, Azure, and private compute clusters.',
      ctaText: 'Learn more',
      ctaHref: '/services/managed-it-cloud',
      webinarTitle: 'Multi-Cloud Without Sprawl: Architecture Masterclass',
      webinarLink: 'Watch the Briefing →',
      quote:
        'CYGNUSA engineered our multi-region hybrid cloud mesh, eliminating failover downtime while slashing monthly hyperscaler waste by 32%.',
      quoteAuthor: 'Rajeswaran M., VP of Cloud Infrastructure & Operations',
      imageUrl:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'iaas',
      title: 'Infrastructure as a Service',
      description:
        'Elastic, enterprise-grade compute and bare-metal environments tailored for mission-critical production workloads.',
      ctaText: 'Learn more',
      ctaHref: '/solutions',
      webinarTitle: 'Next-Gen IaaS: High-Performance Compute on Demand',
      webinarLink: 'Download Technical Blueprint →',
      quote:
        'Having dedicated, SLA-backed compute nodes allowed our product engineering sprint teams to scale real-time processing seamlessly.',
      quoteAuthor: 'Elena Rostova, Head of Infrastructure Engineering',
      imageUrl:
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'ai-analytics',
      title: 'AI & Analytics',
      description:
        'Operationalize private, self-hosted LLMs, automated document extraction, and high-precision RAG pipelines.',
      ctaText: 'Learn more',
      ctaHref: '/services/ai-automation',
      webinarTitle: 'Enterprise AI: From Model Sandbox to Production ROI',
      webinarLink: 'Watch the AI Briefing →',
      quote:
        'CYGNUSA built private, self-hosted enterprise AI models keeping our proprietary IP 100% secure while automating 70% of document validation.',
      quoteAuthor: 'Karthik Sundaram, VP of Digital Transformation',
      imageUrl:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'cyber-resilience',
      title: 'Data Protection & Cyber Resilience',
      description:
        'Immutable air-gapped backups, Zero-Trust access, and rapid automated disaster recovery guaranteed against ransomware.',
      ctaText: 'Learn more',
      ctaHref: '/services/security-compliance',
      webinarTitle: 'Zero-Trust Defense: Bulletproof Cyber Resilience in 2026',
      webinarLink: 'Access Security Framework →',
      quote:
        'Their Zero-Trust architecture and automated failover passed rigorous ISO 27001 audits without a single defect, unlocking key enterprise tier deals.',
      quoteAuthor: 'David Chen, Chief Information Security Officer (CISO)',
      imageUrl:
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'customer-guarantees',
      title: 'Customer Guarantees & SLAs',
      description:
        'Backed by 99.9% uptime commitments, sub-15-minute critical incident response, and SLA-enforced engineering velocity.',
      ctaText: 'Learn more',
      ctaHref: '/about',
      webinarTitle: 'SLA-Driven IT: Measuring What Matters in Operations',
      webinarLink: 'Review Our SLA Guarantees →',
      quote:
        "CYGNUSA doesn't just promise availability; their contractual SLAs give our executive board complete peace of mind around business continuity.",
      quoteAuthor: 'Anand V., Director of Operations, TVS Group',
      imageUrl:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'flexible-consumption',
      title: 'Flexible Consumption and Financing',
      description:
        'Predictable OpEx models, transparent fractional Virtual CTO engagements, and rightsized cloud cost governance.',
      ctaText: 'Learn more',
      ctaHref: '/services/virtual-cto',
      webinarTitle: 'FinOps Mastery: Maximizing Software Gross Margins',
      webinarLink: 'Explore Consumption Models →',
      quote:
        'Fractional Virtual CTO advisory helped us avoid a $250k executive salary while steering our architecture towards 35% higher gross margins.',
      quoteAuthor: 'Marcus Thorne, Chief Financial Officer',
      imageUrl:
        'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const [activeId, setActiveId] = useState<string>('storage-platforms');
  const activeSolution = solutions.find((s) => s.id === activeId) || solutions[0];

  return (
    <section className="bg-white py-20 md:py-28 border-b border-cygnusa-border">
      <Container>
        {/* ============================================================ */}
        {/* SECTION HEADER (Hitachi Vantara Reference Style)             */}
        {/* ============================================================ */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <span className="text-sm font-semibold text-cygnusa-cosmic tracking-tight block mb-2 font-heading">
            We build customer-first
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold font-heading text-cygnusa-void tracking-tight leading-tight">
            Your challenges drive our solutions
          </h2>
        </div>

        {/* ============================================================ */}
        {/* MAIN SPLIT CARD CONTAINER                                     */}
        {/* ============================================================ */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-card border border-cygnusa-border max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* ======================================================== */}
            {/* LEFT COLUMN: Visual Media Card + Overlaid Cards          */}
            {/* ======================================================== */}
            <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
              {/* Top Media Showcase with Overlapping White Webinar Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-sm border border-cygnusa-border bg-slate-900 group">
                <div className="aspect-[16/11] sm:aspect-[4/3] w-full overflow-hidden bg-slate-950 relative">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeSolution.id}
                      src={activeSolution.imageUrl}
                      alt={activeSolution.title}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full object-cover object-center select-none"
                      loading="lazy"
                    />
                  </AnimatePresence>

                  {/* Gentle gradient overlay for enhanced readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20 pointer-events-none" />
                </div>

                {/* Overlapping White Info Card (Bottom-Left Corner) */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-8 sm:right-12 bg-white rounded-xl p-3.5 sm:p-4 shadow-lg border border-cygnusa-border z-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSolution.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                    >
                      <h4 className="text-xs font-bold text-cygnusa-void leading-snug mb-1.5 font-heading">
                        {activeSolution.webinarTitle}
                      </h4>
                      <a
                        href={activeSolution.ctaHref}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cygnusa-sky hover:text-cygnusa-sky transition-colors"
                      >
                        <span>{activeSolution.webinarLink}</span>
                      </a>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Bottom Card: Deep Cosmic Enterprise Testimonial (CYGNUSA Brand Palette) */}
              <div className="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-cygnusa-cosmic to-cygnusa-cosmic-navy text-white shadow-md border border-blue-900/40 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSolution.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-2.5"
                  >
                    <p className="text-xs sm:text-[13px] font-normal text-slate-100 leading-relaxed font-sans">
                      "{activeSolution.quote}"
                    </p>
                    <p className="text-[11px] sm:text-xs font-semibold text-sky-300 pt-1 font-heading">
                      {activeSolution.quoteAuthor}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* ======================================================== */}
            {/* RIGHT COLUMN: Permanent-Order Accordion List (Zero-Jump) */}
            {/* ======================================================== */}
            <div className="lg:col-span-7 flex flex-col justify-start divide-y divide-cygnusa-border">
              {solutions.map((item) => {
                const isActive = item.id === activeId;

                return (
                  <div key={item.id} className="py-1">
                    {/* Item Click Target Row */}
                    <button
                      type="button"
                      onClick={() => setActiveId(item.id)}
                      className="w-full py-3.5 sm:py-4 flex items-center justify-between text-left group transition-colors px-1 rounded-lg"
                    >
                      <span
                        className={
                          isActive
                            ? 'text-xl sm:text-2xl font-bold font-heading text-cygnusa-sky tracking-tight'
                            : 'text-sm sm:text-base font-semibold font-heading text-slate-800 group-hover:text-cygnusa-sky transition-colors'
                        }
                      >
                        {item.title}
                      </span>
                      {!isActive && (
                        <span className="text-xl font-light text-cygnusa-sky ml-4 transition-transform duration-200 group-hover:scale-125">
                          +
                        </span>
                      )}
                    </button>

                    {/* Smooth In-Place Expansion for Active Item */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key={`accordion-${item.id}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden px-1 pb-3"
                        >
                          <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed max-w-xl mb-4">
                            {item.description}
                          </p>
                          <a
                            href={item.ctaHref}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-cygnusa-sky text-cygnusa-sky hover:bg-cygnusa-sky hover:text-white font-semibold text-xs sm:text-[13px] transition-all duration-150 group shadow-sm"
                          >
                            <span>{item.ctaText}</span>
                            <span className="transition-transform duration-150 group-hover:translate-x-1">
                              →
                            </span>
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default ChallengesSolutionsSection;