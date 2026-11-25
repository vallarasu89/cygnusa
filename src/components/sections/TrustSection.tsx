import React from 'react';
import { Container } from '@/components/layout/Container';
import { motion } from 'framer-motion';

// ==========================================
// 24 Authentic Trustee Logo Imports from
// src/assets/Trustee Logos/
// ==========================================
import brandMidasLogo from '@/assets/Trustee Logos/Picture1.png';
import airportzoLogo from '@/assets/Trustee Logos/Picture2.png';
import holidaySeasonzLogo from '@/assets/Trustee Logos/Picture3.png';
import mgmHotelsLogo from '@/assets/Trustee Logos/Picture4.png';
import academianLogo from '@/assets/Trustee Logos/Picture5.jpg';
import mediantLabsLogo from '@/assets/Trustee Logos/Picture6.png';
import buddyMentorLogo from '@/assets/Trustee Logos/Picture7.png';
import diyaAcademyLogo from '@/assets/Trustee Logos/Picture8.png';
import gozapLogo from '@/assets/Trustee Logos/Picture9.png';
import accessCxLogo from '@/assets/Trustee Logos/Picture10.jpg';
import coforgeLogo from '@/assets/Trustee Logos/Picture11.jpg';
import centumLogo from '@/assets/Trustee Logos/Picture12.png';
import rebusLogo from '@/assets/Trustee Logos/Picture13.jpg';
import yycLogo from '@/assets/Trustee Logos/Picture14.jpg';
import goldStakeLogo from '@/assets/Trustee Logos/Picture15.png';
import aaiLogo from '@/assets/Trustee Logos/Picture16.jpg';
import nitttrLogo from '@/assets/Trustee Logos/Picture17.png';
import niftLogo from '@/assets/Trustee Logos/Picture18.png';
import tvsLogo from '@/assets/Trustee Logos/Picture19.png';
import stellantisLogo from '@/assets/Trustee Logos/Picture20.png';
import agsLogo from '@/assets/Trustee Logos/Picture21.png';
import ognitronLogo from '@/assets/Trustee Logos/Picture22.png';
import watertecLogo from '@/assets/Trustee Logos/Picture23.png';
import tlcxLogo from '@/assets/Trustee Logos/tlcx-logo-fullcolor-1536x451.png';

interface OrbitBrand {
  id: string;
  name: string;
  image: string;
  category: string;
  ring: 'inner' | 'outer';
  leftPercent: string;
  topPercent: string;
  delay: number;
}

// ==========================================
// 24 Authentic Logo Images in 360° Circular Orbit
// ("cirsle maari munna pinna" - pure borderless images)
// Inner Ring: 10 Flagship Leaders (In Front - "Munna")
// Outer Ring: 14 Partner Accounts (Behind - "Pinna")
// ==========================================

const INNER_RING_LOGOS: OrbitBrand[] = [
  { id: 'stellantis', name: 'Stellantis', image: stellantisLogo, category: 'Global Automotive Conglomerate', ring: 'inner', leftPercent: '44.5%', topPercent: '18%', delay: 0 },
  { id: 'tvs', name: 'TVS Motors', image: tvsLogo, category: 'Automotive & Manufacturing Giant', ring: 'inner', leftPercent: '63%', topPercent: '23%', delay: 0.1 },
  { id: 'coforge', name: 'Coforge', image: coforgeLogo, category: 'Global IT & Digital Solutions', ring: 'inner', leftPercent: '74%', topPercent: '37%', delay: 0.2 },
  { id: 'watertec', name: 'Watertec', image: watertecLogo, category: 'Polymer & Engineering Infrastructure', ring: 'inner', leftPercent: '74%', topPercent: '56%', delay: 0.3 },
  { id: 'airportzo', name: 'Airportzo', image: airportzoLogo, category: 'Global Airport Tech & Concierge', ring: 'inner', leftPercent: '63%', topPercent: '70%', delay: 0.4 },
  { id: 'aai', name: 'Airports Authority of India (AAI)', image: aaiLogo, category: 'Aviation Infrastructure & Transit', ring: 'inner', leftPercent: '44.5%', topPercent: '75%', delay: 0.5 },
  { id: 'centum', name: 'Centum Learning', image: centumLogo, category: 'Global Skill & Corporate Training', ring: 'inner', leftPercent: '26%', topPercent: '70%', delay: 0.6 },
  { id: 'mgm', name: 'MGM Hotels & Resorts', image: mgmHotelsLogo, category: 'Hospitality & Entertainment', ring: 'inner', leftPercent: '15%', topPercent: '56%', delay: 0.7 },
  { id: 'nift', name: 'NIFT', image: niftLogo, category: 'National Higher Education Institution', ring: 'inner', leftPercent: '15%', topPercent: '37%', delay: 0.8 },
  { id: 'tlcx', name: 'TLCX', image: tlcxLogo, category: 'Customer Experience & SaaS Platform', ring: 'inner', leftPercent: '26%', topPercent: '23%', delay: 0.9 },
];

