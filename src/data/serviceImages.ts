export interface ServiceImageData {
  id: string;
  image: string;
  alt: string;
  blurFallback?: string;
}

export const serviceImages: Record<string, string> = {
  // Homepage core services
  'web-dev': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80',
  'mobile-dev': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80',
  'aws-cloud': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80',
  'ads-campaigns': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
  'seo-organic': 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=1000&q=80',
  'branding-identity': 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1000&q=80',

  // 10 Detailed services on /services page
  'influencer': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
  'youtube': 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1000&q=80',
  'video-production': 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80',
  'marketing-strategy': 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80',
  'paid-ads': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
  'google-services': 'https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?auto=format&fit=crop&w=1000&q=80',
  'social-media': 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1000&q=80',
  'market-analysis': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
  'branding': 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1000&q=80',
};

export const projectImages: Record<string, string> = {
  // Official delivered project images from go-trend-marketing.de
  'project-ha-cleaning': 'https://go-trend-marketing.de/wp-content/uploads/2026/01/3d-glass-window-logo-mockup-1-e1769730313529-768x457.png',
  'project-amine': 'https://go-trend-marketing.de/wp-content/uploads/2025/09/2-e1757755031796-768x457.png',
  'project-personal-brand': 'https://go-trend-marketing.de/wp-content/uploads/2025/09/3-e1757754952925-768x467.png',
  'project-leman-kosmetik': 'https://go-trend-marketing.de/wp-content/uploads/2025/09/1-e1757755204453-768x466.png',
  'project-pilates-store': 'https://go-trend-marketing.de/wp-content/uploads/2026/06/543928837_712529031814263_5811539707247150234_n.jpg',

  // 2 Additional Enterprise Projects requested by user
  'project-contract-management': 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80',
  'project-flight-booking': 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80',
};
