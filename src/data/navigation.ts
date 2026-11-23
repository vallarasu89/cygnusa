export interface MegaMenuLink {
  title: string;
  description: string;
  href: string;
}

export interface MegaMenuCategory {
  id: string;
  title: string;
  heading: string;
  description: string;
  links: MegaMenuLink[];
  featureCard: {
    title: string;
    description: string;
    image: string;
    linkText: string;
    linkHref: string;
  };
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  hasMegaMenu: boolean;
  categories?: MegaMenuCategory[];
}

export const NAVIGATION_DATA: NavItem[] = [
  {
    id: 'why-cygnusa',
    label: 'Why CYGNUSA',
    href: '/about',
    hasMegaMenu: true,
    categories: [
      {
        id: 'overview',
        title: 'Company Overview',
        heading: 'Technology Partner. Not Just a Vendor.',
        description:
          'CYGNUSA Technologies was founded on a simple principle: businesses do not need another software vendor; they need seasoned technology leadership that takes ownership of results.',
        links: [
          {
            title: 'About CYGNUSA',
            description: 'Learn about our journey, culture, and our commitment to business-first technology execution.',
            href: '/about',
          },
          {
            title: 'Our Core Values',
            description: 'Explore the 7 foundational principles that guide our client partnerships and engineering standards.',
            href: '/about#values',
          },
          {
            title: 'Client Testimonials',
            description: 'Hear directly from enterprise founders, VPs, and directors who rely on CYGNUSA.',
            href: '/case-studies',
          },
        ],
        featureCard: {
          title: 'Technology Partner. Not Just a Vendor.',
          description: 'Delivering business-first technology consulting with 25+ years of battle-tested engineering leadership.',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
          linkText: 'Discover Our Story',
          linkHref: '/about',
        },
      },
      {
        id: 'leadership',
        title: 'Leadership & Expertise',
        heading: 'Seasoned Technologists & Enterprise Executives',
        description:
          'Our leadership brings over 25+ years of combined experience across enterprise cloud transformations, cybersecurity, and global software delivery.',
        links: [
          {
            title: 'Executive Advisory Team',
            description: 'Veterans with deep track records in banking, fuel-tech, logistics, and automotive IT.',
            href: '/about#leadership',
          },
          {
            title: 'Virtual CTO Model',
            description: 'How we embed senior technological leadership directly into your executive steering committee.',
            href: '/services/virtual-cto',
          },
        ],
        featureCard: {
          title: 'Executive Leadership Involvement',
          description: 'Every CYGNUSA client engagement is governed directly by senior partners, not junior account managers.',
          image: '/team/muthuraman-r.jpg',
          linkText: 'Meet Our Leadership',
          linkHref: '/about#leadership',
        },
      },
      {
        id: 'approach',
        title: 'Our Approach',
        heading: 'The Advise — Build — Run Framework',
        description:
          'A cohesive delivery model bridging strategic roadmaps (Advise), custom engineering (Build), and 24/7 SLA-backed managed operations (Run).',
        links: [
          {
            title: 'Advise: Strategic IT Consulting',
            description: 'Architecture blueprints, vendor rationalization, and risk mitigation before writing code.',
            href: '/services/virtual-cto',
          },
          {
            title: 'Build: Modern Engineering',
            description: 'Agile custom software development, mobile apps, and cloud refactoring.',
            href: '/services/software-engineering',
          },
          {
            title: 'Run: 24/7 Managed IT & Cloud',
            description: 'Proactive NOC monitoring, incident SLAs, and continuous cloud cost optimization.',
            href: '/services/managed-it-cloud',
          },
        ],
        featureCard: {
          title: 'Structured Delivery Governance',
          description: 'Eliminate project risk through transparent sprint milestones, daily standups, and rigorous QA.',
          image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
          linkText: 'Explore Our Methodology',
          linkHref: '/about#approach',
        },
      },
      {
        id: 'global-delivery',
        title: 'Global Delivery Model',
        heading: 'Unified Delivery Footprint Across Continents',
        description:
          'Headquartered in Chennai, India, with R&D in Guwahati, and strategic advisory gateways supporting enterprise clients across the United States, EU, Middle East, and APAC.',
        links: [
          {
            title: 'Chennai Global Headquarters',
            description: 'Our primary software engineering, cloud NOC, and executive delivery center.',
            href: '/contact',
          },
          {
            title: 'IIT Guwahati Innovation Center',
            description: 'Academic R&D hub developing next-generation AI models and edge IoT solutions.',
            href: '/contact',
          },
          {
            title: 'Global Advisory Hubs',
            description: 'Client success and technical advisory supporting teams in North America, Europe, and APAC.',
            href: '/about#global',
          },
        ],
        featureCard: {
          title: 'Global Reach, Local Ownership',
          description: 'Around-the-clock development and 24/7 incident response across global timezones.',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
          linkText: 'View Global Presence',
          linkHref: '/about#global',
        },
      },
      {
        id: 'certifications',
        title: 'Certifications',
        heading: 'Certified Security & Quality Standards',
        description:
          'We hold internationally accredited ISO certifications and Government of India DPIIT recognition, ensuring audit-grade security and delivery excellence.',
        links: [
          {
            title: 'ISO/IEC 27001:2022 Certified',
            description: 'Information Security Management System (ISMS) protecting client intellectual property.',
            href: '/about#certifications',
          },
          {
            title: 'ISO 20000-1:2018 Certified',
            description: 'IT Service Management System (ITSM) ensuring standardized SLA incident governance.',
            href: '/about#certifications',
          },
          {
            title: 'ISO 9001:2015 Certified',
            description: 'Quality Management System (QMS) guaranteeing rigorous software testing and workflows.',
            href: '/about#certifications',
          },
        ],
        featureCard: {
          title: 'Enterprise Trust & Compliance',
          description: 'Audit-ready frameworks designed to meet stringent global procurement standards.',
          image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
          linkText: 'Review Certifications',
          linkHref: '/about#certifications',
        },
      },
    ],
  },
  {
    id: 'services',
    label: 'Services',
    href: '/services',
    hasMegaMenu: true,
    categories: [
      {
        id: 'virtual-cto',
        title: 'Virtual CTO',
        heading: 'Virtual CTO & Executive Advisory',
        description:
          'Embed veteran technology leadership into your leadership team without the cost, equity, and rigidity of a full-time executive hire.',
        links: [
          {
            title: 'Strategic IT Roadmapping',
            description: 'Aligning software and infrastructure investments directly with commercial business goals.',
            href: '/services/virtual-cto',
          },
          {
            title: 'Vendor & SaaS Cost Optimization',
            description: 'Rightsizing software licenses, renegotiating contracts, and eliminating redundant tools.',
            href: '/services/virtual-cto',
          },
          {
            title: 'Board & Investor Tech Due Diligence',
            description: 'Audit-ready technical blueprints and compliance documentation for funding rounds.',
            href: '/services/virtual-cto',
          },
        ],
        featureCard: {
          title: 'Fractional CTO. Enterprise Velocity.',
          description: 'Gain immediate access to 25+ years of senior technology leadership experience.',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
          linkText: 'Explore Virtual CTO',
          linkHref: '/services/virtual-cto',
        },
      },
      {
        id: 'managed-it-cloud',
        title: 'Managed IT & Cloud',
        heading: 'Managed IT & Multi-Cloud Operations',
        description:
          'Proactive 24/7/365 infrastructure monitoring, automated multi-region backups, FinOps cloud rightsizing, and 99.9% uptime SLAs.',
        links: [
          {
            title: 'Multi-Cloud Architecture (AWS / Azure)',
            description: 'Designing fault-tolerant, elastic cloud environments that eliminate downtime risks.',
            href: '/services/managed-it-cloud',
          },
          {
            title: '24/7 Proactive NOC Monitoring',
            description: 'Real-time telemetry and sub-15-minute response times for mission-critical alerts.',
            href: '/services/managed-it-cloud',
          },
          {
            title: 'FinOps Cloud Spend Rightsizing',
            description: 'Continuous cost governance reducing monthly hyperscaler invoices by 25–40%.',
            href: '/services/managed-it-cloud',
          },
        ],
        featureCard: {
          title: 'Zero-Downtime Infrastructure',
          description: 'SLA-backed cloud reliability and disaster recovery protecting your business 24/7.',
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
          linkText: 'Explore Managed IT',
          linkHref: '/services/managed-it-cloud',
        },
      },
      {
        id: 'security-compliance',
        title: 'Security & Compliance',
        heading: 'Cybersecurity & Audit-Grade Compliance',
        description:
          'Defense-in-depth vulnerability assessments, zero-trust network architectures, managed endpoint protection, and ISO 27001 / SOC 2 readiness.',
        links: [
          {
            title: 'Vulnerability Assessment & Pen Testing (VAPT)',
            description: 'Comprehensive ethical hacking across web, mobile apps, and internal network infrastructure.',
            href: '/services/security-compliance',
          },
          {
            title: 'ISO 27001 & SOC 2 Certification Readiness',
            description: 'Structured sprints to prepare your policies and evidence for external audits.',
            href: '/services/security-compliance',
          },
          {
            title: 'Endpoint Detection & Response (EDR)',
            description: 'Deploying enterprise telemetry (CrowdStrike / SentinelOne) to halt ransomware threats.',
            href: '/services/security-compliance',
          },
        ],
        featureCard: {
          title: 'Enterprise Cyber Resilience',
          description: 'Safeguard your data, client relationships, and brand reputation from modern threats.',
          image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
          linkText: 'Explore Security',
          linkHref: '/services/security-compliance',
        },
      },
      {
        id: 'software-engineering',
        title: 'Software & Product Engineering',
        heading: 'Modern Enterprise Software & Web Applications',
        description:
          'Full-lifecycle custom software development, cross-platform mobile apps, microservices architectures, and modern cloud platforms built for scale.',
        links: [
          {
            title: 'Custom Web & SaaS Engineering',
            description: 'Clean TypeScript, React, and Node.js applications with automated CI/CD pipelines.',
            href: '/services/software-engineering',
          },
          {
            title: 'Mobile App Development (iOS & Android)',
            description: 'High-performance React Native and Flutter mobile applications built for field operations.',
            href: '/services/software-engineering',
          },
          {
            title: 'Legacy Modernization & Cloud Migration',
            description: 'Deconstructing brittle monolithic architectures into scalable microservices.',
            href: '/services/software-engineering',
          },
        ],
        featureCard: {
          title: 'Engineered for Performance',
          description: 'From initial wireframes to production deployment, we build software that scales effortlessly.',
          image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
          linkText: 'Explore Engineering',
          linkHref: '/services/software-engineering',
        },
      },
      {
        id: 'ai-automation',
        title: 'AI Integration & Automation',
        heading: 'Pragmatic AI & Intelligent Automation',
        description:
          'Move past generative AI hype. We implement secure private RAG assistants, automated document OCR, and workflow orchestrations that save hundreds of staff hours.',
        links: [
          {
            title: 'Private Enterprise RAG Knowledge Bases',
            description: 'Query company documentation safely without exposing proprietary IP to public models.',
            href: '/services/ai-automation',
          },
          {
            title: 'Intelligent Document Processing (OCR)',
            description: 'Extracting data from complex contracts, invoices, and receipts with >99% precision.',
            href: '/services/ai-automation',
          },
          {
            title: 'Workflow Automation (n8n / Python)',
            description: 'Connecting disparate CRMs, ERPs, and billing platforms into seamless zero-touch flows.',
            href: '/services/ai-automation',
          },
        ],
        featureCard: {
          title: 'AI Grounded in Business ROI',
          description: 'Deploy practical artificial intelligence solutions that deliver measurable productivity within 90 days.',
          image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
          linkText: 'Explore AI Solutions',
          linkHref: '/services/ai-automation',
        },
      },
      {
        id: 'staff-augmentation',
        title: 'Staff Augmentation',
        heading: 'Pre-Vetted Senior Engineers in 48 Hours',
        description:
          'Embed top 3% senior software developers, cloud architects, and QA engineers directly into your agile sprint teams with zero recruitment overhead.',
        links: [
          {
            title: 'Full-Stack Developers (React & Node.js)',
            description: 'Senior engineers with proven track records in modern TypeScript and cloud development.',
            href: '/services/staff-augmentation',
          },
          {
            title: 'DevOps & Cloud Specialists',
            description: 'Certified AWS and Azure architects automating your Terraform and Kubernetes workflows.',
            href: '/services/staff-augmentation',
          },
          {
            title: 'Flexible Month-to-Month Contracts',
            description: 'Scale your engineering capacity up or down according to product roadmap demands.',
            href: '/services/staff-augmentation',
          },
        ],
        featureCard: {
          title: 'Plug-and-Play Engineering Talent',
          description: 'Experienced developers aligned with your timezone, working directly inside your GitHub and Jira.',
          image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
          linkText: 'Explore Staff Augmentation',
          linkHref: '/services/staff-augmentation',
        },
      },
      {
        id: 'offshore-odc',
        title: 'Offshore Capability Development Center',
        heading: 'Your Dedicated Offshore Center in India',
        description:
          'Build, staff, and scale your own branded engineering and innovation center in Chennai or Guwahati with 100% intellectual property ownership.',
        links: [
          {
            title: 'Turnkey Facility & Hardware Setup',
            description: 'ISO 27001-certified offices, high-speed redundant links, and enterprise IT equipment.',
            href: '/services/offshore-development-center',
          },
          {
            title: 'Full Statutory & Payroll Governance',
            description: 'Complete management of MCA, PF, ESI, and Indian employment compliance.',
            href: '/services/offshore-development-center',
          },
          {
            title: 'Build-Operate-Transfer (BOT) Options',
            description: 'Seamless transition of full legal ownership to your company as your operations mature.',
            href: '/services/offshore-development-center',
          },
        ],
        featureCard: {
          title: 'Save 50–65% on Engineering Payroll',
          description: 'Eliminate transactional outsourcing risks with your own dedicated engineering center.',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
          linkText: 'Explore ODC Model',
          linkHref: '/services/offshore-development-center',
        },
      },
      {
        id: 'reseller',
        title: 'Software & Hardware Reseller',
        heading: 'Authorized Tier-1 Licensing & Hardware',
        description:
          'Consolidated enterprise procurement for Microsoft 365, AWS, Cisco, Dell, Lenovo, and cybersecurity software with preferential tier-1 pricing.',
        links: [
          {
            title: 'Microsoft 365 & Azure Enterprise Licensing',
            description: 'Volume discount tiers, license rightsizing, and automated provisioning.',
            href: '/services/software-hardware-reseller',
          },
          {
            title: 'Enterprise Cybersecurity Procurement',
            description: 'Authorized licensing for CrowdStrike, SentinelOne, Sophos, and Fortinet firewalls.',
            href: '/services/software-hardware-reseller',
          },
          {
            title: 'Commercial Hardware Solutions',
            description: 'Pre-configured laptops and servers from Dell, HP, and Lenovo with warranty support.',
            href: '/services/software-hardware-reseller',
          },
        ],
        featureCard: {
          title: 'Tier-1 Pricing & Consolidated Billing',
          description: 'Save up to 20% on cloud and software subscriptions with a single trusted procurement partner.',
          image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
          linkText: 'Explore Procurement',
          linkHref: '/services/software-hardware-reseller',
        },
      },
    ],
  },
  {
    id: 'solutions',
    label: 'Solutions',
    href: '/solutions',
    hasMegaMenu: true,
    categories: [
      {
        id: 'cloud-infra',
        title: 'Cloud & Infrastructure',
        heading: 'Unified Cloud & Hybrid Infrastructure',
        description:
          'Scalable multi-cloud architectures, automated provisioning, and disaster recovery blueprints engineered for high availability.',
        links: [
          {
            title: 'Multi-Cloud Migration Blueprints',
            description: 'Smooth workload transitions to AWS and Azure with zero unplanned downtime.',
            href: '/solutions#cloud-infrastructure',
          },
          {
            title: 'Disaster Recovery & Business Continuity',
            description: 'Automated cross-region snapshot replication and verified RTO/RPO failover drills.',
            href: '/solutions#cloud-infrastructure',
          },
        ],
        featureCard: {
          title: 'Unified Technology for Business Growth.',
          description: 'Architecting resilient cloud ecosystems that eliminate single points of failure.',
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
          linkText: 'View Cloud Solutions',
          linkHref: '/solutions#cloud-infrastructure',
        },
      },
      {
        id: 'digital-trans',
        title: 'Digital Transformation',
        heading: 'Modernizing Core Business Processes',
        description:
          'Replace fragmented paper and spreadsheet workflows with cohesive web, mobile, and cloud platforms.',
        links: [
          {
            title: 'Process Automation & Real-Time Analytics',
            description: 'Centralized operational dashboards giving executive leadership true visibility.',
            href: '/solutions#digital-transformation',
          },
          {
            title: 'Customer Experience & Portals',
            description: 'Self-service web and mobile portals that accelerate customer onboarding.',
            href: '/solutions#digital-transformation',
          },
        ],
        featureCard: {
          title: 'Commercial Velocity Through Technology',
          description: 'Align software engineering directly with revenue growth and operational efficiency.',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
          linkText: 'View Transformation',
          linkHref: '/solutions#digital-transformation',
        },
      },
      {
        id: 'app-modern',
        title: 'Application Modernisation',
        heading: 'Refactoring Monoliths for Cloud Agility',
        description:
          'Deconstruct brittle legacy applications into modular, cloud-native microservices and containerized environments.',
        links: [
          {
            title: 'Microservices & API Architecture',
            description: 'Decoupling complex business logic to enable rapid, independent sprint releases.',
            href: '/solutions#application-modernisation',
          },
          {
            title: 'Database Modernization',
            description: 'Migrating legacy databases to high-performance, managed cloud data stores.',
            href: '/solutions#application-modernisation',
          },
        ],
        featureCard: {
          title: 'Eliminate Technical Debt',
          description: 'Modernize aging applications without disrupting live business operations.',
          image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
          linkText: 'View Modernization',
          linkHref: '/solutions#application-modernisation',
        },
      },
      {
        id: 'enterprise-apps',
        title: 'Enterprise Applications',
        heading: 'Custom ERP, CRM & Logistics Platforms',
        description:
          'When off-the-shelf software fails to match your industry workflows, we engineer purpose-built enterprise applications.',
        links: [
          {
            title: 'Custom ERP & Supply Chain Portals',
            description: 'Tailored platforms managing inventory, billing, and vendor compliance.',
            href: '/solutions#enterprise-applications',
          },
          {
            title: 'Workforce & Performance Management',
            description: '360-degree appraisal tools and KPI tracking for distributed workforces.',
            href: '/solutions#enterprise-applications',
          },
        ],
        featureCard: {
          title: '100% Intellectual Property Ownership',
          description: 'Tailored enterprise software designed around your competitive business advantages.',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
          linkText: 'View Enterprise Apps',
          linkHref: '/solutions#enterprise-applications',
        },
      },
      {
        id: 'itaas',
        title: 'IT as a Service',
        heading: 'Predictable Subscription-Based IT',
        description:
          'Complete enterprise IT capabilities—from employee provisioning to 24/7 security—under one predictable monthly agreement.',
        links: [
          {
            title: 'Turnkey Employee Onboarding',
            description: 'Zero-touch provisioning of secure laptops, email accounts, and security software.',
            href: '/solutions#it-as-a-service',
          },
          {
            title: '24/7 Helpdesk & Hardware Lifecycle',
            description: 'Immediate user support paired with complete asset tracking and renewal management.',
            href: '/solutions#it-as-a-service',
          },
        ],
        featureCard: {
          title: 'IT as an Agile Utility',
          description: 'Eliminate capital expenses and management headaches with unified ITaaS.',
          image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
          linkText: 'View ITaaS',
          linkHref: '/solutions#it-as-a-service',
        },
      },
      {
        id: 'ai-solutions',
        title: 'AI & Automation',
        heading: 'Operationalizing Enterprise Intelligence',
        description:
          'Unlock actionable business insights with private AI document search, automated data validation, and predictive analytics.',
        links: [
          {
            title: 'Private Enterprise RAG Systems',
            description: 'Secure internal search over proprietary standard operating procedures.',
            href: '/solutions#ai-and-automation',
          },
          {
            title: 'Process Automation Pipelines',
            description: 'Eliminate thousands of hours of manual copy-paste across legacy systems.',
            href: '/solutions#ai-and-automation',
          },
        ],
        featureCard: {
          title: 'Secure & Practical AI',
          description: 'Drive operational productivity without risking corporate data sovereignty.',
          image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
          linkText: 'View AI Solutions',
          linkHref: '/solutions#ai-and-automation',
        },
      },
    ],
  },
  {
    id: 'industries',
    label: 'Industries',
    href: '/industries',
    hasMegaMenu: true,
    categories: [
      {
        id: 'manufacturing',
        title: 'Manufacturing',
        heading: 'Manufacturing & Automotive Engineering',
        description:
          'Digital quality control, spare parts inventory verification apps, and plant-floor IoT telemetry.',
        links: [
          {
            title: 'After-Sales & Parts Inspection Platforms',
            description: 'Mobile apps eliminating source-level errors in automotive parts verification.',
            href: '/industries/manufacturing',
          },
          {
            title: 'Shop-Floor Telemetry & IoT',
            description: 'Sensor data integration tracking machine uptime and production throughput.',
            href: '/industries/manufacturing',
          },
        ],
        featureCard: {
          title: 'Technology Across Industries',
          description: 'Proven enterprise technology deployments across mission-critical manufacturing ecosystems.',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
          linkText: 'Explore Manufacturing',
          linkHref: '/industries/manufacturing',
        },
      },
      {
        id: 'energy',
        title: 'Energy & Utilities',
        heading: 'FuelTech Logistics & Energy Distribution',
        description:
          'PESO-compliant doorstep fuel delivery command centers, calibrated bowser telemetry, and fleet routing.',
        links: [
          {
            title: 'FuelTech Bowser Dispatch Systems',
            description: 'Geofenced OTP-validated doorstep fuel fulfillment applications.',
            href: '/industries/energy-utilities',
          },
          {
            title: 'Automated Regulatory PESO Compliance',
            description: 'Immutable digital logs satisfying petroleum safety and OMC audit requirements.',
            href: '/industries/energy-utilities',
          },
        ],
        featureCard: {
          title: 'Zero-Discrepancy Fuel Logistics',
          description: 'Engineered for high-hazard regulatory compliance and multi-state fuel fulfillment.',
          image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
          linkText: 'Explore Energy',
          linkHref: '/industries/energy-utilities',
        },
      },
      {
        id: 'aviation',
        title: 'Aviation',
        heading: 'Airport Operations & Concierge Platforms',
        description:
          'Aviation telemetry integration, ground handling SOP automation, and digital passenger concierge apps.',
        links: [
          {
            title: 'Digital SOP & Incident Escalation',
            description: 'Real-time ground handling checklists ensuring 99.8% aviation SLA adherence.',
            href: '/industries/aviation',
          },
          {
            title: 'Passenger Concierge Mobile Apps',
            description: 'VIP airport meet-and-greet tracking and flight status alert telemetry.',
            href: '/industries/aviation',
          },
        ],
        featureCard: {
          title: 'Aviation Ground Reliability',
          description: 'Zero-latency software coordinating apron crews and passenger experiences.',
          image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
          linkText: 'Explore Aviation',
          linkHref: '/industries/aviation',
        },
      },
      {
        id: 'retail',
        title: 'Retail & Distribution',
        heading: 'Omnichannel Inventory & B2B Portals',
        description:
          'Multi-warehouse inventory synchronization, high-speed wholesale ordering portals, and POS integrations.',
        links: [
          {
            title: 'Centralized Multi-Warehouse Inventory',
            description: 'Sub-2-second catalog sync preventing stockouts across physical stores and web.',
            href: '/industries/retail-distribution',
          },
          {
            title: 'B2B Wholesale Dealer Portals',
            description: 'Bulk order processing, tiered credit terms, and automated invoice dispatch.',
            href: '/industries/retail-distribution',
          },
        ],
        featureCard: {
          title: 'High-Volume Commerce Reliability',
          description: 'Unify retail supply chains with high-availability transaction engines.',
          image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
          linkText: 'Explore Retail',
          linkHref: '/industries/retail-distribution',
        },
      },
      {
        id: 'prof-services',
        title: 'Professional Services',
        heading: 'Consulting, Legal & Financial IT Systems',
        description:
          'Performance management systems, automated retainer billing, and ISO 27001-certified document repositories.',
        links: [
          {
            title: 'Workforce Performance & Appraisal Portals',
            description: 'Automated 360-degree reviews cutting appraisal administrative time by 75%.',
            href: '/industries/professional-services',
          },
          {
            title: 'Confidential Client Portals',
            description: 'Audit-ready file sharing adhering to strict data confidentiality protocols.',
            href: '/industries/professional-services',
          },
        ],
        featureCard: {
          title: 'Operational Precision for Firms',
          description: 'Eliminate billing leakage and protect client confidentiality with modern IT.',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
          linkText: 'Explore Professional Services',
          linkHref: '/industries/professional-services',
        },
      },
      {
        id: 'smb',
        title: 'Small & Medium Businesses',
        heading: 'Accessible Enterprise IT for Growing SMBs',
        description:
          'Virtual CTO guidance, turnkey cloud modernization, and all-in-one ITaaS designed for budget predictability.',
        links: [
          {
            title: 'Fractional Executive IT Guidance',
            description: 'Senior technology leadership guiding strategy without full-time executive payroll.',
            href: '/industries/smb-enterprises',
          },
          {
            title: 'All-In-One Managed IT Support',
            description: 'Proactive helpdesk, cloud backups, and security defense for mid-market teams.',
            href: '/industries/smb-enterprises',
          },
        ],
        featureCard: {
          title: 'Leveling the Playing Field',
          description: 'Giving growing enterprises the technology firepower previously reserved for Fortune 500s.',
          image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
          linkText: 'Explore SMB Solutions',
          linkHref: '/industries/smb-enterprises',
        },
      },
    ],
  },
  {
    id: 'insights',
    label: 'Insights',
    href: '/insights',
    hasMegaMenu: true,
    categories: [
      {
        id: 'articles',
        title: 'Latest Articles',
        heading: 'Strategic Technology & Executive Perspectives',
        description:
          'Practical blueprints on cloud architecture, cybersecurity governance, and technology leadership.',
        links: [
          {
            title: 'Why Growing SMBs Need a Virtual CTO in 2026',
            description: 'Balancing aggressive technical innovation with strict capital efficiency.',
            href: '/insights/why-growing-smbs-need-virtual-cto-2026',
          },
          {
            title: 'The Zero-Trust Cybersecurity Roadmap',
            description: 'Pragmatic steps to harden mid-market infrastructure against ransomware.',
            href: '/insights/zero-trust-cybersecurity-smb-roadmap',
          },
        ],
        featureCard: {
          title: 'Explore Insights',
          description: 'Read in-depth thought leadership on enterprise cloud, security, and technology strategy.',
          image: '/customers/coforge.png',
          linkText: 'Read All Articles',
          linkHref: '/insights',
        },
      },
      {
        id: 'tools-and-templates',
        title: 'Tools & Templates',
        heading: 'Enterprise Architecture Toolkits & Frameworks',
        description:
          'Production-ready engineering blueprints, FinOps cloud calculators, ISO 27001 compliance checklists, and executive decision matrices.',
        links: [
          {
            title: 'Cloud FinOps & TCO Calculator',
            description: 'Evaluate compute rightsizing, spot savings, and multi-cloud infrastructure ROI.',
            href: '/insights/cloud-finops-tco-calculator-template',
          },
          {
            title: 'ISO 27001:2022 Audit Readiness Checklist',
            description: 'Comprehensive Annex A gap analysis template for enterprise security evaluations.',
            href: '/insights/iso-27001-audit-readiness-checklist',
          },
          {
            title: 'Virtual CTO Strategic Roadmap Canvas',
            description: 'Executive framework aligning business growth targets with engineering capacity.',
            href: '/insights/virtual-cto-technology-roadmap-canvas',
          },
          {
            title: 'Private Enterprise RAG Architecture Design',
            description: 'Zero-data-leakage reference pattern for self-hosted LLM document pipelines.',
            href: '/insights/practical-ai-integration-operations',
          },
        ],
        featureCard: {
          title: 'Actionable Engineering Toolkits',
          description: 'Download vetted frameworks, architecture matrices, and calculation tools built for enterprise delivery.',
          image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
          linkText: 'Explore All Tools & Templates',
          linkHref: '/insights?category=Tools+%26+Templates',
        },
      },
      {
        id: 'case-studies-cat',
        title: 'Case Studies',
        heading: 'Verified Customer Success & Quantified ROI',
        description:
          'Explore how real-world enterprises partnered with CYGNUSA to overcome operational complexity.',
        links: [
          {
            title: 'APAC Dice App – Automotive Parts Platform',
            description: '62% reduction in parts inspection cycle time with zero inventory shrinkage.',
            href: '/case-studies',
          },
          {
            title: 'GoFuel Doorstep Fuel Distribution Ecosystem',
            description: '100% PESO regulatory audit pass with automated telemetry dispatch.',
            href: '/case-studies',
          },
        ],
        featureCard: {
          title: 'Proven Enterprise Results',
          description: 'Discover how we turn complex operational challenges into competitive advantages.',
          image: '/customers/gofuel.png',
          linkText: 'View Case Studies',
          linkHref: '/case-studies',
        },
      },
      {
        id: 'tech-updates',
        title: 'Technology Updates',
        heading: 'Emerging Frameworks & Cloud Standards',
        description:
          'Deep technical dives into containerization, private LLM deployments, and serverless DevOps.',
        links: [
          {
            title: 'Pragmatic AI: Moving Past Generative Hype',
            description: 'Implementing private enterprise RAG assistants that protect corporate IP.',
            href: '/insights/practical-ai-integration-operations',
          },
        ],
        featureCard: {
          title: 'On the Technology Frontier',
          description: 'Stay ahead of emerging enterprise cloud and AI architectural patterns.',
          image: '/customers/watertec.png',
          linkText: 'Read Tech Updates',
          linkHref: '/insights',
        },
      },
      {
        id: 'company-news',
        title: 'Company News',
        heading: 'Milestones, Certifications & Announcements',
        description:
          'Corporate updates, new ISO compliance achievements, partnership announcements, and hiring.',
        links: [
          {
            title: 'ISO 27001:2022 Recertification',
            description: 'Demonstrating continuous commitment to enterprise data security standards.',
            href: '/about#certifications',
          },
          {
            title: 'DPIIT #StartupIndia Recognition',
            description: 'Recognized for technological innovation by the Ministry of Commerce & Industry.',
            href: '/about#certifications',
          },
        ],
        featureCard: {
          title: 'CYGNUSA Corporate Newsroom',
          description: 'Follow our organizational growth, global delivery expansions, and community updates.',
          image: '/customers/aai.png',
          linkText: 'Visit Newsroom',
          linkHref: '/insights',
        },
      },
    ],
  },
  {
    id: 'partners',
    label: 'Partners',
    href: '/contact',
    hasMegaMenu: true,
    categories: [
      {
        id: 'tech-partners',
        title: 'Technology Partnerships',
        heading: 'Premier Technology & Software Ecosystem',
        description:
          'We partner with leading global enterprise technology providers to deliver certified solutions, volume licensing discounts, and world-class architectures.',
        links: [
          {
            title: 'Microsoft Solutions Partner',
            description: 'Certified cloud solutions across Azure, Microsoft 365, and enterprise licensing.',
            href: '/contact',
          },
          {
            title: 'Cybersecurity Alliances',
            description: 'Authorized deployment partners for CrowdStrike, SentinelOne, Sophos, and Fortinet.',
            href: '/contact',
          },
        ],
        featureCard: {
          title: 'Building Strong Technology Partnerships.',
          description: 'Certified enterprise engineering backed by global technology leaders.',
          image: '/customers/stellantis.png',
          linkText: 'Inquire About Partnerships',
          linkHref: '/contact',
        },
      },
      {
        id: 'cloud-ecosystem',
        title: 'Cloud Ecosystem',
        heading: 'Certified Multi-Cloud Architects',
        description:
          'Delivering enterprise cloud migrations and FinOps governance across hyperscalers.',
        links: [
          {
            title: 'Amazon Web Services (AWS)',
            description: 'Well-Architected Framework reviews, ECS/EKS migrations, and serverless builds.',
            href: '/contact',
          },
          {
            title: 'Microsoft Azure',
            description: 'Hybrid cloud environments, Active Directory federation, and Azure AI pipelines.',
            href: '/contact',
          },
          {
            title: 'Google Cloud Platform (GCP)',
            description: 'Big data pipelines, Kubernetes engine deployments, and machine learning.',
            href: '/contact',
          },
        ],
        featureCard: {
          title: 'Cloud Neutrality & Optimization',
          description: 'Objective, vendor-neutral cloud architectures designed for your financial bottom line.',
          image: '/customers/tvs.png',
          linkText: 'Talk to Cloud Experts',
          linkHref: '/contact',
        },
      },
      {
        id: 'strategic-alliances',
        title: 'Strategic Alliances',
        heading: 'Global Hardware & Channel Alliances',
        description:
          'Direct authorized procurement channels for Dell Technologies, HP Enterprise, and Lenovo commercial systems.',
        links: [
          {
            title: 'Enterprise Hardware Channels',
            description: 'Pre-configured laptops, workstations, and rack servers with enterprise SLAs.',
            href: '/services/software-hardware-reseller',
          },
          {
            title: 'Network & Security Appliances',
            description: 'Cisco, Fortinet, and Ubiquiti switches and firewall appliances.',
            href: '/services/software-hardware-reseller',
          },
        ],
        featureCard: {
          title: 'Tier-1 Procurement Advantage',
          description: 'Direct channel discounts and single-invoice billing for enterprise IT hardware.',
          image: '/customers/watertec.png',
          linkText: 'Request Hardware Quote',
          linkHref: '/contact',
        },
      },
    ],
  },
];
