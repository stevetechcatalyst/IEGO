import React from 'react';
import { X, ArrowRight, CheckCircle2, Layers, Sparkles, MapPin, Mail, Phone } from 'lucide-react';
import { NAVIGATION_DATA, SITE_METADATA } from '../data/siteContent';

interface PagePreviewModalProps {
  pageId: string | null;
  onClose: () => void;
  onNavigateHomeSection: (sectionId: string) => void;
}

export const PagePreviewModal: React.FC<PagePreviewModalProps> = ({
  pageId,
  onClose,
  onNavigateHomeSection,
}) => {
  if (!pageId) return null;

  const navItem = NAVIGATION_DATA.mainMenu.find(
    (item) => item.sectionId === pageId || item.label.toLowerCase().includes(pageId)
  );

  const pageDetailsMap: Record<string, {
    title: string;
    description: string;
    keyModules: string[];
    homeAnchor?: string;
  }> = {
    about: {
      title: 'About IEGO',
      description: 'The regional collaborative dedicated to creating high-wage, sustainable jobs and shared prosperity across Riverside and San Bernardino counties.',
      keyModules: [
        'Collective Impact Framework',
        'Leadership & Steering Committee',
        'Inland Empire Community Foundation Stewardship',
        '5-Year Strategic Milestones'
      ],
      homeAnchor: 'about',
    },
    'why-ie': {
      title: 'Why Inland Empire',
      description: 'Dynamic location advantages with 4.5M+ residents, 52 vibrant cities, and access to a $238B+ regional economy and 22M consumer base.',
      keyModules: [
        'Multimodal Infrastructure (ONT Airport & Rail)',
        '14 Higher Education Colleges & Universities',
        '2M+ Civilian Workforce Talent Base',
        'Affordable & Executive Quality of Life'
      ],
      homeAnchor: 'why-inland-empire',
    },
    industries: {
      title: 'Key Industry Clusters',
      description: 'Strategic traded industry clusters driving quality jobs, supply-chain resilience, and clean-tech innovation across the Inland Empire.',
      keyModules: [
        'Supply Chain & Freight Logistics Innovation',
        'Clean Energy, Climate Resiliency & Green Tech',
        'Advanced Manufacturing & Industrial Automation',
        'Healthcare, Biotech & Life Sciences'
      ],
      homeAnchor: 'why-inland-empire',
    },
    'programs-services': {
      title: 'Programs & Services',
      description: 'Targeted technical assistance, capital coordination, and capacity building for businesses, civic entities, and educational leaders.',
      keyModules: [
        'California Jobs First (CERF) Implementation',
        'Small Business & High-Road Employer Technical Assistance',
        'Inter-Agency Economic Development Coordination',
        'Regional Workforce Equity Pathways'
      ],
      homeAnchor: 'inclusive-regional-economic-development',
    },
    data: {
      title: 'Regional Data & Insights',
      description: 'Empirical research and data visualizations developed in partnership with the Inland Empire Center of Excellence and state labor agencies.',
      keyModules: [
        'Center of Excellence (COE) Research Archive',
        'Bi-County Labor Market Intelligence Reports',
        'Industry Wage Progression Dashboards',
        'Custom Data Request Service'
      ],
      homeAnchor: 'regional-data',
    },
    'labor-market': {
      title: 'Labor Market Intelligence',
      description: 'Real-time supply and demand analysis of workforce credentials, regional occupation projections, and skill alignment across 12 community colleges.',
      keyModules: [
        'Career Education Program Alignment',
        'High-Demand Occupation Forecasts',
        'Employer Skill Demand Reports',
        'Workforce Equity & Living Wage Benchmarks'
      ],
      homeAnchor: 'regional-data',
    },
    news: {
      title: 'Latest Regional News & Updates',
      description: 'Press releases, collaborative milestones, media coverage, and regional economic announcements from across Riverside and San Bernardino.',
      keyModules: [
        'Regional Economic Development Press Releases',
        'Grant Announcements & Capital Allocations',
        'Partner Spotlights & Executive Editorials',
        'Upcoming Regional Convenings & Summits'
      ],
      homeAnchor: 'about',
    },
    'invest-in-iego': {
      title: 'Invest in IEGO',
      description: 'Support inclusive economic transformation through philanthropic sponsorship, civic partnerships, and corporate catalytic capital.',
      keyModules: [
        'Catalytic Regional Investment Fund Options',
        'Corporate & Institutional Partnership Tiers',
        'IECF Tax-Deductible Contribution Portal',
        'Impact Measurement & Transparent Annual Reporting'
      ],
      homeAnchor: 'inclusive-regional-economic-development',
    },
    'mayors-cyber-cup': {
      title: 'IE Mayors Cyber Cup',
      description: 'Annual regional cybersecurity competition engaging middle and high school students to build cyber defense skills and explore tech careers.',
      keyModules: [
        'Annual Inter-School Cyber Competition',
        'Industry Mentorship & Apprenticeship Pathways',
        'Mayoral & Civic Recognition Ceremony',
        'Sponsorship & School Registration Portal'
      ],
      homeAnchor: 'inclusive-regional-economic-development',
    },
    contact: {
      title: 'Contact IEGO',
      description: 'Connect directly with the Inland Economic Growth & Opportunity team, leadership committee, and regional coordinators.',
      keyModules: [
        'Direct Regional Inquiries (info@iegocollaborative.org)',
        'Physical Office (330 N D St, Suite 415, San Bernardino, CA 92401)',
        'Media & Press Relations Contact',
        'Regional Partnership Inquiry Form'
      ],
      homeAnchor: 'nl-section',
    }
  };

  const details = pageDetailsMap[pageId] || {
    title: navItem?.label || 'IEGO Regional Portal',
    description: 'Explore regional economic development strategies, research, and collaborative initiatives across the Inland Empire.',
    keyModules: [
      'Strategic Priorities & Governance',
      'Regional Intelligence & Data Analytics',
      'Civic & Business Community Partnerships',
      'California Jobs First Regional Alignment'
    ],
    homeAnchor: 'about',
  };

  const handleJumpToHomeSection = () => {
    onClose();
    if (details.homeAnchor) {
      onNavigateHomeSection(details.homeAnchor);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-800 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-800 flex items-start justify-between gap-4 bg-slate-950/70">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 mb-2 border border-emerald-500/30">
              <Sparkles className="w-3 h-3" />
              <span>Inland Empire Regional Portal</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              {details.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto bg-slate-900">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Overview &amp; Purpose
            </div>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              {details.description}
            </p>
          </div>

          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Key Strategic Modules &amp; Focus Areas
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {details.keyModules.map((module, i) => (
                <div 
                  key={i} 
                  className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#00ab69] shrink-0 mt-0.5" />
                  <span className="font-medium">{module}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Contact & Info Card */}
          <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-xs space-y-2">
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#00ab69]" />
              <span>Inland Empire Community Foundation (IECF) &bull; 330 N D St, San Bernardino</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Mail className="w-3.5 h-3.5 text-[#0090b2]" />
              <span>info@iegocollaborative.org &bull; (951) 344-9640</span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/70 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleJumpToHomeSection}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs text-white bg-[#00ab69] hover:bg-[#00945b] shadow-md shadow-emerald-500/20 active:scale-95 transition-all cursor-pointer"
          >
            <span>Jump to Section on Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full text-xs font-semibold text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-colors cursor-pointer"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
};