const OUTER_RING_LOGOS: OrbitBrand[] = [
  { id: 'academian', name: 'Academian', image: academianLogo, category: 'EdTech & Content Operations', ring: 'outer', leftPercent: '54%', topPercent: '5%', delay: 0.05 },
  { id: 'nitttr', name: 'NITTTR', image: nitttrLogo, category: 'Technical Research & Development', ring: 'outer', leftPercent: '72%', topPercent: '12%', delay: 0.15 },
  { id: 'access-cx', name: 'Access CX', image: accessCxLogo, category: 'Customer Engagement Cloud', ring: 'outer', leftPercent: '84%', topPercent: '27%', delay: 0.25 },
  { id: 'ags', name: 'AGS', image: agsLogo, category: 'Enterprise Technology Services', ring: 'outer', leftPercent: '88%', topPercent: '47%', delay: 0.35 },
  { id: 'ognitron', name: 'Ognitron', image: ognitronLogo, category: 'Advanced Engineering Solutions', ring: 'outer', leftPercent: '84%', topPercent: '67%', delay: 0.45 },
  { id: 'brandmidas', name: 'BrandMidas', image: brandMidasLogo, category: 'Digital Media & Growth Systems', ring: 'outer', leftPercent: '72%', topPercent: '82%', delay: 0.55 },
  { id: 'gozap', name: 'GoZap', image: gozapLogo, category: 'Mobility & Logistics Platforms', ring: 'outer', leftPercent: '54%', topPercent: '89%', delay: 0.65 },
  { id: 'gold-stake', name: 'Gold Stake', image: goldStakeLogo, category: 'Financial Technology Solutions', ring: 'outer', leftPercent: '34%', topPercent: '89%', delay: 0.75 },
  { id: 'mediant-labs', name: 'Mediant Labs', image: mediantLabsLogo, category: 'Software Research & Labs', ring: 'outer', leftPercent: '16%', topPercent: '82%', delay: 0.85 },
  { id: 'buddy-mentor', name: 'Buddy Mentor', image: buddyMentorLogo, category: 'EdTech & Mentorship Fabric', ring: 'outer', leftPercent: '4%', topPercent: '67%', delay: 0.95 },
  { id: 'diya-academy', name: 'Diya Academy', image: diyaAcademyLogo, category: 'Educational Infrastructure', ring: 'outer', leftPercent: '1%', topPercent: '47%', delay: 1.05 },
  { id: 'rebus', name: 'Rebus', image: rebusLogo, category: 'Business Process Automation', ring: 'outer', leftPercent: '4%', topPercent: '27%', delay: 1.15 },
  { id: 'yyc', name: 'YYC Accounting', image: yycLogo, category: 'Auditing & FinOps Governance', ring: 'outer', leftPercent: '16%', topPercent: '12%', delay: 1.25 },
  { id: 'holiday-seasonz', name: 'Holiday Seasonz', image: holidaySeasonzLogo, category: 'Travel & Lifestyle Tech', ring: 'outer', leftPercent: '34%', topPercent: '5%', delay: 1.35 },
];

