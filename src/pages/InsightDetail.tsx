import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '@/seo/SEO';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { INSIGHTS } from '@/data/insights';
import { Clock, Calendar, User, ArrowLeft } from 'lucide-react';
import { ContactCTASection } from '@/components/sections/ContactCTASection';

export const InsightDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = INSIGHTS.find((i) => i.slug === slug);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  return (
    <>
      <SEO
        title={`${article.title} | CYGNUSA Insights`}
        description={article.excerpt}
        canonical={`https://www.cygnusa.in/insights/${article.slug}`}
      />

      <Breadcrumbs
        items={[
          { label: 'Insights', href: '/insights' },
          { label: article.title },
        ]}
      />

      <article className="bg-white py-14 md:py-20 border-b border-cygnusa-border">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <Link
              to="/insights"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cygnusa-sky hover:text-cygnusa-sky-hover mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all insights</span>
            </Link>

            <span className="text-xs font-semibold uppercase tracking-wider text-cygnusa-sky block">
              {article.category}
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-cygnusa-void tracking-tight leading-tight">
              {article.title}
            </h1>

            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-cygnusa-mist py-3 border-y border-cygnusa-border/70">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-cygnusa-sky" />
                {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-cygnusa-sky" />
                {article.publishedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cygnusa-sky" />
                {article.readTime}
              </span>
            </div>

            {/* Body Content */}
            <div className="prose prose-slate max-w-none font-sans text-sm sm:text-base leading-relaxed space-y-4 pt-4 text-slate-700">
              {article.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Tags Strip */}
            <div className="pt-8 border-t border-cygnusa-border/70 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-500 mr-2">
                Topics:
              </span>
              {article.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-slate-100 border border-cygnusa-border rounded text-xs text-slate-700 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </article>

      <ContactCTASection />
    </>
  );
};
