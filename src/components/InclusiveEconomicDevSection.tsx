import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  GraduationCap, 
  Network, 
  DollarSign, 
  Globe2,
  TrendingUp,
  Layers,
  ChevronRight
} from 'lucide-react';
import { INCLUSIVE_DEV_CONTENT } from '../data/siteContent';

interface InclusiveEconomicDevSectionProps {
  onOpenPagePreview: (pageId: string) => void;
  onOpenFeatureModal?: (modalId: string) => void;
}

export const InclusiveEconomicDevSection: React.FC<InclusiveEconomicDevSectionProps> = ({
  onOpenPagePreview,
  onOpenFeatureModal,
}) => {
  const [activeInitiative, setActiveInitiative] = useState<number>(0);
  const [activeImpact, setActiveImpact] = useState<number | null>(null);

  const initiatives = [
    { 
      title: 'Workforce and Education', 
      subtitle: 'K-16 Pathways & Career Technical Ed',
      color: '#ff6b01', 
      accentBorder: 'border-orange-500/40',
      accentBg: 'bg-orange-500/10 text-orange-400',
      icon: GraduationCap,
      modalId: 'workforce',
      desc: 'Aligning 12 community colleges, research universities, and employer pipelines to prepare students for high-demand careers in clean tech, healthcare, and logistics.',
      metric: '12 Community Colleges Connected'
    },
    { 
      title: 'Regional Collaboration', 
      subtitle: 'Bi-County Civic & Private Alliance',
      color: '#0090b2', 
      accentBorder: 'border-cyan-500/40',
      accentBg: 'bg-cyan-500/10 text-cyan-400',
      icon: Network,
      modalId: 'b2b-connection',
      desc: 'Unifying 52 municipal leadership teams, tribal nations, county boards, and chambers into a coordinated regional advocacy and economic coalition.',
      metric: '52 Municipalities Coordinated'
    },
    { 
      title: 'Capital Investment', 
      subtitle: 'Catalytic Funding & Wealth Building',
      color: '#00ab69', 
      accentBorder: 'border-emerald-500/40',
      accentBg: 'bg-emerald-500/10 text-emerald-400',
      icon: DollarSign,
      modalId: 'gross-regional-product',
      desc: 'Channeling private equity, philanthropic catalytic capital, and state California Jobs First grants into local high-road employers and diverse entrepreneurs.',
      metric: '$238B+ Gross Regional Product'
    },
    { 
      title: 'Global Identification', 
      subtitle: 'Pacific Rim Trade & Infrastructure',
      color: '#38bdf8', 
      accentBorder: 'border-sky-500/40',
      accentBg: 'bg-sky-500/10 text-sky-400',
      icon: Globe2,
      modalId: 'transportation',
      desc: 'Positioning the Inland Empire as the nation’s premier inland logistics, green supply chain, and international trade gateway connecting the Ports of LA/Long Beach.',
      metric: '27,000+ Sq Miles Strategic Reach'
    },
  ];

  const impacts = [
    { label: 'Workforce', desc: 'Family-sustaining wages & upward mobility' },
    { label: 'Entrepreneurship', desc: 'Incubation, mentorship & small business support' },
    { label: 'Business Development', desc: 'Cluster expansion & targeted industry attraction' },
    { label: 'Quality of Life', desc: 'Clean air, healthcare access & neighborhood vitality' },
    { label: 'Access to Capital', desc: 'Equitable lending & venture opportunities' },
    { label: 'Increasing Prosperity', desc: 'Closing wealth gaps & expanding homeownership' },
    { label: 'Diversity, Equity & Inclusion', desc: 'Ensuring frontline communities lead the transition' },
  ];

  const currentInit = initiatives[activeInitiative];

  return (
    <section 
      id="inclusive-regional-economic-development" 
      className="py-24 sm:py-32 bg-slate-950 border-t border-slate-800/80 relative overflow-hidden"
    >
      {/* Top border subtle accent line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#00ab69]/30 to-transparent" />

      {/* Ambient background lighting */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-emerald-500/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Pill Tag & Bold Modern Typography */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400 mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>COLLECTIVE IMPACT ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {INCLUSIVE_DEV_CONTENT.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            A comprehensive, data-backed development model transforming systemic disparities into sustainable economic advantage through cross-sector alignment.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Bento Card: Authentic Narrative & Action (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 shadow-2xl hover:border-slate-700/80 transition-all duration-300">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-emerald-400">
                <span>Core Methodology</span>
                <span className="text-slate-700">•</span>
                <span className="text-slate-400">Equity &amp; Shared Prosperity</span>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {INCLUSIVE_DEV_CONTENT.bodyParagraphs.map((paragraph, index) => (
                  <p 
                    key={index} 
                    className={index === 0 ? "text-white font-medium text-base sm:text-lg leading-relaxed" : "text-slate-300"}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenPagePreview('programs-services')}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full font-bold text-xs sm:text-sm text-white bg-[#00ab69] hover:bg-[#00945b] active:scale-95 transition-all shadow-lg shadow-emerald-500/20 cursor-pointer"
              >
                <span>{INCLUSIVE_DEV_CONTENT.button.text}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenPagePreview('industries')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-xs sm:text-sm text-slate-300 bg-slate-800/80 hover:bg-slate-700 hover:text-white active:scale-95 transition-all border border-slate-700/60 cursor-pointer"
              >
                <span>Explore Target Clusters</span>
              </button>
            </div>
          </div>

          {/* Right Bento Card: 4 Strategic Pillars Interactive Showcase (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Four Strategic Initiatives
                  </span>
                  <div className="text-sm font-extrabold text-white">
                    Select a Pillar to Inspect Strategy
                  </div>
                </div>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 font-mono">
                  0{activeInitiative + 1} / 04
                </span>
              </div>

              {/* 4 Initiative Selector Pills/Buttons */}
              <div className="grid grid-cols-2 gap-2.5 mb-6">
                {initiatives.map((init, idx) => {
                  const Icon = init.icon;
                  const isSelected = activeInitiative === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveInitiative(idx)}
                      className={`p-3 rounded-2xl text-left transition-all duration-200 cursor-pointer flex items-center gap-3 border ${
                        isSelected 
                          ? `${init.accentBorder} bg-slate-800/90 shadow-md` 
                          : 'border-slate-800 bg-slate-950/40 hover:bg-slate-800/50 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div 
                        className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                          isSelected ? init.accentBg : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <div className={`text-xs font-bold truncate ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                          {init.title}
                        </div>
                        <div className="text-[10px] text-slate-400 truncate">
                          {init.subtitle}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Active Pillar Deep-Dive Display Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/70 border border-slate-800/90 space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: currentInit.color }}
                    />
                    <span className="text-base font-extrabold text-white">
                      {currentInit.title}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300">
                    <TrendingUp className="w-3 h-3 text-[#00ab69]" />
                    <span>{currentInit.metric}</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {currentInit.desc}
                </p>

                {onOpenFeatureModal && (
                  <div className="pt-2">
                    <button
                      onClick={() => onOpenFeatureModal(currentInit.modalId)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0090b2] hover:text-cyan-300 transition-colors cursor-pointer"
                    >
                      <span>View Regional Deep-Dive &bull; {currentInit.title}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span>Framework aligned with California Jobs First (CERF)</span>
              <span className="text-emerald-400 font-semibold">Live Metric Synchronization</span>
            </div>
          </div>

        </div>

        {/* Regional Outcomes Grid: 7 Impact Pills / Modern Micro-Cards */}
        <div className="rounded-3xl p-6 sm:p-8 bg-slate-900/40 backdrop-blur-md border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800/80">
            <div>
              <div className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-1">
                Measured Collective Impact
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                Seven Key Regional Outcomes
              </h3>
            </div>
            <span className="text-xs text-slate-400">
              Translating policy alignment into measurable quality-of-life gains
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {impacts.map((impact, idx) => {
              const isSelected = activeImpact === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveImpact(isSelected ? null : idx)}
                  className={`p-3.5 rounded-2xl text-left transition-all duration-200 border cursor-pointer group ${
                    isSelected
                      ? 'bg-orange-500/15 border-orange-500/40 shadow-sm'
                      : 'bg-slate-950/40 border-slate-800/70 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {impact.label}
                    </span>
                    <CheckCircle2 className={`w-3.5 h-3.5 ${isSelected ? 'text-orange-400' : 'text-[#00ab69]'}`} />
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    {impact.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
