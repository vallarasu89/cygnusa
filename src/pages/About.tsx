import React from 'react';
import { SEO } from '@/seo/SEO';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Button } from '@/components/common/Button';
import { ShieldCheck, CheckCircle2, Compass, Code, Server } from 'lucide-react';
import { TeamLanyardSection } from '@/components/sections/TeamLanyardSection';
import { ContactCTASection } from '@/components/sections/ContactCTASection';

export const About: React.FC = () => {
  const acronymValues = [
    { letter: 'C', title: 'Communicating honestly and directly', desc: 'Radical transparency with clients, fostering high-trust enterprise partnerships.' },
    { letter: 'Y', title: 'Young, agile and flexible in approach', desc: 'Quick adaptability to emerging tech stacks, shifting market priorities, and rapid pivots.' },
    { letter: 'G', title: 'Giving, guiding and growing our people', desc: 'Empowering engineering talent with mentorship, continuous learning, and professional elevation.' },
    { letter: 'N', title: 'Never compromising on quality', desc: 'Zero tolerance for technical debt, security shortcuts, or subpar client experiences.' },
    { letter: 'U', title: 'Unlearning & relearning to stay ahead', desc: 'Continual skill evolution, staying on the frontier of AI models, cloud patterns, and DevOps.' },
    { letter: 'S', title: 'Socially responsible in all actions', desc: 'Sustainable digital transformation and ethical governance creating positive societal impact.' },
    { letter: 'A', title: 'Always striving for excellence', desc: 'Benchmarking our solutions against world-class enterprise standards on every deployment.' },
  ];

  const certifications = [
    {
      code: 'ISO/IEC 27001:2022',
      title: 'Information Security Management System (ISMS)',
      desc: 'Certified security frameworks safeguarding enterprise data, intellectual property, and client confidentiality.',
    },
    {
      code: 'ISO 20000-1:2018',
      title: 'IT Service Management System (ITSM)',
      desc: 'Standardized SLA delivery, incident governance, and continuous service improvement operations.',
    },
    {
      code: 'ISO 9001:2015',
      title: 'Quality Management System (QMS)',
      desc: 'Enterprise-grade software delivery, rigorous QA benchmarks, and structured engineering workflows.',
    },
    {
      code: '#StartupIndia',
      title: 'DPIIT Recognized Startup',
      desc: 'Department for Promotion of Industry and Internal Trade, Ministry of Commerce & Industry, Government of India.',
    },
  ];

  return (
    <>
      <SEO
        title="About CYGNUSA Technologies | Enterprise IT Consulting & Engineering Partner"
        description="Learn about CYGNUSA Technologies, our 25+ years of combined technology leadership, Advise-Build-Run methodology, ISO certifications, and global footprint."
        canonical="https://www.cygnusa.in/about"
      />

      <Breadcrumbs items={[{ label: 'About Us' }]} />

      {/* Hero Header with Hitachi Vantara Inspiration (Large Bold Typography & Stat Strip) */}
      <section className="bg-gradient-to-b from-cygnusa-ether via-white to-white py-16 md:py-24 border-b border-cygnusa-border relative overflow-hidden">
        <div
          className="absolute -top-24 right-0 w-96 h-96 bg-cygnusa-sky/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="max-w-4xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-xs font-semibold text-cygnusa-sky font-heading uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-cygnusa-sky" />
              <span>About CYGNUSA Technologies</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-heading text-cygnusa-void tracking-tight leading-[1.12]">
              Technology Partner. <br />
              <span className="text-cygnusa-sky">Not Just a Vendor.</span>
            </h1>

            <p className="text-base sm:text-lg text-cygnusa-mist font-sans max-w-2xl leading-relaxed">
              We help growing businesses build, modernise, secure and scale their technology ecosystem through strategic IT consulting, cloud infrastructure, and enterprise software engineering.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="primary" size="lg" className="rounded-full bg-cygnusa-sky hover:bg-cygnusa-sky-hover text-white px-8 py-3 text-sm font-semibold shadow-sm">
                Schedule Technical Consultation
              </Button>
              <Button href="#operating-model" variant="outline" size="lg" className="rounded-full border-slate-300 text-cygnusa-void hover:bg-slate-100 px-7 py-3 text-sm font-semibold">
                Explore Our Methodology
              </Button>
            </div>
          </div>

          {/* 4-Column Statistics Strip (Hitachi Vantara Reference Style) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-14 pt-10 border-t border-slate-200">
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-cygnusa-border shadow-card space-y-1">
              <span className="block text-3xl sm:text-4xl font-bold font-heading text-cygnusa-cosmic tracking-tight">
                25+
              </span>
              <span className="text-xs sm:text-sm font-semibold text-cygnusa-void font-heading block">
                Years Combined Leadership
              </span>
              <span className="text-xs text-cygnusa-mist font-sans block">
                Senior enterprise architect advisory
              </span>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-cygnusa-border shadow-card space-y-1">
              <span className="block text-3xl sm:text-4xl font-bold font-heading text-cygnusa-green tracking-tight">
                99.9%
              </span>
              <span className="text-xs sm:text-sm font-semibold text-cygnusa-void font-heading block">
                Uptime SLA Commitment
              </span>
              <span className="text-xs text-cygnusa-mist font-sans block">
                Backed by 24/7/365 NOC monitoring
              </span>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-cygnusa-border shadow-card space-y-1">
              <span className="block text-3xl sm:text-4xl font-bold font-heading text-cygnusa-sky tracking-tight">
                100+
              </span>
              <span className="text-xs sm:text-sm font-semibold text-cygnusa-void font-heading block">
                Enterprise Deployments
              </span>
              <span className="text-xs text-cygnusa-mist font-sans block">
                Production-grade cloud &amp; microservices
              </span>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-cygnusa-border shadow-card space-y-1">
              <span className="block text-3xl sm:text-4xl font-bold font-heading text-cygnusa-violet tracking-tight">
                3
              </span>
              <span className="text-xs sm:text-sm font-semibold text-cygnusa-void font-heading block">
                Global Continents
              </span>
              <span className="text-xs text-cygnusa-mist font-sans block">
                North America, Europe, Asia-Pacific
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Alternating Content Block 1: Mission & Story (Image Right, Content Left) */}
      <section id="global" className="bg-white py-20 md:py-28 border-b border-cygnusa-border scroll-mt-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-cygnusa-cosmic font-heading block">
                  FOUNDING VISION &amp; PURPOSE
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold font-heading text-cygnusa-void tracking-tight leading-tight">
                  Bridging Strategic Advisory with Technical Execution
                </h2>
              </div>

              <p className="text-sm sm:text-base text-cygnusa-mist leading-relaxed font-sans">
                Founded in 2020 by veteran enterprise technologists, CYGNUSA Technologies was created to eliminate the common disconnect in IT outsourcing: consulting firms that deliver static slide decks without execution, or software shops that write code without understanding business goals.
              </p>

              <p className="text-sm sm:text-base text-cygnusa-mist leading-relaxed font-sans">
                We embed senior technology leadership directly into executive teams. From our global engineering headquarters in Chennai and academic R&amp;D center in IIT Guwahati, we support high-growth SMBs and established enterprises across North America, Europe, the Middle East, and Asia-Pacific.
              </p>

              {/* Company Snapshot Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                <div>
                  <span className="text-xs text-cygnusa-mist block">Incorporated</span>
                  <span className="font-heading font-bold text-sm text-cygnusa-void">2020</span>
                </div>
                <div>
                  <span className="text-xs text-cygnusa-mist block">Global Delivery HQ</span>
                  <span className="font-heading font-bold text-sm text-cygnusa-void">Chennai, India</span>
                </div>
                <div>
                  <span className="text-xs text-cygnusa-mist block">R&amp;D Center</span>
                  <span className="font-heading font-bold text-sm text-cygnusa-void">IIT Guwahati</span>
                </div>
              </div>
            </div>

            {/* Right Media Card (Hitachi Vantara Reference Style with Overlaid Snapshot) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                    alt="CYGNUSA Engineering Team in Session"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-slate-200 shadow-lg">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cygnusa-sky font-heading block mb-0.5">
                    CORPORATE IDENTIFIER
                  </span>
                  <p className="text-xs font-semibold text-cygnusa-void font-sans">
                    CIN: U72900TN2020PTC135633
                  </p>
                  <p className="text-[11px] text-cygnusa-mist mt-0.5">
                    Recognized by DPIIT under Ministry of Commerce &amp; Industry
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Alternating Content Block 2: Advise-Build-Run Model (Image Left, Content Right) */}
      <section id="approach" className="bg-cygnusa-ether py-20 md:py-28 border-b border-cygnusa-border scroll-mt-28">
        <div id="operating-model" className="scroll-mt-28" />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Media Card */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80"
                    alt="CYGNUSA Architecture and Engineering Pod"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 bg-cygnusa-cosmic text-white rounded-xl p-4 shadow-xl border border-blue-900/60">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-300 font-heading block mb-1">
                    EXECUTION ASSURANCE
                  </span>
                  <p className="text-xs font-normal text-slate-100 font-sans leading-relaxed">
                    "Every architecture recommendation we present is backed by our in-house engineering sprint pods ready to build and run it."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-cygnusa-cosmic font-heading block">
                  OPERATING METHODOLOGY
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold font-heading text-cygnusa-void tracking-tight leading-tight">
                  The Advise — Build — Run Framework
                </h2>
              </div>

              <p className="text-sm sm:text-base text-cygnusa-mist leading-relaxed font-sans">
                Our engagement model ensures continuity from early strategic alignment all the way to 24/7 production maintenance and continuous optimisation.
              </p>

              <div className="space-y-4 pt-2">
                {/* Step 1: Advise */}
                <div className="bg-white p-5 rounded-xl border border-cygnusa-border shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-cygnusa-sky shrink-0">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold font-heading text-cygnusa-void">
                      1. Advise — Strategic Leadership &amp; Virtual CTO
                    </h3>
                    <p className="text-xs text-cygnusa-mist mt-1 leading-relaxed font-sans">
                      Fractional C-suite guidance, cloud architecture blueprints, vendor evaluations, and audit-grade cybersecurity roadmaps without executive overhead.
                    </p>
                  </div>
                </div>

                {/* Step 2: Build */}
                <div className="bg-white p-5 rounded-xl border border-cygnusa-border shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-cygnusa-green shrink-0">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold font-heading text-cygnusa-void">
                      2. Build — Modern Software &amp; AI Engineering
                    </h3>
                    <p className="text-xs text-cygnusa-mist mt-1 leading-relaxed font-sans">
                      Production TypeScript microservices, mobile apps, cross-platform workflows, and secure private RAG AI integrations with automated CI/CD.
                    </p>
                  </div>
                </div>

                {/* Step 3: Run */}
                <div className="bg-white p-5 rounded-xl border border-cygnusa-border shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-cygnusa-violet shrink-0">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold font-heading text-cygnusa-void">
                      3. Run — 24/7 Managed NOC &amp; Continuous Optimization
                    </h3>
                    <p className="text-xs text-cygnusa-mist mt-1 leading-relaxed font-sans">
                      Contractual 99.9% uptime SLAs, proactive cloud FinOps cost governance, ISO 27001 audit support, and automated multi-region disaster recovery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values: C-Y-G-N-U-S-A (Hitachi Vantara Style Card Grid) */}
      <section id="values" className="bg-white py-20 md:py-28 border-b border-cygnusa-border scroll-mt-28">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-cygnusa-cosmic font-heading block">
              GUIDING PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-cygnusa-void tracking-tight">
              The CYGNUSA Guiding Values
            </h2>
            <p className="text-sm sm:text-base text-cygnusa-mist font-sans">
              Our culture, engineering standards, and client partnerships are anchored in the CYGNUSA acronym.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {acronymValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-white border border-cygnusa-border rounded-2xl p-6 shadow-card hover:border-cygnusa-sky/60 hover:shadow-lg transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-cygnusa-sky text-white font-heading font-bold text-lg flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  {val.letter}
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold font-heading text-cygnusa-void group-hover:text-cygnusa-sky transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs text-cygnusa-mist leading-relaxed font-sans">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Interactive Office Members 3D Lanyard Section */}
      <TeamLanyardSection />

      {/* Audited ISO Certifications & Governance (Abundance Green Trust Accent) */}
      <section id="certifications" className="bg-cygnusa-ether py-20 md:py-28 border-b border-cygnusa-border scroll-mt-28">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-cygnusa-cosmic font-heading block">
              ACCREDITED STANDARDS &amp; GOVERNANCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-cygnusa-void tracking-tight">
              Certified Enterprise Quality &amp; Security
            </h2>
            <p className="text-sm sm:text-base text-cygnusa-mist font-sans">
              We adhere to internationally audited frameworks to ensure maximum data protection, service reliability, and engineering discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white border border-cygnusa-border rounded-2xl p-6 shadow-card hover:border-cygnusa-green/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-cygnusa-green mb-4 group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cygnusa-green block mb-1.5 font-heading">
                    {cert.code}
                  </span>
                  <h3 className="text-base font-bold font-heading text-cygnusa-void mb-2 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-cygnusa-mist leading-relaxed font-sans">
                    {cert.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-cygnusa-green">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Audited &amp; Verified</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pre-Footer Action CTA */}
      <ContactCTASection />
    </>
  );
};
