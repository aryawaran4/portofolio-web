export type HeroContent = {
  name: string;
  role: string;
  tagline: string;
  valueStatement: string;
  experienceStart?: string;
  experienceLabel?: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  image?: string;
};

export type AboutContent = {
  title: string;
  subtitle: string;
  story: string[];
  philosophy: string;
  skills: {
    category: string;
    items: string[];
  }[];
  competencies: string[];
  quotes: string[];
  badgeTitle: string;
  competencyTitle: string;
};

export type ProjectItem = {
  id: number;
  title: string;
  highlights: string[];
  stack: string;
  description?: string;
  tags?: string[];
  link?: string;
  image?: string;
};

export type ProjectsContent = {
  title: string;
  subtitle: string;
  items: ProjectItem[];
};

export type MileageCategory = {
  icon: string;
  title: string;
  items: string[];
  accentColor?: string;
};

export type MileageContent = {
  title: string;
  subtitle: string;
  categories: MileageCategory[];
};

export type ProfileContent = {
  meta: {
    role: string;
    variant: string;
  };
  name: string;
  summary: string;
  experience: {
    title: string;
    company: string;
    period: string;
    bullets: string[];
  }[];
  skills: {
    category: string;
    items: string | string[];
  }[];
  education: {
    degree: string;
    institution: string;
    period: string;
    description: string;
  }[];
  awards: string[];
  languages: string[];
};

export type SiteContent = {
  hero: HeroContent;
  about: AboutContent;
  projects: ProjectsContent;
  mileage: MileageContent;
  profile?: ProfileContent;
};

export type PortfolioContentMap = Record<string, SiteContent>;
