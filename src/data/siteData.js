export const navLinks = [
  { label: 'Home', href: '/', target: '#hero' },
  { label: 'Services', href: '/', target: '#services' },
  { label: 'Process', href: '/', target: '#process' },
  { label: 'Work', href: '/', target: '#portfolio' },
  { label: 'Testimonials', href: '/', target: '#testimonials' },
  { label: 'Pricing', href: '/', target: '#pricing' },
  { label: 'Contact', href: '/', target: '#contact' },
];

export const services = [
  {
    icon: 'code',
    title: 'Custom Web Development',
    description:
      'Scalable web apps with optimized performance and clean code that grows with your business.',
  },
  {
    icon: 'layout',
    title: 'Landing Pages',
    description:
      'Conversion-focused pages that capture attention and turn visitors into customers.',
  },

  {
    icon: 'chart',
    title: 'SEO Optimization',
    description:
      'Technical SEO strategies that boost rankings and drive organic traffic.',
  },
  {
    icon: 'wrench',
    title: 'Maintenance & Support',
    description:
      'Ongoing monitoring, security patches, and support to keep your site flawless.',
  },
];

export const stats = [
  { number: '50+', label: 'Projects Delivered' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '5+', label: 'Years of Experience' },
  { number: '40+', label: 'Team Members' },
];

export const values = [
  {
    title: 'Performance-First Engineering',
    description:
      'Sub-second load times aren\'t a goal — they\'re the baseline we build on.',
  },
  {
    title: 'Design That Converts',
    description:
      'Every design decision backed by conversion data and strategic intent.',
  },
  {
    title: 'Transparent Partnership',
    description:
      'Real-time visibility, honest timelines, and direct access to your team.',
  },
  {
    title: 'Built to Scale',
    description:
      'Architecture that anticipates your next 10x of growth.',
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description:
      'We dig into your business goals, audience, competitors, and technical requirements to build a clear project blueprint.',
  },
  {
    step: '02',
    title: 'Strategy',
    description:
      'Architecture planning, tech stack selection, wireframing, and milestone mapping — so nothing is left to chance.',
  },
  {
    step: '03',
    title: 'Design & Build',
    description:
      'Iterative design sprints paired with agile development. You see progress weekly and provide feedback that shapes the product.',
  },
  {
    step: '04',
    title: 'Launch & Scale',
    description:
      'Rigorous QA, performance audits, deployment, and post-launch optimization to ensure a flawless market entry.',
  },
];

export const portfolioItems = [
  {
    category: 'Landing Page',
    title: 'BowCoffee',
    description: 'Bow Coffee is a premium artisan café based in Saudi Arabia with two branches and a growing community around quality coffee and warm, intentional spaces.',
    image: new URL('/images/cafe.png', import.meta.url).href,
    outcome: 'Elevated Brand',
    link: 'https://maazehsan.github.io/BowCoffee',
  },
  {
    category: 'Website',
    title: 'Scrunch',
    description: 'Scrunch is a fast-growing Mexican food chain operating in the Gulf region, built around bold flavors, street-food culture, and a visual identity that is loud, colorful, and unapologetically expressive.',
    image: new URL('/images/restaurant.png', import.meta.url).href,
    outcome: 'Increased Orders',
    link: 'https://maazehsan.github.io/scrunch',
  },
  {
    category: 'Portfolio',
    title: 'Personal Portfolio',
    description: 'Personal portfolio showcasing creative work with stunning visuals and seamless performance.',
    image: new URL('/images/portfolio.png', import.meta.url).href,
    outcome: 'Premium Design',
    link: 'https://maazehsan.github.io/',
  },
];

export const testimonials = [
  {
    text: 'DevNautics transformed my vision into a stunning portfolio that truly represents my work. The design is clean, fast, and gets me noticed by clients.',
    author: {
      name: 'Maaz',
      handle: '@maaz',
      avatar: 'https://ui-avatars.com/api/?name=Maaz&background=18181b&color=fff',
    },
  },
  {
    text: 'Our cafe needed a website that matched our vibe — modern, inviting, and effortless. DevNautics delivered beyond expectations. Customers love it.',
    author: {
      name: 'BowCoffee',
      handle: '@bowcafe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    },
  },
  {
    text: 'The Scrunch website captures our essence perfectly. Elegant visuals, seamless reservations, and a design that makes guests hungry to visit.',
    author: {
      name: 'Scrunch Restaurant',
      handle: '@scrunch',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    },
  },
  {
    text: 'Working with DevNautics was a game-changer. They understood our brand voice immediately and translated it into a beautiful, high-converting website.',
    author: {
      name: 'Michael Ross',
      handle: '@mross_creative',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
    },
  },
  {
    text: 'The attention to detail and technical expertise is unmatched. Our page load speeds improved by 300% after the redesign. Highly recommended.',
    author: {
      name: 'David Chen',
      handle: '@techdavid',
      avatar: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=150&h=150&fit=crop&crop=face',
    },
  },
];

export const pricingPlans = [
  {
    name: 'Starter',
    price: '$250',
    period: 'project',
    description: 'For small businesses that need a professional web presence fast.',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Basic SEO setup',
      'Contact form integration',
      '1 round of revisions',
      '30-day post-launch support',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$700',
    period: 'project',
    description: 'For scaling businesses that need performance, design, and strategy.',
    features: [
      'Up to 15 pages',
      'Custom design system',
      'Basic SEO setup',
      'CMS integration',
      'Performance optimization',
      '3 months post-launch support',
    ],
    cta: 'Start Project',
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '$1500+',
    period: 'project',
    description: 'For enterprises and high-growth startups with complex requirements.',
    features: [
      'Unlimited pages',
      'Full-stack development',
      'Custom integrations & API',
      'SaaS features & integrations',
      'Dedicated project manager',
      '6 months priority support',
    ],
    cta: 'Contact Now',
    highlighted: false,
  },
];

export const footerLinks = {
  company: [
    { label: 'About', href: '/' },
    { label: 'Careers', href: '/' },
    { label: 'Blog', href: '/' },
    { label: 'Contact', href: '/', target: '#contact' },
  ],
  services: [
    { label: 'Web Development', href: '/', target: '#services' },
    { label: 'SEO', href: '/', target: '#services' },
    { label: 'Landing Pages', href: '/', target: '#services' },
    { label: 'Maintenance', href: '/', target: '#services' },
  ],
  social: [
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'GitHub', href: '#' },
  ],
};
