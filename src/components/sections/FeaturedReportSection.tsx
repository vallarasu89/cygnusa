import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/common/Button';
import { FileText, ArrowRight, Download } from 'lucide-react';

export const FeaturedReportSection: React.FC = () => {
  return (
    <section className="bg-cygnusa-void text-white py-16 md:py-20 border-b border-slate-800">
      <Container>
        <div className="bg-slate-900 border border-slate-800 rounded-[12px] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          {/* Real Global Infrastructure Texture Backdrop */}
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"
            alt="CYGNUSA Global Enterprise Cloud & IT Research"
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.25] pointer-events-none"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold tracking-wider text-cygnusa-gold uppercase block font-heading">
                ★ SPECIAL EXECUTIVE RESEARCH REPORT
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-white tracking-tight leading-tight">
                The Rise of the Virtual CTO &amp; Unified Cloud Architecture for Mid-Market Enterprises
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                Discover how forward-thinking companies are eliminating cloud sprawl, implementing ISO 27001 zero-trust controls, and scaling mission-critical systems without hiring full-time $250k+ C-suite executives.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Button
                  href="/insights/why-growing-smbs-need-virtual-cto-2026"
                  variant="primary"
                  size="md"
                  className="rounded-full bg-cygnusa-gold hover:bg-amber-500 text-slate-950 px-7 font-bold text-xs tracking-wider shadow-md transition-all"
                >
                  Read the Report
                </Button>
                <a
                  href="/contact"
                  className="text-xs font-semibold text-slate-300 hover:text-cygnusa-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Executive Summary (PDF)</span>
                </a>
              </div>
            </div>

            {/* Right: Mockup of Whitepaper Document with Real Photography */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-64 sm:w-72 bg-white text-cygnusa-void rounded-xl p-6 shadow-2xl border border-slate-700 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-cygnusa-border">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-cygnusa-gold" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-cygnusa-gold font-heading">
                      CYGNUSA RESEARCH
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">2026 ED.</span>
                </div>

                <div className="h-32 relative rounded-lg overflow-hidden p-4 flex flex-col justify-end text-white">
                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80"
                    alt="Executive Briefing Cover"
                    className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.4]"
                    loading="lazy"
                  />
                  <div className="relative z-10">
                    <span className="text-[10px] font-semibold text-amber-300 uppercase tracking-wider">EXECUTIVE BRIEFING</span>
                    <h4 className="text-xs font-bold font-heading leading-tight mt-1">
                      The Modern Cloud &amp; Virtual CTO Blueprint
                    </h4>
                  </div>
                </div>

                <p className="text-[11px] text-slate-600 leading-relaxed font-sans">
                  24 pages of benchmark data, cloud FinOps frameworks, and ISO compliance roadmaps.
                </p>

                <div className="pt-2 border-t border-cygnusa-border flex items-center justify-between text-[11px] font-bold text-cygnusa-gold">
                  <span>UNRESTRICTED ACCESS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
