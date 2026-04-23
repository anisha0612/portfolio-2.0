export const sectionIds = ['about', 'work', 'contact'] as const

export const profile = {
  name: 'Anisha Potteti',
  phoneHref: 'tel:5862198000',
  email: 'anisha.potteti@gmail.com',
  emailHref: 'mailto:anisha.potteti@gmail.com',
  experience: '5+ years',
  headline: 'Frontend engineer building polished, responsive products with stronger UX and cleaner architecture.',
  summary:
    'I build modern frontend experiences with React, Angular, Next.js, TypeScript, and a strong UI and UX lens. My work is centered on responsive interfaces, clear information flow, accessible interactions, and product experiences that feel fast, intuitive, and trustworthy. I also bring backend-for-frontend experience, building NestJS microservices that orchestrate responses across different admin systems and expose cleaner, more dependable data flows for the UI. I have also led design system work in Storybook, creating reusable component patterns and integrating them into product teams so implementation stays more consistent and scalable.',
  availability:
    'Open to frontend engineering roles and collaborations where product polish, performance, and thoughtful user experience matter.',
} as const

export const designSystemImpact = [
  'Led the Storybook initiative as a single source of truth for reusable components, documentation, and implementation guidance.',
  'Standardized four core UI surfaces, including buttons, forms, cards, and navigation patterns, to make product integration more consistent.',
] as const

export const featuredProjects = [
  {
    eyebrow: 'React foundation',
    period: 'Original release',
    title: 'Weather Report',
    href: 'https://weather-openweather.netlify.app/',
    cta: 'Open Weather 1.0',
    stack: ['React', 'CSS', 'OpenWeather API'],
    image: '/weather-report.png',
    summary:
      'A focused React weather app built to prove out search, live weather retrieval, and a clean first-pass user experience.',
    highlights: [
      'Built with React alone as the starting point for the product idea.',
      'Centered on core search and weather lookup with a simpler UI system.',
    ],
  },
  {
    eyebrow: 'Previous portfolio',
    period: 'Earlier personal site',
    title: 'Portfolio Website v1 work',
    href: 'https://anisha-potteti.netlify.app/projects',
    cta: 'View previous portfolio',
    stack: ['React', 'Frontend', 'Portfolio'],
    image: '/portfolio_v1.png',
    summary:
      'My previous portfolio website, focused on presenting frontend work, experience, and personal branding in an earlier iteration of my design and product thinking.',
    highlights: [
      'Shows the earlier version of how I presented my work, background, and frontend strengths.',
      'Useful as a before-and-after reference for how my visual systems and portfolio storytelling have evolved.',
    ],
  },
  {
    eyebrow: 'Next.js upgrade',
    period: 'Weather app 2.0',
    title: 'Atmosphere',
    href: 'https://weather-next-psi-nine.vercel.app/',
    cta: 'Open Weather 2.0',
    stack: ['Next.js', 'TypeScript', 'TanStack Query'],
    image: '/atmosphere.png',
    summary:
      'A more secure, feature-rich rebuild that expands the weather experience with stronger structure, smoother UX, and more deliberate frontend architecture.',
    highlights: [
      'Rebuilt in Next.js to support a cleaner app foundation and richer feature set.',
      'Adds more depth, more polish, and a more trustworthy data-driven experience than the original build.',
    ],
  },
] as const

