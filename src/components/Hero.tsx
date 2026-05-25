import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { motion } from 'motion/react';
import ilkerPic from './ilkerpic.png';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = content.hero;

  return (
    <section className="flex-grow flex flex-col min-h-screen lg:min-h-[calc(100vh)] relative bg-white pt-24 lg:pt-0 pb-16 lg:pb-0">
      <div className="flex-grow flex relative lg:h-[calc(100vh-100px)]">
          {/* Left Column: Vertical Text & Stats */}
          <div className="hidden lg:flex w-[25%] flex-col justify-between pl-16 pb-16 pt-32 border-r border-[#F8F8F8]">
            <div className="vertical-text small-caps flex items-center shrink-0">
              {t.label[language]}
            </div>
            <div className="space-y-12">
              <div>
                <div className="text-4xl font-bold font-display tracking-tighter">{t.deployments[language].split(' / ')[0]}</div>
                <div className="small-caps mt-1">{t.deployments[language].split(' / ')[1]}</div>
              </div>
              <div>
                <div className="text-4xl font-bold font-display tracking-tighter">{t.revenue[language].split(' / ')[0]}</div>
                <div className="small-caps mt-1">{t.revenue[language].split(' / ')[1]}</div>
              </div>
              <div className="text-[11px] flex flex-col space-y-2 opacity-50 cursor-pointer hover:opacity-100 transition-opacity" onClick={() => window.scrollTo(0, window.innerHeight)}>
                <span>{t.scroll[language]}</span>
              </div>
            </div>
          </div>
          
          {/* Mobile Stats & Title */}
          <div className="lg:hidden w-full px-6 flex flex-col relative z-20 pt-8 order-2">
            <div className="flex space-x-12 mb-12">
              <div>
                <div className="text-3xl font-bold font-display tracking-tighter">{t.deployments[language].split(' / ')[0]}</div>
                <div className="small-caps mt-1">{t.deployments[language].split(' / ')[1]}</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-display tracking-tighter">{t.revenue[language].split(' / ')[0]}</div>
                <div className="small-caps mt-1">{t.revenue[language].split(' / ')[1]}</div>
              </div>
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[5rem] sm:text-[7rem] font-display font-light text-primary tracking-tighter leading-none"
            >
              {t.greeting[language]}
            </motion.h1>
             <div className="max-w-md mt-6 space-y-4 relative">
              <div className="absolute inset-0 bg-white/70 blur-xl z-[-1] rounded-3xl" />
              <p className="text-lg font-light leading-relaxed text-primary relative z-10">
                — {t.subtext[language]}
              </p>
              <p className="text-sm text-primary/80 leading-loose relative z-10 font-medium">
                {language === 'en' ? 'I bridge the gap between AI capability and real business outcomes — from first conversation to production deployment.' : 'Yapay zeka kabiliyeti ile gerçek ticari sonuçlar arasındaki köprüyü kuruyorum — ilk görüşmeden prodüksiyona kadar.'}
              </p>
            </div>
          </div>

          {/* Middle Column: Headline (Desktop) */}
          <div className="hidden lg:flex flex-grow flex-col justify-center px-12 z-20 w-[45%] lg:pr-[15%] relative">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-[8rem] xl:text-[11rem] leading-[0.85] tracking-[-.05em]"
            >
               {t.greeting[language]}
            </motion.h1>
            <div className="max-w-md mt-10 space-y-6 relative">
              <p className="text-xl font-light leading-relaxed text-primary">
                — {t.subtext[language]}
              </p>
              <p className="text-sm text-primary/70 leading-loose font-medium">
                {language === 'en' ? 'I bridge the gap between AI capability and real business outcomes — from first conversation to production deployment.' : 'Yapay zeka kabiliyeti ile gerçek ticari sonuçlar arasındaki köprüyü kuruyorum — ilk görüşmeden prodüksiyona kadar.'}
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:absolute lg:right-0 lg:top-[-5%] lg:w-[45%] lg:h-[110%] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative z-0 order-1 lg:order-none aspect-square lg:aspect-auto"
          >
            <div className="w-full h-full bg-[#F8F8F8] flex items-end justify-center relative">
               <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent lg:hidden z-10 pointer-events-none"></div>
               <div className="hidden lg:block absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
               <img src={ilkerPic} className="w-full h-full object-cover object-top lg:border-l border-[#F8F8F8]" alt="Fırat İlker Türk"/>
            </div>
          </motion.div>
      </div>

      {/* Footer Bar */}
      <div className="hidden lg:flex justify-between items-center px-16 py-8 border-t border-[#F8F8F8] bg-white z-10 relative lg:mt-auto">
        <div className="small-caps opacity-50">ONSITE • CLIENT-FACING • RESULTS-DRIVEN</div>
        <div className="text-[11px] font-medium tracking-widest text-[#7B7B7B]">2026</div>
      </div>
    </section>
  );
};
