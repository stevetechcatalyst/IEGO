import React, { useState, useEffect } from 'react';
import { X, Mail, Building2 } from 'lucide-react';
import { TEAM_MEMBERS, TeamMember } from '../data/siteContent';

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMemberId?: string;
}

export const TeamModal: React.FC<TeamModalProps> = ({
  isOpen,
  onClose,
  initialMemberId,
}) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember>(() => {
    return TEAM_MEMBERS.find((m) => m.id === initialMemberId) || TEAM_MEMBERS[0];
  });

  useEffect(() => {
    if (initialMemberId) {
      const found = TEAM_MEMBERS.find((m) => m.id === initialMemberId);
      if (found) setSelectedMember(found);
    }
  }, [initialMemberId]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-800 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b01]" />
            <h3 className="text-base font-extrabold text-white tracking-tight">
              IEGO Collaborative Leadership &amp; Operational Team
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

        {/* Content Layout (Bento split) */}
        <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          {/* Member List (Sidebar) */}
          <div className="md:col-span-5 p-4 space-y-2 max-h-[500px] overflow-y-auto bg-slate-950/50">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">
              Select Leader
            </div>
            {TEAM_MEMBERS.map((member) => (
              <button
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className={`w-full text-left p-3 rounded-2xl transition-all cursor-pointer flex items-center gap-3 border ${
                  selectedMember.id === member.id
                    ? 'bg-slate-900 border-orange-500/50 shadow-md ring-1 ring-orange-500/20 text-white'
                    : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-800/60 text-slate-300'
                }`}
              >
                <div 
                  className={`w-11 h-11 rounded-xl overflow-hidden shrink-0 font-bold text-xs flex items-center justify-center ${
                    selectedMember.id === member.id ? 'bg-[#ff6b01] text-white' : 'bg-slate-800 text-slate-300'
                  }`}
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
                  <span>{member.name.split(' ').map((n) => n[0]).join('')}</span>
                </div>
                <div className="truncate min-w-0">
                  <div className="text-xs font-bold truncate text-white">
                    {member.name}
                  </div>
                  <div className="text-[11px] text-slate-400 truncate">
                    {member.role}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Member Profile Details */}
          <div className="md:col-span-7 p-6 space-y-4 max-h-[500px] overflow-y-auto bg-slate-900">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-orange-500/15 text-orange-400 border border-orange-500/30 uppercase tracking-wide mb-1.5">
                  Leadership &amp; Operations
                </div>
                <h4 className="text-xl font-extrabold text-white tracking-tight">
                  {selectedMember.name}
                </h4>
                <div className="text-xs font-semibold text-[#0090b2] mt-0.5">
                  {selectedMember.role}
                </div>
                <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-1.5">
                  <Building2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>{selectedMember.organization || 'Inland Economic Growth & Opportunity (IEGO)'}</span>
                </div>
                {selectedMember.email && (
                  <div className="mt-1.5">
                    <a
                      href={`mailto:${selectedMember.email}`}
                      className="inline-flex items-center gap-1.5 text-xs text-[#00ab69] hover:underline"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>{selectedMember.email}</span>
                    </a>
                  </div>
                )}
              </div>

              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-800 shrink-0 shadow-md">
                {selectedMember.photo ? (
                  <img
                    src={selectedMember.photo}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                ) : null}
                <div className="w-full h-full flex items-center justify-center font-extrabold text-base text-white bg-slate-800">
                  {selectedMember.name.split(' ').map((n) => n[0]).join('')}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Leadership Profile &amp; Bio
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {selectedMember.bio}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">
                Inland Economic Growth &amp; Opportunity
              </span>
              <button
                onClick={onClose}
                className="px-4 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
