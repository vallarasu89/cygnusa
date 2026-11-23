import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SEO } from '@/seo/SEO';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { INSIGHTS } from '@/data/insights';
import { Clock, ArrowRight } from 'lucide-react';
import { ContactCTASection } from '@/components/sections/ContactCTASection';

export const Insights: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const categories = ['All', 'Tools & Templates', 'Article', 'Technology Update', 'Case Study'];

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && categories.includes(cat)) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ category: cat }, { replace: true });
    }
  };

  const filteredInsights =
    selectedCategory === 'All'
      ? INSIGHTS
      : INSIGHTS.filter((item) => item.category === selectedCategory);

  return (
    <>
      <SEO
        title="Insights, Articles & Research | CYGNUSA Technologies"
        description="Executive perspectives, technology architecture updates, and strategic cloud guidance from the CYGNUSA Technologies team."
        canonical="https://www.cygnusa.in/insights"
      />

      <Breadcrumbs items={[{ label: 'Insights' }]} />

      {/* Hero */}
      <section className="bg-white py-14 md:py-20 border-b border-cygnusa-border">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-cygnusa-sky mb-2 block">
              Knowledge &amp; Strategy
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-cygnusa-void tracking-tight leading-tight">
              Insights &amp; Executive Perspectives
            </h1>
            <p className="mt-4 text-base sm:text-lg text-cygnusa-mist font-sans leading-relaxed">
              In-depth analyses, technology frameworks, and strategic guidance on Virtual CTO leadership, enterprise cybersecurity, cloud cost governance, and practical AI adoption.
            </p>
          </div>
        </Container>
      </section>

      {/* Filter Tabs & Content Feed */}
      <section className="bg-slate-50/70 py-16 md:py-24 border-b border-cygnusa-border">
        <Container>
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-cygnusa-border/70">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleSelectCategory(cat)}
                className={`px-4 py-2 rounded-[5px] text-xs font-semibold font-heading transition-colors ${
                  selectedCategory === cat
                    ? 'bg-cygnusa-sky text-white shadow-sm'
                    : 'bg-white border border-cygnusa-border text-cygnusa-void hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInsights.map((item) => (
              <article
                key={item.id}
                className="bg-white border border-cygnusa-border rounded-[8px] p-6 shadow-card flex flex-col justify-between hover:border-cygnusa-sky/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-cygnusa-mist mb-3">
                    <span className="font-semibold uppercase tracking-wider text-cygnusa-sky text-[11px]">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <Clock className="w-3 h-3" />
                      {item.readTime}
                    </span>
                  </div>

                  <h2 className="text-base font-bold font-heading text-cygnusa-void hover:text-cygnusa-sky transition-colors mb-3 leading-snug">
                    <Link to={`/insights/${item.slug}`}>{item.title}</Link>
                  </h2>

                  <p className="text-xs text-cygnusa-mist leading-relaxed line-clamp-3 mb-6 font-sans">
                    {item.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-cygnusa-border/60 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    {item.publishedDate}
                  </span>
                  <Link
                    to={`/insights/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cygnusa-sky hover:text-cygnusa-sky-hover group"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTASection />
    </>
  );
};
