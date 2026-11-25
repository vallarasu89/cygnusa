import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/layout/Container';
import { ArrowRight, ShieldAlert, Server } from 'lucide-react';

export const ResourcesDarkSection: React.FC = () => {
  const resourceCards = [
    {
      id: 'res-1',
      tag: 'MULTI-CLOUD & FINOPS',
      title: 'Cloud Cost Optimization: A Practical Blueprint for Mid-Market CFOs and CTOs',
      description: 'How to rightsized over-provisioned cloud instances, eliminate orphan snapshots, and save up to 40% on AWS & Azure bills.',
      href: '/insights/why-growing-smbs-need-virtual-cto-2026',
      icon: Server,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'res-2',
      tag: 'CYBERSECURITY & AUDIT',
      title: 'Passing Enterprise Vendor Security Reviews with ISO 27001 Readiness',
      description: 'The step-by-step compliance roadmap required to meet stringent enterprise supplier security mandates.',
      href: '/insights/zero-trust-cybersecurity-smb-roadmap',
      icon: ShieldAlert,
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'res-3',
      tag: 'BUSINESS CONTINUITY & RESILIENCE',
      title: 'Zero-Downtime High Availability: Multi-Region Disaster Recovery Architecture',
      description: 'Proven active-passive and active-active clustering patterns ensuring business continuity and sub-minute recovery time objectives (RTO).',
      href: '/insights/cloud-finops-tco-calculator-template',
      icon: Server,
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="resources" className="bg-cygnusa-void text-white py-20 md:py-28 border-b border-slate-800 scroll-mt-24 relative">
      <div id="section-resources" className="scroll-mt-24" />
      <Container>
        {/* Centered Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-2 mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-cygnusa-sky block font-sans">
            KNOWLEDGE BASE &amp; FRAMEWORKS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold font-heading text-white tracking-tight">
            Resources &amp; Insights
          </h2>
          <p className="text-sm text-slate-400 font-sans">
            Technical whitepapers, architecture briefs, and practical roadmaps for enterprise engineering leaders.
          </p>
        </div>

        {/* 3 High-Impact Cards (Image/Gradient on top, White body underneath matching screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resourceCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white text-cygnusa-void rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-700/60 transition-shadow duration-200 group"
              >
                <div>
                  {/* Top Photographic Header with Real Image */}
                  <div className="h-48 relative overflow-hidden bg-slate-900 border-b border-slate-200">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-slate-950/20 p-6 flex flex-col justify-between" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none text-white">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-sans tracking-wider text-sky-300 uppercase font-semibold drop-shadow">
                          {card.tag}
                        </span>
                        <Icon className="w-5 h-5 text-cygnusa-sky drop-shadow" />
                      </div>
                      <div className="text-[11px] font-sans font-semibold text-slate-300 drop-shadow">
                        CYGNUSA TECHNICAL BRIEF
                      </div>
                    </div>
                  </div>

                  {/* White Card Body */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-base font-bold font-heading text-cygnusa-void hover:text-cygnusa-sky transition-colors leading-snug">
                      <Link to={card.href}>{card.title}</Link>
                    </h3>
                    <p className="text-xs text-cygnusa-mist font-sans leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to={card.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cygnusa-sky hover:text-cygnusa-sky-hover group"
                  >
                    <span>Read the article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
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
