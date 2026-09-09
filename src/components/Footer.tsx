import React from 'react';
import { MapPin, Phone, Mail, ArrowRight, ExternalLink, Instagram, Linkedin, ShieldCheck } from 'lucide-react';
import { SITE_METADATA, NAVIGATION_DATA, FOOTER_CONTENT } from '../data/siteContent';

interface FooterProps {
  onOpenPagePreview: (pageId: string) => void;
  customLogoUrl: string | null;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPagePreview,
  customLogoUrl,
}) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const logoSrc = customLogoUrl || SITE_METADATA.logo.footer;

  return (
    <footer id="footer" className="bg-slate-950 text-slate-400 border-t border-slate-800/80 relative overflow-hidden">
      {/* Top border glow line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#00ab69]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 mb-14">
          
          {/* Brand Col (5 Cols) */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              {logoSrc ? (
                <div className="p-1.5 rounded-xl bg-slate-900/80 border border-slate-800 inline-block">
                  <img 
                    src={logoSrc} 
                    alt={SITE_METADATA.siteName} 
                    className="h-10 sm:h-11 w-auto object-contain max-w-56 brightness-110" 
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00ab69] via-[#0090b2] to-[#ff6b01] p-[1.5px]">
                    <div className="w-full h-full bg-slate-950 rounded-[9px] flex items-center justify-center font-extrabold text-sm">
                      <span className="text-[#00ab69]">IE</span>
                      <span className="text-[#0090b2]">GO</span>
                    </div>
                  </div>
                  <span className="text-white font-extrabold text-lg">IEGO Collaborative</span>
                </div>
              )}
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md font-normal">
              A regional cross-sector collaborative network of community-based organizations, businesses, and public institutions committed to inclusive economic development across Riverside and San Bernardino counties.
            </p>

            <div className="text-xs text-slate-300 space-y-2.5 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00ab69] shrink-0 mt-0.5" />
                <span className="text-slate-300">{FOOTER_CONTENT.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0090b2] shrink-0" />
                <a href={`tel:${FOOTER_CONTENT.contact.phone.replace(/[^0-9]/g, '')}`} className="hover:text-white transition-colors">
                  {FOOTER_CONTENT.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#ff6b01] shrink-0" />
                <a href={`mailto:${FOOTER_CONTENT.contact.email}`} className="hover:text-white transition-colors">
                  {FOOTER_CONTENT.contact.email}
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={SITE_METADATA.socialLinks[0].url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="IEGO Instagram"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white text-slate-400 flex items-center justify-center transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SITE_METADATA.socialLinks[1].url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="IEGO LinkedIn"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white text-slate-400 flex items-center justify-center transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links Col (3 Cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Regional Ecosystem
            </h4>
            <ul className="space-y-2.5 text-xs">
              {NAVIGATION_DATA.mainMenu.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      if (item.sectionId) {
                        scrollToSection(item.sectionId);
                      } else {
                        onOpenPagePreview(item.url.replace(/[^a-zA-Z0-9]/g, ''));
                      }
                    }}
                    className="hover:text-[#00ab69] text-slate-400 hover:translate-x-1 transition-all cursor-pointer text-left block"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onOpenPagePreview('invest-in-iego')}
                  className="text-emerald-400 hover:text-emerald-300 font-semibold cursor-pointer block"
                >
                  Invest in IEGO &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Governance & Fiduciary Col (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Fiduciary Stewardship
            </h4>
            
            <div className="p-5 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800 text-xs space-y-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00ab69]" />
                <span className="font-bold text-white">
                  Inland Empire Community Foundation
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed font-normal">
                Inland Economic Growth &amp; Opportunity (IEGO) is housed at the Inland Empire Community Foundation (IECF), serving as the bi-county regional fiscal and strategic sponsor.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              <button
                onClick={() => onOpenPagePreview('mayors-cyber-cup')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors cursor-pointer"
              >
                <span>IE Mayors Cyber Cup</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar with High Whitespace & Hierarchy */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Inland Economic Growth &amp; Opportunity (IEGO). All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <button onClick={() => onOpenPagePreview('about')} className="hover:text-slate-200 cursor-pointer">
              About
            </button>
            <span>&bull;</span>
            <button onClick={() => onOpenPagePreview('data')} className="hover:text-slate-200 cursor-pointer">
              Data &amp; LMI
            </button>
            <span>&bull;</span>
            <button onClick={() => onOpenPagePreview('contact')} className="hover:text-slate-200 cursor-pointer">
              Contact
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
