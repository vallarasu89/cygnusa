export interface SolutionItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  iconName: string;
  challenges: string[];
  keyOutcomes: string[];
  relatedServicesSlugs: string[];
}

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'sol-1',
    slug: 'cloud-infrastructure',
    title: 'Cloud & Infrastructure',
    shortDescription: 'Scalable multi-cloud architectures, automated provisioning, and disaster recovery blueprints engineered for high availability.',
    overview: 'We architect and govern resilient, elastic cloud infrastructures across AWS, Microsoft Azure, and private data centers. Our cloud solutions eliminate single points of failure, automate disaster recovery, and optimize infrastructure spend through continuous FinOps practices.',
    iconName: 'CloudCog',
    challenges: [
      'Unplanned downtime and fragile legacy server dependencies.',
      'Unpredictable, escalating monthly hyperscaler bills.',
      'Manual, error-prone infrastructure deployment cycles.',
    ],
    keyOutcomes: [
      '99.9% uptime guaranteed under enterprise SLAs.',
      '30% average reduction in cloud infrastructure waste.',
      'Fully automated Infrastructure as Code (Terraform / Ansible).',
    ],
    relatedServicesSlugs: ['managed-it-cloud', 'virtual-cto'],
  },
  {
    id: 'sol-2',
    slug: 'digital-transformation',
    title: 'Digital Transformation',
    shortDescription: 'End-to-end modernization of core business processes, customer touchpoints, and operational data flows.',
    overview: 'Digital transformation is not about buying more software—it is about aligning technology with commercial velocity. We replace fragmented paper and spreadsheet workflows with cohesive web, mobile, and cloud platforms that give leadership real-time operational visibility.',
    iconName: 'RefreshCw',
    challenges: [
      'Siloed operational data preventing accurate executive forecasting.',
      'Clunky customer onboarding and manual communication bottlenecks.',
      'High error rates from manual double-entry across disparate tools.',
    ],
    keyOutcomes: [
      'Real-time executive dashboards replacing manual weekly reports.',
      'Up to 60% faster customer onboarding and service delivery.',
      'Unified data flows connecting field operations directly to ERP.',
    ],
    relatedServicesSlugs: ['software-engineering', 'virtual-cto'],
  },
  {
    id: 'sol-3',
    slug: 'application-modernisation',
    title: 'Application Modernisation',
    shortDescription: 'Deconstruct brittle legacy monoliths into cloud-native microservices, modern APIs, and containerized architectures.',
    overview: 'Accelerate feature delivery and eliminate technical debt. We refactor legacy applications into modular, cloud-native services using Docker, Kubernetes, and modern TypeScript frameworks without business disruption.',
    iconName: 'Layers',
    challenges: [
      'Slow development cycles where single code changes trigger system crashes.',
      'Aging technology stacks that are impossible to hire engineers for.',
      'Fragile on-premises databases incapable of scaling during demand spikes.',
    ],
    keyOutcomes: [
      'Zero-downtime rolling deployments via modern CI/CD pipelines.',
      'Decoupled microservices architecture enabling parallel sprint teams.',
      'Significant reduction in memory footprints and infrastructure hosting costs.',
    ],
    relatedServicesSlugs: ['software-engineering', 'managed-it-cloud'],
  },
  {
    id: 'sol-4',
    slug: 'enterprise-applications',
    title: 'Enterprise Applications',
    shortDescription: 'Custom and integrated ERP, CRM, inventory, and workforce management systems tailored to your unique workflows.',
    overview: 'When off-the-shelf software falls short of your specialized industry workflows, CYGNUSA designs and deploys custom enterprise applications that adapt to your exact business rules, supply chains, and compliance protocols.',
    iconName: 'Briefcase',
    challenges: [
      'Commercial ERPs that charge exorbitant per-user licensing fees for unused features.',
      'Inflexible software that forces teams to bend operations around rigid menus.',
      'Lack of integration between field operations, inventory, and accounting.',
    ],
    keyOutcomes: [
      'Purpose-built enterprise portals with 100% intellectual property ownership.',
      'Unified APIs integrating with existing SAP, Tally, or legacy databases.',
      'Granular role-based access control (RBAC) protecting sensitive company data.',
    ],
    relatedServicesSlugs: ['software-engineering', 'security-compliance'],
  },
  {
    id: 'sol-5',
    slug: 'it-as-a-service',
    title: 'IT as a Service (ITaaS)',
    shortDescription: 'Predictable, subscription-based IT management combining helpdesk, hardware procurement, cloud, and security governance.',
    overview: 'Transform IT from a chaotic capital expense into an agile operational utility. With CYGNUSA ITaaS, SMBs get complete enterprise IT capabilities—from employee onboarding and hardware provisioning to 24/7 security and cloud maintenance—under one transparent monthly agreement.',
    iconName: 'Server',
    challenges: [
      'High overhead and recruiting headaches of maintaining an internal IT team.',
      'Unpredictable IT repair and emergency vendor consulting bills.',
      'Slow employee onboarding due to lack of standardized hardware and accounts.',
    ],
    keyOutcomes: [
      'Predictable per-user or fixed monthly IT operational costs.',
      'Zero-touch employee provisioning with pre-configured secure laptops.',
      '24/7 enterprise helpdesk resolving 85%+ of tickets on first contact.',
    ],
    relatedServicesSlugs: ['managed-it-cloud', 'software-hardware-reseller'],
  },
  {
    id: 'sol-6',
    slug: 'ai-and-automation',
    title: 'AI & Automation',
    shortDescription: 'Operationalize private AI models, automated ETL data pipelines, and workflow bots that eliminate administrative drag.',
    overview: 'Unlock enterprise intelligence without compromising data sovereignty. We build private, enterprise-grade AI assistants that query your internal document repositories, automate customer triage, and extract data from complex commercial documents in seconds.',
    iconName: 'Sparkles',
    challenges: [
      'Enterprise security fears regarding public AI tools leaking sensitive data.',
      'Thousands of staff hours wasted annually on repetitive document transcription.',
      'Inability to extract actionable insights from unstructured emails and PDFs.',
    ],
    keyOutcomes: [
      'Secure, self-hosted or private cloud LLMs adhering to strict data privacy.',
      'Automated document ingestion and OCR with over 99% extraction accuracy.',
      'End-to-end automated workflows connecting CRMs, billing, and email channels.',
    ],
    relatedServicesSlugs: ['ai-automation', 'software-engineering'],
  },
];
