import { TeamMember, FeatureModal, InstagramPost } from '../types';
import teamMembersData from './team.json';
export type { TeamMember, FeatureModal, InstagramPost };

export const SITE_METADATA = {
  siteName: "Inland Economic Growth & Opportunity (IEGO)",
  domain: "iegocollab.com",
  logo: {
    header: "https://iegocollab.com/wp-content/uploads/2024/02/Group-169.png",
    footer: "https://iegocollab.com/wp-content/uploads/2024/02/Group-67.png"
  },
  socialLinks: [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/iegocollaborative"
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/company/iegocollab"
    }
  ]
};

export const NAVIGATION_DATA = {
  headerButtons: [
    {
      label: "NEWS",
      url: "/category/news/",
      style: "orange"
    },
    {
      label: "INVEST IN IEGO",
      url: "/invest-in-iego",
      style: "green"
    },
    {
      label: "CONTACT",
      url: "/contact",
      style: "gray"
    }
  ],
  mainMenu: [
    {
      label: "About IEGO",
      url: "https://iegocollab.com/about/",
      sectionId: "about"
    },
    {
      label: "Why IE",
      url: "https://iegocollab.com/why-ie/",
      sectionId: "why-inland-empire"
    },
    {
      label: "Industries",
      url: "https://iegocollab.com/industries/",
      sectionId: "inclusive-regional-economic-development"
    },
    {
      label: "Programs & Services",
      url: "https://iegocollab.com/programs-services/",
      sectionId: "inclusive-regional-economic-development"
    },
    {
      label: "Data",
      url: "https://iegocollab.com/data/",
      sectionId: "regional-data"
    },
    {
      label: "Labor Market",
      url: "https://iegocollab.com/labor-market-information/",
      sectionId: "regional-data"
    },
    {
      label: "IE Mayors Cyber Cup",
      url: "https://iemayorscup.com/",
      target: "_blank",
      isSpecial: true
    }
  ],
  mobileMenu: [
    {
      label: "About IEGO",
      url: "https://iegocollab.com/about/",
      sectionId: "about"
    },
    {
      label: "Why IE",
      url: "https://iegocollab.com/why-ie/",
      sectionId: "why-inland-empire"
    },
    {
      label: "Industries",
      url: "https://iegocollab.com/industries/",
      sectionId: "inclusive-regional-economic-development"
    },
    {
      label: "Programs & Services",
      url: "https://iegocollab.com/programs-services/",
      sectionId: "inclusive-regional-economic-development"
    },
    {
      label: "Data",
      url: "https://iegocollab.com/data/",
      sectionId: "regional-data"
    },
    {
      label: "Labor Market",
      url: "https://iegocollab.com/labor-market-information/",
      sectionId: "regional-data"
    },
    {
      label: "News",
      url: "/category/news",
      sectionId: "latest-posts"
    },
    {
      label: "Invest in IEGO",
      url: "https://iegocollab.com/invest-in-iego/",
      sectionId: "about"
    },
    {
      label: "IE Mayors Cyber Cup",
      url: "https://iemayorscup.com/",
      target: "_blank"
    },
    {
      label: "Contact",
      url: "https://iegocollab.com/contact/",
      sectionId: "contact"
    }
  ]
};

export const HERO_SLIDES = [
  {
    index: 0,
    heading: "Inclusive Economic Development for the Inland Empire",
    button: {
      text: "Learn more",
      url: "/why-ie"
    },
    backgroundImage: "https://iegocollab.com/wp-content/uploads/2024/02/Rectangle-12.jpg",
    accentColor: "#00ab69"
  },
  {
    index: 1,
    heading: "Advancing Opportunity in California’s Inland Empire",
    button: {
      text: "Data",
      url: "/data"
    },
    backgroundImage: "https://iegocollab.com/wp-content/uploads/2024/02/banner-home-scaled.jpg",
    accentColor: "#0090b2"
  }
];

