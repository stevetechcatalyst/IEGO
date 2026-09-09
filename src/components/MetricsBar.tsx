import React from 'react';
import { Users, DollarSign, Building2, GraduationCap, Map } from 'lucide-react';

interface MetricItem {
  value: string;
  label: string;
  sublabel: string;
  tag: string;
  accent: 'green' | 'teal' | 'orange';
  icon: React.ComponentType<{ className?: string }>;
}

const METRICS: MetricItem[] = [
  {
    value: '4.5M+',
    label: 'Regional Population',
    sublabel: 'Riverside & San Bernardino',
    tag: 'Demographics',
    accent: 'green',
    icon: Users,
  },
  {
    value: '$238B+',
    label: 'Gross Regional Product',
    sublabel: 'California Growth Engine',
    tag: 'Economic Scale',
    accent: 'teal',
    icon: DollarSign,
  },
  {
    value: '52',
    label: 'Incorporated Cities',
    sublabel: 'Bi-County Collaboration',
    tag: 'Municipal Reach',
    accent: 'orange',
    icon: Building2,
  },
  {
    value: '12',
    label: 'Community Colleges',
    sublabel: 'Center of Excellence Network',
    tag: 'Workforce Hub',
    accent: 'teal',
    icon: GraduationCap,
  },
  {
    value: '27,000+',
    label: 'Square Miles',
    sublabel: 'Strategic Gateway to Pacific Rim',
    tag: 'Infrastructure',
    accent: 'green',
    icon: Map,
  },
];

export const MetricsBar: React.FC = () => {
  return (
    <div className="relative z-20 -mt-10 mb-8 sm:mb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Glassmorphism Container */}
      <div className="rounded-3xl p-6 sm:p-8 bg-slate-900/85 backdrop-blur-xl border border-slate-800 shadow-2xl shadow-black/50">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {METRICS.map((metric, idx) => {
            const Icon = metric.icon;
            const accentColor =
              metric.accent === 'green'
                ? 'text-[#00ab69]'
                : metric.accent === 'teal'
                ? 'text-[#0090b2]'
                : 'text-[#ff6b01]';
            
            const badgeBg =
              metric.accent === 'green'
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                : metric.accent === 'teal'
                ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                : 'bg-orange-500/10 text-orange-400 border-orange-500/30';

            return (
              <div 
                key={idx} 
                className="flex flex-col justify-between p-3 rounded-2xl bg-slate-950/40 border border-slate-800/60 hover:border-slate-700/80 transition-all duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border ${badgeBg}`}>
                      {metric.tag}
                    </span>
                    <Icon className={`w-4 h-4 text-slate-500 group-hover:${accentColor} transition-colors`} />
                  </div>

                  <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-1`}>
                    {metric.value}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-200">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {metric.sublabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
