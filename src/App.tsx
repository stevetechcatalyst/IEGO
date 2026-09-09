import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MetricsBar } from './components/MetricsBar';
import { AboutSection } from './components/AboutSection';
import { InclusiveEconomicDevSection } from './components/InclusiveEconomicDevSection';
import { WhyIESection } from './components/WhyIESection';
import { RegionalDataSection } from './components/RegionalDataSection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { PagePreviewModal } from './components/PagePreviewModal';
import { TeamModal } from './components/TeamModal';
import { FeatureModalViewer } from './components/FeatureModalViewer';

export default function App() {
  const [selectedPreviewPageId, setSelectedPreviewPageId] = useState<string | null>(null);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [selectedTeamMemberId, setSelectedTeamMemberId] = useState<string | undefined>(undefined);
  const [selectedFeatureModalId, setSelectedFeatureModalId] = useState<string | null>(null);
  const [customLogoUrl, setCustomLogoUrl] = useState<string | null>(null);

  const handleNavigateHomeSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-[#00ab69]/30 selection:text-emerald-300">
      {/* Clean modern sticky navigation bar with dynamic glassmorphism and pill tags */}
      <Navbar
        onOpenPagePreview={(pageId) => setSelectedPreviewPageId(pageId)}
        customLogoUrl={customLogoUrl}
      />

      {/* Main Content Sections - Rebuilt with dark slate, high whitespace, rounded XL cards, and glassmorphism */}
      <main className="flex-1">
        {/* 1. Hero Section: Modern grid, glassmorphic media container & slide navigation */}
        <HeroSection
          onOpenPagePreview={(pageId) => setSelectedPreviewPageId(pageId)}
        />

        {/* 2. Metrics Bar: Glassmorphic bento-grid regional metrics */}
        <MetricsBar />

        {/* 3. About Section: Bento-grid narrative, photographic showcase & leadership trigger */}
        <AboutSection
          onOpenPagePreview={(pageId) => setSelectedPreviewPageId(pageId)}
          onOpenTeamModal={(memberId) => {
            setSelectedTeamMemberId(memberId);
            setIsTeamModalOpen(true);
          }}
        />

        {/* 4. Inclusive Regional Economic Development: 4 Pillars & 7 Outcomes Bento */}
        <InclusiveEconomicDevSection
          onOpenPagePreview={(pageId) => setSelectedPreviewPageId(pageId)}
          onOpenFeatureModal={(modalId) => setSelectedFeatureModalId(modalId)}
        />

        {/* 5. Why Inland Empire: Strategic advantages, high whitespace narrative & photo showcase */}
        <WhyIESection
          onOpenPagePreview={(pageId) => setSelectedPreviewPageId(pageId)}
          onOpenFeatureModal={(modalId) => setSelectedFeatureModalId(modalId)}
        />

        {/* 6. Regional Data: Center of Excellence (COE) LMI & Economic Intelligence */}
        <RegionalDataSection
          onOpenPagePreview={(pageId) => setSelectedPreviewPageId(pageId)}
          onOpenFeatureModal={(modalId) => setSelectedFeatureModalId(modalId)}
          onRequestData={() => setSelectedPreviewPageId('data')}
        />

        {/* 7. Newsletter Sign Up: Constant Contact certified dispatch container */}
        <NewsletterSection />
      </main>

      {/* 8. Footer: Governance, Fiduciary stewardship, and regional links */}
      <Footer
        onOpenPagePreview={(pageId) => setSelectedPreviewPageId(pageId)}
        customLogoUrl={customLogoUrl}
      />

      {/* Interactive Modals & Details Viewers */}
      <PagePreviewModal
        pageId={selectedPreviewPageId}
        onClose={() => setSelectedPreviewPageId(null)}
        onNavigateHomeSection={handleNavigateHomeSection}
      />

      <TeamModal
        isOpen={isTeamModalOpen}
        onClose={() => {
          setIsTeamModalOpen(false);
          setSelectedTeamMemberId(undefined);
        }}
        initialMemberId={selectedTeamMemberId}
      />

      <FeatureModalViewer
        modalId={selectedFeatureModalId}
        onClose={() => setSelectedFeatureModalId(null)}
        onRequestAction={(_actionText) => {
          setSelectedFeatureModalId(null);
          setSelectedPreviewPageId('contact');
        }}
      />
    </div>
  );
}
