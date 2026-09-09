import React, { useState } from 'react';
import { X, Upload, Check, Copy, Palette, FileText, Image as ImageIcon, Sparkles, AlertCircle } from 'lucide-react';
import { BRAND_ASSET_CHECKLIST } from '../data/mockData';

interface BrandAssetGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  customLogoUrl: string | null;
  onCustomLogoChange: (url: string | null) => void;
}

export const BrandAssetGuideModal: React.FC<BrandAssetGuideModalProps> = ({
  isOpen,
  onClose,
  customLogoUrl,
  onCustomLogoChange,
}) => {
  const [activeTab, setActiveTab] = useState<'checklist' | 'uploader' | 'colors'>('checklist');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [urlInput, setUrlInput] = useState('');

  if (!isOpen) return null;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(text);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onCustomLogoChange(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const colors = [
    { name: 'IEGO Emerald Green', hex: '#00ab69', role: 'Primary Brand, Action Highlights, Eco & Equity' },
    { name: 'IEGO Ocean Teal', hex: '#0090b2', role: 'Secondary Brand, Regional Data, Trust & Strategy' },
    { name: 'IEGO Vibrant Orange', hex: '#ff6b01', role: 'Accent, Innovation, High-Priority Calls to Action' },
    { name: 'IEGO Deep Cyan', hex: '#0092b3', role: 'Tertiary Brand, Indicators & Research Accents' },
    { name: 'Deep Slate / Void', hex: '#020617', role: 'Dark Background, Contrast Canvas, Typography' },
    { name: 'Pure White & Off-White', hex: '#f8fafc', role: 'Card Surfaces & Section Highlights' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 flex flex-col overflow-hidden"
        id="brand-asset-modal"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-white tracking-tight">Brand Assets &amp; Design Alignment Kit</h2>
              <p className="text-xs text-slate-400">Official brand guidelines, high-resolution logos, and color palette specs</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            id="close-brand-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 px-6 bg-slate-950/50">
          <button
            onClick={() => setActiveTab('checklist')}
            className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'checklist'
                ? 'border-[#00ab69] text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText className="w-4 h-4" />
            Requested Assets Checklist
          </button>
          <button
            onClick={() => setActiveTab('uploader')}
            className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'uploader'
                ? 'border-[#00ab69] text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Upload className="w-4 h-4" />
            Live Logo Tester &amp; Uploader
          </button>
          <button
            onClick={() => setActiveTab('colors')}
            className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'colors'
                ? 'border-[#00ab69] text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Palette className="w-4 h-4" />
            Palette &amp; Typography Spec
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 bg-slate-900">
          {activeTab === 'checklist' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-emerald-500/30 text-slate-300 text-xs sm:text-sm flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white">Guidelines for brand consistency:</span>
                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                    Below is the specification checklist for IEGO visual materials. You can drop in any official SVGs or high-resolution PNGs in the &quot;Live Logo Tester&quot; tab to immediately view your logo rendered live on this prototype.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {BRAND_ASSET_CHECKLIST.map((category) => (
                  <div key={category.category} className="p-4 rounded-2xl border border-slate-800 bg-slate-950/50 hover:bg-slate-950/70 transition-colors">
                    <h3 className="text-xs sm:text-sm font-bold text-white flex items-center justify-between">
                      {category.category}
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-800 rounded text-slate-400">
                        {category.items.length} items
                      </span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5 mb-3">{category.description}</p>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs">
                          <span className="w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                            ✓
                          </span>
                          <div>
                            <span className="font-semibold text-slate-200">{item.name}</span>
                            <span className="block text-[11px] text-slate-400">{item.note}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'uploader' && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800">
                <h3 className="text-sm font-bold text-white mb-1">Live Logo Preview &amp; Testing</h3>
                <p className="text-xs text-slate-400 mb-4">
                  Upload your official logo file (PNG, SVG, or WebP) or paste an image URL to test it live inside the website navigation bar and hero section.
                </p>

                {/* Upload box */}
                <div className="border-2 border-dashed border-slate-700 rounded-2xl p-6 text-center hover:border-emerald-500 transition-colors bg-slate-900/80">
                  <div className="mx-auto w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-white">Drag &amp; drop your IEGO logo file here, or click to browse</p>
                  <p className="text-[11px] text-slate-400 mt-1">Supports SVG, PNG with transparency, WebP (Max 5MB)</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="logo-file-input"
                  />
                  <label
                    htmlFor="logo-file-input"
                    className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00ab69] hover:bg-[#00945b] text-white text-xs font-bold transition-colors cursor-pointer shadow-md"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    Browse Files
                  </label>
                </div>

                {/* URL input */}
                <div className="mt-4 pt-4 border-t border-slate-800">
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Or paste direct image URL:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      value={urlInput}
                      onChange={(e) => setUrlInput(e.target.value)}
                      placeholder="https://example.com/logo.png"
                      className="flex-1 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500"
                    />
                    <button
                      onClick={() => {
                        if (urlInput.trim()) {
                          onCustomLogoChange(urlInput.trim());
                        }
                      }}
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                </div>

                {/* Reset button if custom logo is active */}
                {customLogoUrl && (
                  <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-emerald-400 font-semibold">Custom logo currently active</span>
                    <button
                      onClick={() => onCustomLogoChange(null)}
                      className="text-xs text-red-400 hover:text-red-300 underline cursor-pointer"
                    >
                      Reset to official default
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'colors' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {colors.map((color) => (
                  <div key={color.hex} className="p-4 rounded-2xl border border-slate-800 bg-slate-950/60 space-y-3">
                    <div 
                      className="w-full h-16 rounded-xl shadow-inner border border-white/10" 
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">{color.name}</span>
                        <button
                          onClick={() => handleCopy(color.hex)}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1 cursor-pointer font-mono"
                        >
                          {copiedColor === color.hex ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                          <span>{color.hex}</span>
                        </button>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 leading-snug">{color.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/70 flex items-center justify-between text-xs text-slate-400">
          <span>Inland Economic Growth &amp; Opportunity Design System</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
