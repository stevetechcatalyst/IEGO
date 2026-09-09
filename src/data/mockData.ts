import { IndustryCluster, ProgramService, LaborMarketMetric, NewsArticle, PageBlueprint } from '../types';

export const NAV_LINKS = [
  { id: 'about', label: 'About', href: '#about', description: 'Our mission, Brookings origin, and 50+ partner regional network' },
  { id: 'why-ie', label: 'Why IE', href: '#why-ie', description: 'Strategic geographic gateway, 4.7M+ people, and economic advantages' },
  { id: 'industries', label: 'Industries', href: '#industries', description: 'Priority clusters: Sustainable Logistics, Advanced Mfg, Cyber, Clean Tech' },
  { id: 'programs-services', label: 'Programs & Services', href: '#programs-services', description: 'Custom economic analysis, Center of Excellence, grant administration' },
  { id: 'data', label: 'Data', href: '#data-labor-market', description: 'Regional economic indicators, cluster mapping, and growth forecasts' },
  { id: 'labor-market', label: 'Labor Market', href: '#data-labor-market', description: 'Workforce supply & demand, wage dynamics, and training alignment' },
  { id: 'news', label: 'News', href: '#news', description: 'Latest reports, regional updates, and partner announcements' },
  { id: 'invest-in-iego', label: 'Invest in IEGO', href: '#invest', description: 'Philanthropic co-investment and public-private partnerships' },
  { id: 'ie-mayors-cyber-cup', label: 'IE Mayors Cyber Cup', href: '#cyber-cup', isFlagship: true, description: 'Premier regional student cyber competition & talent pipeline' },
  { id: 'contact', label: 'Contact', href: '#contact', description: 'Connect with IEGO team in San Bernardino & Riverside' },
];

export const REGIONAL_STATS = [
  {
    id: 'pop',
    value: '4.7M+',
    label: 'Regional Population',
    subtext: 'Fastest-growing and youngest workforce in California',
    iconName: 'Users',
    trend: '+12% decade growth'
  },
  {
    id: 'grp',
    value: '$210B+',
    label: 'Gross Regional Product',
    subtext: '13th largest economic engine in the United States',
    iconName: 'TrendingUp',
    trend: 'Major US economic engine'
  },
  {
    id: 'partners',
    value: '50+',
    label: 'Collaborative Partners',
    subtext: 'Cross-sector civic, business, labor & higher-ed network',
    iconName: 'Network',
    trend: 'Countywide coalition'
  },
  {
    id: 'colleges',
    value: '14',
    label: 'Community Colleges',
    subtext: 'Supported through designated Centers of Excellence',
    iconName: 'GraduationCap',
    trend: 'Direct talent pipelines'
  }
];

