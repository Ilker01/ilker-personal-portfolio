import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content, experiences } from '../data/content';
import { Section } from './Section';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export const Experience: React.FC = () => {
  const { language } = useLanguage();
  const t = content.experience;

  return (
    <Section id="experience" className="py-32 px-6 bg-white max-w-7xl mx-auto min-h-[auto]">
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-16 lg:mb-24">
        <div className="md:w-1/2">
          <p className="text-xs uppercase tracking-widest text-secondary font-medium mb-6">{t.sectionLabel[language]}</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-primary">{t.heading[language]}</h2>
        </div>
        <div className="md:w-1/3 mt-8 md:mt-0 flex flex-col md:items-end md:text-right">
          <p className="text-secondary text-sm mb-4 leading-relaxed max-w-sm">
            Over the past 2+ years, I've had the opportunity to work across diverse sectors, bringing AI solutions from discovery to successful deployment.
          </p>
          <a href="#contact" className="text-primary font-medium text-sm flex items-center hover:underline underline-offset-4">
            {t.link[language]}
          </a>
        </div>
      </div>

      <div className="border-t border-primary/20">
        {experiences.map((exp) => (
          <div key={exp.id} className="border-b border-primary/20 hover:bg-tertiary/50 transition-colors">
            {!exp.featured ? (
              <div className="py-8 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 lg:items-start group px-4">
                <div className="lg:col-span-4 flex flex-col justify-start">
                  <h3 className="text-base md:text-lg text-primary font-medium">{exp.company}</h3>
                  <div className="flex items-center text-xs text-secondary mt-1 lg:mt-2 space-x-2">
                    <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-secondary"></span>
                    <span>{exp.period}</span>
                  </div>
                </div>
                <div className="lg:col-span-5 flex flex-col justify-start">
                  <p className="text-primary font-medium text-base md:text-lg">{exp.role[language]}</p>
                  <p className="text-sm text-secondary mt-1 lg:mt-2 leading-relaxed">{exp.description[language]}</p>
                </div>
                <div className="lg:col-span-3 flex flex-wrap lg:justify-end gap-2 h-fit mt-4 lg:mt-0">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider px-3 py-1 border border-primary/20 rounded-full text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
                <div className="py-8 md:py-12 px-4 flex flex-col">
                  {/* Header Row */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 lg:items-start mb-8">
                      <div className="lg:col-span-4 flex flex-col justify-start">
                        <h3 className="text-base md:text-lg text-primary font-medium">{exp.company}</h3>
                        <div className="flex items-center text-xs text-secondary mt-1 lg:mt-2 space-x-2">
                          <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-secondary"></span>
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <div className="lg:col-span-5 flex flex-col justify-start">
                        <p className="text-primary font-medium text-base md:text-lg">{exp.role[language]}</p>
                        <p className="text-sm text-secondary mt-1 lg:mt-2 leading-relaxed">{exp.description[language]}</p>
                      </div>
                      <div className="lg:col-span-3 flex flex-wrap lg:justify-end gap-2 h-fit mt-4 lg:mt-0">
                         {exp.tags.map((tag, i) => (
                           <span key={`f_${tag}`} className="text-[10px] font-medium uppercase tracking-wider px-3 py-1 bg-primary text-white rounded-full">
                             {tag}
                           </span>
                         ))}
                      </div>
                  </div>
                  {/* Expanded Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start pt-6 border-t border-primary/10">
                     <div className="lg:col-span-2 bg-[#F8F8F8] p-8 md:p-12 h-full flex flex-col justify-center rounded-xl">
                        <h4 className="text-4xl md:text-5xl font-display font-light text-primary leading-tight mb-4 tracking-tighter">
                          10+ {language === 'en' ? 'Deployments' : 'Dağıtım'}
                        </h4>
                        <p className="text-secondary text-sm/relaxed max-w-lg">
                          {language === 'en' 
                            ? 'Delivering end-to-end bespoke AI-driven conversational solutions that integrate directly with enterprise logic, moving the needle on operational metrics.'
                            : 'Kurumsal mantıkla doğrudan entegre olan, operasyonel metriklerde ölçülebilir farklar yaratan uçtan uca özel AI destekli diyalog çözümleri.'}
                        </p>
                     </div>
                     <div className="lg:col-span-1 space-y-4 pt-4">
                        {exp.featuredDetails?.map((detail, idx) => (
                           <p key={idx} className="text-sm text-secondary leading-relaxed flex items-start space-x-2">
                             <span className="text-primary mt-1">—</span>
                             <span>{detail[language]}</span>
                           </p>
                        ))}
                        <a href="#contact" className="mt-8 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white hover:scale-105 transition-transform">
                          <ArrowUpRight size={20} />
                        </a>
                     </div>
                  </div>
                </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-20">
         <a href="#contact" className="block relative min-h-[24rem] w-full bg-white group overflow-hidden border border-primary text-primary transition-all duration-500 hover:bg-primary hover:text-white p-12 lg:p-24 flex flex-col justify-between">
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-display font-light max-w-3xl tracking-tighter transition-colors">
              {t.cta[language]}
            </h3>
            <div className="flex justify-end mt-12 md:mt-24">
                <span className="inline-flex items-center text-sm font-medium tracking-wider uppercase border-b border-primary group-hover:border-white pb-1">
                  Let's talk <ArrowUpRight size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
            </div>
         </a>
      </div>
    </Section>
  );
};
