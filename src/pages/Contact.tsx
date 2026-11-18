import React from 'react';
import { SEO } from '@/seo/SEO';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ContactForm } from '@/components/forms/ContactForm';
import { Mail, Phone, Clock, ShieldCheck } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <>
      <SEO
        title="Contact CYGNUSA Technologies | Connect with Strategic IT Experts"
        description="Connect with CYGNUSA Technologies. Reach out to our senior technology partners in Chennai and Guwahati to discuss strategic IT consulting, cloud infrastructure, and enterprise software engineering."
        canonical="https://www.cygnusa.in/contact"
      />

      <Breadcrumbs items={[{ label: 'Contact Us' }]} />

      {/* Hero */}
      <section className="bg-white py-14 md:py-20 border-b border-cygnusa-border">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-cygnusa-sky mb-2 block">
              Direct Access to Leadership
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-cygnusa-void tracking-tight leading-tight">
              Connect with Our Technical Team
            </h1>
            <p className="mt-4 text-base sm:text-lg text-cygnusa-mist font-sans leading-relaxed">
              Whether you are evaluating a Virtual CTO engagement, planning a cloud modernization sprint, or seeking audit-grade security compliance, our senior partners are ready to assist.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Contact Grid */}
      <section className="bg-slate-50/70 py-16 md:py-24 border-b border-cygnusa-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Details & Office Addresses (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Communication Channels */}
              <div className="bg-white p-6 sm:p-8 border border-cygnusa-border rounded-[8px] shadow-card space-y-5">
                <h2 className="text-lg font-bold font-heading text-cygnusa-void pb-3 border-b border-cygnusa-border/70">
                  Direct Inquiries
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-slate-100 rounded text-slate-800 shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-cygnusa-mist block">Enterprise Advisory &amp; Sales</span>
                      <a
                        href="mailto:sales@cygnusa.in"
                        className="text-sm font-semibold text-cygnusa-void hover:text-cygnusa-sky transition-colors"
                      >
                        sales@cygnusa.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-slate-100 rounded text-slate-800 shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-cygnusa-mist block">Direct Phone Line</span>
                      <a
                        href="tel:+919884081174"
                        className="text-sm font-semibold text-cygnusa-void hover:text-cygnusa-sky transition-colors"
                      >
                        +91-98840 81174
                      </a>
                      <span className="text-xs text-slate-400 block mt-0.5">
                        Office: +91-80438 43960
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-slate-100 rounded text-slate-800 shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-cygnusa-mist block">Operational Hours</span>
                      <span className="text-xs font-semibold text-cygnusa-void">
                        Monday – Friday: 9:00 AM – 7:00 PM IST
                      </span>
                      <span className="text-[11px] text-slate-500 block">
                        24/7/365 Tier-1 NOC monitoring for managed accounts
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div className="bg-white p-6 sm:p-8 border border-cygnusa-border rounded-[8px] shadow-card space-y-5">
                <h2 className="text-lg font-bold font-heading text-cygnusa-void pb-3 border-b border-cygnusa-border/70">
                  Office Locations
                </h2>

                <div className="space-y-4 text-xs">
                  <div className="space-y-1">
                    <span className="font-bold text-cygnusa-sky uppercase tracking-wider block">
                      Corporate &amp; Consulting Facility
                    </span>
                    <p className="text-cygnusa-mist leading-relaxed">
                      Express Estate, Anna Salai (No. 12 Anna Salai), Chennai, Tamil Nadu 600002, India
                    </p>
                  </div>

                  <div className="space-y-1 pt-2 border-t border-slate-100">
                    <span className="font-bold text-cygnusa-sky uppercase tracking-wider block">
                      Registered Headquarters
                    </span>
                    <p className="text-cygnusa-mist leading-relaxed">
                      50, Perumal Koil Garden, R.A. Puram, Chennai, Tamil Nadu 600028, India
                    </p>
                  </div>

                  <div className="space-y-1 pt-2 border-t border-slate-100">
                    <span className="font-bold text-cygnusa-sky uppercase tracking-wider block">
                      R&amp;D &amp; Academic Center
                    </span>
                    <p className="text-cygnusa-mist leading-relaxed">
                      IIT Research Park, IIT Guwahati Campus, Guwahati, Assam 781039, India
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-cygnusa-border/60 flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-cygnusa-sky shrink-0" />
                  <span>Mutual NDAs provided prior to any architecture review.</span>
                </div>
              </div>
            </div>

            {/* Right: Interactive Consultation Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
