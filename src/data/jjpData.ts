export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  shortDesc: string;
  category: 'Solar Generation' | 'Engineering & Regulatory';
  summary: string;
  highlights: string[];
  image?: string;
}

export interface SolarProject {
  id: string;
  title: string;
  client: string;
  capacity: string;
  category: 'Ground Mounted' | 'Roof Top';
  location: string;
  partnerNote?: string;
  image: string;
  featuredInHeroPanel?: boolean;
  description: string;
  scope: string[];
}

export interface CompanyStat {
  value: string;
  label: string;
}

export interface ClientBrand {
  name: string;
  logo: string;
}

export const COMPANY_INFO = {
  name: 'Jerry John Powers Pvt. Ltd.',
  shortName: 'JERRY JOHN POWERS',
  established: 2012,
  tagline: 'Integrated Solar Power & Grid Infrastructure Across South India',
  heroHeadline: 'Engineering Reliable Solar Infrastructure',
  heroSubheadline: 'Utility-Scale Ground Mounted · Commercial & Industrial Rooftop Solutions',
  headquarters: {
    company: 'Jerry John Powers Pvt Ltd',
    line1: '34, Swathi Complex, First Floor',
    line2: 'Venkata Narayana Road, Nandanam',
    city: 'Chennai - 600035, Tamil Nadu',
  },
  contact: {
    email: 'aruljohn@jerryjohnpowers.com',
    secondaryEmail: 'jravi@jerryjohnpowers.com',
    phonePrimary: '+91 96772 09406',
    phoneSecondary: '+91 90033 80181',
  },
  directors: [
    {
      name: 'Arul John',
      role: 'Director',
      quote:
        'My dream, which has been fulfilled, was to make all stakeholders—our customers and our employees—happy. I wanted our customers to have a delightful experience at Jerry John Powers with an affordable price and a pleasant buying journey.',
    },
    {
      name: 'Ravikumar Jayaraman',
      role: 'Director',
    },
  ],
  groupCompanies: [
    'Pudukottai Green Power Private Limited',
    'Ubilance Solar Power Private Limited',
    'Jubilingo Solar Energy Private Limited',
    'Foolproof Legal Consultancy Private Limited',
  ],
};

export const OVERVIEW_STATS: CompanyStat[] = [
  {
    value: '14+',
    label: 'Years Serving Industry Since 2012',
  },
  {
    value: '500+',
    label: 'Skilled Workforce Across Tamil Nadu',
  },
  {
    value: '15+',
    label: 'Corporate & Institutional Groups',
  },
];

export const CORE_EXPERTISE_PANEL = [
  {
    id: 'utility-solar',
    title: 'Utility-Scale Solar',
    desc: 'Multi-megawatt ground-mounted solar parks engineered for open-access and grid feed-in.',
  },
  {
    id: 'rooftop-systems',
    title: 'Rooftop Systems',
    desc: 'Ballasted and anchored commercial solar plants with 25-year linear power warranty.',
  },
  {
    id: 'grid-substations',
    title: 'Grid & Substations',
    desc: '11 kV to 110 kV transmission lines, BOS installation, and system commissioning.',
  },
  {
    id: 'approvals-om',
    title: 'Approvals & O&M',
    desc: 'TANGEDCO technical feasibility, statutory safety permits, and lifecycle maintenance.',
  },
];

