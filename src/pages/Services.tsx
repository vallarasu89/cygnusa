import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/seo/SEO';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SERVICES } from '@/data/services';
import {
  Compass,
  Cloud,
  ShieldCheck,
  Code,
  Cpu,
  Users,
  Building2,
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { ContactCTASection } from '@/components/sections/ContactCTASection';

export const Services: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Compass,
    Cloud,
    ShieldCheck,
    Code,
    Cpu,
    Users,
    Building2,
    ShoppingBag,
  };

  return (
    <>
      <SEO
        title="Enterprise Technology Services | CYGNUSA Technologies"
        description="Explore CYGNUSA's 8 core technology capabilities: Virtual CTO, Managed IT & Cloud, Cybersecurity & Compliance, Software Engineering, AI Integration, Staff Augmentation, Offshore Centers, and Reseller."
        canonical="https://www.cygnusa.in/services"
      />

      <Breadcrumbs items={[{ label: 'Services' }]} />

      {/* Hero */}
      <section className="bg-white py-14 md:py-20 border-b border-cygnusa-border">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-cygnusa-sky mb-2 block">
              Our Capabilities
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-cygnusa-void tracking-tight leading-tight">
              Enterprise Technology Services
            </h1>
            <p className="mt-4 text-base sm:text-lg text-cygnusa-mist font-sans leading-relaxed">
              We deliver structured technology consulting, modern software engineering, and 24/7 managed infrastructure operations tailored to fast-growth SMBs and established enterprises.
            </p>
          </div>
        </Container>
      </section>

      {/* Services List / Detail Cards */}
      <section className="bg-slate-50/70 py-16 md:py-24 border-b border-cygnusa-border">
        <Container>
          <div className="space-y-12">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.iconName] || Code;
              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className="bg-white border border-cygnusa-border rounded-[8px] p-8 md:p-10 shadow-card hover:border-cygnusa-sky/50 transition-colors"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Icon, Title & Narrative */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-[6px] bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-wider text-cygnusa-sky block">
                            {service.category}
                          </span>
                          <h2 className="text-xl sm:text-2xl font-bold font-heading text-cygnusa-void">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-sm font-semibold text-cygnusa-sky">
                        {service.tagline}
                      </p>

                      <p className="text-sm text-cygnusa-mist leading-relaxed font-sans">
                        {service.heroSummary}
                      </p>

                      <div className="pt-2">
                        <Link
                          to={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-cygnusa-sky hover:text-cygnusa-sky-hover group"
                        >
                          <span>Explore Full Service Architecture</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>

                    {/* Right: Key Capabilities & Benefits */}
                    <div className="lg:col-span-5 bg-slate-50 p-6 rounded-[6px] border border-cygnusa-border/70 space-y-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-cygnusa-void block">
                        Core Capabilities
                      </span>
                      <ul className="space-y-2 text-xs text-cygnusa-mist">
                        {service.keyCapabilities.slice(0, 4).map((cap, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-cygnusa-sky shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-3 border-t border-cygnusa-border/60">
                        <span className="text-[11px] font-semibold text-slate-500 uppercase block mb-1">
                          Technologies:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {service.techStack.slice(0, 5).map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[11px] bg-white border border-cygnusa-border px-2 py-0.5 rounded text-slate-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <ContactCTASection />
    </>
  );
};
