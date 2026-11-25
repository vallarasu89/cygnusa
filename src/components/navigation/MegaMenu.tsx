import React, { useState, useEffect, useRef } from 'react';
import { NavItem } from '@/data/navigation';
import { MegaMenuSidebar } from './MegaMenuSidebar';
import { MegaMenuContent } from './MegaMenuContent';
import { MegaMenuFeatureCard } from './MegaMenuFeatureCard';
import { motion, AnimatePresence } from 'framer-motion';

interface MegaMenuProps {
  activeNavItem: NavItem;
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({
  activeNavItem,
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
}) => {
  const categories = activeNavItem.categories || [];
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    categories[0]?.id || ''
  );
  const menuRef = useRef<HTMLDivElement>(null);

  // Update active category when top nav item changes
  useEffect(() => {
    if (categories.length > 0) {
      setActiveCategoryId(categories[0].id);
    }
  }, [activeNavItem]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen || categories.length === 0) return null;

  const currentCategory =
    categories.find((cat) => cat.id === activeCategoryId) || categories[0];

  return (
    <motion.div
      ref={menuRef}
      id={`mega-menu-${activeNavItem.id}`}
      role="region"
      aria-label={`${activeNavItem.label} navigation menu`}
      initial={{ opacity: 0, y: -8, scaleY: 0.98 }}
      animate={{ opacity: 1, y: 0, scaleY: 1 }}
      exit={{ opacity: 0, y: -6, scaleY: 0.98 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: 'top center' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute top-full left-0 w-full bg-white border-b border-cygnusa-border shadow-2xl z-50 overflow-hidden"
    >
      <div className="w-full max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
        {/* Column 1: Sidebar (3 of 12 columns = 25% width) */}
        <div className="lg:col-span-3 h-full">
          <MegaMenuSidebar
            categories={categories}
            activeCategoryId={activeCategoryId}
            onSelectCategory={(id) => setActiveCategoryId(id)}
          />
        </div>

        {/* Column 2 & 3: Content + Feature Card (9 of 12 columns = 75% width) */}
        <div className="lg:col-span-9 h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategoryId}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 6 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="w-full h-full grid grid-cols-1 lg:grid-cols-9"
            >
              {/* Column 2: Center Content (5 of 9 columns = ~55.5% of the remaining area) */}
              <div className="lg:col-span-5 h-full">
                <MegaMenuContent
                  category={currentCategory}
                  onLinkClick={onClose}
                />
              </div>

              {/* Column 3: Feature Card (4 of 9 columns = ~44.4% of the remaining area) */}
              <div className="lg:col-span-4 h-full">
                <MegaMenuFeatureCard
                  card={currentCategory.featureCard}
                  onLinkClick={onClose}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};