export const technicalArsenal = [
  {
    title: 'Frontend Systems',
    detail: 'Tools I use to shape responsive, intuitive interfaces with clean implementation underneath.',
    type: 'tags' as const,
    items: ['React', 'Next.js', 'TypeScript', 'CSS', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    title: 'Engineering Focus',
    type: 'meter' as const,
    items: [
      { label: 'UI / UX Thinking', value: '95%' },
      { label: 'Performance Mindset', value: '90%' },
      { label: 'Accessibility', value: '92%' },
    ],
  },
  {
    title: 'Quality and Tooling',
    detail: 'The standards and tooling I rely on to keep interfaces stable, maintainable, and easier to evolve.',
    type: 'tags' as const,
    items: ['Vitest', 'Storybook', 'Biome / ESLint', 'Web Security', 'GitHub Copilot', 'React Aria'],
  },
  {
    title: 'Data and Delivery',
    detail: 'Patterns I use when the interface depends on fast data flow, API trust, and reliable product behavior.',
    type: 'tags' as const,
    items: ['TanStack Query', 'Node.js APIs', 'CI/CD', 'Docker', 'Production Monitoring', 'REST APIs'],
  },
  {
    title: 'How I Work',
    detail: 'I am self-driven, collaborative, and deeply focused on turning product intent into interfaces that feel considered rather than rushed.',
    type: 'copy' as const,
  },
] as const

export const weatherComparison = [
  {
    label: 'Framework Evolution',
    current: 'Weather App 2.0 moves the idea into Next.js with a stronger app structure, clearer separation of concerns, and more room to scale.',
    previous: 'The original Weather Report proved the concept in React with a simpler single-app approach.',
  },
  {
    label: 'Feature Depth',
    current: 'The newer version is designed to be more feature-rich, with a more complete weather experience and a more refined interface system.',
    previous: 'The first version focused on the essential weather lookup flow and a lighter feature surface.',
  },
  {
    label: 'Security and Trust',
    current: 'The newer build is more deliberate about safer frontend patterns, stronger data handling, and a more trustworthy user experience.',
    previous: 'The original build focused primarily on getting the product idea live and functional.',
  },
] as const

export const timeline = [
  {
    year: '2019',
    title: 'Frontend foundations',
    copy: 'Started building frontend skills through self-driven projects, learning how layout, responsiveness, APIs, and interaction design work together.',
  },
  {
    year: 'v1',
    title: 'Weather Report in React',
    copy: 'Built the first weather app to validate the idea with React, core search, API integration, and a straightforward interface.',
  },
  {
    year: 'v2',
    title: 'Atmosphere in Next.js',
    copy: 'Rebuilt the concept in Next.js to create a more secure, feature-rich, and polished weather experience.',
  },
  {
    year: 'Now',
    title: 'Modern frontend craft',
    copy: 'Continuing to refine product-minded frontend work that blends UI polish, better architecture, and user trust.',
  },
] as const

export const storybookPillars = [
  {
    tag: '01',
    title: 'Concept to Product',
    copy: 'The first app established the core weather idea. The second app rethinks it with more structure, stronger product instincts, and a more intentional interface.',
  },
  {
    tag: '02',
    title: 'React to Next.js',
    copy: 'The move from a React-only build to a Next.js app reflects a shift toward better scalability, cleaner composition, and stronger frontend architecture.',
  },
  {
    tag: '03',
    title: 'Richer User Experience',
    copy: 'Weather App 2.0 aims for more than raw weather data. It focuses on a more complete, usable, and polished experience from search to results.',
  },
  {
    tag: '04',
    title: 'Safer Frontend Patterns',
    copy: 'The newer project is more deliberate about safer data handling, cleaner boundaries, and building trust into the product experience.',
  },
] as const

export const impactMetrics = [
  { value: '2', label: 'live weather products' },
  { value: 'React', label: 'original app foundation' },
  { value: 'Next.js', label: '2.0 framework upgrade' },
] as const

export const contactLinks = [
  {
    label: 'Email',
    value: 'anisha.potteti@gmail.com',
    href: 'mailto:anisha.potteti@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'Visit my LinkedIn',
    href: 'https://www.linkedin.com/in/anisha-potteti-48b77872/',
  },
  {
    label: 'GitHub',
    value: 'Visit my GitHub',
    href: 'https://github.com/anisha0612',
  },
] as const

export const technicalSkills = [
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'HTML5', icon: 'html5' },
  { name: 'CSS3', icon: 'css3' },
  { name: 'Tailwind CSS', icon: 'tailwind' },
  { name: 'TanStack Query', icon: 'tanstack' },
  { name: 'Storybook', icon: 'storybook' },
  { name: 'Vitest', icon: 'vitest' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Docker', icon: 'docker' },
  { name: 'GitHub Copilot', icon: 'copilot' },
  { name: 'GitHub', icon: 'github' },
  { name: 'REST APIs', icon: 'api' },
  { name: 'Responsive Design', icon: 'responsive' },
] as const