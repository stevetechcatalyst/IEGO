import React from 'react';
import { 
  PiggyBank, 
  Handshake, 
  Sparkles, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck 
} from 'lucide-react';

interface InvestSectionProps {
  onOpenPagePreview: (pageId: string) => void;
  onInitiateInvestment: () => void;
}

export const InvestSection: React.FC<InvestSectionProps> = ({
  onOpenPagePreview,
  onInitiateInvestment,
}) => {
  return (
    <section id="invest" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-900 mb-3 border border-emerald-200">
              <PiggyBank className="w-3.5 h-3.5 text-emerald-600" />
              <span>Philanthropic &amp; Civic Capital</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Invest in <span className="text-amber-600">Regional Prosperity</span>
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              As a non-profit initiative housed within the Inland Empire Community Foundation (IECF), your investment directly unlocks catalytic state and federal matching dollars, empowers high-wage career pathways, and funds cluster research.
            </p>
          </div>
          <div className="mt-4 md:mt-0 shrink-0">
            <button
              onClick={() => onOpenPagePreview('invest-in-iego')}
              className="px-4 py-2 text-xs font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-300 rounded-lg shadow-xs flex items-center gap-1.5 transition-colors"
            >
              <span>Invest Page Blueprint</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3 Co-Investment Channels (Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Catalyst Match Fund</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Provide local philanthropic match capital that unlocks 4x to 10x federal and state grant dollars (California Jobs First, EDA Tech Hubs, NSF Engines).
              </p>
              <div className="space-y-2 text-xs text-slate-700 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>High leverage ratio for civic grants</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Transparent quarterly impact reporting</span>
                </div>
              </div>
            </div>
            <button
              onClick={onInitiateInvestment}
              className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs transition-colors"
            >
              Explore Catalyst Fund
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Corporate Leadership Circle</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Join forward-thinking regional employers who sponsor industry cluster research, shape community college credentials, and mentor young talent.
              </p>
              <div className="space-y-2 text-xs text-slate-700 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Seat on Cluster Advisory Councils</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Direct talent recruiting access</span>
                </div>
              </div>
            </div>
            <button
              onClick={onInitiateInvestment}
              className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs transition-colors"
            >
              Join Leadership Circle
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">IE Mayors Cyber Cup Sponsor</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Directly fund high school and community college cybersecurity teams, scholarship endowments, and hands-on ethical hacking competitions.
              </p>
              <div className="space-y-2 text-xs text-slate-700 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Scholarships named in your honor</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Mayoral ceremony recognition</span>
                </div>
              </div>
            </div>
            <button
              onClick={onInitiateInvestment}
              className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs transition-colors"
            >
              Sponsor Cyber Cup
            </button>
          </div>
        </div>

        {/* IECF Affiliation Banner */}
        <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-300 flex items-center justify-center font-extrabold text-xs text-slate-800 shrink-0">
              IECF
            </div>
            <div>
              <span className="font-bold text-sm text-slate-900 block">501(c)(3) Tax-Deductible Stewardship</span>
              <p className="text-xs text-slate-600">
                All contributions are administered through the Inland Empire Community Foundation, dedicated to regional equity since 1941.
              </p>
            </div>
          </div>
          <button
            onClick={onInitiateInvestment}
            className="shrink-0 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <span>Discuss Strategic Giving</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