export const ABOUT_CONTENT = {
  id: "about",
  heading: "About",
  bodyParagraphs: [
    "One of the fastest growing population and economic centers in the nation, California’s Inland Empire is expected to grow almost twice as fast as the rest of Southern California through 2048 due to its potential for more housing and job creation.",
    "How can we ensure that this growth provides for diverse opportunity-rich industries and benefits all Riverside County and San Bernardino County residents?",
    "That proactive work is the focus of Inland Economic Growth & Opportunity (IEGO). A regional cross-sector, bi-county collaborative network of community-based organizations, businesses and institutions, IEGO is committed to ensuring that the region’s accelerated growth is focused on the greatest opportunities to create inclusive economic development that will improve the quality of life for all."
  ],
  button: {
    text: "Read more",
    url: "/about"
  },
  image: {
    src: "https://iegocollab.com/wp-content/uploads/2024/02/imagen1.png",
    alt: "Diverse regional leaders and partners collaborating"
  }
};

export const INCLUSIVE_DEV_CONTENT = {
  id: "inclusive-regional-economic-development",
  heading: "Inclusive Regional Economic Development",
  bodyParagraphs: [
    "IEGO pursues a cluster-based approach to inclusive economic development because it is the fastest road to advance opportunities for businesses and residents.",
    "Industry clusters, as defined by the non-profit Brookings Institution, are groups of firms that gain a competitive advantage through local proximity and interdependence. A cluster-based approach—to create a geographic concentration of related companies and other organizations in a field—is distinct from sector development, which targets the growth of just one existing industry. Developing an industry cluster generates greater productivity and innovation, higher wages, and more entrepreneurial activity than developing a single industry sector.",
    "In this way IEGO collaborates for and fosters improvements to workforce development, entrepreneurship, business development, quality of life, poverty reduction and wealth creation, and advances in equity, diversity, and inclusion."
  ],
  button: {
    text: "Read more",
    url: "/program-and-services"
  },
  image: {
    src: "https://iegocollab.com/wp-content/uploads/2024/02/inclusive-regional-1024x535.png",
    alt: "Inclusive Regional Economic Development Model"
  },
  initiatives: [
    { name: "Workforce and Education", color: "bg-[#ff6b01] text-white", icon: "GraduationCap" },
    { name: "Collaboration", color: "bg-[#0090b2] text-white", icon: "Users" },
    { name: "Capital Investment", color: "bg-[#1d3557] text-white", icon: "DollarSign" },
    { name: "Global Identification", color: "bg-[#00ab69] text-white", icon: "Globe" }
  ],
  impactBadges: [
    { label: "Workforce", modalSlug: "workforce" },
    { label: "Entrepreneurship", modalSlug: "regional-business-development" },
    { label: "Business Development", modalSlug: "regional-business-development" },
    { label: "Quality of Life", modalSlug: "quality-of-life" },
    { label: "Access to Capital", modalSlug: "incentive-coordination" },
    { label: "Increasing Prosperity", modalSlug: "economic-impact" },
    { label: "Diversity, Equity and Inclusion", modalSlug: "regional-inclusive-planning-california-jobs-first" }
  ]
};

export const WHY_IE_CONTENT = {
  id: "why-inland-empire",
  heading: "Why Inland Empire",
  bodyParagraphs: [
    "The Inland Empire is a dynamic location with numerous business advantages when planning where to start and grow a business.",
    "Home to more than 4.5 million people, the metropolitan area consists of Riverside County and San Bernardino County, making it the 13th most populous metropolitan area in the United States, and the third largest in the State of California.",
    "At 27,000 square miles, the region encompasses 52 vibrant cities that include growing towns, suburbs, and dense urban centers. Inland Empire-based businesses benefit from a location at the heart of the Southern California economy which provides access to a lucrative almost 22 million strong consumer base."
  ],
  button: {
    text: "Know more",
    url: "/why-ie"
  },
  image: {
    src: "https://iegocollab.com/wp-content/uploads/2024/02/home-foto1.png",
    alt: "Inland Empire Riverside Orange Street and Mission Inn Vista"
  },
  pillars: [
    { label: "Transportation & High-Speed Rail", slug: "transportation" },
    { label: "Research Universities & Education", slug: "education" },
    { label: "2M+ Regional Workforce", slug: "workforce" },
    { label: "$238B+ Combined GDP Impact", slug: "economic-impact" },
    { label: "Quality of Life & Parks", slug: "quality-of-life" },
    { label: "Affordable & Executive Housing", slug: "affordable-and-executive-housing" }
  ]
};

