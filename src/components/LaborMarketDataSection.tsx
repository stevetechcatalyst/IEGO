import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  GraduationCap, 
  ArrowRight, 
  FileSpreadsheet, 
  CheckCircle, 
  Info,
  Layers,
  ChevronRight
} from 'lucide-react';
import { LABOR_MARKET_DATA } from '../data/mockData';
import { LaborMarketMetric } from '../types';

interface LaborMarketDataSectionProps {
  onOpenPagePreview: (pageId: string) => void;
  onRequestData: () => void;
}

export const LaborMarketDataSection: React.FC<LaborMarketDataSectionProps> = ({
  onOpenPagePreview,
  onRequestData,
}) => {
  const [activeTab, setActiveTab] = useState<'sectors' | 'wages' | 'coe'>('sectors');
  const [selectedCounty, setSelectedCounty] = useState<'all' | 'riverside' | 'sanbernardino'>('all');

  // Multiplier for county breakdowns
  const getDisplayJobs = (metric: LaborMarketMetric) => {
    if (selectedCounty === 'riverside') {
      return Math.round(metric.jobsCount * 0.52).toLocaleString();
    }
    if (selectedCounty === 'sanbernardino') {
      return Math.round(metric.jobsCount * 0.48).toLocaleString();
    }
    return metric.jobsDisplay;
  };

  const maxJobs = Math.max(...LABOR_MARKET_DATA.map((d) => d.jobsCount));

  return (
    <section id="data-labor-market" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 mb-3 border border-cyan-500/20">
              <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Center of Excellence Data Center</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Inland Empire <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Labor Market</span> Intelligence
            </h2>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              Powered by California Community Colleges Centers of Excellence (COE) housed within IEGO, providing real-time data on occupational demand, living wages, and education-to-career alignment.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <button
              onClick={() => onOpenPagePreview('data')}
              className="px-3.5 py-2 text-xs font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <span>Data Portal Blueprint</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onOpenPagePreview('labor-market')}
              className="px-3.5 py-2 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <span>Labor Market Blueprint</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Control Bar: View Tabs + County Filter */}
        <div className="p-3 bg-slate-800/80 rounded-2xl border border-slate-700/80 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('sectors')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'sectors'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              Sector Employment Breakdown
            </button>
            <button
              onClick={() => setActiveTab('wages')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'wages'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              Median Annual Wages
            </button>
            <button
              onClick={() => setActiveTab('coe')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'coe'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              Center of Excellence (COE) Role
            </button>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <span className="text-xs text-slate-400 hidden lg:inline-block">Filter Region:</span>
            <div className="bg-slate-900 p-1 rounded-xl border border-slate-700 flex text-xs">
              <button
                onClick={() => setSelectedCounty('all')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-colors ${
                  selectedCounty === 'all' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Entire IE
              </button>
              <button
                onClick={() => setSelectedCounty('riverside')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-colors ${
                  selectedCounty === 'riverside' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Riverside Co.
              </button>
              <button
                onClick={() => setSelectedCounty('sanbernardino')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-colors ${
                  selectedCounty === 'sanbernardino' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                San Bernardino Co.
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: Sector Employment Breakdown */}
        {activeTab === 'sectors' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              {LABOR_MARKET_DATA.map((item, idx) => {
                const percentage = Math.round((item.jobsCount / maxJobs) * 100);
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-slate-600 transition-all hover:bg-slate-800"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white text-sm sm:text-base">{item.sector}</span>
                          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            {item.projectedGrowth} 5-yr growth
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1 leading-snug">{item.highlight}</p>
                      </div>

                      <div className="flex items-center gap-5 shrink-0">
                        <div className="text-right">
                          <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Employed</span>
                          <span className="text-base font-extrabold text-amber-400 font-mono">
                            {getDisplayJobs(item)}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Median Wage</span>
                          <span className="text-base font-extrabold text-white font-mono">
                            {item.medianWage}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Quality Index</span>
                          <span className="text-base font-extrabold text-cyan-400 font-mono">
                            {item.qualityJobsIndex}/100
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar Visual */}
                    <div className="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-amber-500 via-amber-400 to-cyan-400 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: Wages Breakdown */}
        {activeTab === 'wages' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LABOR_MARKET_DATA.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-800/70 border border-slate-700 flex flex-col justify-between">
                <div>
                  <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block mb-1">
                    Wage Analysis
                  </span>
                  <h3 className="text-base font-bold text-white mb-3">
                    {item.sector}
                  </h3>
                  <div className="text-3xl font-extrabold text-white font-mono mb-1">
                    {item.medianWage}
                  </div>
                  <p className="text-xs text-slate-400 mb-4">Median Annual Earnings in Inland Empire</p>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/60 text-xs text-slate-300 space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Projected Job Growth:</span>
                      <span className="text-emerald-400 font-semibold">{item.projectedGrowth}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Quality Jobs Standard:</span>
                      <span className="text-cyan-400 font-semibold">{item.qualityJobsIndex} / 100</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-700/70 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Source: Center of Excellence</span>
                  <button onClick={onRequestData} className="text-amber-400 hover:underline font-semibold">
                    Request Full Wage Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Center of Excellence Role */}
        {activeTab === 'coe' && (
          <div className="p-8 rounded-2xl bg-slate-800/80 border border-slate-700 text-slate-200 space-y-6">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                State-Designated Research Infrastructure
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                How IEGO&apos;s Center of Excellence Bridges Classrooms to Living-Wage Careers
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                As California&apos;s designated Center of Excellence for the Inland Empire/Desert Region, IEGO provides authoritative regional workforce and labor market intelligence. This data is utilized by 14 community colleges to validate curricula, eliminate obsolete programs, and launch high-demand credentials in clean energy, cybersecurity, and advanced manufacturing.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-700">
                <GraduationCap className="w-6 h-6 text-indigo-400 mb-2" />
                <span className="font-bold text-white text-sm block mb-1">Curriculum Endorsement</span>
                <p className="text-slate-400 leading-relaxed">
                  Every new career education certificate at 14 community colleges requires COE labor demand validation to ensure graduates find real regional jobs.
                </p>
              </div>

              <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-700">
                <TrendingUp className="w-6 h-6 text-amber-400 mb-2" />
                <span className="font-bold text-white text-sm block mb-1">Skills Gap Scans</span>
                <p className="text-slate-400 leading-relaxed">
                  Identifying where regional businesses are experiencing severe recruitment shortages to rapidly deploy accelerated micro-credentials.
                </p>
              </div>

              <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-700">
                <FileSpreadsheet className="w-6 h-6 text-emerald-400 mb-2" />
                <span className="font-bold text-white text-sm block mb-1">Custom Regional Studies</span>
                <p className="text-slate-400 leading-relaxed">
                  Conducting deep-dive economic research for city councils, workforce development boards, and philanthropic foundations.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Action Ribbon */}
        <div className="mt-8 p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Need custom labor market analysis or occupational projections for your city or enterprise?</span>
          </div>
          <button
            onClick={onRequestData}
            className="shrink-0 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <span>Request Custom COE Report</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