export const INDUSTRY_CLUSTERS: IndustryCluster[] = [
  {
    id: 'sustainable-logistics',
    title: 'Sustainable Logistics & Supply Chain',
    shortDescription: 'Modernizing the nation\'s premier goods movement corridor into a zero-emission, tech-forward logistics leader.',
    fullDescription: 'Anchored by Ontario International Airport, major Class-I rail corridors, and proximity to the Ports of Los Angeles and Long Beach, this cluster is pioneering electric fleet integration, automated sorting, and clean cold-chain infrastructure.',
    highlightStat: '185,000+',
    highlightLabel: 'Direct Regional Jobs',
    averageWage: '$68,400',
    jobGrowth: '+8.4% projected (5-yr)',
    keyAssets: ['Ontario International Airport (ONT)', 'BNSF & Union Pacific Intermodal Yards', 'Clean Fleet Innovation Corridors'],
    icon: 'Truck',
    tag: 'Core Economic Driver',
    accentColor: 'from-blue-600 to-cyan-600'
  },
  {
    id: 'advanced-manufacturing',
    title: 'Advanced Manufacturing & Aerospace',
    shortDescription: 'High-precision fabrication, materials science, aerospace components, and automation systems.',
    fullDescription: 'From defense aerospace components and medical device fabrication to precision metal machinery, Inland Empire manufacturers leverage expansive facilities, advanced automation, and proximity to Southern California research institutions.',
    highlightStat: '102,000+',
    highlightLabel: 'Manufacturing Workforce',
    averageWage: '$76,200',
    jobGrowth: '+6.1% high-wage expansion',
    keyAssets: ['Aerospace & Defense Suppliers', 'Inland Advanced Materials Consortium', 'Automated Fabrication Hubs'],
    icon: 'Cpu',
    tag: 'High-Wage Cluster',
    accentColor: 'from-indigo-600 to-blue-600'
  },
  {
    id: 'cybersecurity-it',
    title: 'Cybersecurity, IT & Digital Defense',
    shortDescription: 'Cultivating cyber talent, securing critical infrastructure, and driving IT innovation across the region.',
    fullDescription: 'Home to the IE Mayors Cyber Cup, National Centers of Academic Excellence in Cybersecurity at CSUSB, and regional defense installations, this cluster builds secure digital infrastructure and provides direct career ladders into high-earning tech careers.',
    highlightStat: '2,800+',
    highlightLabel: 'Annual Cyber Openings',
    averageWage: '$104,500',
    jobGrowth: '+18.2% high-demand growth',
    keyAssets: ['Cal State San Bernardino Cyber Institute', 'IE Mayors Cyber Cup Network', 'Critical Infrastructure Defense Labs'],
    icon: 'ShieldCheck',
    tag: 'Rapid Tech Growth',
    accentColor: 'from-amber-600 to-orange-600'
  },
  {
    id: 'green-energy-cleantech',
    title: 'Green Technology & Renewable Energy',
    shortDescription: 'Accelerating utility-scale solar, battery storage, clean hydrogen, and circular economy investments.',
    fullDescription: 'With abundant solar irradiance, vast open space, and strict statewide decarbonization goals, the Inland Empire serves as California\'s primary sandbox for commercial clean tech, microgrids, grid-scale batteries, and green construction.',
    highlightStat: '$4.2B',
    highlightLabel: 'Capital Investment Active',
    averageWage: '$84,900',
    jobGrowth: '+14.5% green economy surge',
    keyAssets: ['Coachella Valley Green Hydrogen Pilot', 'High Desert Solar & Storage Arrays', 'UC Riverside Center for Environmental Research'],
    icon: 'Zap',
    tag: 'Future-Ready Cluster',
    accentColor: 'from-emerald-600 to-teal-600'
  },
  {
    id: 'healthcare-biomedical',
    title: 'Healthcare, Life Sciences & Wellness',
    shortDescription: 'Expanding medical training, regional hospital networks, and community wellness infrastructure.',
    fullDescription: 'To meet the healthcare needs of 4.7M residents, universities like UC Riverside School of Medicine and Loma Linda University Health are leading regional expansions in clinical research, medical technologies, and specialized healthcare delivery.',
    highlightStat: '175,000+',
    highlightLabel: 'Healthcare Practitioners',
    averageWage: '$89,300',
    jobGrowth: '+12.7% ongoing demand',
    keyAssets: ['Loma Linda University Medical Center', 'UCR School of Medicine', 'Regional Trauma & Specialized Care Networks'],
    icon: 'Activity',
    tag: 'Essential Service & Growth',
    accentColor: 'from-rose-600 to-pink-600'
  }
];

