export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  domain: string;
  industrySlug: string;
  challenge: string;
  solution: string;
  impact: string[];
  servicesDelivered: string[];
  technologiesUsed: string[];
  metrics: { label: string; value: string }[];
  featured: boolean;
  imageUrl?: string;
}

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'cs-1',
    slug: 'apac-dice-app',
    title: 'APAC Dice App – Parts & Inventory Management Platform',
    client: 'All Pro Auto Consultant (APAC)',
    domain: 'Automotive After-Sales & Parts Inspection',
    industrySlug: 'manufacturing',
    challenge: 'Growing scale increased operational complexity, data fragmentation, and error margins across vehicle after-sales inspection and spare parts stockholding—impacting overall operational efficiency and customer turnaround times.',
    solution: 'Engineered and deployed an end-to-end digital mobile and cloud platform for onsite parts inspection, verification, and inventory consolidation with centralized data management and real-time process control.',
    impact: [
      'Scalable multi-client operations across multi-depot workshop networks.',
      'Improved data accuracy and real-time stock visibility insights.',
      'Reduced source-level errors through barcode/QR guided physical verification.',
      'Enhanced client visibility, automated reporting, and customer satisfaction.',
    ],
    servicesDelivered: [
      'Digital Transformation Consulting',
      'UI/UX Design',
      'Custom Software & Mobile App Development',
      'Quality Assurance & Test Automation',
      'Enterprise Implementation & Support',
    ],
    technologiesUsed: ['React Native', 'Node.js Microservices', 'PostgreSQL', 'AWS Cloud', 'Docker'],
    metrics: [
      { label: 'Data Accuracy', value: '99.4%' },
      { label: 'Inspection Cycle Time', value: '-62%' },
      { label: 'Inventory Shrinkage', value: 'Near Zero' },
    ],
    featured: true,
  },
  {
    id: 'cs-2',
    slug: 'gofuel-ecosystem',
    title: 'GoFuel Ecosystem – High-Speed Diesel Doorstep Delivery',
    client: 'GoFuel (Authorized OMC FuelTech Partner)',
    domain: 'Licensed Energy Distribution & Bowser Logistics',
    industrySlug: 'energy-utilities',
    challenge: 'As a fast-growing licensed fuel-tech startup operating with petroleum licenses from multiple OMCs (Oil Marketing Companies), GoFuel required a unified digital ecosystem to manage customers, fleet drivers, and central dispatch administrators while ensuring rigorous PESO explosive safety compliance, calibrated dispensing logs, and tamper-proof delivery operations.',
    solution: 'Designed and engineered an end-to-end role-based digital ecosystem featuring consumer apps, bowser-driver routing and dispensing apps, automated OTP/geofenced delivery validations, and an enterprise administrative command center.',
    impact: [
      'Streamlined consumer and commercial fleet fuel ordering experience.',
      'Controlled, calibrated, and secure driver logistics operations.',
      'Centralized administrative governance with automated PESO compliance logs.',
      'Rapid scalability from local metro operations to multi-state fuel fulfillment.',
    ],
    servicesDelivered: [
      'Digital Transformation Consulting',
      'Custom Mobile & Web Application Engineering',
      'IoT Sensor & Metering Protocol Integration',
      'Cloud Architecture & Managed Hosting (AWS)',
      'Enterprise Security & Compliance',
    ],
    technologiesUsed: ['Flutter', 'Node.js', 'PostgreSQL', 'AWS IoT Core', 'Redis', 'Docker'],
    metrics: [
      { label: 'PESO Audit Accuracy', value: '100%' },
      { label: 'Dispatch Speed', value: '3x Faster' },
      { label: 'Fuel Discrepancy', value: '0.0%' },
    ],
    featured: true,
  },
  {
    id: 'cs-3',
    slug: 'sop-management-system',
    title: 'Digital SOP & Ground Operations Management System',
    client: 'Airportzo (Global Airport Concierge Services)',
    domain: 'Aviation & Concierge Operations',
    industrySlug: 'aviation',
    challenge: 'Managing standard operating procedures (SOPs), VIP passenger handling, and shift escalations across international airports using static PDFs and manual WhatsApp groups caused coordination delays and audit vulnerabilities.',
    solution: 'Developed a unified cloud-native SOP management portal and mobile incident tracking engine that gives airport operations supervisors real-time visibility into ground handler execution, flight delays, and SLA adherence.',
    impact: [
      'Replaced manual paper and chat logs with immutable, audit-ready digital checklists.',
      'Automated flight schedule telemetry integration alerting ground staff to early arrivals or delays.',
      'Guaranteed 100% adherence to airport security and ground protocol standards.',
    ],
    servicesDelivered: [
      'Enterprise SaaS Architecture',
      'React Web Dashboard & PWA Development',
      'API Integration with Aviation Telemetry',
      'Cloud Infrastructure & 24/7 Managed IT',
    ],
    technologiesUsed: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'AWS ECS'],
    metrics: [
      { label: 'SLA Adherence', value: '99.8%' },
      { label: 'Coordination Latency', value: '-70%' },
      { label: 'Audit Readiness', value: '100%' },
    ],
    featured: true,
  },
  {
    id: 'cs-4',
    slug: 'performance-management-system',
    title: 'Enterprise Performance Management System (PMS)',
    client: 'TLCX / Enterprise Logistics Group',
    domain: 'Workforce Performance & KPI Governance',
    industrySlug: 'professional-services',
    challenge: 'Annual manual performance reviews across hundreds of distributed logistics staff caused operational bottlenecks, subjective scoring, and delayed talent decisions.',
    solution: 'Engineered a modern, automated 360-degree performance appraisal platform with customizable competency matrices, automated milestone tracking, and analytics dashboards for HR and executive leadership.',
    impact: [
      'Reduced annual review cycle time from 8 weeks to under 10 days.',
      'Objective, data-backed talent evaluation tied directly to business KPIs.',
      'Full compliance with ISO 9001 and ISO 27001 human resource security standards.',
    ],
    servicesDelivered: [
      'Enterprise Application Development',
      'UI/UX Design & Usability Testing',
      'Role-Based Access Control Architecture',
      'Database Migration & Analytics Reporting',
    ],
    technologiesUsed: ['React', 'Node.js', 'MySQL', 'Express', 'Tailwind CSS', 'Docker'],
    metrics: [
      { label: 'Appraisal Cycle Time', value: '-75%' },
      { label: 'Employee Participation', value: '98%' },
      { label: 'HR Admin Hours Saved', value: '350+ hrs' },
    ],
    featured: false,
  },
];
