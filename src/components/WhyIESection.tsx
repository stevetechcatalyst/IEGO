import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  Building, 
  GraduationCap, 
  Train, 
  DollarSign, 
  Home,
  CheckCircle2,
  TrendingUp,
  Compass,
  ChevronRight
} from 'lucide-react';
import { WHY_IE_CONTENT } from '../data/siteContent';

interface WhyIESectionProps {
  onOpenPagePreview: (pageId: string) => void;
  onOpenFeatureModal?: (modalId: string) => void;
}

export const WhyIESection: React.FC<WhyIESectionProps> = ({ 
  onOpenPagePreview,
  onOpenFeatureModal 
}) => {
  const [selectedAdvantage, setSelectedAdvantage] = useState<string | null>(null);

  const regionalPillars = [
    { label: 'Transportation & Logistics Corridor', modalId: 'transportation', icon: Train, badge: 'Interstate 10, 15, 215 & Rail' },
    { label: 'Tier 1 Research Universities', modalId: 'higher-education', icon: GraduationCap, badge: 'UC Riverside, Loma Linda, CSUSB' },
    { label: '2M+ Skilled Workforce', modalId: 'workforce', icon: Building, badge: 'Young, Diverse & Multilingual' },
    { label: '$238B+ Regional Economy', modalId: 'gross-regional-product', icon: DollarSign, badge: '13th Largest Economy in U.S.' },
    { label: 'High Quality of Life & Culture', modalId: 'quality-of-life', icon: Sparkles, badge: 'Mountains, Deserts & Metros' },
    { label: 'Affordable & Executive Housing', modalId: 'affordable-housing', icon: Home, badge: 'Comparative Value vs Coast' },
  ];

  return (
    <section id="why-inland-empire" className="py-24 sm:py-32 bg-slate-950 border-t border-slate-800/80 relative overflow-hidden">
      {/* Top border subtle accent line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#ff6b01]/30 to-transparent" />

      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#0090b2]/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#ff6b01]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Pill Tag & Bold Modern Typography */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-bold text-cyan-400 mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>REGIONAL COMPETITIVE ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {WHY_IE_CONTENT.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Positioned at the epicentre of Southern California’s commerce, talent pipeline, and industrial evolution.
          </p>
        </div>

        {/* Bento Grid Layout (Modern Flexbox/Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Authentic Narrative with High Whitespace & Hierarchy (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 shadow-2xl hover:border-slate-700/80 transition-all duration-300">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#0090b2]">
                <span>Southern California Growth Engine</span>
                <span className="text-slate-700">•</span>
                <span className="text-slate-400">Strategic Positioning</span>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {WHY_IE_CONTENT.bodyParagraphs.map((paragraph, index) => (
                  <p 
                    key={index} 
                    className={index === 0 ? "text-white font-medium text-base sm:text-lg leading-relaxed" : "text-slate-300"}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Interactive Pill Tags for Regional Advantages */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Strategic Pillars &bull; Click to Explore Details
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {regionalPillars.map((pillar, idx) => {
                    const Icon = pillar.icon;
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          setSelectedAdvantage(pillar.label);
                          if (onOpenFeatureModal) onOpenFeatureModal(pillar.modalId);
                        }}
                        className="inline-flex items-center justify-between p-2.5 px-3.5 rounded-xl text-xs font-semibold bg-slate-950/60 hover:bg-slate-800/80 text-slate-300 hover:text-white border border-slate-800 hover:border-cyan-500/40 transition-all cursor-pointer group"
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          <Icon className="w-3.5 h-3.5 text-[#0090b2] shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="truncate">{pillar.label}</span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 shrink-0" />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-8 mt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenPagePreview('why-ie')}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full font-bold text-xs sm:text-sm text-white bg-[#0090b2] hover:bg-[#007b99] active:scale-95 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
              >
                <span>{WHY_IE_CONTENT.button.text}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenPagePreview('data')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-xs sm:text-sm text-slate-300 bg-slate-800/80 hover:bg-slate-700 hover:text-white active:scale-95 transition-all border border-slate-700/60 cursor-pointer"
              >
                <span>Access Regional Data Reports</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Photo Showcase & Micro-Indicators (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl p-4 sm:p-5 bg-slate-900/60 backdrop-blur-xl border border-slate-800 shadow-2xl group hover:border-slate-700/80 transition-all duration-300">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950">
              <img
                src={WHY_IE_CONTENT.image.src}
                alt={WHY_IE_CONTENT.image.alt}
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

              {/* Location Badge */}
              <div className="absolute top-3 left-3">
                <div className="px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[11px] font-bold text-white flex items-center gap-1.5 shadow-md">
                  <MapPin className="w-3.5 h-3.5 text-[#00ab69]" />
                  <span>Historic Downtown Riverside &amp; Mountain Vista</span>
                </div>
              </div>

              {/* Dynamic Bottom Caption Pill */}
              <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800/80">
                <div className="text-[11px] font-bold text-[#0090b2] uppercase tracking-wider">
                  Quality of Life &amp; Economy
                </div>
                <div className="text-xs font-semibold text-slate-200 mt-0.5">
                  Combining urban cultural hubs, academic campuses, and accessible natural landscapes.
                </div>
              </div>
            </div>

            {/* Micro Indicator Cards */}
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <div className="p-3.5 rounded-2xl bg-slate-950/50 border border-slate-800/70">
                <div className="text-xs font-bold text-slate-400">Scale Rank</div>
                <div className="text-lg font-extrabold text-white mt-0.5">#13 in U.S.</div>
                <div className="text-[11px] text-emerald-400 mt-0.5 font-medium">Larger GDP than 25 states</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-950/50 border border-slate-800/70">
                <div className="text-xs font-bold text-slate-400">Median Age</div>
                <div className="text-lg font-extrabold text-white mt-0.5">33.8 Years</div>
                <div className="text-[11px] text-cyan-400 mt-0.5 font-medium">Younger than state median</div>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-800/70 flex items-center justify-between text-xs text-slate-400 px-1">
              <span>Bi-County Region: Riverside &amp; San Bernardino</span>
              <span className="text-emerald-400 font-semibold font-mono">52 Cities</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
