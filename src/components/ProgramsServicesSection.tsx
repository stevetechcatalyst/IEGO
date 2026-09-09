import React, { useState } from 'react';
import { 
  LineChart, 
  Sparkles, 
  GraduationCap, 
  Briefcase, 
  FileText, 
  Award, 
  ArrowRight, 
  Check, 
  ExternalLink,
  Layers
} from 'lucide-react';
import { PROGRAMS_AND_SERVICES } from '../data/mockData';
import { ProgramService } from '../types';

interface ProgramsServicesSectionProps {
  onOpenPagePreview: (pageId: string) => void;
  onSelectService: (service: ProgramService) => void;
}

export const ProgramsServicesSection: React.FC<ProgramsServicesSectionProps> = ({
  onOpenPagePreview,
  onSelectService,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Programs & Services' },
    { id: 'Research & Strategy', label: 'Economic Research' },
    { id: 'State Initiative', label: 'California Jobs First' },
    { id: 'Workforce & Education', label: 'Workforce & COE' },
    { id: 'Business Concierge', label: 'Business Incentives' },
    { id: 'Funding Acceleration', label: 'Grant Writing' },
  ];

  const filteredPrograms = selectedCategory === 'all'
    ? PROGRAMS_AND_SERVICES
    : PROGRAMS_AND_SERVICES.filter((p) => p.category === selectedCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'LineChart': return <LineChart className="w-5 h-5 text-blue-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-600" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-indigo-600" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-emerald-600" />;
      case 'FileText': return <FileText className="w-5 h-5 text-purple-600" />;
      case 'Award': return <Award className="w-5 h-5 text-amber-600" />;
      default: return <Layers className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="programs-services" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-900 mb-3 border border-emerald-200">
              <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
              <span>Collaborative Solutions</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Strategic Programs &amp; <span className="text-amber-600">Regional Services</span>
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              From macroeconomic intelligence and community college labor alignment to state incentive facilitation and grant writing, IEGO delivers end-to-end capacity for the region.
            </p>
          </div>
          <div className="mt-4 md:mt-0 shrink-0">
            <button
              onClick={() => onOpenPagePreview('programs-services')}
              className="px-4 py-2 text-xs font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-300 rounded-lg shadow-xs flex items-center gap-1.5 transition-colors"
            >
              <span>Full Services Catalog Blueprint</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-white text-slate-600 border border-slate-200">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="space-y-1.5 mb-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Key Deliverables:
                  </span>
                  {service.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-[11px]">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-[10px] font-medium text-slate-500 max-w-[170px] truncate" title={service.targetAudience}>
                  For: {service.targetAudience}
                </span>
                <button
                  onClick={() => onSelectService(service)}
                  className="text-xs font-bold text-slate-900 hover:text-amber-600 flex items-center gap-1 transition-colors group-hover:translate-x-0.5"
                >
                  <span>{service.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