export const REGIONAL_DATA_CONTENT = {
  id: "regional-data",
  heading: "Regional Data",
  bodyParagraphs: [
    "IEGO is an information powerhouse, equipping stakeholders with information to make productive business decisions.",
    "For example, the collaborative provides essential Labor Market Information to 12 community colleges, ensuring education aligns with real-world job needs. This strategic partnership between IEGO and local businesses enhances employability and skills, creating a bridge between education and industry for a future-ready workforce."
  ],
  button: {
    text: "Know more",
    url: "/data"
  },
  image: {
    src: "https://iegocollab.com/wp-content/uploads/2024/02/home-foto3.png",
    alt: "Labor market researchers and industry workers reviewing blueprints"
  },
  dataPillars: [
    { title: "Center of Excellence", slug: "center-of-excellence", description: "Designated state center providing real-time labor market data to 12 community colleges." },
    { title: "Economic & Demographic Intelligence", slug: "regional-economic-demographic-data", description: "Critical bi-county metrics guiding regional investment and business expansion." },
    { title: "Customized Market Analysis", slug: "customized-economic-market-analysis", description: "Tailored cluster analytics, competitive benchmarking, and feasibility insights." }
  ]
};

export const NEWSLETTER_CONTENT = {
  id: "nl-section",
  heading: "Want to stay updated on IEGO news?",
  button: {
    text: "Join Our Newsletter",
    targetElementId: "ctct-form-wrapper-0"
  },
  form: {
    provider: "Constant Contact",
    formId: "5369",
    fields: [
      { name: "first_name", label: "First Name", required: true, type: "text" },
      { name: "last_name", label: "Last Name", required: true, type: "text" },
      { name: "email", label: "Email", required: true, type: "email" },
      { name: "phone_number", label: "Phone Number", required: false, type: "tel" },
      { name: "company", label: "Organization", required: true, type: "text" },
      { name: "custom_industry", label: "Industry", required: true, type: "text" },
      { name: "custom_region", label: "Region", required: false, type: "text" }
    ],
    submitButtonText: "Sign up",
    disclosureText: "By submitting this form, you are consenting to receive marketing emails from: Inland Economic Growth & Opportunity (IEGO). You can revoke your consent to receive emails at any time by using the SafeUnsubscribe® link, found at the bottom of every email. Emails are serviced by Constant Contact."
  }
};

