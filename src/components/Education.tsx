import React from 'react';
import { content } from '../data/content';
import { Section } from './Section';

export const Education: React.FC = () => {
  const t = content.education;

  return (
    <Section className="py-24 bg-white max-w-7xl mx-auto px-5 lg:px-6 h-auto min-h-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {t.items.map((item, idx) => (
          <div key={idx} className="bg-tertiary p-8 md:p-12 border-t border-primary">
             <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6 lg:mb-8">
                 <h3 className="text-[clamp(1.2rem,3vw,1.8rem)] font-display text-primary max-w-sm tracking-tight leading-tight mb-4 lg:mb-0">{item.degree}</h3>
                 <span className="text-sm font-mono text-secondary mt-1">{item.period}</span>
             </div>
             <p className="text-primary font-medium mb-2 text-[max(1rem,16px)]">{item.school}</p>
             <p className="text-[max(0.95rem,15px)] text-secondary">{item.details}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
