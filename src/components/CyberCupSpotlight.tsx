import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  Users, 
  Terminal, 
  ExternalLink, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Calendar,
  Building2
} from 'lucide-react';

interface CyberCupSpotlightProps {
  onOpenPagePreview: (pageId: string) => void;
  onContactCoordinator: () => void;
}

export const CyberCupSpotlight: React.FC<CyberCupSpotlightProps> = ({
  onOpenPagePreview,
  onContactCoordinator,
}) => {
  const [registeredEmail, setRegisteredEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleRegisterInterest = (e: React.FormEvent) => {
    e.preventDefault();
    if (registeredEmail.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <section id="cyber-cup" className="py-20 bg-slate-950 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background Cyber Grid effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-amber-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flagship Header Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/40 border border-amber-500/30 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-slate-950 uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5" />
                Flagship Regional Initiative
              </span>
              <span className="text-xs text-amber-300 font-semibold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                Led by Suzanna Sotelo, Special Projects Coordinator
              </span>
            </div>

            <button
              onClick={() => onOpenPagePreview('ie-mayors-cyber-cup')}
              className="px-3.5 py-1.5 text-xs font-bold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <span>Cyber Cup Page Blueprint</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-md">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    IE Mayors <span className="text-amber-400">Cyber Cup</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Connecting Education, Workforce &amp; Mayors across Riverside and San Bernardino
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                The IE Mayors Cyber Cup is Southern California&apos;s premier inter-city cybersecurity competition. Designed to address the critical national shortfall of digital defense talent, the initiative inspires middle and high school students, pairs them with civic mayors and defense industry mentors, and awards life-changing collegiate scholarships.
              </p>

              {/* Bullet Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-start gap-2 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">Mayoral Civic Champions:</span>
                    <p className="text-slate-400 text-[11px]">Mayors from 20+ Inland Empire cities sponsor local student squads.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">Capture-The-Flag Challenges:</span>
                    <p className="text-slate-400 text-[11px]">Real-world cyber defense, network forensics, and cryptography scenarios.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">Scholarships &amp; Fast-Track Hires:</span>
                    <p className="text-slate-400 text-[11px]">Direct internships with defense contractors, health systems, and tech firms.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">CSUSB Cyber Institute Partnership:</span>
                    <p className="text-slate-400 text-[11px]">Ranked among the nation&apos;s top NSA-designated Centers of Cyber Excellence.</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onContactCoordinator}
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-all shadow-md flex items-center gap-2"
                >
                  <span>Sponsor or Register a School Team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenPagePreview('ie-mayors-cyber-cup')}
                  className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-xs border border-slate-700 transition-colors"
                >
                  View Competition Rules &amp; Schedule
                </button>
              </div>
            </div>

            {/* Right Card: Stats & Quick Registration */}
            <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-slate-200">Cyber Cup By The Numbers</span>
                </div>
                <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded">
                  2025/2026 Season
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80 text-center">
                  <div className="text-2xl font-extrabold text-white font-mono">80+</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Participating Schools</div>
                </div>
                <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80 text-center">
                  <div className="text-2xl font-extrabold text-amber-400 font-mono">500+</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Student Competitors</div>
                </div>
                <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80 text-center">
                  <div className="text-2xl font-extrabold text-cyan-400 font-mono">24</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Mayoral Champions</div>
                </div>
                <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80 text-center">
                  <div className="text-2xl font-extrabold text-emerald-400 font-mono">$50K+</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Awarded Scholarships</div>
                </div>
              </div>

              {/* Quick notification sign up */}
              <div className="pt-2">
                <span className="text-xs font-bold text-white block mb-1">
                  Stay Informed on Season Updates
                </span>
                <p className="text-[11px] text-slate-400 mb-3">
                  Receive bracket schedules, mayoral announcements, and volunteer judge opportunities.
                </p>

                {subscribed ? (
                  <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-xs text-emerald-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Thank you! We have logged your interest for the upcoming Cyber Cup season.</span>
                  </div>
                ) : (
                  <form onSubmit={handleRegisterInterest} className="flex gap-2">
                    <input
                      type="email"
                      required
                      value={registeredEmail}
                      onChange={(e) => setRegisteredEmail(e.target.value)}
                      placeholder="Enter your email..."
                      className="flex-1 px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-colors shrink-0"
                    >
                      Join Updates
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
