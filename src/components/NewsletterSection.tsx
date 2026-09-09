import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Send } from 'lucide-react';
import { NEWSLETTER_CONTENT } from '../data/siteContent';

export const NewsletterSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    industry: '',
    region: 'Inland Empire (Bi-County)',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <section id="nl-section" className="py-24 sm:py-32 bg-slate-950 border-t border-slate-800/80 relative overflow-hidden">
      {/* Top border subtle accent line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#00ab69]/30 to-transparent" />

      {/* Background ambient gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-r from-[#0090b2]/10 via-[#00ab69]/10 to-orange-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic Glassmorphism Container Card */}
        <div className="rounded-3xl p-8 sm:p-12 bg-slate-900/70 backdrop-blur-xl border border-slate-800 shadow-2xl hover:border-slate-700/80 transition-all duration-300 text-center">
          
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400 mb-6">
            <Mail className="w-3.5 h-3.5" />
            <span>REGIONAL DISPATCH &amp; ECONOMIC INTELLIGENCE</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-2xl mx-auto mb-4">
            {NEWSLETTER_CONTENT.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto mb-8 font-normal leading-relaxed">
            Receive curated regional reports, labor market trends from the Center of Excellence, and updates on California Jobs First initiatives.
          </p>

          {/* Primary CTA Button: Ocean Teal Pill Button */}
          {!isOpen && !isSubmitted && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm sm:text-base text-white bg-[#0090b2] hover:bg-[#007b99] shadow-xl shadow-cyan-500/20 transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                <span>{NEWSLETTER_CONTENT.button.text}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Constant Contact Form Drawer (Dynamic Glassmorphism Container) */}
          {isOpen && !isSubmitted && (
            <div className="mt-8 bg-slate-950/90 rounded-2xl p-6 sm:p-8 border border-slate-800 text-left animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#00ab69]/15 text-[#00ab69] flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      Join the IEGO Network Dispatch
                    </h3>
                    <p className="text-xs text-slate-400">
                      Quarterly economic intelligence &amp; regional announcements
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs text-slate-400 hover:text-slate-200 underline cursor-pointer"
                >
                  Hide form
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      First Name <span className="text-[#ff6b01]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="Jane"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#0090b2] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Last Name <span className="text-[#ff6b01]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#0090b2] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address <span className="text-[#ff6b01]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane.doe@organization.org"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#0090b2] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(951) 555-0123"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#0090b2] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Organization / Company
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="Inland Empire Agency / Company"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#0090b2] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Industry Sector
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-[#0090b2] transition-colors cursor-pointer"
                    >
                      <option value="">Select your sector...</option>
                      <option value="Education">Higher Education &amp; K-16</option>
                      <option value="Government">Municipal / County Government</option>
                      <option value="Logistics">Logistics, Supply Chain &amp; Rail</option>
                      <option value="Healthcare">Healthcare &amp; Biomedical</option>
                      <option value="Manufacturing">Clean Tech &amp; Advanced Manufacturing</option>
                      <option value="Nonprofit">Nonprofit &amp; Philanthropy</option>
                      <option value="Business">Private Enterprise &amp; Real Estate</option>
                    </select>
                  </div>
                </div>

                {/* Consent & Disclosure text */}
                <div className="pt-2 text-[11px] text-slate-400 leading-relaxed border-t border-slate-800/80">
                  <p>
                    By submitting this form, you are consenting to receive marketing emails from: 
                    Inland Economic Growth &amp; Opportunity (IEGO), 330 N D St, Suite 415, San Bernardino, CA, 92401. 
                    You can revoke your consent at any time using the SafeUnsubscribe&reg; link at the bottom of every email.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-[#00ab69]" />
                    <span>Constant Contact Certified Secure Dispatch</span>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm text-white bg-[#0090b2] hover:bg-[#007b99] active:scale-95 transition-all shadow-md cursor-pointer"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Success State */}
          {isSubmitted && (
            <div className="mt-8 p-8 rounded-2xl bg-slate-950/80 border border-emerald-500/40 text-center animate-in fade-in duration-200">
              <div className="w-12 h-12 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                Subscription Confirmed
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                Thank you for connecting with Inland Economic Growth &amp; Opportunity. You will receive our next quarterly regional intelligence report.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setIsOpen(false);
                }}
                className="mt-4 px-4 py-1.5 rounded-full text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 border border-slate-800 cursor-pointer"
              >
                Done
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
