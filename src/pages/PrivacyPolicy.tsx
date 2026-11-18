import React from 'react';
import { SEO } from '@/seo/SEO';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';

export const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy & Data Protection | CYGNUSA Technologies"
        description="Review the official Privacy Policy and data protection standards of CYGNUSA Technologies Private Limited."
        canonical="https://www.cygnusa.in/privacy-policy"
      />

      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <section className="bg-white py-14 md:py-20 border-b border-cygnusa-border">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold font-heading text-cygnusa-void">
              Privacy Policy &amp; Data Governance
            </h1>
            <p className="text-xs text-cygnusa-mist">
              Last Updated: November 2026 | CYGNUSA Technologies Private Limited (CIN: U72900TN2020PTC135633)
            </p>

            <div className="prose prose-slate font-sans text-sm text-slate-700 leading-relaxed space-y-6 pt-4">
              <section className="space-y-2">
                <h2 className="text-lg font-bold font-heading text-cygnusa-void">
                  1. Information Security &amp; ISO 27001 Standards
                </h2>
                <p>
                  CYGNUSA Technologies is committed to safeguarding the privacy and security of confidential corporate data, technical intellectual property, and client business information. Our information governance frameworks are audited under ISO/IEC 27001:2022 standards.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold font-heading text-cygnusa-void">
                  2. Data Collected
                </h2>
                <p>
                  We collect information strictly necessary to provide enterprise technology consulting, managed cloud services, software engineering, and technical advisory. This includes contact details provided through inquiry forms (name, business email, company name, phone number) and technical logs required for system maintenance.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold font-heading text-cygnusa-void">
                  3. Use of Information
                </h2>
                <p>
                  Information provided to CYGNUSA Technologies is never sold, leased, or disclosed to third-party commercial marketing entities. Data is utilized exclusively to:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>Respond to sales and technical advisory inquiries.</li>
                  <li>Fulfill contractual SLAs and delivery milestones.</li>
                  <li>Maintain regulatory compliance with applicable Indian and international laws.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold font-heading text-cygnusa-void">
                  4. Non-Disclosure &amp; Client Confidentiality
                </h2>
                <p>
                  All software code, system credentials, cloud architectures, and commercial business data shared during client engagements are protected by binding bilateral Non-Disclosure Agreements (NDAs).
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold font-heading text-cygnusa-void">
                  5. Contact Data Protection Officer
                </h2>
                <p>
                  For inquiries regarding data privacy or to exercise rights under applicable data protection legislation (such as GDPR or India DPDP Act), contact us at:
                  <br />
                  <strong>Email:</strong> sales@cygnusa.in / info@cygnusa.in
                  <br />
                  <strong>Address:</strong> Express Estate, Anna Salai, Chennai, Tamil Nadu 600002, India.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