export const PROGRAMS_AND_SERVICES: ProgramService[] = [
  {
    id: 'custom-economic-analysis',
    title: 'Customized Economic & Market Analysis',
    category: 'Research & Strategy',
    description: 'Providing tailored macroeconomic research, cluster competitiveness benchmarking, and localized impact assessments to inform civic decisions and strategic business expansion.',
    deliverables: ['Custom Demographic & Labor Profiles', 'Industry Cluster Gap Analysis', 'Fiscal & Economic Impact Modeling'],
    targetAudience: 'Municipalities, Economic Developers & Corporate Executives',
    icon: 'LineChart',
    actionText: 'Request Custom Analysis'
  },
  {
    id: 'california-jobs-first',
    title: 'California Jobs First Regional Strategy',
    category: 'State Initiative',
    description: 'Leading Inland Southern California\'s regional jobs collaborative to deploy state catalyst funds and cultivate equitable, high-wage employment opportunities for residents without 4-year degrees.',
    deliverables: ['Regional Economic Recovery Plan', 'Catalyst Project Pipeline', 'Inclusive High-Road Employment Accords'],
    targetAudience: 'Regional Businesses, Unions, Nonprofits & Educators',
    icon: 'Sparkles',
    actionText: 'Explore Regional Strategy'
  },
  {
    id: 'centers-of-excellence',
    title: 'Center of Excellence (COE) Labor Alignment',
    category: 'Workforce & Education',
    description: 'Operating as California\'s designated Center of Excellence for the Inland Empire/Desert Region, providing community colleges with labor market intelligence to align career education curricula.',
    deliverables: ['Real-Time Job Demand Bulletins', 'Community College Curriculum Validation', 'Living Wage & Skill Scans'],
    targetAudience: '14 Regional Community Colleges, Faculty & Workforce Boards',
    icon: 'GraduationCap',
    actionText: 'Access COE Labor Studies'
  },
  {
    id: 'business-development-incentives',
    title: 'Regional Business Expansion & Incentives',
    category: 'Business Concierge',
    description: 'Supporting business attraction, expansion, and retention across San Bernardino and Riverside counties through coordinated incentive packaging and regulatory navigation.',
    deliverables: ['Site Selection & Infrastructure Navigation', 'State Tax Credit & Incentive Packaging', 'Workforce Training Subsidies Match'],
    targetAudience: 'Expanding Enterprises, Investors & Site Consultants',
    icon: 'Briefcase',
    actionText: 'Connect With Concierge'
  },
  {
    id: 'grant-writing-administration',
    title: 'Regional Grant Writing & Administration',
    category: 'Funding Acceleration',
    description: 'Unlocking millions in federal (EDA, NSF, DOE) and state competitive grants by building multi-jurisdictional coalitions, writing winning proposals, and overseeing compliance.',
    deliverables: ['Federal & State Grant Proposal Development', 'Multi-Jurisdictional MOUs', 'Grant Compliance & Impact Reporting'],
    targetAudience: 'Coalition Partners, Cities & Regional Agencies',
    icon: 'FileText',
    actionText: 'Partner on Grant Initiatives'
  },
  {
    id: 'mayors-cyber-pathway',
    title: 'IE Mayors Cyber Cup & Tech Pathways',
    category: 'Flagship Pipeline',
    description: 'A marquee regional cybersecurity competition bridging mayors, educators, students, and defense-industry employers to establish the Inland Empire as California\'s cyber talent powerhouse.',
    deliverables: ['Annual Inter-City Student Competition', 'Cybersecurity Training Camps & Certifications', 'Direct Apprenticeship & Employer Matching'],
    targetAudience: 'Middle/High School Students, Mayors, Educators & Tech Employers',
    icon: 'Award',
    actionText: 'Explore Cyber Cup'
  }
];

export const LABOR_MARKET_DATA: LaborMarketMetric[] = [
  {
    sector: 'Transportation, Warehousing & Logistics',
    jobsCount: 192400,
    jobsDisplay: '192,400',
    medianWage: '$58,700',
    projectedGrowth: '+9.2%',
    qualityJobsIndex: 78,
    highlight: 'Largest logistics hub on the West Coast; increasing focus on automated technician roles.'
  },
  {
    sector: 'Health Care & Social Assistance',
    jobsCount: 184200,
    jobsDisplay: '184,200',
    medianWage: '$72,100',
    projectedGrowth: '+13.8%',
    qualityJobsIndex: 89,
    highlight: 'Fastest-growing employer sector; critical demand for specialized nursing, radiology, and allied health.'
  },
  {
    sector: 'Advanced Manufacturing & Precision Goods',
    jobsCount: 104500,
    jobsDisplay: '104,500',
    medianWage: '$74,800',
    projectedGrowth: '+5.4%',
    qualityJobsIndex: 85,
    highlight: 'High concentration in metal fabrication, medical instruments, and aerospace engineering.'
  },
  {
    sector: 'Construction & Green Infrastructure',
    jobsCount: 116800,
    jobsDisplay: '116,800',
    medianWage: '$69,300',
    projectedGrowth: '+7.6%',
    qualityJobsIndex: 82,
    highlight: 'Fueled by renewable energy facilities, housing expansion, and multimodal transportation investments.'
  },
  {
    sector: 'Professional, Scientific & Technical (incl. IT/Cyber)',
    jobsCount: 56900,
    jobsDisplay: '56,900',
    medianWage: '$92,400',
    projectedGrowth: '+15.1%',
    qualityJobsIndex: 94,
    highlight: 'Highest-earning growth sector; supported by regional university research and cyber defense contracts.'
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'IEGO Convenes 50+ Regional Leaders to Launch California Jobs First Catalyst Blueprint',
    category: 'Strategy & Policy',
    date: 'February 24, 2025',
    readTime: '4 min read',
    summary: 'The collaborative gathered civic, educational, and business leaders in San Bernardino to unveil actionable investment priorities focused on inclusive job creation and clean economy transition.',
    source: 'IEGO Press Office',
    featured: true
  },
  {
    id: 'news-2',
    title: 'IE Mayors Cyber Cup 2025 Welcomes Record 80+ School Teams Across Riverside & San Bernardino',
    category: 'Cybersecurity',
    date: 'January 18, 2025',
    readTime: '3 min read',
    summary: 'Mayors from across the Inland Empire join forces to champion student cyber competitors, offering industry mentorships and scholarships to high school and community college participants.',
    source: 'Cyber Cup Newsroom'
  },
  {
    id: 'news-3',
    title: 'Center of Excellence Releases Inland Empire Regional Labor Market & Wage Study',
    category: 'Workforce',
    date: 'December 12, 2024',
    readTime: '6 min read',
    summary: 'New research details high-wage middle-skill pathways, identifying targeted certificate opportunities across clean energy, robotics maintenance, and medical imaging.',
    source: 'Centers of Excellence'
  },
  {
    id: 'news-4',
    title: 'Inland Empire Community Foundation and IEGO Announce Regional Innovation Co-Investment Fund',
    category: 'Regional Investment',
    date: 'November 05, 2024',
    readTime: '5 min read',
    summary: 'A philanthropic and civic matching initiative established to accelerate cluster-based business incubation and provide risk capital for clean-tech entrepreneurs.',
    source: 'IECF News'
  }
];

