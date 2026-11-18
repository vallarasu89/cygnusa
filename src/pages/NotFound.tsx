import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/seo/SEO';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/common/Button';
import { FileQuestion, Home } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEO
        title="Page Not Found | CYGNUSA Technologies"
        description="The requested page could not be found. Navigate back to CYGNUSA Technologies home."
      />

      <section className="bg-slate-50 py-24 md:py-32 flex items-center justify-center min-h-[60vh]">
        <Container>
          <div className="max-w-md mx-auto text-center bg-white p-8 sm:p-10 border border-cygnusa-border rounded-[8px] shadow-card space-y-5">
            <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center mx-auto">
              <FileQuestion className="w-7 h-7 text-cygnusa-sky" />
            </div>

            <span className="text-4xl font-bold font-heading text-cygnusa-void block">
              404
            </span>

            <h1 className="text-xl font-bold font-heading text-cygnusa-void">
              Page Not Found
            </h1>

            <p className="text-xs text-cygnusa-mist leading-relaxed font-sans">
              The page you are looking for may have been moved, renamed, or is temporarily unavailable.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href="/" variant="primary" size="md">
                <Home className="w-4 h-4 mr-1.5" />
                Return to Home
              </Button>
              <Button href="/contact" variant="outline" size="md">
                Contact Support
              </Button>
            </div>

            <div className="pt-4 border-t border-cygnusa-border/70 text-xs text-slate-500">
              <span>Looking for services? </span>
              <Link to="/services" className="text-cygnusa-sky font-semibold hover:underline">
                Explore Services →
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