export const LATEST_POSTS_CONTENT = {
  id: "latest-posts",
  heading: "Our Latest Posts",
  source: "Instagram (@iegocollaborative)",
  profileUrl: "https://instagram.com/iegocollaborative",
  posts: [
    {
      type: "carousel" as const,
      caption: "Attention students, teachers, and cybersecurity professionals! Join us for the Inland Empire Mayors Cyber Cup 2026! Middle school, high school, and community college students will be competing in challenges in OSINT, cryptography, forensics, and more! Why should you participate? - Gain real-world cybersecurity experience - Show off your talent to local leaders and companies. Are YOU ready to compete? Register now at the link in our bio to compete to be the Mayors Cup Champion! #IEGO #InlandEmpire #IEMayorsCup #Cybersecurity #CyberCompetition",
      tag: "Cyber Competition",
      date: "Spring 2026"
    },
    {
      type: "carousel" as const,
      caption: "Take a look back at the December 2025 IE Labor Market Pulse! See the data for December’s unemployment rate, job gains and losses, and port activity. Want to learn more? Click the link in our bio to read the complete analysis! #IEGO #InlandEmpire #IEJobs #IELaborMarket #RegionalEconomy",
      tag: "Labor Market Pulse",
      date: "Dec 2025"
    },
    {
      type: "carousel" as const,
      caption: "Cybersecurity matters for all businesses regardless of size. 🔐💻 IEGO was proud to sponsor the Cybersecurity for Small Businesses event hosted by the Chino Valley Chamber of Commerce, featuring expert insights from cybersecurity and IT professionals and hands-on demonstrations from students at Chaffey College. From phishing scams to MFA and payment fraud prevention, attendees walked away with practical tools and an action plan to better protect their organizations. This event was made possible by IEGO’s Inland Empire Cybersecurity Awareness Fund at IECF (inlandempirecf). Donate now at the link in our bio...",
      tag: "Small Business Cyber",
      date: "Nov 2025"
    },
    {
      type: "carousel" as const,
      caption: "This week, IEGO welcomed Eccalon, a defense-focused cybersecurity and AI company, to explore the innovation happening across the Inland Empire. 🌎💻 We toured the Center for Cyber and AI at California State University, San Bernardino and visited Riverside City College’s Cyber Program, highlighting hands-on training, student-led projects, and state-of-the-art Security Operations Centers. IEGO is proud to connect innovative companies with the programs and people shaping the future of tech in our region. #IEGO #InlandEmpire #Cybersecurity #WorkforceDevelopment #Innovation",
      tag: "Defense & AI Tour",
      date: "Oct 2025"
    },
    {
      type: "image" as const,
      caption: "Is your small business protected from cyber attacks? 🔐 IEGO is proud to sponsor the Cybersecurity for Small Businesses workshop with the Chino Valley Chamber of Commerce! Learn from Chaffey College cybersecurity students on how to: ✔️ Recognize common cyber threats ✔️ Avoid phishing scams & fraud ✔️ Strengthen passwords, email & data protection ✔️ Take simple, low-cost steps to protect your business. Invest in protecting your business and register today! #IEGO #CyberSecurity #SmallBusinessSupport #InlandEmpire #Entrepreneurs",
      tag: "Business Workshop",
      date: "Sep 2025"
    },
    {
      type: "image" as const,
      caption: "Today, on Martin Luther King Jr. Day, we reflect on Dr. King’s enduring message of justice and opportunity for all. IEGO is proud to support a more inclusive and prosperous Inland Empire for current and future generations.",
      tag: "Community Values",
      date: "Jan 2026"
    },
    {
      type: "image" as const,
      caption: "Happy Holidays from IEGO! As the year comes to a close, we are thankful for our partners, stakeholders, and communities throughout the Inland Empire who make our work possible. We wish everyone a happy holiday season filled with joy, rest, and time with loved ones. We are excited for the year ahead and look forward to all that we will accomplish together in the new year! #IEGO #InlandEmpire #HappyHolidays",
      tag: "Partnership Gratitude",
      date: "Dec 2025"
    },
    {
      type: "carousel" as const,
      caption: "Our newest IE Labor Market Pulse is live! The latest available data from September 2025 highlights steady job growth alongside notable changes across key industries in the Inland Empire. Dive deeper into the data and what it means for our regional economy. Read the full analysis at the link in our bio! #InlandEmpire #IEGO #LaborMarketPulse #RegionalEconomy #WorkforceData #EconomicInsights",
      tag: "Quarterly Analysis",
      date: "Sep 2025"
    }
  ]
};

export const TEAM_MEMBERS: TeamMember[] = teamMembersData as TeamMember[];