export const SITE_PAGES_BLUEPRINTS: PageBlueprint[] = [
  {
    id: 'about',
    title: 'About IEGO',
    summary: 'Detailed history of Inland Economic Growth & Opportunity, its foundation via the Brookings Institution Metropolitan Program, mission under the Inland Empire Community Foundation (IECF), leadership, and governance board.',
    keySections: ['Origins & Brookings Planning Process', 'Vision, Mission & Equity Mandate', 'Executive Leadership & Steering Committee', '50+ Collaborative Partner Roster'],
    currentStatus: 'Active Prototype on Home',
    actionPrompt: 'Preview Planned About Page'
  },
  {
    id: 'why-ie',
    title: 'Why Inland Empire',
    summary: 'Comprehensive value proposition for corporate expansion, site selectors, and investors highlighting geographic advantages, demographic vitality, airport & rail assets, and affordability.',
    keySections: ['Intermodal Gateway Advantage', 'Demographic Dividend (4.7M+ Residents)', 'Real Estate, Utilities & Cost Competitiveness', 'Higher Ed & Research Infrastructure'],
    currentStatus: 'Active Prototype on Home',
    actionPrompt: 'Preview Planned Why IE Page'
  },
  {
    id: 'industries',
    title: 'Priority Industry Clusters',
    summary: 'Deep dive into the 5 core regional clusters identified by Brookings: Sustainable Logistics, Advanced Manufacturing, Cybersecurity & IT, Clean Energy, and Health Sciences.',
    keySections: ['Cluster Fact Sheets & Metrics', 'Supply Chain Mapping', 'Key Regional Employers & Parks', 'Cluster Working Groups'],
    currentStatus: 'Active Prototype on Home',
    actionPrompt: 'Preview Planned Industries Page'
  },
  {
    id: 'programs-services',
    title: 'Programs & Services',
    summary: 'Comprehensive catalog of IEGO services including customized economic analysis, Center of Excellence labor research, incentive facilitation, and federal grant coordination.',
    keySections: ['Economic Research & Market Feasibility', 'Incentive Navigation Concierge', 'Workforce Alignment Advisory', 'Grant Administration Services'],
    currentStatus: 'Active Prototype on Home',
    actionPrompt: 'Preview Planned Programs Page'
  },
  {
    id: 'data',
    title: 'Regional Data Center',
    summary: 'Interactive charts, downloadable datasets, county comparisons (Riverside vs. San Bernardino), demographic projections, and economic health dashboards.',
    keySections: ['Gross Regional Product Benchmarks', 'Cost of Living & Housing Analytics', 'Commute & Mobility Patterns', 'Open Data Portal & API Exports'],
    currentStatus: 'Active Prototype on Home',
    actionPrompt: 'Preview Planned Data Center'
  },
  {
    id: 'labor-market',
    title: 'Labor Market Intelligence',
    summary: 'Powered by the Center of Excellence (COE), providing granular occupational data, middle-skill certifications, wage percentiles, and employer talent demands.',
    keySections: ['Inland Empire COE Quarterly Reports', 'Occupational Wage Matrix', 'Community College Program Supply vs. Demand', 'Equitable Quality Jobs Metric'],
    currentStatus: 'Active Prototype on Home',
    actionPrompt: 'Preview Planned Labor Market Page'
  },
  {
    id: 'news',
    title: 'News & Insights',
    summary: 'Press releases, op-eds, research whitepapers, podcast episodes, and media coverage regarding Inland Empire regional development.',
    keySections: ['Press Releases', 'Research Publications', 'Event Calendar & Webcasts', 'Media Kit & Contacts'],
    currentStatus: 'Active Prototype on Home',
    actionPrompt: 'Preview Planned News Page'
  },
  {
    id: 'invest-in-iego',
    title: 'Invest in IEGO',
    summary: 'Philanthropic co-investment avenues, sponsorship opportunities, corporate leadership circles, and civic partnership models housed within the Inland Empire Community Foundation (IECF).',
    keySections: ['Catalyst Match Opportunities', 'Corporate Leadership Circles', 'Civic Endowments & Grants', 'Tax-Deductible Contribution Portal'],
    currentStatus: 'Active Prototype on Home',
    actionPrompt: 'Preview Planned Invest Page'
  },
  {
    id: 'ie-mayors-cyber-cup',
    title: 'IE Mayors Cyber Cup',
    summary: 'Flagship cyber competition connecting middle schools, high schools, colleges, and regional mayors with cybersecurity career pathways and corporate sponsors.',
    keySections: ['Competition Rules & Schedule', 'Participating Cities & Mayors', 'Student Scholarship Details', 'Industry Sponsor Opportunities'],
    currentStatus: 'Active Prototype on Home',
    actionPrompt: 'Preview Planned Cyber Cup Page'
  },
  {
    id: 'contact',
    title: 'Contact IEGO',
    summary: 'Direct contact details for San Bernardino headquarters (330 N D St), Riverside office, inquiry forms, staff directory, and media inquiries.',
    keySections: ['Office Locations & Directions', 'Leadership Directory', 'Partner Consultation Request', 'Newsletter Subscription'],
    currentStatus: 'Active Prototype on Home',
    actionPrompt: 'Preview Planned Contact Page'
  }
];