export const TrustSection: React.FC = () => {
  return (
    <section
      id="trust-section"
      className="bg-white pt-60 sm:pt-72 lg:pt-80 pb-24 md:pb-32 border-b border-cygnusa-border relative overflow-hidden scroll-mt-24"
    >
      <div id="section-trust" className="scroll-mt-24" />
      <div id="trust" className="scroll-mt-24" />
      <Container className="relative">
        {/* ============================================================ */}
        {/* DESKTOP 360° CIRCULAR CONSTELLATION WITH PURE ORIGINAL IMAGES */}
        {/* Slid in from hidden sides ("aside la irunthu hide agi vara") */}
        {/* Zero Jumping: Pure horizontal entrance & stable placement   */}
        {/* ============================================================ */}
        <div className="hidden lg:flex relative w-full min-h-[820px] xl:min-h-[880px] items-center justify-center">
          {/* Central Core Authority Statement (Hitachi Vantara Reference Style) */}
          <div className="max-w-[520px] mx-auto text-center z-30 px-6 pointer-events-auto py-6">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="block text-sm font-semibold text-slate-800 tracking-tight mb-2"
            >
              Trust isn't given, it's earned
            </motion.span>

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-slate-950 tracking-tight leading-[1.22]"
            >
              The world's biggest brands rely on can't-fail sustainable infrastructure.
            </motion.h2>
          </div>

          {/* ============================================================ */}
          {/* INNER RING: 10 FLAGSHIP LOGO IMAGES ("Munna" - Front Layer)  */}
          {/* Slides in horizontally from the sides from hidden           */}
          {/* ============================================================ */}
          {INNER_RING_LOGOS.map((brand) => {
            const isLeft = parseFloat(brand.leftPercent) < 50;
            const initialX = isLeft ? -220 : 220;

            return (
              <div
                key={brand.id}
                style={{
                  position: 'absolute',
                  left: brand.leftPercent,
                  top: brand.topPercent,
                  transform: 'translate(-50%, -50%)',
                }}
                className="z-20 pointer-events-auto cursor-pointer group"
              >
                {/* Horizontal Slide-In from Hidden Sides */}
                <motion.div
                  initial={{ opacity: 0, x: initialX }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{
                    duration: 0.85,
                    delay: brand.delay * 0.35,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative flex items-center justify-center p-2"
                >
                  {/* Pure Original Logo Image (Cardless, Borderless, Zero-Jumping) */}
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="max-h-11 sm:max-h-12 max-w-[145px] sm:max-w-[165px] w-auto object-contain mix-blend-multiply transition-transform duration-200 group-hover:scale-108 select-none"
                    loading="lazy"
                  />

                  {/* Subtle Hover Tooltip */}
                  <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap bg-slate-900 text-white text-[11px] font-medium px-2.5 py-0.5 rounded shadow-lg z-40">
                    <span>{brand.name}</span>
                    <span className="text-cygnusa-sky ml-1.5">• {brand.category}</span>
                  </div>
                </motion.div>
              </div>
            );
          })}

          {/* ============================================================ */}
          {/* OUTER RING: 14 PARTNER LOGO IMAGES ("Pinna" - Outer Orbit)  */}
          {/* Slides in horizontally from the sides from hidden           */}
          {/* ============================================================ */}
          {OUTER_RING_LOGOS.map((brand) => {
            const isLeft = parseFloat(brand.leftPercent) < 50;
            const initialX = isLeft ? -260 : 260;

            return (
              <div
                key={brand.id}
                style={{
                  position: 'absolute',
                  left: brand.leftPercent,
                  top: brand.topPercent,
                  transform: 'translate(-50%, -50%)',
                }}
                className="z-10 pointer-events-auto cursor-pointer group"
              >
                {/* Horizontal Slide-In from Hidden Sides */}
                <motion.div
                  initial={{ opacity: 0, x: initialX }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.9,
                    delay: brand.delay * 0.35,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative flex items-center justify-center p-2"
                >
                  {/* Pure Original Logo Image (Cardless, Borderless, Zero-Jumping) */}
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="max-h-9 sm:max-h-10 max-w-[125px] sm:max-w-[145px] w-auto object-contain mix-blend-multiply opacity-90 transition-all duration-200 group-hover:opacity-100 group-hover:scale-108 select-none"
                    loading="lazy"
                  />

                  {/* Subtle Hover Tooltip */}
                  <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap bg-slate-900 text-white text-[11px] font-medium px-2.5 py-0.5 rounded shadow-lg z-40">
                    <span>{brand.name}</span>
                    <span className="text-cygnusa-sky ml-1.5">• {brand.category}</span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* MOBILE & TABLET LAYOUT (< lg screens)                        */}
        {/* Pure original borderless logo images in responsive grid     */}
        {/* Horizontal slide-in from hidden sides                        */}
        {/* ============================================================ */}
        <div className="lg:hidden">
          {/* Centered Headline on Mobile */}
          <div className="max-w-md mx-auto text-center mb-8">
            <span className="block text-xs sm:text-sm font-semibold text-cygnusa-cosmic tracking-tight mb-2">
              Trust isn't given, it's earned
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-cygnusa-void tracking-tight leading-snug">
              The world's biggest brands rely on can't-fail sustainable infrastructure.
            </h2>
          </div>

          {/* All 24 Logos in Stable Grid (Side-slide from hidden, Zero-Jumping) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-items-center">
            {[...INNER_RING_LOGOS, ...OUTER_RING_LOGOS].map((brand, idx) => {
              const initialX = idx % 2 === 0 ? -60 : 60;
              return (
                <motion.div
                  key={brand.id}
                  initial={{ opacity: 0, x: initialX }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.5, delay: (idx % 8) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="h-16 w-full flex items-center justify-center p-2 group"
                  title={`${brand.name} - ${brand.category}`}
                >
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="max-h-10 max-w-full object-contain mix-blend-multiply transition-transform duration-150 group-hover:scale-105"
                    loading="lazy"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
