export type Language = 'ar' | 'en' | 'de';

export interface TranslationStrings {
  topBar: {
    location: string;
    phone: string;
    email: string;
    hours: string;
    bookConsultation: string;
  };
  nav: {
    services: string;
    technologies: string;
    awsCloud: string;
    booking: string;
    aboutUs: string;
    calculator: string;
    contact: string;
    bookNow: string;
  };
  hero: {
    badge: string;
    titlePart1: string;
    titleHighlight: string;
    titlePart2: string;
    subtitle: string;
    bookBtn: string;
    exploreTech: string;
    stats: {
      experience: string;
      experienceLabel: string;
      projects: string;
      projectsLabel: string;
      impressions: string;
      impressionsLabel: string;
      satisfaction: string;
      satisfactionLabel: string;
    };
  };
  techSection: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    philosophyTitle: string;
    philosophyDesc: string;
    categories: {
      frontend: string;
      backend: string;
      cloudAws: string;
      mobile: string;
      database: string;
      aiMarketing: string;
    };
    decisionEngine: {
      title: string;
      subtitle: string;
    };
  };
  services: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    items: Array<{
      id: string;
      title: string;
      desc: string;
      features: string[];
      tag: string;
    }>;
  };
  booking: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    step1Title: string;
    step2Title: string;
    step3Title: string;
    step4Title: string;
    serviceTypes: Array<{
      id: string;
      name: string;
      duration: string;
      desc: string;
    }>;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    companyPlaceholder: string;
    notesPlaceholder: string;
    submitBtn: string;
    successTitle: string;
    successDesc: string;
    calendarBtn: string;
    whatsappBtn: string;
  };
  calculator: {
    badge: string;
    title: string;
    subtitle: string;
  };
  germanyTrust: {
    badge: string;
    title: string;
    titleHighlight: string;
    desc: string;
    addressTitle: string;
    address: string;
    certificationsTitle: string;
  };
  cookies: {
    title: string;
    text: string;
    viewSettings: string;
    deny: string;
    acceptAll: string;
    savePreferences: string;
    impressum: string;
    privacy: string;
    cookiePolicy: string;
    categories: {
      essential: {
        title: string;
        desc: string;
      };
      analytics: {
        title: string;
        desc: string;
      };
      marketing: {
        title: string;
        desc: string;
      };
    };
  };
  aboutPage: {
    headerBadge: string;
    headerTitle: string;
    headerSubtitle: string;
    storyTitle: string;
    storyParagraph1: string;
    storyParagraph2: string;
    storyParagraph3: string;
    stats: {
      growthRate: string;
      growthRateLabel: string;
      experience: string;
      experienceLabel: string;
      happyClients: string;
      happyClientsLabel: string;
      campaigns: string;
      campaignsLabel: string;
    };
    expertsTitle: string;
    expertsSubtitle: string;
    expertsDesc: string;
    valuesTitle: string;
    valuesSubtitle: string;
    values: Array<{
      title: string;
      desc: string;
      icon: string;
    }>;
    team: Array<{
      name: string;
      role: string;
      bio: string;
      credentials: string[];
    }>;
    ctaTitle: string;
    ctaSubtitle: string;
    whatsappBtn: string;
    callBtn: string;
  };
  servicesPage: {
    headerBadge: string;
    headerTitle: string;
    headerSubtitle: string;
    servicesList: Array<{
      id: string;
      title: string;
      subtitle: string;
      desc: string;
      benefits: string[];
      deliverables: string[];
      tag: string;
      status?: string;
    }>;
    packagesBadge: string;
    packagesTitle: string;
    packagesSubtitle: string;
    packages: Array<{
      id: string;
      name: string;
      tagline: string;
      badge: string;
      popular?: boolean;
      features: string[];
      timeline: string;
    }>;
  };
  projectsSection: {
    badge: string;
    title: string;
    subtitle: string;
    viewProject: string;
    items: Array<{
      id: string;
      badge: string;
      title: string;
      client: string;
      tags: string[];
      points: string[];
      desc: string;
      metric?: string;
      projectUrl?: string;
    }>;
  };
  testimonialsSection: {
    badge: string;
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      quote: string;
      client: string;
      role: string;
      location: string;
      rating: number;
    }>;
  };
  footer: {
    about: string;
    quickLinks: string;
    servicesTitle: string;
    contactTitle: string;
    rights: string;
    privacy: string;
    impressum: string;
    terms: string;
  };
}

export interface BookingData {
  serviceId: string;
  serviceName: string;
  date: string;
  time: string;
  clientName: string;
  email: string;
  phone: string;
  company: string;
  notes: string;
  bookingRef: string;
}
