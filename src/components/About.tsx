import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { Section } from './Section';
import { ArrowUpRight, Plus } from 'lucide-react';

export const About: React.FC = () => {
  const { language } = useLanguage();
  const t = content.about;

  return (
    <div id="about" className="bg-tertiary py-32 px-6">
      <Section className="max-w-7xl mx-auto container min-h-[auto]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Text Box */}
          <div className="md:col-span-4 flex flex-col justify-between space-y-12">
            <div>
              <h2 className="text-2xl font-display mb-6">{t.heading[language]}</h2>
              <p className="text-secondary text-sm/relaxed">
                {t.bio[language]}
              </p>
            </div>
            <a href="#experience" className="text-primary font-medium text-sm flex items-center hover:underline underline-offset-4">
              {t.link[language]}
            </a>
          </div>

          {/* Cards Grid */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {/* Stat Card */}
            <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center space-x-2 text-primary mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              </div>
              <h3 className="text-6xl md:text-7xl font-display font-light text-primary">{t.statTitle[language]}</h3>
              <p className="text-sm text-secondary mt-4">{t.statSubtitle[language]}</p>
            </div>

            {/* Photo Card / Bullets */}
            <div className="flex flex-col space-y-6 lg:space-y-8">
               <div className="relative h-64 overflow-hidden group bg-primary text-white flex flex-col justify-center p-8">
                  <h4 className="text-3xl lg:text-4xl font-display font-light leading-tight mb-2">
                    {language === 'en' ? 'Value, delivered.' : 'Değer, teslim edildi.'}
                  </h4>
                  <div className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center mt-6 hover:scale-105 transition-transform cursor-pointer">
                    <ArrowUpRight size={24} />
                  </div>
               </div>

               <div className="space-y-4">
                 <div className="flex items-start space-x-3 text-xs md:text-sm text-secondary">
                   <Plus size={16} className="text-primary flex-shrink-0 mt-0.5" />
                   <p>{t.bullet1[language]}</p>
                 </div>
                 <div className="flex items-start space-x-3 text-xs md:text-sm text-secondary">
                   <Plus size={16} className="text-primary flex-shrink-0 mt-0.5" />
                   <p>{t.bullet2[language]}</p>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </Section>
    </div>
  );
};
