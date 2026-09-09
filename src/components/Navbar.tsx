import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ExternalLink,
  Instagram,
  Linkedin,
  Compass,
  ArrowRight
} from 'lucide-react';
import { SITE_METADATA, NAVIGATION_DATA } from '../data/siteContent';

interface NavbarProps {
  onOpenPagePreview: (pageId: string) => void;
  customLogoUrl: string | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenPagePreview,
  customLogoUrl,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoLoadError, setLogoLoadError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id?: string) => {
    setMobileMenuOpen(false);
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentLogo = customLogoUrl || (logoLoadError ? null : SITE_METADATA.logo.header);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-black/40 py-2.5' 
          : 'bg-slate-950/60 backdrop-blur-md border-b border-slate-800/40 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo & Tag */}
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group shrink-0"
            aria-label="Inland Economic Growth & Opportunity"
          >
            {currentLogo ? (
              <div className="p-1 rounded-xl bg-slate-900/60 border border-slate-800/80 transition-transform group-hover:scale-105">
                <img 
                  src={currentLogo} 
                  alt="IEGO Logo" 
                  onError={() => setLogoLoadError(true)}
                  className="h-9 sm:h-10 w-auto object-contain max-w-[155px]" 
                />
              </div>
            ) : (
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00ab69] via-[#0090b2] to-[#ff6b01] p-[1.5px] shadow-lg shadow-emerald-500/10">
                  <div className="w-full h-full bg-slate-950 rounded-[9px] flex items-center justify-center font-extrabold text-sm tracking-wider">
                    <span className="text-[#00ab69]">IE</span>
                    <span className="text-[#0090b2]">GO</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-extrabold text-base tracking-tight leading-none group-hover:text-emerald-400 transition-colors">
                    IEGO
                  </span>
                  <span className="text-[10px] font-medium text-slate-400 leading-tight tracking-wider uppercase mt-0.5">
                    Inland Empire Collab
                  </span>
                </div>
              </div>
            )}
          </a>

          {/* Desktop Navigation Menu (Pill styling with hover effects) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1 rounded-full bg-slate-900/70 border border-slate-800/80 backdrop-blur-md">
            {NAVIGATION_DATA.mainMenu.map((item, idx) => (
              item.target === '_blank' ? (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/90 transition-all flex items-center gap-1 whitespace-nowrap"
                >
                  <span>{item.label}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              ) : (
                <button
                  key={idx}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/90 transition-all whitespace-nowrap cursor-pointer"
                >
                  {item.label}
                </button>
              )
            ))}
          </nav>

          {/* Right Action Buttons: NEWS (Orange Pill), INVEST (Green Pill), CONTACT (Glass Pill) */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            {/* NEWS Pill */}
            <button
              onClick={() => onOpenPagePreview('news')}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold text-orange-300 bg-orange-500/15 border border-orange-500/30 hover:bg-orange-500/25 transition-all active:scale-95 cursor-pointer uppercase tracking-wider shadow-xs hover:shadow-orange-500/20"
            >
              NEWS
            </button>

            {/* INVEST IN IEGO Pill */}
            <button
              onClick={() => onOpenPagePreview('invest-in-iego')}
              className="px-4 py-1.5 rounded-full text-xs font-bold text-white bg-[#00ab69] hover:bg-[#00945b] shadow-md shadow-emerald-500/20 transition-all active:scale-95 cursor-pointer uppercase tracking-wider whitespace-nowrap hover:ring-2 hover:ring-emerald-400/40"
            >
              INVEST IN IEGO
            </button>

            {/* CONTACT Pill */}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-300 bg-slate-800/80 hover:bg-slate-700/90 border border-slate-700/60 transition-colors cursor-pointer uppercase tracking-wider"
            >
              CONTACT
            </button>

            {/* Social Icons */}
            <div className="flex items-center gap-1.5 pl-2 border-l border-slate-800/80 text-slate-400">
              <a
                href={SITE_METADATA.socialLinks[0].url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="IEGO Instagram"
                className="p-1.5 rounded-full hover:text-[#0090b2] hover:bg-slate-800 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={SITE_METADATA.socialLinks[1].url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="IEGO LinkedIn"
                className="p-1.5 rounded-full hover:text-[#0090b2] hover:bg-slate-800 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenPagePreview('invest-in-iego')}
              className="sm:hidden px-3 py-1 rounded-full text-[11px] font-bold text-white bg-[#00ab69]"
            >
              INVEST
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-900 rounded-xl border border-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Glass Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 px-4 pt-4 pb-6 max-h-[85vh] overflow-y-auto shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1 mb-5">
            {NAVIGATION_DATA.mobileMenu.map((item, idx) => (
              item.target === '_blank' ? (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-900 hover:text-white flex items-center justify-between border border-transparent hover:border-slate-800 transition-all"
                >
                  <span>{item.label}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              ) : (
                <button
                  key={idx}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-900 hover:text-emerald-400 flex items-center justify-between border border-transparent hover:border-slate-800 transition-all cursor-pointer"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
                </button>
              )
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPagePreview('news');
              }}
              className="w-full py-2.5 rounded-xl text-xs font-bold text-orange-300 bg-orange-500/15 border border-orange-500/30 text-center"
            >
              NEWS
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPagePreview('invest-in-iego');
              }}
              className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-[#00ab69] text-center shadow-sm shadow-emerald-500/20"
            >
              INVEST IN IEGO
            </button>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800 text-center text-xs text-slate-400">
            <span>Inland Economic Growth &amp; Opportunity</span>
          </div>
        </div>
      )}
    </header>
  );
};
