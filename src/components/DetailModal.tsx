import React from 'react';
import { X, Calendar, Clock, Check, ArrowRight, Share2, Mail } from 'lucide-react';
import { NewsArticle, ProgramService } from '../types';

interface DetailModalProps {
  article: NewsArticle | null;
  service: ProgramService | null;
  onClose: () => void;
  onContact: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  article,
  service,
  onClose,
  onContact,
}) => {
  if (!article && !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        id="detail-modal"
      >
        {/* Article View */}
        {article && (
          <>
            <div className="p-6 bg-slate-900 text-white flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white leading-snug">
                  {article.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors ml-4 shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Published via {article.source}
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {article.summary}
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                The Inland Economic Growth &amp; Opportunity collaborative continues to monitor high-road regional outcomes across Riverside and San Bernardino counties. For full technical documentation, whitepapers, or interview requests with IEGO research fellows, please submit an inquiry below.
              </p>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Article link copied to clipboard!');
                  }}
                  className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg flex items-center gap-1.5 transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  Share Link
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onContact();
                  }}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Contact IEGO Research Team
                </button>
              </div>
            </div>
          </>
        )}

        {/* Service View */}
        {service && (
          <>
            <div className="p-6 bg-slate-900 text-white flex items-start justify-between">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 inline-block mb-2">
                  {service.category}
                </span>
                <h3 className="text-xl font-bold text-white leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Target: {service.targetAudience}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors ml-4 shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                {service.description}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Service Deliverables &amp; Outputs
                </h4>
                <div className="space-y-2">
                  {service.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-800">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={onClose}
                  className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900"
                >
                  Back to Services
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onContact();
                  }}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Initiate Request with IEGO Team
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
