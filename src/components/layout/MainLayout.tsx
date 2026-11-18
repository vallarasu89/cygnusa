import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { BackToTop } from '@/components/common/BackToTop';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-cygnusa-void selection:bg-cygnusa-sky selection:text-white">
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};
