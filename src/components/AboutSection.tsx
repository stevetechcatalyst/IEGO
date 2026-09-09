import React from 'react';
import { ArrowRight, Users, Sparkles, MapPin, ChevronRight } from 'lucide-react';
import { ABOUT_CONTENT, TEAM_MEMBERS } from '../data/siteContent';

interface AboutSectionProps {
  onOpenPagePreview: (pageId: string) => void;
  onOpenTeamModal?: (memberId?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ 
  onOpenPagePreview,
  onOpenTeamModal 
}) => {
  const coreFocusPoints = [
    {
      title: 'Demographic Momentum',
      desc: 'Projected to welcome substantial population growth over the next 20 years, far outpacing coastal California.',
      tag: 'Scale & Growth',
    },
    {
      title: 'Unified Regional Coalition',
      desc: 'Forging deep cross-sector alliances among government, higher education, business leaders, and philanthropy.',
      tag: 'Bipartisan Governance',
    },
    {
      title: 'Careers Close to Home',
      desc: 'Creating high-wage employment within the bi-county region to reduce extreme super-commutes and retain local talent.',
      tag: 'Job Quality',
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-slate-950 border-t border-slate-800/80 relative overflow-hidden">
      {/* Top border subtle accent line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#0090b2]/30 to-transparent" />

      {/* Background ambient lighting */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-orange-500/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-emerald-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Pill Tag & Bold Modern Typography */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-bold text-orange-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT INLAND ECONOMIC GROWTH &amp; OPPORTUNITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {ABOUT_CONTENT.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            A comprehensive, data-driven collaborative advancing regional resilience, capital access, and shared prosperity across Riverside and San Bernardino counties.
          </p>
        </div>

        {/* Bento Grid Layout (Modern Flexbox/Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Bento Card 1: Authentic Narrative with High-Whitespace & Hierarchy (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 shadow-2xl hover:border-slate-700/80 transition-all duration-300">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#ff6b01]">
                <span>Regional Mandate</span>
                <span className="text-slate-700">•</span>
                <span className="text-slate-400">Riverside &amp; San Bernardino</span>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {ABOUT_CONTENT.bodyParagraphs.map((paragraph, index) => (
                  <p 
                    key={index} 
                    className={index === 0 ? "text-white font-medium text-base sm:text-lg leading-relaxed" : "text-slate-300"}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Action Buttons: Signature Pill buttons with modern hover effect */}
            <div className="pt-8 mt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenPagePreview('about')}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full font-bold text-xs sm:text-sm text-white bg-[#ff6b01] hover:bg-[#e65c00] active:scale-95 transition-all shadow-lg shadow-orange-500/20 cursor-pointer"
              >
                <span>{ABOUT_CONTENT.button.text}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {onOpenTeamModal && (
                <button
                  onClick={() => onOpenTeamModal()}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-semibold text-xs sm:text-sm text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 hover:text-white active:scale-95 transition-all border border-slate-700/60 cursor-pointer shadow-xs"
                >
                  <Users className="w-4 h-4 text-[#00ab69]" />
                  <span>Meet Leadership Team</span>
                </button>
              )}
            </div>
          </div>

          {/* Bento Card 2: Modern Photographic Glass Showcase (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl p-4 sm:p-5 bg-slate-900/60 backdrop-blur-xl border border-slate-800 shadow-2xl group hover:border-slate-700/80 transition-all duration-300">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950">
              <img
                src={ABOUT_CONTENT.image.src}
                alt={ABOUT_CONTENT.image.alt}
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

              {/* Floating Glass Badges */}
              <div className="absolute top-3 left-3">
                <div className="px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[11px] font-bold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#ff6b01]" />
                  <span>Bi-County Regional Summit</span>
                </div>
              </div>

              <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800/80">
                <div className="text-[11px] font-bold text-[#ff6b01] uppercase tracking-wider">
                  Shared Vision
                </div>
                <div className="text-xs font-semibold text-slate-200 mt-0.5">
                  Convening business, civic, and academic leaders for resilient regional prosperity.
                </div>
              </div>
            </div>

            {/* Quick Leadership Team Teaser Banner - connected to team.json */}
            <div className="mt-4 p-4 rounded-2xl bg-slate-950/40 border border-slate-800/60 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5 overflow-hidden">
                  {TEAM_MEMBERS.slice(0, 4).map((member) => (
                    <div 
                      key={member.id}
                      title={`${member.name} - ${member.role}`}
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 bg-slate-800 overflow-hidden shrink-0"
                    >
                      {member.photo ? (
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover object-top"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.currentTarget as HTMLElement).style.display = 'none';
                          }}
                        />
                      ) : null}
                      <div className="w-full h-full flex items-center justify-center font-bold text-[10px] text-slate-300 bg-slate-800">
                        {member.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                    </div>
                  ))}
                  {TEAM_MEMBERS.length > 4 && (
                    <div className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 bg-[#ff6b01]/25 text-[#ff6b01] font-bold text-[10px] flex items-center justify-center">
                      +{TEAM_MEMBERS.length - 4}
                    </div>
                  )}
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white">IEGO Leadership Team</div>
                  <div className="text-[11px] text-slate-400">{TEAM_MEMBERS.length} Directors &amp; Specialists</div>
                </div>
              </div>

              {onOpenTeamModal && (
                <button
                  onClick={() => onOpenTeamModal()}
                  className="text-xs font-semibold text-[#0090b2] hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>View All</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Bento Sub-Cards: 3 Strategic Imperatives */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {coreFocusPoints.map((item, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/40 backdrop-blur-md border border-slate-800/80 hover:border-slate-700/90 transition-all duration-200 group"
            >
              <div className="inline-block px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-[11px] font-semibold text-slate-300 mb-3">
                {item.tag}
              </div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

