import React from 'react';
import { 
  ArrowRight, 
  BarChart3, 
  Database, 
  FileText, 
  CheckCircle2, 
  Building2, 
  Sparkles,
  Search,
  LineChart,
  ChevronRight
} from 'lucide-react';
import { REGIONAL_DATA_CONTENT } from '../data/siteContent';

interface RegionalDataSectionProps {
  onOpenPagePreview: (pageId: string) => void;
  onOpenFeatureModal?: (modalId: string) => void;
  onRequestData?: () => void;
}

export const RegionalDataSection: React.FC<RegionalDataSectionProps> = ({
  onOpenPagePreview,
  onOpenFeatureModal,
  onRequestData,
}) => {
  const dataAssets = [
    {
      title: 'Center of Excellence (COE)',
      desc: 'Empirical labor market intelligence serving 12 regional community colleges and workforce development boards.',
      modalId: 'center-of-excellence',
      icon: Database,
      tag: 'Workforce Research',
    },
    {
      title: 'Regional Economic & Demographic Data',
      desc: 'Comprehensive bi-county economic metrics, wage progression indices, and growth cluster forecasting.',
      modalId: 'regional-data',
      icon: BarChart3,
      tag: 'Econometric Models',
    },
    {
      title: 'Customized Market Analysis',
      desc: 'Tailored research reports for businesses expanding, educational program planners, and civic leaders.',
      modalId: 'customized-analysis',
      icon: FileText,
      tag: 'Executive Briefs',
    },
  ];

  return (
    <section id="regional-data" className="py-24 sm:py-32 bg-slate-950 border-t border-slate-800/80 relative overflow-hidden">
      {/* Top border subtle accent line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#0090b2]/30 to-transparent" />

      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-cyan-500/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-emerald-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Pill Tag & Bold Modern Typography */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-bold text-cyan-400 mb-4">
            <LineChart className="w-3.5 h-3.5" />
            <span>LABOR MARKET &amp; EVIDENCE-BASED RESEARCH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {REGIONAL_DATA_CONTENT.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Delivering data-driven research to guide investments, educational curricula, and economic mobility across Riverside and San Bernardino counties.
          </p>
        </div>

        {/* Bento Grid Layout (Modern Flexbox/Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Authentic Narrative & Interactive Glass Asset Cards (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 shadow-2xl hover:border-slate-700/80 transition-all duration-300">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#0090b2]">
                <span>Inland Empire Center of Excellence</span>
                <span className="text-slate-700">•</span>
                <span className="text-slate-400">12 Community Colleges</span>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {REGIONAL_DATA_CONTENT.bodyParagraphs.map((paragraph, index) => (
                  <p 
                    key={index} 
                    className={index === 0 ? "text-white font-medium text-base sm:text-lg leading-relaxed" : "text-slate-300"}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Strategic Data Asset Cards with Dynamic Glassmorphism */}
              <div className="space-y-3 pt-3">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Key Research Capabilities
                </div>
                {dataAssets.map((asset, idx) => {
                  const Icon = asset.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => onOpenFeatureModal && onOpenFeatureModal(asset.modalId)}
                      className="w-full text-left p-4 rounded-2xl bg-slate-950/60 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/40 transition-all shadow-sm flex items-center justify-between gap-4 group cursor-pointer"
                    >
                      <div className="flex items-start gap-3.5">
                        <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                              {asset.title}
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-400 font-medium">
                              {asset.tag}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 leading-snug">
                            {asset.desc}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all shrink-0" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-8 mt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenPagePreview('data')}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full font-bold text-xs sm:text-sm text-white bg-[#0090b2] hover:bg-[#007b99] active:scale-95 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
              >
                <span>{REGIONAL_DATA_CONTENT.button.text}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {onRequestData && (
                <button
                  onClick={onRequestData}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-xs sm:text-sm text-slate-300 bg-slate-800/80 hover:bg-slate-700 hover:text-white active:scale-95 transition-all border border-slate-700/60 cursor-pointer"
                >
                  <Search className="w-4 h-4 text-cyan-400" />
                  <span>Request Custom Regional Report</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Visual Photo Showcase & Research Analytics (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl p-4 sm:p-5 bg-slate-900/60 backdrop-blur-xl border border-slate-800 shadow-2xl group hover:border-slate-700/80 transition-all duration-300">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950">
              <img
                src={REGIONAL_DATA_CONTENT.image.src}
                alt={REGIONAL_DATA_CONTENT.image.alt}
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

              {/* Information Badge */}
              <div className="absolute top-3 left-3">
                <div className="px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[11px] font-bold text-white flex items-center gap-1.5 shadow-md">
                  <Building2 className="w-3.5 h-3.5 text-[#0090b2]" />
                  <span>Workforce &amp; Site Planning Research</span>
                </div>
              </div>

              {/* Dynamic Bottom Caption Pill */}
              <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800/80">
                <div className="text-[11px] font-bold text-[#0090b2] uppercase tracking-wider">
                  Center of Excellence (COE)
                </div>
                <div className="text-xs font-semibold text-slate-200 mt-0.5">
                  Mapping career technical education to high-wage emerging industry demand.
                </div>
              </div>
            </div>

            {/* Research Summary Metrics */}
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <div className="p-3.5 rounded-2xl bg-slate-950/50 border border-slate-800/70">
                <div className="text-xs font-bold text-slate-400">Institutions Served</div>
                <div className="text-lg font-extrabold text-white mt-0.5">12 Colleges</div>
                <div className="text-[11px] text-cyan-400 mt-0.5 font-medium">Bi-county community colleges</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-950/50 border border-slate-800/70">
                <div className="text-xs font-bold text-slate-400">Data Coverage</div>
                <div className="text-lg font-extrabold text-white mt-0.5">100% Regional</div>
                <div className="text-[11px] text-emerald-400 mt-0.5 font-medium">Riverside &amp; San Bernardino</div>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-800/70 flex items-center justify-between text-xs text-slate-400 px-1">
              <span>Labor Market Information (LMI)</span>
              <span className="text-cyan-400 font-semibold font-mono">Real-time API Sync</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
