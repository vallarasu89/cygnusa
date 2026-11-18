import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/layout/Container';
import { INSIGHTS } from '@/data/insights';
import { ArrowRight } from 'lucide-react';

export const InsightsSection: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-28 border-b border-cygnusa-border">
      <Container>
        {/* Centered Heading: "This just in" */}
        <div className="max-w-3xl mx-auto text-center space-y-2 mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-cygnusa-sky block">
            NEWS, UPDATES &amp; INSIGHTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-cygnusa-void tracking-tight">
            This just in
          </h2>
        </div>

        {/* 3 Clean Vertical Cards with Real Photography on Top matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSIGHTS.slice(0, 3).map((item, idx) => {
            const realImages = [
              'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
            ];

            return (
              <article
                key={item.id}
                className="bg-white border border-cygnusa-border rounded-[10px] overflow-hidden shadow-card hover:shadow-card-hover hover:border-cygnusa-sky/50 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Real Photography Banner */}
                  <div className="h-48 w-full relative overflow-hidden bg-slate-900">
                    <img
                      src={realImages[idx % realImages.length]}
                      alt={item.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-6 flex flex-col justify-between" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md text-white text-[11px] font-sans font-medium rounded-full">
                          {item.category}
                        </span>
                        <span className="text-xs text-slate-200 font-sans font-medium drop-shadow">
                          {item.readTime}
                        </span>
                      </div>
                      <div className="text-white text-xs font-sans font-semibold tracking-wider opacity-90 drop-shadow">
                        CYGNUSA PERSPECTIVE
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-cygnusa-sky block">
                      {item.tags[0] || 'Strategic IT'}
                    </span>

                    <h3 className="text-base font-bold font-heading text-cygnusa-void hover:text-cygnusa-sky transition-colors leading-snug">
                      <Link to={`/insights/${item.slug}`}>{item.title}</Link>
                    </h3>

                    <p className="text-xs text-cygnusa-mist font-sans leading-relaxed line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to={`/insights/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cygnusa-sky hover:text-cygnusa-sky-hover group"
                  >
                    <span>Read the article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
