import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { Section } from './Section';

export const Skills: React.FC = () => {
  const { language } = useLanguage();
  const t = content.skills;

  return (
    <div id="skills" className="bg-tertiary py-32 px-6">
      <Section className="max-w-7xl mx-auto min-h-[auto]">
        <div className="space-y-16 md:space-y-24">
          {t.categories.map((cat, idx) => (
            <div key={idx} className="flex flex-col md:flex-row md:items-start border-b border-primary/10 pb-12 cursor-default group">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-xl md:text-2xl font-display text-primary">{cat.title[language]}</h3>
              </div>
              <div className="md:w-2/3 flex flex-wrap gap-3">
                {cat.items.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-4 py-2 border border-primary/20 bg-white text-primary text-sm rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};
