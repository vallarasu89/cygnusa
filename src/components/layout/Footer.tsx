import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './Container';
import { Linkedin, Twitter, Instagram, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-cygnusa-void border-t border-cygnusa-border font-sans pt-16 pb-12">
      <Container>
        {/* Top Centered Brand & Socials (Matching Hitachi Vantara Screenshot) */}
        <div className="flex flex-col items-center justify-center space-y-4 pb-12 border-b border-cygnusa-border/80 text-center">
          <Link to="/" className="inline-block" aria-label="CYGNUSA Technologies">
            <img
              src="/logos/cygnusa-logo.png"
              alt="CYGNUSA Technologies"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="text-xs text-cygnusa-mist max-w-md font-sans">
            Innovating with Technology, Delivering with Strategy. Unified IT consulting, cloud infrastructure, and enterprise software engineering.
          </p>

          {/* Social Icons in Circles */}
          <div className="flex items-center space-x-3 pt-2">
            <a
              href="https://www.linkedin.com/company/cygnusa-technologies"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-cygnusa-border flex items-center justify-center text-cygnusa-void hover:border-cygnusa-sky hover:text-cygnusa-sky transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com/cygnusatech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-cygnusa-border flex items-center justify-center text-cygnusa-void hover:border-cygnusa-sky hover:text-cygnusa-sky transition-colors"
              aria-label="Twitter / X"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/cygnusatech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-cygnusa-border flex items-center justify-center text-cygnusa-void hover:border-cygnusa-sky hover:text-cygnusa-sky transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 4-Column Clean Enterprise Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-cygnusa-border/80 text-xs">
          <div className="space-y-3">
            <h4 className="font-bold font-heading uppercase tracking-wider text-cygnusa-void">
              Company
            </h4>
            <ul className="space-y-2 text-cygnusa-mist">
              <li>
                <Link to="/about" className="hover:text-cygnusa-sky transition-colors">
                  About CYGNUSA
                </Link>
              </li>
              <li>
                <Link to="/about#approach" className="hover:text-cygnusa-sky transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link to="/about#leadership" className="hover:text-cygnusa-sky transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/about#global" className="hover:text-cygnusa-sky transition-colors">
                  Global Footprint
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cygnusa-sky transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold font-heading uppercase tracking-wider text-cygnusa-void">
              Services
            </h4>
            <ul className="space-y-2 text-cygnusa-mist">
              <li>
                <Link to="/services/virtual-cto" className="hover:text-cygnusa-sky transition-colors">
                  Virtual CTO
                </Link>
              </li>
              <li>
                <Link to="/services/managed-it-cloud" className="hover:text-cygnusa-sky transition-colors">
                  Managed IT &amp; Cloud
                </Link>
              </li>
              <li>
                <Link to="/services/security-compliance" className="hover:text-cygnusa-sky transition-colors">
                  Security &amp; ISO 27001
                </Link>
              </li>
              <li>
                <Link to="/services/software-engineering" className="hover:text-cygnusa-sky transition-colors">
                  Software Engineering
                </Link>
              </li>
              <li>
                <Link to="/services/ai-automation" className="hover:text-cygnusa-sky transition-colors">
                  AI &amp; Automation
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold font-heading uppercase tracking-wider text-cygnusa-void">
              Solutions &amp; Industries
            </h4>
            <ul className="space-y-2 text-cygnusa-mist">
              <li>
                <Link to="/solutions" className="hover:text-cygnusa-sky transition-colors">
                  Cloud &amp; Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-cygnusa-sky transition-colors">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link to="/industries/manufacturing" className="hover:text-cygnusa-sky transition-colors">
                  Manufacturing &amp; Automotive
                </Link>
              </li>
              <li>
                <Link to="/industries/energy-utilities" className="hover:text-cygnusa-sky transition-colors">
                  Energy &amp; FuelTech
                </Link>
              </li>
              <li>
                <Link to="/industries/aviation" className="hover:text-cygnusa-sky transition-colors">
                  Aviation Operations
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold font-heading uppercase tracking-wider text-cygnusa-void">
              Governance &amp; Trust
            </h4>
            <ul className="space-y-2 text-cygnusa-mist">
              <li className="flex items-center gap-1.5 text-cygnusa-void font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-cygnusa-sky" />
                <span>ISO/IEC 27001:2022</span>
              </li>
              <li className="flex items-center gap-1.5 text-cygnusa-void font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-cygnusa-sky" />
                <span>ISO 20000-1:2018</span>
              </li>
              <li className="flex items-center gap-1.5 text-cygnusa-void font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-cygnusa-sky" />
                <span>ISO 9001:2015</span>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-cygnusa-sky transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <span className="text-slate-400">CIN: U72900TN2020PTC135633</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cygnusa-mist gap-4">
          <p>© {new Date().getFullYear()} CYGNUSA Technologies Private Limited. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/privacy-policy" className="hover:text-cygnusa-sky transition-colors">
              Terms of Use
            </Link>
            <Link to="/privacy-policy" className="hover:text-cygnusa-sky transition-colors">
              Privacy Notice
            </Link>
            <Link to="/contact" className="hover:text-cygnusa-sky transition-colors">
              Trust Center
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
