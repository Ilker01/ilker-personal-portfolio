export type Language = 'en' | 'tr';

export interface ContentItem {
  en: string;
  tr: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  location: string;
  period: string;
  role: ContentItem;
  description: ContentItem;
  tags: string[];
  featured?: boolean;
  featuredDetails?: ContentItem[];
}