export const BRAND_ASSET_CHECKLIST = [
  {
    category: 'Logo Assets',
    description: 'Vector and high-resolution master brand files',
    items: [
      { name: 'Primary IEGO Vector Logo (SVG or EPS)', note: 'With and without collaborative tagline' },
      { name: 'Horizontal & Stacked Lockups', note: 'For desktop navigation and mobile layouts' },
      { name: 'Monochrome / Reversed White Logo', note: 'For dark header, navy banners, and print assets' },
      { name: 'IE Mayors Cyber Cup Official Badge', note: 'High-res transparent PNG and vector shield' },
      { name: 'Favicon & App Icon (SVG / 32x32 & 512x512 PNG)', note: 'For browser tabs and mobile bookmarking' }
    ]
  },
  {
    category: 'Brand Color Palette',
    description: 'Official color specifications for web and print consistency',
    items: [
      { name: 'Primary Deep Navy (#0F1E36)', note: 'Symbolizing regional authority, stability, and trust' },
      { name: 'California Amber Gold (#D97706 / #F59E0B)', note: 'Symbolizing opportunity, economic sunshine, and innovation' },
      { name: 'Clean Tech Emerald / Teal (#059669 / #0D9488)', note: 'Representing sustainable growth and environmental stewardship' },
      { name: 'Slate Neutrals (#F8FAFC, #E2E8F0, #334155)', note: 'High-contrast accessible backgrounds and text elements' }
    ]
  },
  {
    category: 'Typography & Fonts',
    description: 'Primary and secondary font families',
    items: [
      { name: 'Primary Display & Headings Font', note: 'Plus Jakarta Sans or custom brand font (TTF/WOFF2)' },
      { name: 'Body & Data Font', note: 'Plus Jakarta Sans or system sans-serif for crystal clarity' }
    ]
  },
  {
    category: 'Photography & Media Imagery',
    description: 'Authentic Inland Empire imagery (min. 1920x1080 resolution)',
    items: [
      { name: 'Regional Gateways & Infrastructure', note: 'Ontario Airport, freight corridors, logistics technology' },
      { name: 'Clean Energy & Manufacturing Hubs', note: 'Solar arrays, modern fabrication plants, engineering labs' },
      { name: 'Higher Education Campuses', note: 'UC Riverside, CSUSB, community college technical centers' },
      { name: 'IE Mayors Cyber Cup Action Shots', note: 'Students, mayors, trophies, and cyber competition stages' }
    ]
  },
  {
    category: 'Partner & Funder Emblems',
    description: 'Collaborative recognition logos',
    items: [
      { name: 'Inland Empire Community Foundation (IECF)', note: 'Parent foundation logo' },
      { name: 'Brookings Institution Metropolitan Program', note: 'Foundational research attribution' },
      { name: 'State of California / California Jobs First', note: 'State initiative partnership badge' }
    ]
  }
];
