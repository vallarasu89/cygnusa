import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { MapPin } from 'lucide-react';

export const GlobalPresenceSection: React.FC = () => {
  const globalLocations = [
    {
      country: 'India (HQ & Delivery)',
      cities: 'Chennai & Guwahati',
      role: 'Global Software Engineering, Cloud NOC & Academic R&D Hub',
      primary: true,
    },
    {
      country: 'United States',
      cities: 'California & Delaware',
      role: 'Enterprise Advisory, Client Success & Strategic Consulting',
      primary: false,
    },
    {
      country: 'Singapore',
      cities: 'Singapore CBD',
      role: 'Southeast Asia Enterprise Operations & FinTech Delivery',
      primary: false,
    },
    {
      country: 'Ireland (EU)',
      cities: 'Dublin',
      role: 'European Union Cloud & Regulatory Compliance Gateway',
      primary: false,
    },
    {
      country: 'Middle East',
      cities: 'Dubai, UAE',
      role: 'Energy, FuelTech Logistics & Retail Modernization',
      primary: false,
    },
    {
      country: 'Australia',
      cities: 'Sydney & Melbourne',
      role: 'Aviation Ground Tech & Workforce Digital Solutions',
      primary: false,
    },
  ];

  return (
    <section className="bg-slate-50/70 py-16 md:py-24 border-b border-cygnusa-border">
      <Container>
        <SectionHeading
          overline="Global Footprint"
          title="Engineered in India. Delivering Globally."
          description="A 24-hour round-the-clock delivery model connecting high-touch advisory hubs with our dedicated engineering centers."
          align="center"
          className="text-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {globalLocations.map((loc, idx) => (
            <div
              key={idx}
              className={`bg-white border rounded-[8px] p-6 shadow-subtle ${
                loc.primary ? 'border-cygnusa-sky/60 ring-1 ring-cygnusa-sky/20' : 'border-cygnusa-border'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-slate-100 rounded text-slate-800">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold font-heading text-cygnusa-void">
                    {loc.country}
                  </h4>
                  <span className="text-xs text-cygnusa-sky font-semibold">
                    {loc.cities}
                  </span>
                </div>
              </div>
              <p className="text-xs text-cygnusa-mist leading-relaxed font-sans">
                {loc.role}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
