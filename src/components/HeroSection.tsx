import React, { useState, useEffect, useCallback } from 'react';
import { 
  ArrowRight, 
  BarChart3, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  Layers,
  MapPin,
  TrendingUp,
  Globe2
} from 'lucide-react';
import { HERO_SLIDES } from '../data/siteContent';

interface HeroSectionProps {
  onOpenPagePreview?: (pageId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenPagePreview }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Auto-advance slides every 8 seconds when not hovered
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const slide = HERO_SLIDES[currentSlide];

  const handlePrimaryAction = () => {
    if (slide.index === 0) {
      const el = document.getElementById('about');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById('regional-data');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSecondaryAction = () => {
    if (slide.index === 0) {
      const el = document.getElementById('regional-data');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById('about');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero"
      className="relative pt-28 sm:pt-36 pb-20 md:pb-28 overflow-hidden bg-slate-950"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#0090b2]/10 via-[#00ab69]/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#ff6b01]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        

        {/* Re-architected Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Bold Modern Typography & CTAs (7 Cols on Desktop) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Slide Selector Pills */}
            <div className="inline-flex p-1 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md">
              <button
                onClick={() => setCurrentSlide(0)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  currentSlide === 0
                    ? 'bg-[#00ab69] text-white shadow-md shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                01. Economic Vision
              </button>
              <button
                onClick={() => setCurrentSlide(1)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  currentSlide === 1
                    ? 'bg-[#0090b2] text-white shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                02. Data &amp; Opportunity
              </button>
            </div>

            {/* Display Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] min-h-[120px] sm:min-h-[140px] flex items-center">
              {currentSlide === 0 ? (
                <span>
                  Inclusive Economic Development for the{' '}
                  <span className="bg-gradient-to-r from-[#00ab69] via-[#0090b2] to-emerald-400 bg-clip-text text-transparent">
                    Inland Empire
                  </span>
                </span>
              ) : (
                <span>
                  Advancing Opportunity in California&apos;s{' '}
                  <span className="bg-gradient-to-r from-[#0090b2] via-[#00ab69] to-cyan-400 bg-clip-text text-transparent">
                    Inland Empire
                  </span>
                </span>
              )}
            </h1>

            {/* Narrative Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              {currentSlide === 0 ? (
                <>
                  Driving sustainable high-wage job growth, educational parity, and regional wealth creation across Riverside and San Bernardino counties through unified leadership and strategic capital alignment.
                </>
              ) : (
                <>
                  Harnessing empirical labor market intelligence from the Center of Excellence, supporting 12 community colleges and 52 municipalities with actionable data on California&apos;s fastest-growing bi-county economic engine.
                </>
              )}
            </p>

            {/* Primary & Secondary Pill Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={handlePrimaryAction}
                className={`inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full font-bold text-sm text-white shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer ${
                  currentSlide === 0
                    ? 'bg-[#00ab69] hover:bg-[#00945b] shadow-emerald-500/20'
                    : 'bg-[#0090b2] hover:bg-[#007b99] shadow-cyan-500/20'
                }`}
              >
                <span>{slide.button.text}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleSecondaryAction}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 hover:text-white transition-all cursor-pointer"
              >
                {currentSlide === 0 ? (
                  <>
                    <BarChart3 className="w-4 h-4 text-[#0090b2]" />
                    <span>View Regional Data</span>
                  </>
                ) : (
                  <>
                    <Globe2 className="w-4 h-4 text-[#00ab69]" />
                    <span>About The Collab</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Micro-stats under CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ab69]" />
                <span className="font-semibold text-slate-200">52 Municipalities</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0090b2]" />
                <span className="font-semibold text-slate-200">2 Counties (Riv &amp; SB)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b01]" />
                <span className="font-semibold text-slate-200">4.5M+ Population</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Glassmorphism Card with Hero Media (5 Cols on Desktop) */}
          <div className="lg:col-span-5">
            <div className="relative group">
              
              {/* Outer Subtle Ambient Border Glow */}
              <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-br from-[#00ab69]/30 via-[#0090b2]/20 to-[#ff6b01]/20 opacity-70 blur-lg group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Dynamic Glassmorphism Container Card */}
              <div className="relative rounded-3xl p-3 sm:p-4 bg-slate-900/80 backdrop-blur-xl border border-slate-800/90 shadow-2xl overflow-hidden">
                
                {/* Image Showcase Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950">
                  {HERO_SLIDES.map((s, index) => (
                    <div
                      key={s.index}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                    >
                      <img
                        src={s.backgroundImage}
                        alt={s.heading}
                        className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                    </div>
                  ))}

                  {/* Floating Glass Metric Badges over the photo */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <div className="px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800/80 text-[11px] font-bold text-white flex items-center gap-1.5 shadow-lg">
                      <MapPin className="w-3.5 h-3.5 text-[#00ab69]" />
                      <span>{currentSlide === 0 ? 'Riverside & San Bernardino' : 'Center of Excellence Network'}</span>
                    </div>

                    <div className="px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800/80 text-[11px] font-bold text-emerald-400 flex items-center gap-1.5 shadow-lg">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{currentSlide === 0 ? '$238B+ GRP' : '12 Colleges'}</span>
                    </div>
                  </div>

                  {/* Bottom Caption Pill over image */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800/90 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                        {currentSlide === 0 ? 'Theme 01' : 'Theme 02'}
                      </div>
                      <div className="text-xs font-bold text-white truncate max-w-[200px] sm:max-w-xs">
                        {slide.heading}
                      </div>
                    </div>

                    {/* Slide Controls */}
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={prevSlide}
                        aria-label="Previous Slide"
                        className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={nextSlide}
                        aria-label="Next Slide"
                        className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>

                {/* Card Footer Micro-Highlights */}
                <div className="mt-3 pt-3 px-1 border-t border-slate-800/70 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Active Initiative: California Jobs First</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    {currentSlide + 1} / 2
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