export const SERVICES_LIST: ExpertiseItem[] = [
  {
    id: 'rooftop-solar',
    number: '01',
    title: 'Rooftop Solar Projects',
    shortTitle: 'Commercial & Institutional Rooftops',
    shortDesc: 'Grid-connected and battery-assisted rooftop PV plants for industrial roofs and campuses.',
    category: 'Solar Generation',
    summary:
      'Engineered using ballasted concrete racking or roof-anchored mounting hardware tailored to structural load capacities, feeding 33 kV / 11 kV three-phase or 440 V captive lines with 25-year linear power warranty.',
    highlights: [
      'Ballasted, attached, and hybrid-ballasted racking systems',
      'Captive load synchronization with automatic grid export',
      'Zero additional land footprint for factories, IT parks, and hospitals',
    ],
    image: '/assets/jjp/rooftop_banner.jpg',
  },
  {
    id: 'ground-mounted',
    number: '02',
    title: 'Ground-Mounted Solar Projects',
    shortTitle: 'Pillar, Concrete & Screw-Pile Arrays',
    shortDesc: 'High-yield ground installations engineered across open terrain and industrial parks.',
    category: 'Solar Generation',
    summary:
      'Adaptable structural foundations—including Concrete Ground Mount, Pillar Mount, Ground Screw, and Ground Anchor configurations—selected per geotechnical survey for optimal tilt angles and straightforward expansion.',
    highlights: [
      'Geotechnical foundation matching for diverse soil profiles',
      'Large-scale solar carport and open-land deployment',
      'Modular layout engineered for future MW capacity expansion',
    ],
    image: '/assets/jjp/gm_20mw.jpg',
  },
  {
    id: 'utility-scale',
    number: '03',
    title: 'Utility-Scale Solar Execution',
    shortTitle: '10 MW to 250 MW Plant Delivery',
    shortDesc: 'Turnkey execution alongside India’s premier EPC contractors and power utilities.',
    category: 'Solar Generation',
    summary:
      'Proven execution capacity across multi-megawatt utility installations in collaboration with NHPC, L&T, Shapoorji Pallonji, Sterling & Wilson, Tata Power Solar, and Reliance Power.',
    highlights: [
      'Synchronized civil, mechanical, and DC/AC array erection',
      'String inverter and central inverter block integration',
      'Strict adherence to utility safety and quality benchmarks',
    ],
    image: '/assets/jjp/hero_b3.jpg',
  },
  {
    id: 'engineering-commissioning',
    number: '04',
    title: 'Engineering & Commissioning',
    shortTitle: '11 kV – 110 kV Evacuation & BOS',
    shortDesc: 'Transmission lines, substations, and Balance of System installation.',
    category: 'Engineering & Regulatory',
    summary:
      'Complete electrical evacuation engineering from module arrays through power conditioning units, transformers, and 11 kV to 110 kV substations and transmission lines.',
    highlights: [
      'Transmission line and substation erection (11 kV to 110 kV)',
      'Complete Balance of System (BOS) equipment installation',
      'Pre-commissioning testing, protection relays, and grid sync',
    ],
  },
  {
    id: 'approvals-compliance',
    number: '05',
    title: 'Project Approvals & Compliance',
    shortTitle: 'TANGEDCO & Statutory Licensing',
    shortDesc: 'Land identification, legal opinion, EB paperwork, and multi-storey safety approvals.',
    category: 'Engineering & Regulatory',
    summary:
      'End-to-end regulatory navigation covering sustainable land identification, legal due diligence, TANGEDCO technical feasibility, Electricity Board filings, and civil/electrical safety certifications.',
    highlights: [
      'Sustainable land sourcing with formal legal opinion',
      'TANGEDCO feasibility studies and Electricity Board liaison',
      'Civil and electrical safety approvals for multi-storey buildings',
    ],
  },
  {
    id: 'operations-maintenance',
    number: '06',
    title: 'Operations & Maintenance',
    shortTitle: 'Long-Term Plant Performance',
    shortDesc: 'Preventive diagnostics, array cleaning, and generation optimization.',
    category: 'Engineering & Regulatory',
    summary:
      'Dedicated O&M teams ensure continuous uptime, inverter health diagnostics, and sustained yield protection across commercial and utility-scale solar assets.',
    highlights: [
      'Preventive electrical inspections and thermography checks',
      'Scheduled module cleaning and structural torque audits',
      'Performance tracking aligned to 25-year linear output goals',
    ],
  },
];

