export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CYGNUSA Technologies Private Limited',
    alternateName: 'CYGNUSA Technologies',
    url: 'https://www.cygnusa.in',
    logo: 'https://www.cygnusa.in/logos/cygnusa-logo.png',
    email: 'sales@cygnusa.in',
    telephone: '+91-9884081174',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Express Estate, Anna Salai',
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      postalCode: '600002',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://www.linkedin.com/company/cygnusa-technologies',
      'https://twitter.com/cygnusatech',
      'https://www.instagram.com/cygnusatech',
    ],
  };
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CYGNUSA Technologies',
    url: 'https://www.cygnusa.in',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.cygnusa.in/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getServiceSchema(serviceTitle: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceTitle,
    provider: {
      '@type': 'Organization',
      name: 'CYGNUSA Technologies',
      url: 'https://www.cygnusa.in',
    },
    description: description,
    url: url,
  };
}