export const FEATURE_MODALS: Record<string, FeatureModal> = {
  "b2b-connection": {
    slug: "b2b-connection",
    title: "B2B Connection",
    body: "We facilitate meaningful connections and partnerships among regional businesses through curated networking events, comprehensive business directories, web-based tools, and personalized matchmaking services. Strengthening these relationships fosters local business transactions and investments that boost the regional business ecosystem and drive collective success, inspiring a future of growth and prosperity."
  },
  "ie-marketing-and-communication": {
    slug: "ie-marketing-and-communication",
    title: "IE Marketing and Communication",
    body: "Our expert team strategically markets and promotes the Inland Empire as a profitable destination for investment, business relocation and expansion, and new talent. Leveraging comprehensive marketing strategies, promotional materials, and targeted communication channels, IEGO’s team of seasoned professionals can deliver a positive message regarding the Inland Empire that resonates with the right audience at the right time."
  },
  "regional-economic-demographic-data": {
    slug: "regional-economic-demographic-data",
    title: "Regional Economic & Demographic Data",
    body: "IEGO diligently collects, analyzes, and disseminates critical economic and demographic data pertinent to the Inland Empire. This valuable economic information guides regional decision-making processes and unveils growth opportunities, empowering stakeholders to make informed choices that drive regional prosperity."
  },
  "regional-convening": {
    slug: "regional-convening",
    title: "Regional Convening",
    body: "We play a pivotal role in driving economic development initiatives and solutions forward. By facilitating collaboration among key stakeholders from diverse regional sectors, we cultivate a collaborative environment that stimulates innovation and propels economic growth across the Inland Empire. We achieve this through convening conferences, meetings, workshops, and other special events."
  },
  "incentive-coordination": {
    slug: "incentive-coordination",
    title: "Incentive Coordination",
    body: "IEGO offers businesses tailored coordination and navigation of various state, federal, and utility incentives to foster economic growth within the Inland Empire. From tax credits to grants, bond financing, workforce and training incentives, and utility incentives, we can assist in customizing packages to meet your business’s unique needs, facilitating your relocation or expansion."
  },
  "regional-inclusive-planning-california-jobs-first": {
    slug: "regional-inclusive-planning-california-jobs-first",
    title: "Regional Inclusive Planning (California Jobs First)",
    body: "IEGO spearheads the development of Inland Southern California’s regional jobs strategy. Aligned with Governor Newsom’s inclusive economic and workforce development approach, this initiative aims to create quality jobs and foster a more accessible economy. We maximize state resources and investments by empowering communities to shape their futures. Funding primarily supports career development projects, ranging from capacity building to industry-specific programs and new job training initiatives."
  },
  "center-of-excellence": {
    slug: "center-of-excellence",
    title: "Center of Excellence",
    body: "IEGO manages one of the state’s designated Centers of Excellence. Through this program, IEGO actively supports the region’s community colleges and their efforts to match educational programs with industry labor requirements. The Center of Excellence provides tailored quarterly labor data on high-growth, emerging, and economically critical industries and occupations. This real-time insight paints a vivid picture of the labor market’s trajectory, guiding future workforce training and program development to meet evolving demands effectively."
  },
  "economic-impact": {
    slug: "economic-impact",
    title: "Economic Impact",
    body: "The combined land area of the Inland Empire is larger than ten U.S. states—West Virginia, Maryland, Hawaii, Massachusetts, Vermont, New Hampshire, New Jersey, Connecticut, Delaware and Rhode Island. San Bernardino County’s GDP was $123 billion in 2022—the #8 highest out of 58 counties in the state. Riverside County’s GDP was $115 billion in 2022—the #10 highest out of 58 counties in the state."
  },
  "workforce": {
    slug: "workforce",
    title: "Workforce",
    body: "San Bernardino and Riverside counties represent a combined workforce population of more than 2 million. The median age in San Bernardino and Riverside Counties is 32 – five years younger than the California average and six years younger than the U.S. average."
  },
  "education": {
    slug: "education",
    title: "Education",
    body: "The Inland Empire benefits from numerous research universities including University of California, Riverside; California State University, San Bernardino; as well as Loma Linda University, California Baptist University and University of Redlands, along with more than a dozen community colleges. This dynamic network of research and learning is further supported by a collection of vocational programs.",
    highlights: [
      {
        label: "Environmental Research Leader",
        text: "UC Riverside’s The Bourns College of Engineering, Center for Environmental Research & Technology (CE-CERT)’s mission is to be a recognized leader in environmental education, a collaborator with industry and government to improve the technical basis for regulations and policy, a creative source of new technology, and a contributor to a better understanding of the environment."
      },
      {
        label: "Cybersecurity Learning Leader",
        text: "The Cybersecurity Center (CSC) at California State University, San Bernardino (CSUSB) is a pioneer in cybersecurity education. In 2008, the National Security Agency (NSA) and the Department of Homeland Security (DHS) designated CSUSB as a Center of Academic Excellence (CAE) in Information Assurance, a coveted recognition for cyber schools as it demonstrates the standard of excellence for cyber education in the nation."
      },
      {
        label: "Elevated University Rankings",
        text: "In 2023, U.S. News & World Report named UC Riverside the No. 2 university in the nation for social mobility. UCR also climbed 13 spots in the overall rankings, to No. 76 among the top 435 private and public universities."
      }
    ]
  },
  "transportation": {
    slug: "transportation",
    title: "Transportation",
    body: "The Inland Empire’s well-financed leading-edge transportation infrastructure connects business at the local, national, and international level. The region is supported by an extensive network of airports, roadways, and railways.",
    highlights: [
      {
        label: "Railway Investment",
        text: "BNSF and Union Pacific operate in the region, including plans for the recently announced Barstow International Gateway, a 4,500-acre, $1.5 billion facility – the first of its type in North America. This integrated rail facility consists of a railyard, intermodal facility and warehouses for transloading freight from smaller international containers to larger domestic containers."
      },
      {
        label: "Interstate Highway Corridors / High Speed Rail Leadership",
        text: "Now under construction, Brightline West will connect Las Vegas and Southern California with a high-speed passenger rail system. This 218-mile, all-electric high-speed rail service will include a flagship station in Las Vegas, with additional stations in the Inland Empire’s Apple Valley, Hesperia, and Rancho Cucamonga."
      },
      {
        label: "Regional Airport Infrastructure / Opportunistic Airport Growth",
        text: "Significant and expanding airports include San Bernardino International Airport (SBD), Ontario International Airport (ONT) and Palm Springs International Airport (PSP), as well as numerous cargo and private airports. Of note, ONT is recognized as the fastest growing airport in the United States, according to Global Traveler."
      }
    ]
  },
  "customized-economic-market-analysis": {
    slug: "customized-economic-market-analysis",
    title: "Customized Economic & Market Analysis",
    body: "IEGO offers customized economic and market analysis services tailored to meet the specific needs of businesses and stakeholders within the region. Our comprehensive analyses provide valuable insights into market trends, competitive landscapes, high-growth opportunities, and analyzing strengths and weaknesses. These analyses empower decision-makers to make informed choices and drive sustainable economic development."
  },
  "quality-of-life": {
    slug: "quality-of-life",
    title: "Quality of Life",
    body: "Businesses that choose the Inland Empire gain a highly desirable quality of life with access to renowned mountains, deserts, and lakes. The region holds globally recognized music festivals such as Coachella and Stagecoach. Numerous national parks including Joshua Tree and Death Valley National Park as well as the San Bernardino National Forest are in the Inland Empire. Internationally sought-after tourism destinations such as Palm Springs, Temecula, Joshua Tree, and Big Bear are also within the Inland Empire.",
    externalLinks: [
      { label: "Explore RivCo Parks", url: "https://rivcoparks.org" },
      { label: "Explore San Bernardino Parks", url: "https://parks.sbcounty.gov" }
    ]
  },
  "regional-global-identification": {
    slug: "regional-global-identification",
    title: "Regional Global Identification",
    body: "IEGO actively communicates to national and international business decision-makers to enhance the region’s visibility and attractiveness for public and private investment. By positioning the region strategically and highlighting its economic strength and opportunities, we facilitate the efficient delivery of resources. We aim to bolster the two-county region’s economic diversity, resiliency, and prosperity through these efforts."
  },
  "inclusive-economic-development-planning-and-analysis": {
    slug: "inclusive-economic-development-planning-and-analysis",
    title: "Inclusive Economic Development Planning and Analysis",
    body: "Ensuring that economic development initiatives benefit all communities throughout the region is paramount to IEGO. The goal is to drive targeted growth, economic diversity, prosperity, and resiliency by implementing a comprehensive industry cluster strategy and an IEGO that engages diverse stakeholders and integrates inclusive strategies into planning and implementation processes, fostering a more equitable and sustainable economic landscape across the Inland Empire."
  },
  "regional-business-development": {
    slug: "regional-business-development",
    title: "Regional Business Development",
    body: "IEGO is dedicated to supporting our economic development partners and their collective efforts to expand, attract, and retain businesses in the Inland Empire region. We provide a targeted approach to build opportunities to empower companies to thrive in the dynamic landscape of the Inland Empire economy."
  },
  "grant-writing-administration": {
    slug: "grant-writing-administration",
    title: "Grant Writing & Administration",
    body: "Our experienced team specializes in identifying funding opportunities, crafting compelling grant proposals, and efficiently managing the administrative aspects of grant funding. With a keen focus on compliance and reporting, we streamline the process, allowing businesses and economic development partners to concentrate on realizing their growth potential."
  },
  "affordable-and-executive-housing": {
    slug: "affordable-and-executive-housing",
    title: "Affordable and Executive Housing",
    body: "The region is rich in housing diversity creating an affordable quality of life when compared to the coastal communities of Southern California. An example of the region’s popularity is Ontario Ranch, hailed as one of the nation’s fastest growing master planned communities."
  }
};

export const FOOTER_CONTENT = {
  careersLink: {
    label: "Careers",
    url: "https://iegocollab.com/careers/"
  },
  newsletter: {
    heading: "Subscribe to our newsletter",
    buttonText: "IEGO News Sign-up",
    buttonUrl: "/#nl-section"
  },
  contact: {
    heading: "Contact Us:",
    address: "330 N D Street, S. #415 San Bernardino, CA 92401",
    email: "IEGOinfo@iegocollaborative.org",
    phone: "951-344-9640"
  },
  copyright: "© 2023 Inland Economic Growth & Opportunity"
};