export const PROJECTS_DATA: SolarProject[] = [
  {
    id: 'reliance-power',
    title: 'Reliance Power Utility Solar Array',
    client: 'Reliance Power',
    capacity: '250 MW',
    category: 'Ground Mounted',
    location: 'Utility-Scale Solar Park',
    image: '/assets/jjp/gm_1.jpg',
    featuredInHeroPanel: true,
    description:
      'Large-scale ground-mounted utility solar deployment executed with rigorous field coordination, structural array alignment, and grid evacuation readiness.',
    scope: ['Utility-Scale Ground Mounting', 'BOS & Array Erection', 'Grid Integration Support'],
  },
  {
    id: 'ashok-leyland',
    title: 'Ashok Leyland Industrial Rooftop',
    client: 'Ashok Leyland',
    capacity: '3 MW',
    category: 'Roof Top',
    location: 'Tamil Nadu',
    image: '/assets/jjp/industrial_solar.jpg',
    featuredInHeroPanel: true,
    description:
      'High-capacity industrial rooftop photovoltaic installation engineered to power manufacturing captive loads while minimizing grid energy dependency.',
    scope: ['Industrial Rooftop Engineering', 'Captive Load Synchronization', 'Electrical Safety Approvals'],
  },
  {
    id: 'shapoorji-pallonji',
    title: 'Shapoorji Pallonji Utility Portfolio',
    client: 'Shapoorji Pallonji Group',
    capacity: '134 MW / 50 MW / 30 MW / 20 MW',
    category: 'Ground Mounted',
    location: 'Multiple Solar Parks',
    image: '/assets/jjp/gm_20mw.jpg',
    description:
      'Multi-site utility-scale ground-mounted solar projects delivered across phases totaling over 230 MW of installed photovoltaic capacity.',
    scope: ['Multi-Phase Ground Mount', 'Balance of System Installation', 'Commissioning Support'],
  },
  {
    id: 'nhpc-lt',
    title: 'NHPC Limited Utility Solar Plant',
    client: 'NHPC Limited',
    partnerNote: 'Executed through Larsen & Toubro (L&T)',
    capacity: '50 MW',
    category: 'Ground Mounted',
    location: 'Tamil Nadu',
    image: '/assets/jjp/biz_panels_2.jpg',
    description:
      '50 MW grid-connected ground-mounted power plant executed in partnership with Larsen & Toubro, integrating substation and high-voltage evacuation infrastructure.',
    scope: ['50 MW Ground-Mounted Array', 'Substation & Evacuation', 'L&T EPC Coordination'],
  },
  {
    id: 'grt-jewellers',
    title: 'GRT Jewellers Solar Power Plants',
    client: 'GRT Jewellers',
    capacity: '44 MW & 30 MW',
    category: 'Ground Mounted',
    location: 'Tamil Nadu',
    image: '/assets/jjp/biz_panels_1.jpg',
    description:
      'Captive and group-captive ground-mounted solar assets delivering clean daytime power with full TANGEDCO regulatory compliance.',
    scope: ['Land & TANGEDCO Feasibility', 'Ground-Mounted Execution', '11 kV – 110 kV Grid Tie'],
  },
  {
    id: 'ascendas-it-park',
    title: 'Ascendas IT Park Rooftop System',
    client: 'Ascendas IT Park',
    capacity: '3 MW',
    category: 'Roof Top',
    location: 'Chennai, Tamil Nadu',
    image: '/assets/jjp/parallax_solar.jpg',
    description:
      'Commercial IT campus solar integration engineered for high-density urban infrastructure with multi-storey electrical safety compliance.',
    scope: ['Commercial Rooftop & Carport', 'Multi-Storey Safety Clearance', 'Captive Power Offset'],
  },
  {
    id: 'sastra-university',
    title: 'SASTRA Deemed University Campus Solar',
    client: 'SASTRA Deemed University',
    capacity: '2 MW',
    category: 'Roof Top',
    location: 'Thanjavur, Tamil Nadu',
    image: '/assets/jjp/taikisha.jpg',
    description:
      'Institutional rooftop photovoltaic system providing clean daytime electricity across academic blocks and campus facilities.',
    scope: ['Institutional Rooftop PV', '33 kV / 11 kV Tie-In', 'Lifecycle O&M'],
  },
  {
    id: 'dell-vertical',
    title: 'Dell Vertical Solar Power Farm',
    client: 'Dell',
    capacity: '120 kW',
    category: 'Roof Top',
    location: 'Tamil Nadu',
    image: '/assets/jjp/rooftop_dell.jpg',
    description:
      'Specialized vertical solar power installation designed for space-constrained corporate infrastructure with optimized orientation.',
    scope: ['Custom Mounting Engineering', 'Grid-Connected Conditioning', 'Safety Certification'],
  },
];

