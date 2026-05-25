import React from 'react';
import { content } from '../data/content';
import { Section } from './Section';

export const Education: React.FC = () => {
  const t = content.education;

  return (
    <Section className="py-24 bg-white max-w-7xl mx-auto px-6 h-auto min-h-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {t.items.map((item, idx) => (
          <div key={idx} className="bg-tertiary p-8 md:p-10 border-t border-primary">
             <div className="flex justify-between items-start mb-6">
                 <h3 className="text-xl md:text-2xl font-display text-primary max-w-xs">{item.degree}</h3>
                 <span className="text-sm font-mono text-secondary">{item.period}</span>
             </div>
             <p className="text-primary font-medium mb-1">{item.school}</p>
             <p className="text-sm text-secondary">{item.details}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
