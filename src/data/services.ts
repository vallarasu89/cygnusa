export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  tagline: string;
  heroSummary: string;
  iconName: string;
  imageUrl: string;
  heroImage: string;
  diagramUrl: string;
  accentType: 'gold' | 'violet' | 'cyan' | 'green' | 'sky';
  businessChallenges: string[];
  ourApproach: string[];
  keyCapabilities: string[];
  benefits: string[];
  techStack: string[];
  relatedCaseStudySlugs: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    slug: 'virtual-cto',
    title: 'Virtual CTO',
    shortDescription: 'Strategic executive technology leadership, technology roadmaps, vendor rationalization, and risk governance for growing businesses.',
    category: 'Executive Advisory',
    tagline: 'Your Fractional CTO. Full-Scale Enterprise Impact.',
    heroSummary: 'We translate commercial business vision into executable technology roadmaps, optimize vendor and software expenses, govern security and compliance, and engineer scale-readiness for fast-growth SMBs.',
    iconName: 'Compass',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80',
    diagramUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    accentType: 'violet', // Crown Violet: Premium & enterprise advisory, used sparingly
    businessChallenges: [
      'Lack of senior technical leadership to align tech investments with commercial growth goals.',
      'Spiraling vendor and software licensing costs with fragmented, redundant tech stacks.',
      'Technical debt choking agility, preventing scale, and increasing vulnerability to outages.',
      'Difficulty vetting high-stakes architecture choices, AI investments, and security audits.',
    ],
    ourApproach: [
      '360° Tech & Architecture Audit: Comprehensive evaluation of codebases, infrastructure, team capacity, and SaaS expenditures.',
      'Executive Growth Roadmap: Prioritized 12-to-36-month technology blueprints tied directly to business KPIs.',
      'Vendor & Budget Optimization: Rigorous vendor rationalization, contract re-negotiations, and licensing rightsizing.',
      'Governance & Security Blueprint: Implementing ISO 27001/SOC 2-ready security controls and disaster recovery guardrails.',
    ],
    keyCapabilities: [
      'Enterprise Technology Roadmap & Architecture Design',
      'Vendor Evaluation, Consolidation & Cost Optimization',
      'Security, Compliance & Regulatory Governance',
      'Scale-Readiness & Cloud Modernization Blueprints',
      'Founder, Executive & Board-Level Strategic Advisory',
    ],
    benefits: [
      'Up to 60% savings compared to hiring a full-time enterprise C-level executive.',
      'Immediate access to 25+ years of battle-tested technology leadership experience.',
      'Objective, vendor-neutral recommendations free of software sales quotas.',
      'Risk mitigation across cloud migration, AI adoption, and regulatory compliance.',
    ],
    techStack: ['AWS', 'Azure', 'GCP', 'Microservices', 'Kubernetes', 'ISO 27001', 'SOC 2', 'FinOps'],
    relatedCaseStudySlugs: ['performance-management-system', 'sop-management-system', 'gofuel-ecosystem'],
  },
  {
    id: 'srv-2',
    slug: 'managed-it-cloud',
    title: 'Managed IT & Cloud',
    shortDescription: 'Proactive 24/7 infrastructure monitoring, multi-cloud governance (AWS, Azure, GCP), automated backups, and SLA-backed uptime.',
    category: 'Cloud Operations',
    tagline: 'Zero-Downtime Multi-Cloud Operations & Unified Infrastructure.',
    heroSummary: 'Deliver 99.9% uptime and bulletproof reliability with proactive 24/7 monitoring, cloud cost optimization, unified network administration, and automated disaster recovery.',
    iconName: 'Cloud',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=80',
    diagramUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
    accentType: 'cyan', // Akasha Cyan: Data vis, telemetry, infographics
    businessChallenges: [
      'Unplanned server outages and sluggish network performance degrading client trust.',
      'Opaque, spiraling monthly cloud bills across AWS and Microsoft Azure.',
      'Fragmented monitoring tools causing alert fatigue and delayed incident response.',
      'Lack of automated, tested disaster recovery drills risking permanent data loss.',
    ],
    ourApproach: [
      'Continuous 24/7/365 NOC Observability: Real-time telemetry across server health, network traffic, and application latency.',
      'FinOps Cloud Rightsizing: Continuous resource allocation tuning, reserved instances, and waste elimination.',
      'Automated Multi-Region Backups: Immutable snapshots and automated RTO/RPO failover procedures.',
      'Tiered Helpdesk & Incident SLA: Direct escalation paths backed by ISO 20000-1 service management protocols.',
    ],
    keyCapabilities: [
      'Multi-Cloud Management & Architecture (AWS, Azure, GCP)',
      '24/7/365 Proactive NOC Monitoring & Incident Response',
      'FinOps Cloud Cost Optimization & Licensing Governance',
      'Disaster Recovery, Automated Backup & Business Continuity',
      'Hybrid Cloud Migration & Containerization (Docker, K8s)',
    ],
    benefits: [
      'Guaranteed 99.9% infrastructure availability under enterprise SLAs.',
      'Average 25–40% reduction in monthly cloud infrastructure spend.',
      'Sub-15-minute response times for critical severity-1 incidents.',
      'Audit-ready backup verification meeting ISO and compliance mandates.',
    ],
    techStack: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Terraform', 'Datadog', 'Kubernetes', 'Prometheus'],
    relatedCaseStudySlugs: ['gofuel-ecosystem', 'apac-dice-app'],
  },
  {
    id: 'srv-3',
    slug: 'security-compliance',
    title: 'Security & Compliance',
    shortDescription: 'Enterprise cybersecurity frameworks, vulnerability assessments, penetration testing, and ISO 27001 / SOC 2 certification guidance.',
    category: 'Cybersecurity',
    tagline: 'Defense-in-Depth Cybersecurity & Audit-Grade Governance.',
    heroSummary: 'Protect your enterprise from ransomware, data breaches, and regulatory liabilities with continuous vulnerability assessments, endpoint protection, and certified compliance roadmaps.',
    iconName: 'ShieldCheck',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80',
    diagramUrl: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1000&q=80',
    accentType: 'green', // Abundance Green on Ether White: Verified security & compliance success states
    businessChallenges: [
      'Escalating threats of ransomware and sophisticated spear-phishing attacks.',
      'Stringent vendor procurement demands requiring immediate ISO 27001 or SOC 2 certification.',
      'Unpatched server vulnerabilities and exposed cloud storage buckets.',
      'Complex global data privacy mandates (GDPR, India DPDP Act).',
    ],
    ourApproach: [
      'Full-Scope VASP & Penetration Testing: Deep ethical hacking across web, mobile, API, and internal network layers.',
      'Zero-Trust Architecture: Enforcing least-privilege access, multi-factor authentication, and encrypted communications.',
      'Compliance Readiness Sprint: Developing policy frameworks, risk registers, and audit evidence for ISO and SOC 2.',
      'Managed Detection & Response: 24/7 endpoint telemetry, automated threat isolation, and incident forensics.',
    ],
    keyCapabilities: [
      'Vulnerability Assessment & Penetration Testing (VAPT)',
      'ISO/IEC 27001:2022 & SOC 2 Type II Certification Readiness',
      'Zero Trust Network Access & Identity Governance (IAM)',
      'Endpoint Detection & Response (EDR / XDR Deployment)',
      'Regulatory Data Privacy Audits (GDPR, DPDP Act Compliance)',
    ],
    benefits: [
      'Near-zero vulnerability dwell time through continuous automated and manual assessments.',
      'Accelerated enterprise procurement approval with verified compliance documentation.',
      'Protection against costly ransomware extortion and reputation-destroying breaches.',
      'Comprehensive employee security awareness and anti-phishing simulations.',
    ],
    techStack: ['CrowdStrike', 'SentinelOne', 'Fortinet', 'Sophos', 'Wazuh', 'Burp Suite', 'Tenable Nessus'],
    relatedCaseStudySlugs: ['sop-management-system', 'apac-dice-app'],
  },
  {
    id: 'srv-4',
    slug: 'software-engineering',
    title: 'Software & Product Engineering',
    shortDescription: 'Full-cycle custom software, mobile applications, microservices architecture, and legacy modernization built for scale.',
    category: 'Engineering',
    tagline: 'Modern, Scalable Enterprise Software & Web Applications.',
    heroSummary: 'We architect, engineer, and deploy high-performance custom software, cloud-native web platforms, and mobile apps built with clean code and robust architectural standards.',
    iconName: 'Code',
    imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
    diagramUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80',
    accentType: 'sky', // Cygnusa Sky: Primary engineering identity
    businessChallenges: [
      'Monolithic legacy systems slowing down feature releases and buckling under user growth.',
      'Poorly architected codebases plagued by bugs, high technical debt, and fragile dependencies.',
      'Disconnect between UX design and engineering implementation causing user churn.',
      'Lack of automated CI/CD pipelines leading to manual, error-prone deployment cycles.',
    ],
    ourApproach: [
      'Domain-Driven Architecture: Decoupling complex business logic into maintainable microservices or modular monoliths.',
      'Agile Sprint Velocity: Transparent two-week sprints with automated unit and integration test coverage.',
      'Modern Frontend & Backend Stacks: TypeScript-first development across React, Node.js, Python, and cloud-native databases.',
      'DevOps Automation: Fully automated CI/CD pipelines with zero-downtime blue/green deployment configurations.',
    ],
    keyCapabilities: [
      'Custom Web & Enterprise SaaS Application Engineering',
      'Cross-Platform Mobile App Development (iOS & Android)',
      'Legacy Application Modernization & Cloud Refactoring',
      'Microservices & RESTful / GraphQL API Architecture',
      'DevOps, CI/CD Pipeline Automation & Infrastructure as Code',
    ],
    benefits: [
      '3x faster time-to-market with modern modular development patterns.',
      'High-performance architectures capable of scaling to millions of transactions.',
      'Clean, fully documented codebases that your internal teams can easily maintain.',
      'Rigorous automated test coverage ensuring stability across updates.',
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'Docker', 'Kubernetes'],
    relatedCaseStudySlugs: ['apac-dice-app', 'gofuel-ecosystem', 'sop-management-system'],
  },
  {
    id: 'srv-5',
    slug: 'ai-automation',
    title: 'AI Integration & Automation',
    shortDescription: 'Practical enterprise AI solutions, custom LLM fine-tuning, intelligent process automation (RPA), and automated data pipelines.',
    category: 'Applied AI',
    tagline: 'Pragmatic AI & Intelligent Automation for Business Operations.',
    heroSummary: 'Move beyond AI hype. We build and integrate secure, private AI agents, automated workflow pipelines, and predictive analytics that reduce operational overhead.',
    iconName: 'Cpu',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1600&q=80',
    diagramUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
    accentType: 'cyan', // Akasha Cyan: Data vis, neural diagrams, infographics
    businessChallenges: [
      'Employees bogged down in repetitive, manual data entry and document reconciliation.',
      'Data locked in fragmented, unstructured formats (PDFs, contracts, legacy databases).',
      'Security risks of employees using public consumer AI tools with confidential company data.',
      'Unclear ROI and governance on enterprise AI initiatives.',
    ],
    ourApproach: [
      'Operational Friction Audit: Pinpoint highest-ROI automation bottlenecks across finance, operations, and support.',
      'Private Enterprise RAG (Retrieval-Augmented Generation): Safe AI document querying keeping proprietary data private.',
      'Workflow Automation: Connecting disparate SaaS APIs (CRM, ERP, Billing) into seamless zero-touch flows.',
      'Continuous Performance Tuning: Benchmarking precision, latency, and cost per query to prevent AI cost runaway.',
    ],
    keyCapabilities: [
      'Custom Enterprise RAG & Knowledge Base AI Assistants',
      'Intelligent Document Processing (OCR & Data Extraction)',
      'Automated Workflow Pipelines (n8n, Python, API Integrations)',
      'Predictive Analytics & Operations Forecasting',
      'Private & Secure LLM Deployment (Self-Hosted / Private Cloud)',
    ],
    benefits: [
      'Up to 70% reduction in manual document handling and administrative tasks.',
      'Instant, contextual access to enterprise knowledge without data leakage risks.',
      'Measurable operational ROI within 90 days of production rollout.',
      'Scalable automations that grow with your company without adding headcount.',
    ],
    techStack: ['Python', 'LangChain', 'OpenAI', 'Ollama', 'LlamaIndex', 'FastAPI', 'PostgreSQL pgvector', 'n8n'],
    relatedCaseStudySlugs: ['performance-management-system', 'holiday-seasonz'],
  },
  {
    id: 'srv-6',
    slug: 'staff-augmentation',
    title: 'Staff Augmentation',
    shortDescription: 'Dedicated senior engineers, architects, and DevOps specialists integrated directly into your agile sprints within 48 hours.',
    category: 'Engineering Talent',
    tagline: 'Vetted Senior Tech Talent. Seamless Agile Integration.',
    heroSummary: 'Rapidly scale your development capacity with pre-vetted senior software engineers, DevOps experts, and QA specialists who work directly within your team.',
    iconName: 'Users',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
    diagramUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80',
    accentType: 'sky', // Cygnusa Sky: Primary talent identity
    businessChallenges: [
      'Critical hiring delays holding back product roadmaps and strategic deadlines.',
      'Prohibitive recruiter fees and lengthy onboarding ramps for hard-to-find senior skillsets.',
      'Need for short-to-medium term specialist skills (DevOps, Cloud, Security) without long-term commitments.',
      'Communication and timezone misalignment with low-cost outsourcing providers.',
    ],
    ourApproach: [
      'Rigorous Technical Vetting: Top 3% evaluation across algorithmic problem-solving, architectural design, and communication.',
      'Cultural & Timezone Alignment: Engineers overlap with your core working hours with fluent English proficiency.',
      'Rapid 48-to-72 Hour Matching: Presenting pre-screened candidate profiles matched to your exact tech requirements.',
      'Zero Friction Management: Engineers report directly to your sprint leads using your Jira, GitHub, and Slack environments.',
    ],
    keyCapabilities: [
      'Full-Stack Engineers (React, Node.js, Python, Java, .NET)',
      'Cloud & DevOps Specialists (AWS, Azure, Kubernetes, Terraform)',
      'Mobile Developers (React Native, Flutter, Swift, Kotlin)',
      'QA Engineers & Test Automation Specialists (Cypress, Playwright)',
      'Fractional Technical Project Managers & Scrum Masters',
    ],
    benefits: [
      'Zero recruiting overhead and zero long-term severance liabilities.',
      'Engineers start contributing to code repositories within days of engagement.',
      'Flexible month-to-month contracts that scale up or down with your product cycle.',
      'Transparent hourly or fixed monthly billing with no hidden surprises.',
    ],
    techStack: ['React', 'Node.js', 'Python', 'AWS', 'Kubernetes', 'TypeScript', 'PostgreSQL', 'Flutter'],
    relatedCaseStudySlugs: ['apac-dice-app', 'diya-academy'],
  },
  {
    id: 'srv-7',
    slug: 'offshore-development-center',
    title: 'Offshore Capability Development Center (ODC)',
    shortDescription: 'Establish your own dedicated, branded offshore engineering center in India with complete operational, legal, and HR governance.',
    category: 'Global Delivery',
    tagline: 'Your Dedicated Offshore Engineering & Innovation Hub.',
    heroSummary: 'We build, staff, and manage high-performing dedicated engineering centers in Chennai and Guwahati, giving global tech firms 100% intellectual property control with up to 60% operational cost savings.',
    iconName: 'Building2',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    diagramUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80',
    accentType: 'sky', // Cygnusa Sky: Primary global delivery identity
    businessChallenges: [
      'Exploding engineering payroll in North America, Europe, and Australia.',
      'Unsatisfactory quality and high turnover from transactional offshore outsourcing vendors.',
      'Complex Indian legal entity incorporation, tax compliance, and payroll administration.',
      'Difficulties establishing secure, audit-compliant physical and digital IT environments abroad.',
    ],
    ourApproach: [
      'Turnkey Infrastructure Setup: High-security workstations, redundant fiber links, and ISO 27001-certified facilities.',
      'Targeted Talent Acquisition: Dedicated talent acquisition team sourcing engineers specifically aligned with your brand identity.',
      'Full Statutory & Payroll Governance: Complete handling of MCA, EPF, ESI, TDS, and employment contracts.',
      'Seamless Cultural Integration: Structured training, shared performance management, and unified team rituals.',
    ],
    keyCapabilities: [
      'Dedicated Branded Engineering Office Facilities in Chennai & Guwahati',
      'End-to-End Talent Sourcing, Hiring & People Operations',
      'Statutory Compliance, Indian MCA Payroll & Tax Governance',
      'ISO 27001 Security Controls, VPNs & Hardware Management',
      'Build-Operate-Transfer (BOT) Contractual Flexibility',
    ],
    benefits: [
      'Save 50–65% on full-time engineering payroll while maintaining top-tier quality.',
      'Complete ownership and retention of intellectual property and internal knowledge.',
      'Zero administrative headaches—CYGNUSA manages facilities, IT hardware, and compliance.',
      'Seamless 24-hour round-the-clock development cycles across global timezones.',
    ],
    techStack: ['Enterprise Security', 'Dedicated Hardware', 'ISO 27001 Compliant', 'Git Governance', 'Zero-Trust Networks'],
    relatedCaseStudySlugs: ['tlcx-performance', 'holiday-seasonz'],
  },
  {
    id: 'srv-8',
    slug: 'software-hardware-reseller',
    title: 'Software & Hardware Reseller',
    shortDescription: 'Authorized Tier-1 licensing, procurement, and volume enterprise pricing for Microsoft, AWS, Cisco, Dell, Lenovo, and cybersecurity software.',
    category: 'Enterprise Procurement',
    tagline: 'Authorized Tier-1 Licensing, Hardware & Cloud Procurement.',
    heroSummary: 'Streamline your IT procurement. As an authorized tier-1 reseller and solutions partner, CYGNUSA delivers optimal enterprise pricing, consolidated billing, and expert deployment support.',
    iconName: 'ShoppingBag',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1600&q=80',
    diagramUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    accentType: 'gold', // Solar Gold on Void: Highlights, partner awards, alt CTAs
    businessChallenges: [
      'Fragmented billing across dozens of software vendors with conflicting renewal cycles.',
      'Paying full retail prices for Microsoft 365, Azure, AWS, and enterprise cybersecurity licenses.',
      'Slow procurement lead times and unreliable hardware supply chains for laptops and servers.',
      'Struggling to configure and activate complex enterprise licensing programs correctly.',
    ],
    ourApproach: [
      'Licensing Audit: Identifying unassigned seats, redundant licenses, and right-sizing subscriptions.',
      'Tier-1 Volume Discounts: Passing through premier partner discount tiers across cloud, software, and hardware.',
      'Consolidated Single-Invoice Billing: Simplifying procurement with centralized monthly or annual statements.',
      'Pre-Configuration & Provisioning: Zero-touch deployment of laptops, firewalls, and Microsoft 365 tenants before delivery.',
    ],
    keyCapabilities: [
      'Microsoft 365, Azure & Windows Enterprise Volume Licensing',
      'Enterprise Cybersecurity Software (CrowdStrike, SentinelOne, Sophos, Fortinet)',
      'Enterprise Hardware Procurement (Dell, HP, Lenovo Laptops & Servers)',
      'Networking & Firewall Hardware (Cisco, Fortinet, Ubiquiti)',
      'Consolidated IT Procurement Management & Asset Tagging',
    ],
    benefits: [
      'Up to 20% discount on standard commercial software and cloud subscriptions.',
      'Single point of contact for technical support, renewal management, and warranty.',
      'Pre-configured, secure hardware delivered directly to your employees.',
      'Clear asset tracking preventing license sprawl and surprise true-up bills.',
    ],
    techStack: ['Microsoft 365', 'Azure', 'AWS', 'CrowdStrike', 'Cisco', 'Dell', 'Lenovo', 'Fortinet'],
    relatedCaseStudySlugs: ['gofuel-ecosystem'],
  },
];
