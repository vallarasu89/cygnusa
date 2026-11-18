import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_DATA, NavItem } from '@/data/navigation';
import { X, ChevronDown, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { cn } from '@/lib/utils';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
}) => {
  const [expandedNavId, setExpandedNavId] = useState<string | null>(null);
  const location = useLocation();

  // Close when route changes
  useEffect(() => {
    onClose();
  }, [location.pathname]);

  // Lock background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleSection = (id: string) => {
    setExpandedNavId((prev) => (prev === id ? null : id));
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      <div className="w-full max-w-md bg-white h-full flex flex-col shadow-2xl animate-mega-menu">
        {/* Mobile Header with Logo & Close Button */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-cygnusa-border bg-white">
          <Link to="/" onClick={onClose} className="flex items-center gap-2">
            <img
              src="/logos/cygnusa-logo.png"
              alt="CYGNUSA Technologies"
              className="h-9 w-auto object-contain"
            />
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 text-cygnusa-void hover:text-cygnusa-sky hover:bg-slate-100 rounded-[5px] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Navigation List */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-2">
          {NAVIGATION_DATA.map((item: NavItem) => {
            const isExpanded = expandedNavId === item.id;
            return (
              <div key={item.id} className="border-b border-cygnusa-border/60 pb-2">
                <button
                  type="button"
                  onClick={() => toggleSection(item.id)}
                  className="w-full flex items-center justify-between py-3 text-left font-heading font-semibold text-base text-cygnusa-void hover:text-cygnusa-sky transition-colors"
                  aria-expanded={isExpanded}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 text-slate-400 transition-transform duration-200',
                      isExpanded && 'rotate-180 text-cygnusa-sky'
                    )}
                  />
                </button>

                {/* Subcategories Accordion */}
                {isExpanded && item.categories && (
                  <div className="pl-3 pr-1 py-2 space-y-3 bg-slate-50 rounded-[4px] mb-2">
                    {item.categories.map((cat) => (
                      <div key={cat.id} className="space-y-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-cygnusa-sky block">
                          {cat.title}
                        </span>
                        <div className="pl-2 space-y-1.5 border-l-2 border-cygnusa-sky/40">
                          {cat.links.map((link, lIdx) => (
                            <Link
                              key={lIdx}
                              to={link.href}
                              onClick={onClose}
                              className="block py-1 text-sm text-cygnusa-mist hover:text-cygnusa-sky transition-colors"
                            >
                              {link.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Quick Direct Links */}
          <div className="pt-4 space-y-2">
            <Link
              to="/about"
              onClick={onClose}
              className="block py-2 font-heading font-semibold text-sm text-cygnusa-void hover:text-cygnusa-sky"
            >
              About CYGNUSA
            </Link>
            <Link
              to="/case-studies"
              onClick={onClose}
              className="block py-2 font-heading font-semibold text-sm text-cygnusa-void hover:text-cygnusa-sky"
            >
              Case Studies
            </Link>
            <Link
              to="/contact"
              onClick={onClose}
              className="block py-2 font-heading font-semibold text-sm text-cygnusa-void hover:text-cygnusa-sky"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile Drawer Footer with Contact Info & CTA */}
        <div className="p-6 border-t border-cygnusa-border bg-slate-50 space-y-4">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            className="w-full text-center"
            onClick={onClose}
          >
            Contact Sales
          </Button>

          <div className="space-y-2 text-xs text-cygnusa-mist pt-2">
            <a
              href="mailto:sales@cygnusa.in"
              className="flex items-center gap-2 hover:text-cygnusa-sky"
            >
              <Mail className="w-3.5 h-3.5 text-cygnusa-sky" />
              <span>sales@cygnusa.in</span>
            </a>
            <a
              href="tel:+919884081174"
              className="flex items-center gap-2 hover:text-cygnusa-sky"
            >
              <Phone className="w-3.5 h-3.5 text-cygnusa-sky" />
              <span>+91-98840 81174</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
