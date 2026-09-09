import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2, 
  ArrowRight
} from 'lucide-react';

interface ContactSectionProps {
  onOpenPagePreview: (pageId: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenPagePreview,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    topic: 'Custom Economic Analysis',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 mb-3 border border-amber-500/30">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>Connect With IEGO Collaborative</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Get in Touch with Our <span className="text-amber-400">Regional Team</span>
            </h2>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              Whether you need customized labor market data, want to explore California Jobs First initiatives, register for the IE Mayors Cyber Cup, or co-invest in regional cluster growth, we are here to collaborate.
            </p>
          </div>
          <div className="mt-4 md:mt-0 shrink-0">
            <button
              onClick={() => onOpenPagePreview('contact')}
              className="px-4 py-2 text-xs font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg shadow-xs flex items-center gap-1.5 transition-colors"
            >
              <span>Contact Page Blueprint</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Office Details & Brand Helper */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-5">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-amber-400" />
                Regional Headquarters
              </h3>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">San Bernardino Office</span>
                    <span>330 N D Street, Suite 415</span>
                    <span className="block text-slate-400">San Bernardino, CA 92401</span>
                    <span className="text-[11px] text-amber-400/90 block mt-0.5 font-medium">
                      Housed at Inland Empire Community Foundation (IECF)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Direct Phone</span>
                    <a href="tel:9512243621" className="text-slate-200 hover:text-amber-400 transition-colors">
                      (951) 224-3621
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Collaborative Hours</span>
                    <span>Monday &ndash; Friday: 8:30 AM &ndash; 5:00 PM PT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Request Form */}
          <div className="lg:col-span-7 bg-slate-800/90 rounded-2xl border border-slate-700 p-6 sm:p-8 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Inquiry Received!</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-white">{formData.fullName}</span>. An IEGO regional coordinator will review your request regarding <span className="text-amber-400 font-semibold">{formData.topic}</span> within 1 business day.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      organization: '',
                      topic: 'Custom Economic Analysis',
                      message: '',
                    });
                  }}
                  className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-xs font-semibold rounded-lg transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Send a Message to the IEGO Collaborative
                  </h3>
                  <p className="text-xs text-slate-400">
                    Connect with our research, workforce alignment, or cyber competition specialists.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Dr. Maria Morales"
                      className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@organization.org"
                      className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Organization / City
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. City of Ontario / Riverside USD"
                      className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Area of Inquiry
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                    >
                      <option value="Custom Economic Analysis">Custom Economic &amp; Market Analysis</option>
                      <option value="Labor Market & COE Data">Labor Market &amp; Center of Excellence Data</option>
                      <option value="IE Mayors Cyber Cup">IE Mayors Cyber Cup Participation / Sponsor</option>
                      <option value="California Jobs First">California Jobs First Regional Strategy</option>
                      <option value="Business Expansion & Incentives">Business Expansion &amp; Site Incentives</option>
                      <option value="Invest in IEGO">Philanthropic Co-Investment</option>
                      <option value="General Collaboration">General Regional Collaboration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Message / Project Details
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your research inquiry, school team, or expansion project..."
                    className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500 resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    Average response time: &lt; 24 business hours
                  </span>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
