import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_DATA, NavItem } from '@/data/navigation';
import { MegaMenu } from './MegaMenu';
import { MobileNavigation } from './MobileNavigation';
import { GooeyNav } from './GooeyNav';
import { Search, Menu, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

export const Navbar: React.FC = () => {
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Page Scroll Progress Bar (Hitachi Vantara Reference)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const activeNavItem = NAVIGATION_DATA.find((item) => item.id === activeMenuId);

  // Close submenu on route change
  useEffect(() => {
    setActiveMenuId(null);
  }, [location.pathname]);

  // Scroll detection for sticky header transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: NavItem) => {
    setActiveMenuId((prev) => (prev === item.id ? null : item.id));
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white transition-all duration-200 border-b border-cygnusa-border relative">
        <div
          className={cn(
            'w-full bg-white transition-all duration-200',
            isScrolled
              ? 'bg-white/95 backdrop-blur-md border-b border-cygnusa-border/80 h-[80px]'
              : 'h-[88px]'
          )}
        >
          <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
            {/* Left: The Official CYGNUSA Logo */}
            <Link
              to="/"
              className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cygnusa-sky rounded transition-transform duration-150 hover:opacity-95"
              aria-label="CYGNUSA Technologies Home"
              onClick={() => setActiveMenuId(null)}
            >
              <img
                src="/logos/cygnusa-logo.png"
                alt="CYGNUSA Technologies"
                className={cn(
                  'w-auto object-contain transition-all duration-200',
                  isScrolled ? 'h-9 md:h-11' : 'h-10 md:h-12'
                )}
              />
            </Link>

            {/* Centre: Desktop Menu with WebGL Gooey Fluid Navigation (Click-to-Open Submenu Only) */}
            <div className="hidden lg:flex items-center h-full relative">
              <GooeyNav
                items={NAVIGATION_DATA.map((item) => ({
                  id: item.id,
                  label: item.label,
                  href: '#',
                  hasSubNav: Boolean(item.categories && item.categories.length > 0),
                  isOpen: activeMenuId === item.id,
                }))}
                activeIndex={
                  activeMenuId
                    ? NAVIGATION_DATA.findIndex((i) => i.id === activeMenuId)
                    : location.pathname !== '/'
                      ? Math.max(0, NAVIGATION_DATA.findIndex((i) => location.pathname.startsWith(i.href)))
                      : 0
                }
                theme="light"
                color="#0EA5E9"
                activeTextColor="#ffffff"
                size="md"
                frame={true}
                particleCount={20}
                spread={62}
                animationTime={850}
                timeVariance={280}
                gooeyness={0.58}
                wobble={0.2}
                hoverEffect
                onChange={(_index, item) => {
                  if (item.id) {
                    const navItem = NAVIGATION_DATA.find((i) => i.id === item.id);
                    if (navItem) handleNavClick(navItem);
                  }
                }}
              />
            </div>

            {/* Right: Search + Unique Premium Action Button */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Refined Search Trigger */}
              <button
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2.5 text-cygnusa-void hover:text-cygnusa-sky hover:bg-slate-100 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cygnusa-sky"
                aria-label="Search website"
                title="Search website"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Unique Enterprise Pill CTA Button */}
              <div className="hidden sm:block">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cygnusa-sky hover:bg-cygnusa-sky-hover text-white text-xs md:text-sm font-semibold font-sans tracking-wide shadow-sm transition-all duration-200 active:scale-[0.98]"
                >
                  <span>Contact Sales</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-cygnusa-void hover:text-cygnusa-sky hover:bg-slate-100 rounded-[5px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cygnusa-sky"
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Global Mega Menu Dropdown with Smooth Animation & Dimmed Backdrop */}
        <AnimatePresence>
          {activeNavItem && (
            <div key={`mega-wrapper-${activeNavItem.id}`}>
              {/* Dimmed backdrop overlay below navbar to focus on the submenu */}
              <motion.div
                key="mega-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setActiveMenuId(null)}
                className="fixed inset-0 top-[88px] bg-slate-950/20 backdrop-blur-[2px] z-40"
              />

              <MegaMenu
                activeNavItem={activeNavItem}
                isOpen={Boolean(activeMenuId)}
                onClose={() => setActiveMenuId(null)}
              />
            </div>
          )}
        </AnimatePresence>

        {/* Global Search Overlay */}
        {searchOpen && (
          <div className="border-t border-cygnusa-border bg-slate-50 py-3.5 px-4 sm:px-8 animate-mega-menu shadow-md">
            <div className="max-w-2xl mx-auto flex items-center gap-3">
              <Search className="w-5 h-5 text-cygnusa-sky" />
              <input
                type="text"
                placeholder="Search solutions, services, case studies or insights..."
                autoFocus
                className="w-full bg-transparent border-none text-sm text-cygnusa-void focus:outline-none placeholder:text-slate-400 font-sans"
                onKeyDown={(e) => {
                  if (e.key === 'Escape') setSearchOpen(false);
                }}
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-xs font-semibold text-cygnusa-mist hover:text-cygnusa-void uppercase px-2 py-1 rounded bg-slate-200/60"
              >
                ESC
              </button>
            </div>
          </div>
        )}

        {/* Global Page Scroll Progress Bar (CYGNUSA Brand Theme) */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-slate-200/40 pointer-events-none z-50 overflow-hidden">
          <motion.div
            style={{ scaleX }}
            className="h-full w-full bg-gradient-to-r from-cygnusa-cosmic via-cygnusa-sky to-cyan-400 origin-left shadow-[0_0_8px_rgba(14,165,233,0.5)]"
          />
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
