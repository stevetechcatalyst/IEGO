import React from 'react';
import { X, CheckCircle2, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { FEATURE_MODALS, FeatureModal } from '../data/siteContent';

interface FeatureModalViewerProps {
  modalId: string | null;
  onClose: () => void;
  onRequestAction?: (actionText: string) => void;
}

export const FeatureModalViewer: React.FC<FeatureModalViewerProps> = ({
  modalId,
  onClose,
  onRequestAction,
}) => {
  if (!modalId) return null;

  // Search by exact key or by slug
  const modalData: FeatureModal | undefined =
    FEATURE_MODALS[modalId] ||
    Object.values(FEATURE_MODALS).find((m) => m.slug === modalId);

  if (!modalData) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 w-full max-w-xl rounded-3xl shadow-2xl border border-slate-800 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-800 flex items-start justify-between gap-4 bg-slate-950/70">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 mb-2 border border-cyan-500/30">
              <Sparkles className="w-3 h-3" />
              <span>Regional Initiative Spotlight</span>
            </div>
            <h3 className="text-xl font-extrabold text-white tracking-tight">
              {modalData.title}
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
        <div className="p-6 space-y-5 max-h-[65vh] overflow-y-auto bg-slate-900">
          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            {modalData.body}
          </p>

          {modalData.highlights && modalData.highlights.length > 0 && (
            <div className="pt-4 border-t border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Key Strategic Highlights
              </h4>
              <ul className="space-y-3">
                {modalData.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#00ab69] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block mb-0.5">{h.label}</span>
                      <span className="text-slate-300 text-xs leading-relaxed">{h.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action pill buttons */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => {
                onClose();
                if (onRequestAction) {
                  onRequestAction(modalData.title);
                }
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs text-white bg-[#00ab69] hover:bg-[#00945b] shadow-md shadow-emerald-500/20 active:scale-95 transition-all cursor-pointer"
            >
              <span>Connect With Initiative</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full text-xs font-semibold text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
