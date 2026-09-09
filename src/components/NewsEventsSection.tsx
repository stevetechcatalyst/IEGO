import React, { useState } from 'react';
import { 
  Newspaper, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  ExternalLink,
  ChevronRight,
  Filter
} from 'lucide-react';
import { NEWS_ARTICLES } from '../data/mockData';
import { NewsArticle } from '../types';

interface NewsEventsSectionProps {
  onOpenPagePreview: (pageId: string) => void;
  onReadArticle: (article: NewsArticle) => void;
}

export const NewsEventsSection: React.FC<NewsEventsSectionProps> = ({
  onOpenPagePreview,
  onReadArticle,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Strategy & Policy', 'Cybersecurity', 'Workforce', 'Regional Investment'];

  const filteredNews = selectedCategory === 'all'
    ? NEWS_ARTICLES
    : NEWS_ARTICLES.filter((n) => n.category === selectedCategory);

  return (
    <section id="news" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 mb-3 border border-amber-200">
              <Newspaper className="w-3.5 h-3.5 text-amber-700" />
              <span>Regional Dispatches &amp; Research</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Latest News, Reports &amp; <span className="text-amber-600">Collaborative Insights</span>
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Stay informed on Inland Southern California&apos;s economic transformation, state catalyst funding milestones, and Center of Excellence research updates.
            </p>
          </div>
          <div className="mt-4 md:mt-0 shrink-0">
            <button
              onClick={() => onOpenPagePreview('news')}
              className="px-4 py-2 text-xs font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg shadow-xs flex items-center gap-1.5 transition-colors"
            >
              <span>Full News Page Blueprint</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white hover:bg-slate-200 text-slate-600 border border-slate-200'
              }`}
            >
              {cat === 'all' ? 'All Updates' : cat}
            </button>
          ))}
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredNews.map((article) => (
            <div
              key={article.id}
              className={`p-6 rounded-2xl border transition-all flex flex-col justify-between group ${
                article.featured
                  ? 'bg-white border-amber-300 shadow-md ring-1 ring-amber-400/30'
                  : 'bg-white border-slate-200 shadow-2xs hover:shadow-sm hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                    article.category === 'Cybersecurity'
                      ? 'bg-amber-100 text-amber-800 border border-amber-200'
                      : article.category === 'Strategy & Policy'
                      ? 'bg-blue-100 text-blue-800 border border-blue-200'
                      : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                  }`}>
                    {article.category}
                  </span>

                  <div className="flex items-center gap-3 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 group-hover:text-amber-600 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-400">
                  Via {article.source}
                </span>
                <button
                  onClick={() => onReadArticle(article)}
                  className="text-xs font-bold text-slate-900 hover:text-amber-600 flex items-center gap-1 transition-colors"
                >
                  <span>Read Dispatch</span>
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
