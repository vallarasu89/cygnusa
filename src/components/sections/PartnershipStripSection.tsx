import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/common/Button';

export const PartnershipStripSection: React.FC = () => {
  return (
    <section className="bg-white py-12 border-b border-cygnusa-border">
      <Container>
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-[12px] p-8 sm:p-10 shadow-xl border border-slate-800 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight">
              Partnerships that drive enterprise velocity
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-xl">
              Certified solution engineering backed by Tier-1 alliances across Microsoft Azure, AWS, Cisco, and CrowdStrike.
            </p>
          </div>

          <div className="shrink-0">
            <Button
              href="/contact"
              variant="outline"
              size="md"
              className="rounded-full bg-white text-slate-900 hover:bg-slate-100 hover:text-cygnusa-sky border-none font-semibold text-xs px-6 shadow-sm transition-colors"
            >
              Explore Partnerships
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
