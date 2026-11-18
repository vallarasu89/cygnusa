import React from 'react';
import { SEO } from '@/seo/SEO';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ShieldCheck } from 'lucide-react';
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

      {/* Hero Header */}
      <section className="bg-white py-14 md:py-20 border-b border-cygnusa-border">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-cygnusa-sky mb-2 block">
              About CYGNUSA Technologies
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-cygnusa-void tracking-tight leading-tight">
              Technology Partner. Not Just a Vendor.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-cygnusa-mist font-sans leading-relaxed">
              We help growing businesses build, modernise, secure and scale their technology ecosystem through strategic IT consulting, cloud infrastructure, and enterprise software engineering.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission & Story */}
      <section className="bg-slate-50/70 py-16 md:py-20 border-b border-cygnusa-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-cygnusa-void">
                Bridging Strategic Advisory with Technical Execution
              </h2>
              <p className="text-sm sm:text-base text-cygnusa-mist leading-relaxed font-sans">
                Founded in 2020 by veteran enterprise technologists, CYGNUSA Technologies was created to eliminate the common disconnect in IT outsourcing: consulting firms that deliver static advice without execution, or software shops that write code without understanding business goals.
              </p>
              <p className="text-sm sm:text-base text-cygnusa-mist leading-relaxed font-sans">
                We embed senior technology leadership directly into executive teams. From our global engineering headquarters in Chennai and academic R&D center in IIT Guwahati, we support high-growth SMBs and established enterprises across North America, Europe, the Middle East, and Asia-Pacific.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white p-6 border border-cygnusa-border rounded-[8px] shadow-card space-y-4">
                <h3 className="text-base font-bold font-heading text-cygnusa-void pb-3 border-b border-cygnusa-border/70">
                  Company Snapshot
                </h3>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-cygnusa-mist">Incorporated:</span>
                    <span className="font-semibold text-cygnusa-void">2020</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-cygnusa-mist">Leadership Experience:</span>
                    <span className="font-semibold text-cygnusa-void">25+ Years Combined</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-cygnusa-mist">Global Delivery HQ:</span>
                    <span className="font-semibold text-cygnusa-void">Chennai, India</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-cygnusa-mist">R&amp;D Center:</span>
                    <span className="font-semibold text-cygnusa-void">IIT Guwahati Campus</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-cygnusa-mist">Corporate Identifier:</span>
                    <span className="font-semibold text-cygnusa-void">CIN U72900TN2020PTC135633</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values: C-Y-G-N-U-S-A */}
      <section id="values" className="bg-white py-16 md:py-24 border-b border-cygnusa-border">
        <Container>
          <SectionHeading
            overline="Guiding Principles"
            title="The CYGNUSA Core Values"
            description="Our culture and operational decisions are anchored in seven non-negotiable principles."
            align="center"
            className="text-center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {acronymValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-cygnusa-border rounded-[8px] p-6 hover:border-cygnusa-sky/50 transition-colors shadow-subtle flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-[6px] bg-cygnusa-sky text-white font-heading font-bold text-lg flex items-center justify-center shrink-0">
                  {val.letter}
                </div>
                <div>
                  <h3 className="text-sm font-bold font-heading text-cygnusa-void">
                    {val.title}
                  </h3>
                  <p className="text-xs text-cygnusa-mist mt-1 leading-relaxed">
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

      {/* Certifications Section */}
      <section id="certifications" className="bg-slate-50/70 py-16 md:py-20 border-b border-cygnusa-border">
        <Container>
          <SectionHeading
            overline="Accredited Standards"
            title="Certified Enterprise Quality &amp; Security"
            description="We adhere to internationally audited frameworks to ensure maximum data protection, service reliability, and engineering discipline."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white border border-cygnusa-border rounded-[8px] p-6 shadow-card hover:border-cygnusa-sky/50 transition-colors"
              >
                <div className="p-2.5 bg-slate-100 rounded-[5px] text-slate-800 inline-block mb-4">
                  <ShieldCheck className="w-6 h-6 text-cygnusa-sky" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-cygnusa-sky block mb-1">
                  {cert.code}
                </span>
                <h3 className="text-base font-bold font-heading text-cygnusa-void mb-2">
                  {cert.title}
                </h3>
                <p className="text-xs text-cygnusa-mist leading-relaxed font-sans">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <ContactCTASection />
    </>
  );
};
