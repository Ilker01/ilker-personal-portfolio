import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { Section } from './Section';

export const Impact: React.FC = () => {
  const { language } = useLanguage();
  const t = content.impact;

  return (
    <Section className="py-24 md:py-32 bg-white max-w-7xl mx-auto px-5 lg:px-6 h-auto min-h-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 md:gap-x-12">
        {t.stats.map((stat, i) => (
          <div key={i} className="flex flex-col">
            <h3 className="text-[clamp(2.5rem,6vw,4rem)] font-display font-medium text-primary tracking-tight leading-none mb-3">
              {stat.value}
            </h3>
            <p className="text-sm font-medium text-secondary mt-3">
              {stat.label[language]}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};