export const COMPLETE_PROJECT_LEDGER = [
  { client: 'Reliance Power', capacity: '250 MW', type: 'Ground Mounted', notes: 'Utility-scale solar park' },
  { client: 'Shapoorji Pallonji Group', capacity: '134, 50, 30 & 20 MW', type: 'Ground Mounted', notes: 'Multi-phase portfolio' },
  { client: 'NHPC Limited', capacity: '50 MW', type: 'Ground Mounted', notes: 'Through Larsen & Toubro (L&T)' },
  { client: 'GRT Jewellers', capacity: '44 MW & 30 MW', type: 'Ground Mounted', notes: 'Captive solar generation' },
  { client: 'Malpani Group', capacity: '40 MW', type: 'Ground Mounted', notes: 'Through Sterling & Wilson' },
  { client: 'Asian Fabrics', capacity: '10 MW', type: 'Ground Mounted', notes: 'Industrial open-access' },
  { client: 'SIECHEM', capacity: '5 MW', type: 'Ground Mounted', notes: 'Industrial solar power' },
  { client: 'Valli Mill', capacity: '3 MW', type: 'Ground Mounted', notes: 'Textile mill captive plant' },
  { client: 'Ashok Leyland', capacity: '3 MW', type: 'Roof Top', notes: 'Automotive manufacturing plant' },
  { client: 'Ascendas IT Park', capacity: '3 MW', type: 'Roof Top', notes: 'Commercial IT campus' },
  { client: 'SASTRA Deemed University', capacity: '2 MW', type: 'Roof Top', notes: 'Institutional campus' },
  { client: 'SRM University', capacity: '1 MW', type: 'Roof Top', notes: 'Institutional campus' },
  { client: 'Amway', capacity: '1 MW', type: 'Roof Top', notes: 'Commercial & industrial facility' },
  { client: 'Madura Coats', capacity: '1 MW', type: 'Roof Top', notes: 'Manufacturing facility' },
  { client: 'KG Fabrics', capacity: '1 MW', type: 'Ground Mounted', notes: 'Textile manufacturing' },
  { client: 'Natural Remedies India', capacity: '400 kW', type: 'Roof Top', notes: 'Pharmaceutical plant' },
  { client: 'Dell', capacity: '120 kW', type: 'Roof Top', notes: 'Vertical Solar Power Farm' },
  { client: 'The Danfoss Group', capacity: '100 kW', type: 'Roof Top', notes: 'Industrial campus' },
];

export const CLIENT_LOGOS: ClientBrand[] = [
  { name: 'NHPC Limited', logo: '/assets/jjp/client_nhpc.png' },
  { name: 'Amway', logo: '/assets/jjp/client_amway.png' },
  { name: 'Exide', logo: '/assets/jjp/client_exide.png' },
  { name: 'GRT', logo: '/assets/jjp/client_grt.png' },
  { name: 'KG Fabrics', logo: '/assets/jjp/client_kg.png' },
  { name: 'Siechem', logo: '/assets/jjp/client_siecham.png' },
  { name: 'SRM University', logo: '/assets/jjp/client_srm.png' },
];
