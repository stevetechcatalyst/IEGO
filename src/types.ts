export interface NavItem {
  id: string;
  label: string;
  href: string;
  description?: string;
  isFlagship?: boolean;
}

export interface MetricCard {
  id: string;
  value: string;
  label: string;
  subtext: string;
  iconName: string;
  trend?: string;
}

export interface IndustryCluster {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  highlightStat: string;
  highlightLabel: string;
  averageWage: string;
  jobGrowth: string;
  keyAssets: string[];
  icon: string;
  tag: string;
  accentColor: string;
}

export interface ProgramService {
  id: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  targetAudience: string;
  icon: string;
  actionText: string;
}

export interface LaborMarketMetric {
  sector: string;
  jobsCount: number;
  jobsDisplay: string;
  medianWage: string;
  projectedGrowth: string;
  qualityJobsIndex: number;
  highlight: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: 'Strategy & Policy' | 'Workforce' | 'Cybersecurity' | 'Regional Investment';
  date: string;
  readTime: string;
  summary: string;
  source: string;
  featured?: boolean;
}

export interface PageBlueprint {
  id: string;
  title: string;
  summary: string;
  keySections: string[];
  currentStatus: 'Active Prototype on Home' | 'Planned Subpage';
  actionPrompt: string;
}

// Extracted JSON content types
export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  organization?: string;
  email: string;
  photo: string;
  bio: string;
}

export interface FeatureModal {
  slug: string;
  title: string;
  body: string;
  highlights?: Array<{ label: string; text: string }>;
  externalLinks?: Array<{ label: string; url: string }>;
}

export interface InstagramPost {
  type: 'carousel' | 'image';
  caption: string;
}

