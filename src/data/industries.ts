export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroSummary: string;
  keySolutions: string[];
  metrics: { label: string; value: string }[];
  caseStudySlugs: string[];
}

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'ind-1',
    slug: 'manufacturing',
    title: 'Manufacturing & Automotive',
    shortDescription: 'Industrial IoT monitoring, smart shop-floor automation, spare parts inventory traceability, and supply chain ERP.',
    heroSummary: 'We modernize automotive manufacturing and industrial plants with real-time parts tracking, digital quality assurance apps, and plant-floor automation that reduces operational cycle times.',
    keySolutions: [
      'Digital After-Sales & Parts Inspection Mobile Platforms',
      'Plant-Floor Industrial IoT Telemetry & Sensor Tracking',
      'Inventory Optimization & Supply Chain Traceability',
      'Automated Quality Control & Compliance Checklists',
    ],
    metrics: [
      { label: 'Inspection Cycle Time', value: '-62%' },
      { label: 'Inventory Shrinkage', value: 'Near Zero' },
      { label: 'Shopfloor Accuracy', value: '99.4%' },
    ],
    caseStudySlugs: ['apac-dice-app'],
  },
  {
    id: 'ind-2',
    slug: 'energy-utilities',
    title: 'Energy & Utilities',
    shortDescription: 'PESO-compliant fuel tech logistics, smart metering data infrastructure, fleet dispatch command centers, and hazardous safety IoT.',
    heroSummary: 'Delivering end-to-end digital logistics and explosive-safety compliant command centers for fuel tech pioneers and energy distributors.',
    keySolutions: [
      'High-Speed Diesel Doorstep Delivery Command Center',
      'IoT Bowser Integration & Calibrated Metering Automation',
      'Automated PESO & OMC Regulatory Compliance Logging',
      'Dynamic Fleet Route Optimization & Geo-fenced Dispatch',
    ],
    metrics: [
      { label: 'Fulfillment Velocity', value: '3x Faster' },
      { label: 'Compliance Audits', value: '100% Pass' },
      { label: 'Delivery Discrepancy', value: '0.0%' },
    ],
    caseStudySlugs: ['gofuel-ecosystem'],
  },
  {
    id: 'ind-3',
    slug: 'aviation',
    title: 'Aviation & Airport Operations',
    shortDescription: 'Airport ground handling SOP automation, digital passenger boarding pass validation, and apron resource dispatch systems.',
    heroSummary: 'Engineered mission-critical software for airport concierge platforms and aviation ground handlers, ensuring zero-latency traveler services and rigorous aviation safety compliance.',
    keySolutions: [
      'Digital Standard Operating Procedure (SOP) Incident Tracking',
      'Real-Time Flight Schedule & Gate Telemetry Integration',
      'VIP Airport Concierge Mobile Check-In & Service Routing',
      'Ground Crew Resource Allocation & Incident Escalation',
    ],
    metrics: [
      { label: 'SLA Adherence', value: '99.8%' },
      { label: 'Passenger Turnaround', value: '-45%' },
      { label: 'Audit Trail Completeness', value: '100%' },
    ],
    caseStudySlugs: ['sop-management-system'],
  },
  {
    id: 'ind-4',
    slug: 'retail-distribution',
    title: 'Retail & Distribution',
    shortDescription: 'Omnichannel inventory synchronization, B2B wholesale portals, multi-warehouse order management, and POS integrations.',
    heroSummary: 'Unify offline store networks and digital sales channels with centralized inventory databases, high-speed ordering portals, and automated logistics tracking.',
    keySolutions: [
      'Centralized Multi-Warehouse Inventory Synchronization',
      'B2B Wholesale Ordering & Dealer Portal Architecture',
      'Point-of-Sale (POS) Integration & Offline Cash Reconciliation',
      'Automated Shipping Aggregator & Courier Webhook Management',
    ],
    metrics: [
      { label: 'Order Processing Time', value: '-55%' },
      { label: 'Out-of-Stock Incidents', value: '-40%' },
      { label: 'Catalog Sync Latency', value: '< 2 sec' },
    ],
    caseStudySlugs: ['holiday-seasonz'],
  },
  {
    id: 'ind-5',
    slug: 'professional-services',
    title: 'Professional Services',
    shortDescription: 'Enterprise ERP for consulting firms, automated time-tracking, billing workflows, and ISO-compliant document management.',
    heroSummary: 'Empower consulting, legal, and financial service firms with secure client portals, automated billable hour capture, and ISO 27001-certified data security frameworks.',
    keySolutions: [
      'Performance Management Systems (PMS) & KPI Dashboards',
      'Automated Project Milestone Billing & Retainer Invoicing',
      'Confidential Client Document Repositories & Audit Trails',
      'Resource Utilization Analytics & Benchmarking',
    ],
    metrics: [
      { label: 'Billing Leakage', value: '-85%' },
      { label: 'Employee Review Speed', value: '4x Faster' },
      { label: 'Data Security Rating', value: 'ISO 27001' },
    ],
    caseStudySlugs: ['performance-management-system'],
  },
  {
    id: 'ind-6',
    slug: 'smb-enterprises',
    title: 'Small & Medium Businesses (SMBs)',
    shortDescription: 'Fractional CTO guidance, cloud migration, turnkey cybersecurity, and predictable monthly ITaaS designed for growing businesses.',
    heroSummary: 'Enterprise-grade technology made accessible, affordable, and actionable for growing SMBs seeking scale without executive overhead.',
    keySolutions: [
      'Virtual CTO Advisory & Strategic IT Budgeting',
      'Cloud Migration & Cost Optimization (AWS / Azure)',
      'Cybersecurity Baseline & Ransomware Defense',
      'All-in-One ITaaS (Hardware, Software, Helpdesk)',
    ],
    metrics: [
      { label: 'IT Overhead Savings', value: 'Up to 60%' },
      { label: 'Support Resolution', value: '< 15 mins' },
      { label: 'Uptime Reliability', value: '99.9%' },
    ],
    caseStudySlugs: ['diya-academy', 'gofuel-ecosystem'],
  },
];
