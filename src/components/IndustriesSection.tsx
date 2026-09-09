import React, { useState } from 'react';
import { 
  Truck, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Activity, 
  ArrowRight, 
  TrendingUp, 
  DollarSign, 
  Briefcase, 
  CheckCircle2,
  Building2,
  ChevronRight
} from 'lucide-react';
import { INDUSTRY_CLUSTERS } from '../data/mockData';
import { IndustryCluster } from '../types';

interface IndustriesSectionProps {
  onOpenPagePreview: (pageId: string) => void;
  onSelectCyberCup: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onOpenPagePreview,
  onSelectCyberCup,
}) => {
  const [selectedClusterId, setSelectedClusterId] = useState<string>(INDUSTRY_CLUSTERS[0].id);

  const getClusterIcon = (iconName: string) => {
    switch (iconName) {
      case 'Truck': return <Truck className="w-5 h-5 text-blue-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-indigo-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-amber-600" />;
      case 'Zap': return <Zap className="w-5 h-5 text-emerald-600" />;
      case 'Activity': return <Activity className="w-5 h-5 text-rose-600" />;
      default: return <Briefcase className="w-5 h-5 text-blue-600" />;
    }
  };

  const activeCluster = INDUSTRY_CLUSTERS.find((c) => c.id === selectedClusterId) || INDUSTRY_CLUSTERS[0];

  return (
    <section id="industries" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-900 mb-3 border border-indigo-200">
              <Cpu className="w-3.5 h-3.5 text-indigo-600" />
              <span>Priority Industry Clusters</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Brookings-Identified <span className="text-amber-600">Growth Clusters</span>
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              IEGO focuses on strategic concentrations of interconnected companies, suppliers, and academic institutions to maximize productivity, innovation, and sustainable wage progression.
            </p>
          </div>
          <div className="mt-4 md:mt-0 shrink-0">
            <button
              onClick={() => onOpenPagePreview('industries')}
              className="px-4 py-2 text-xs font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg shadow-xs flex items-center gap-1.5 transition-colors"
            >
              <span>Industries Page Blueprint</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Cluster Tabs (Card Bar) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {INDUSTRY_CLUSTERS.map((cluster) => {
            const isSelected = cluster.id === selectedClusterId;
            return (
              <button
                key={cluster.id}
                onClick={() => setSelectedClusterId(cluster.id)}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-amber-500/50'
                    : 'bg-white hover:bg-slate-100/80 text-slate-800 border-slate-200 shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isSelected ? 'bg-slate-800' : 'bg-slate-100'
                  }`}>
                    {getClusterIcon(cluster.icon)}
                  </div>
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-amber-500 text-slate-950' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {cluster.tag.split(' ')[0]}
                  </span>
                </div>
                <div>
                  <h3 className={`text-xs font-bold line-clamp-1 ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                    {cluster.title}
                  </h3>
                  <p className={`text-[11px] font-mono mt-0.5 ${isSelected ? 'text-amber-400' : 'text-slate-500'}`}>
                    {cluster.highlightStat} jobs
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Cluster Full Detail Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200">
                  {activeCluster.tag}
                </span>
                <span className="text-xs text-slate-400">Regional Cluster Profile</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {activeCluster.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {activeCluster.fullDescription}
              </p>

              {/* Cluster Metrics Row */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[11px] text-slate-500 block">Avg Annual Wage</span>
                  <span className="text-base sm:text-lg font-bold text-slate-900 font-mono">
                    {activeCluster.averageWage}
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[11px] text-slate-500 block">Growth Outlook</span>
                  <span className="text-base sm:text-lg font-bold text-emerald-600 font-mono">
                    {activeCluster.jobGrowth}
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[11px] text-slate-500 block">Workforce Scale</span>
                  <span className="text-base sm:text-lg font-bold text-blue-600 font-mono">
                    {activeCluster.highlightStat}
                  </span>
                </div>
              </div>

              {/* Key Assets in cluster */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Key Regional Anchor Assets &amp; Programs
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeCluster.keyAssets.map((asset, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium border border-slate-200"
                    >
                      {asset}
                    </span>
                  ))}
                </div>
              </div>

              {/* If Cyber cluster is selected, show prompt to IE Mayors Cyber Cup */}
              {activeCluster.id === 'cybersecurity-it' && (
                <div className="mt-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
                    <span className="text-xs font-bold text-slate-900">
                      Looking for student talent &amp; competition details? Check out the IE Mayors Cyber Cup!
                    </span>
                  </div>
                  <button
                    onClick={onSelectCyberCup}
                    className="shrink-0 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-lg transition-colors"
                  >
                    View Cyber Cup
                  </button>
                </div>
              )}
            </div>

            {/* Visual Callout Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white p-6 sm:p-7 rounded-2xl border border-slate-800 shadow-xl space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                  Cluster Competitiveness
                </span>
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                  {getClusterIcon(activeCluster.icon)}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Total Direct Employment:</span>
                  <span className="font-mono font-bold text-white">{activeCluster.highlightStat}</span>
                </div>
                <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Primary County Concentration:</span>
                  <span className="font-semibold text-white">Riverside &amp; San Bernardino</span>
                </div>
                <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Center of Excellence Alignment:</span>
                  <span className="font-semibold text-emerald-400">Active Curriculum Advisory</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">California Jobs First Status:</span>
                  <span className="font-semibold text-amber-400">High-Road Priority</span>
                </div>
              </div>

              <div className="p-3 bg-slate-800/80 rounded-xl text-xs text-slate-300">
                <span className="font-bold text-white block mb-1">Collaborative Working Group</span>
                Industry executives and educators meet bi-monthly to resolve supply chain, permitting, and skills bottlenecks.
              </div>

              <button
                onClick={() => onOpenPagePreview('industries')}
                className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Request Detailed Cluster Data &amp; Reports</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
