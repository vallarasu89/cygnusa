import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
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
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  // Map icon names to Lucide icons
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
    <section className="bg-slate-50/70 py-16 md:py-24 border-b border-cygnusa-border">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            overline="Core Capabilities"
            title="Comprehensive Technology Services"
            description="From fractional executive leadership to 24/7 managed cloud and custom engineering, we provide end-to-end technology solutions."
            className="mb-0"
          />
          <Link
            to="/services"
            className="mt-4 md:mt-0 text-sm font-semibold text-cygnusa-sky hover:text-cygnusa-sky-hover inline-flex items-center gap-1.5 shrink-0"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.iconName] || Code;
            return (
              <div
                key={service.id}
                className="bg-white border border-cygnusa-border rounded-[8px] p-6 flex flex-col justify-between hover:border-cygnusa-sky/50 hover:shadow-card transition-all duration-150 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-[6px] bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 mb-5 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-colors duration-150">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-cygnusa-mist block mb-1">
                    {service.category}
                  </span>
                  <h3 className="text-lg font-bold font-heading text-cygnusa-void group-hover:text-cygnusa-sky transition-colors duration-150 mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-xs text-cygnusa-mist font-sans leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-cygnusa-border/60">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cygnusa-sky hover:text-cygnusa-sky-hover group/link"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
