import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/layout/Container';
import { CASE_STUDIES } from '@/data/caseStudies';
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CASE_STUDY_MEDIA: Record<
  string,
  {
    image: string;
    quote: string;
    quoteAuthor: string;
    tabLabel: string;
  }
> = {
  'cs-1': {
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
    quote:
      'CYGNUSA engineered our mobile inspection platform, replacing manual paper checks and eliminating stock error margins across our multi-depot workshop network.',
    quoteAuthor: 'Operations Director, All Pro Auto Consultant (APAC)',
    tabLabel: 'Automotive & Parts',
  },
  'cs-2': {
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    quote:
      'Automating PESO compliance logs and geofenced bowser dispensing allowed us to scale from one city to multi-state operations with zero fuel discrepancy.',
    quoteAuthor: 'VP of Operations & Fleet Logistics, GoFuel',
    tabLabel: 'FuelTech Logistics',
  },
  'cs-3': {
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
    quote:
      'Replacing static PDFs and manual WhatsApp groups with real-time digital SOP tracking gave our operations teams 99.8% SLA adherence across international terminals.',
    quoteAuthor: 'Director of Airport Operations, Airportzo',
    tabLabel: 'Aviation & Concierge',
  },
  'cs-4': {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    quote:
      'The automated appraisal platform reduced review cycles from 8 weeks to under 10 days while tying individual milestones directly to executive business goals.',
    quoteAuthor: 'Chief Human Resources Officer, TLCX',
    tabLabel: 'Enterprise Workforce',
  },
};

export const CaseStudiesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const featuredCases = CASE_STUDIES.filter((cs) => cs.featured);
  const currentCase = featuredCases[activeIndex] || featuredCases[0];
  const currentMedia = CASE_STUDY_MEDIA[currentCase.id] || CASE_STUDY_MEDIA['cs-1'];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % featuredCases.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + featuredCases.length) % featuredCases.length);
  };

  return (
    <section id="case-studies" className="bg-cygnusa-ether py-20 md:py-28 border-b border-cygnusa-border scroll-mt-24 relative">
      <div id="section-case-studies" className="scroll-mt-24" />
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-cygnusa-cosmic tracking-tight block mb-2 font-heading">
              Client proof &amp; verified outcomes
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold font-heading text-cygnusa-void tracking-tight leading-tight">
              Real-world engineering. Verified impact.
            </h2>
          </div>
          <Link
            to="/case-studies"
            className="mt-4 md:mt-0 text-xs font-semibold text-cygnusa-cosmic hover:text-cygnusa-sky transition-colors inline-flex items-center gap-1.5 shrink-0"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Main Balanced Split Card Showcase (Hitachi Vantara Reference Style) */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-cygnusa-border shadow-card p-6 sm:p-8 lg:p-10 max-w-7xl mx-auto">
          {/* Top Interactive Tabs for Instant Story Selection */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-cygnusa-border/70 no-scrollbar">
            {featuredCases.map((cs, idx) => {
              const isSelected = activeIndex === idx;
              const media = CASE_STUDY_MEDIA[cs.id] || CASE_STUDY_MEDIA['cs-1'];
              return (
                <button
                  key={cs.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-150 whitespace-nowrap cursor-pointer ${isSelected
                    ? 'bg-cygnusa-sky text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 hover:text-slate-950'
                    }`}
                >
                  <span>{media.tabLabel}</span>
                  <span className="opacity-60 ml-1.5 text-[11px]">· {cs.client.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* ======================================================== */}
            {/* LEFT COLUMN: Narrative, Impact Metrics & Outcomes        */}
            {/* ======================================================== */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCase.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {/* Domain & Client Tag */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-cygnusa-sky uppercase tracking-wider">
                      {currentCase.domain}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      Client: <strong className="text-slate-800">{currentCase.client}</strong>
                    </span>
                  </div>

                  {/* Title & Solution Narrative */}
                  <div className="space-y-2.5">
                    <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold font-heading text-slate-950 leading-tight tracking-tight">
                      {currentCase.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                      {currentCase.solution}
                    </p>
                  </div>

                  {/* 3 High-Impact Metrics Strip */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 bg-slate-50/90 rounded-xl border border-slate-200/80">
                    {currentCase.metrics.map((m, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <span className="block text-xl sm:text-2xl font-bold font-heading text-cygnusa-green tracking-tight">
                          {m.value}
                        </span>
                        <span className="text-[11px] sm:text-xs text-slate-600 font-sans block leading-tight">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Key Outcomes List */}
                  <div className="space-y-2 pt-1">
                    <span className="text-xs font-semibold text-cygnusa-void block font-heading">
                      Verified Business Impact:
                    </span>
                    <ul className="space-y-2">
                      {currentCase.impact.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-sans leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-cygnusa-green shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Link & Pagination Controls */}
                  <div className="pt-4 border-t border-cygnusa-border/70 flex items-center justify-between">
                    <Link
                      to={`/case-studies/${currentCase.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cygnusa-sky hover:bg-cygnusa-sky-hover text-white text-xs font-semibold transition-all duration-200 group shadow-sm whitespace-nowrap"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-150 group-hover:translate-x-1" />
                    </Link>

                    {/* Numeric Carousel Navigation */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                      <span>0{activeIndex + 1} / 0{featuredCases.length}</span>
                      <div className="flex items-center gap-1 ml-1">
                        <button
                          type="button"
                          onClick={handlePrev}
                          aria-label="Previous case study"
                          className="p-1.5 rounded-full border border-slate-200 hover:border-cygnusa-sky hover:text-cygnusa-sky text-slate-600 transition-colors cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={handleNext}
                          aria-label="Next case study"
                          className="p-1.5 rounded-full border border-slate-200 hover:border-cygnusa-sky hover:text-cygnusa-sky text-slate-600 transition-colors cursor-pointer"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ======================================================== */}
            {/* RIGHT COLUMN: Real Industry Photography + Quote Badge    */}
            {/* ======================================================== */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-2xl overflow-hidden shadow-sm border border-cygnusa-border bg-slate-950 h-full min-h-[380px] sm:min-h-[460px] flex flex-col justify-end p-5 sm:p-6 group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentCase.id}
                    src={currentMedia.image}
                    alt={currentCase.title}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full object-cover object-center select-none"
                    loading="lazy"
                  />
                </AnimatePresence>

                {/* Dark gradient overlay for crystal-clear readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none" />

                {/* Docked Executive Quote Card */}
                <div className="relative z-10 bg-slate-950/85 backdrop-blur-md rounded-xl p-4 sm:p-5 border border-white/15 text-white shadow-xl space-y-2.5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentCase.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-2"
                    >
                      <Quote className="w-5 h-5 text-sky-400/80" />
                      <p className="text-xs sm:text-[13px] font-normal text-slate-100 leading-relaxed font-sans">
                        "{currentMedia.quote}"
                      </p>
                      <p className="text-[11px] sm:text-xs font-semibold text-sky-300 font-heading pt-1">
                        — {currentMedia.quoteAuthor}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CaseStudiesSection;
