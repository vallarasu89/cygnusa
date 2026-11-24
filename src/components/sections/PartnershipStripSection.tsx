import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/common/Button';

export const PartnershipStripSection: React.FC = () => {
  return (
    <section className="bg-white py-12 border-b border-cygnusa-border">
      <Container>
        <div className="bg-gradient-to-r from-slate-950 via-[#1a0f30] to-slate-950 rounded-[12px] p-8 sm:p-10 shadow-xl border border-purple-900/40 text-white flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cygnusa-violet text-white text-[10px] font-bold uppercase tracking-wider font-heading">
              <span>TIER-1 ENTERPRISE ALLIANCE</span>
            </div>
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
              className="rounded-full bg-white text-cygnusa-void hover:bg-purple-50 hover:text-cygnusa-violet hover:border-purple-300 border border-white font-semibold text-xs px-6 shadow-sm transition-all duration-200"
            >
              Explore Partnerships
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
