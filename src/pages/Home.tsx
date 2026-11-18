import React from 'react';
import { SEO } from '@/seo/SEO';
import { getOrganizationSchema, getWebsiteSchema } from '@/seo/schema';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { ChallengesSolutionsSection } from '@/components/sections/ChallengesSolutionsSection';
import { FeaturedReportSection } from '@/components/sections/FeaturedReportSection';
import { InsightsSection } from '@/components/sections/InsightsSection';
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection';
import { InteractiveGlobeSection } from '@/components/sections/InteractiveGlobe3D';
import { PartnershipStripSection } from '@/components/sections/PartnershipStripSection';
import { ResourcesDarkSection } from '@/components/sections/ResourcesDarkSection';
import { ContactCTASection } from '@/components/sections/ContactCTASection';

export const Home: React.FC = () => {
  const homeStructuredData = {
    '@graph': [getOrganizationSchema(), getWebsiteSchema()],
  };

  return (
    <>
      <SEO
        title="CYGNUSA Technologies | IT Consulting, Cloud, Security & AI Solutions"
        description="CYGNUSA Technologies helps SMBs modernise, secure and scale their business through strategic IT consulting, managed IT services, cloud, cybersecurity, software engineering and AI solutions."
        canonical="https://www.cygnusa.in/"
        structuredData={homeStructuredData}
      />

      {/* 1. Hero with Floating Overlapping White Card (Hitachi Vantara Reference) */}
      <HeroSection />

      {/* 2. Customer Trust & Social Proof Statement */}
      <TrustSection />

      {/* 3. "Your challenges drive our solutions" Interactive Accordion */}
      <ChallengesSolutionsSection />

      {/* 4. Dark High-Impact Featured Report Banner */}
      <FeaturedReportSection />

      {/* 5. "This just in" Insights & News Grid */}
      <InsightsSection />

      {/* 6. Customer Impact Story with Floating White Card */}
      <CaseStudiesSection />

      {/* 7. Interactive 3D Real-World Earth: Global Delivery Grid */}
      <InteractiveGlobeSection />

      {/* 8. Vibrant Enterprise Partnership Action Strip */}
      <PartnershipStripSection />

      {/* 9. Resources & Insights Dark Container */}
      <ResourcesDarkSection />

      {/* 10. Minimal Fluid Pre-Footer: "Ready to give it a try?" */}
      <ContactCTASection />
    </>
  );
};
