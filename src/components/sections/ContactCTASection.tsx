import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/common/Button';
import { Mail, Phone } from 'lucide-react';

export const ContactCTASection: React.FC = () => {
  return (
    <section id="contact" className="bg-cygnusa-ether py-20 md:py-28 border-b border-cygnusa-border relative overflow-hidden scroll-mt-24">
      <div id="section-contact" className="scroll-mt-24" />
      {/* Subtle neutral lighting accent */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-white/70 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
          <div className="space-y-3 text-center md:text-left">
            <span className="text-sm font-semibold text-cygnusa-cosmic tracking-tight block mb-2 font-heading">
              Start a conversation
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold font-heading text-cygnusa-void tracking-tight leading-tight">
              Ready to give it a try?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-sans max-w-xl leading-relaxed">
              Connect with CYGNUSA's senior technology team to evaluate your infrastructure, review cloud costs, or plan an upcoming engineering sprint.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              withArrow
              className="rounded-full bg-cygnusa-sky hover:bg-cygnusa-sky-hover text-white px-8 py-3.5 font-semibold text-xs sm:text-sm shadow-sm transition-all duration-200 whitespace-nowrap"
            >
              Contact sales
            </Button>
          </div>
        </div>

        {/* Quick direct contact strip */}
        <div className="pt-12 mt-12 border-t border-cygnusa-border/60 flex flex-wrap items-center justify-center gap-8 text-xs text-cygnusa-mist">
          <a
            href="mailto:sales@cygnusa.in"
            className="flex items-center gap-2 hover:text-cygnusa-sky transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-cygnusa-sky" />
            <span>sales@cygnusa.in</span>
          </a>
          <a
            href="tel:+919884081174"
            className="flex items-center gap-2 hover:text-cygnusa-sky transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-cygnusa-sky" />
            <span>+91-98840 81174</span>
          </a>
          <span className="text-slate-400">
            Chennai (Global HQ) • IIT Guwahati (R&amp;D Hub)
          </span>
        </div>
      </Container>
    </section>
  );
};
