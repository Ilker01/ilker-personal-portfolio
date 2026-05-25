import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { motion } from 'motion/react';
import ilkerPic from './ilkerpic.png';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = content.hero;

  return (
    <section className="flex flex-col min-h-screen lg:min-h-[calc(100vh)] relative bg-white pt-[80px] lg:pt-0 pb-16 lg:pb-0">
      <div className="flex-grow flex flex-col lg:flex-row relative lg:h-[calc(100vh-80px)]">
          {/* Left Column: Vertical Text & Stats (Desktop) */}
          <div className="hidden lg:flex w-[25%] flex-col justify-between pl-16 pb-16 pt-[120px] border-r border-[#F8F8F8] z-20 bg-white">
            <div className="vertical-text small-caps flex items-center shrink-0">
              {t.label[language]}
            </div>
            <div className="space-y-12">
              <div>
                <div className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold font-display tracking-tighter leading-none">{t.deployments[language].split(' / ')[0]}</div>
                <div className="small-caps mt-2">{t.deployments[language].split(' / ')[1]}</div>
              </div>
              <div>
                <div className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold font-display tracking-tighter leading-none">{t.revenue[language].split(' / ')[0]}</div>
                <div className="small-caps mt-2">{t.revenue[language].split(' / ')[1]}</div>
              </div>
              <div className="text-[11px] flex flex-col space-y-2 opacity-50 cursor-pointer hover:opacity-100 transition-opacity" onClick={() => window.scrollTo(0, window.innerHeight)}>
                <span>{t.scroll[language]}</span>
              </div>
            </div>
          </div>
          
          {/* Mobile Photo (Top on Mobile) */}
          <div className="lg:hidden w-full h-[55vh] min-h-[400px] relative z-0 order-1">
             <img src={ilkerPic} className="w-full h-full object-cover object-top grayscale" alt="Fırat İlker Türk"/>
          </div>

          {/* Mobile Stats & Title */}
          <div className="lg:hidden w-full px-5 flex flex-col relative z-20 pt-10 order-2 bg-white pb-[80px]">
            <div className="flex justify-between items-start mb-12 border-b border-[#F8F8F8] pb-10">
              <div className="w-1/2 pr-4">
                <div className="text-[clamp(2.5rem,8vw,3.5rem)] font-bold font-display tracking-tighter leading-none text-primary">{t.deployments[language].split(' / ')[0]}</div>
                <div className="small-caps mt-3 leading-tight">{t.deployments[language].split(' / ')[1]}</div>
              </div>
              <div className="w-1/2 pl-6 border-l border-[#F8F8F8] h-full">
                <div className="text-[clamp(2.5rem,8vw,3.5rem)] font-bold font-display tracking-tighter leading-none text-primary">{t.revenue[language].split(' / ')[0]}</div>
                <div className="small-caps mt-3 leading-tight">{t.revenue[language].split(' / ')[1]}</div>
              </div>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[clamp(3.5rem,12vw,6rem)] font-display font-light text-primary tracking-tighter leading-none mb-6"
            >
              {t.greeting[language]}
            </motion.h1>
             <div className="space-y-6 relative mt-4">
              <p className="text-[clamp(1.1rem,4vw,1.5rem)] font-light leading-relaxed text-primary relative z-10 w-full">
                — {t.subtext[language]}
              </p>
              <p className="text-[clamp(1rem,3.5vw,1.1rem)] text-primary/80 leading-[1.8] relative z-10 font-medium">
                {language === 'en' ? 'I bridge the gap between AI capability and real business outcomes — from first conversation to production deployment.' : 'Yapay zeka kabiliyeti ile gerçek ticari sonuçlar arasındaki köprüyü kuruyorum — ilk görüşmeden prodüksiyona kadar.'}
              </p>
            </div>
          </div>

          {/* Middle Column: Headline (Desktop) */}
          <div className="hidden lg:flex flex-grow flex-col justify-center pl-12 pr-12 xl:pr-16 z-20 relative pointer-events-none">
            <div className="pointer-events-auto w-full lg:max-w-[55%] xl:max-w-[50%]">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-display text-[6rem] xl:text-[9.5rem] 2xl:text-[11rem] leading-[0.85] tracking-[-.05em] text-primary"
              >
                 {t.greeting[language]}
              </motion.h1>
              <div className="max-w-[420px] 2xl:max-w-md mt-10 space-y-6 relative">
                <p className="text-[clamp(1.2rem,2vw,1.5rem)] font-light leading-relaxed text-primary relative z-10">
                  — {t.subtext[language]}
                </p>
                <p className="text-[15px] 2xl:text-base text-primary/80 leading-loose font-medium relative z-10">
                  {language === 'en' ? 'I bridge the gap between AI capability and real business outcomes — from first conversation to production deployment.' : 'Yapay zeka kabiliyeti ile gerçek ticari sonuçlar arasındaki köprüyü kuruyorum — ilk görüşmeden prodüksiyona kadar.'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Photo (Desktop) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block w-full lg:absolute lg:right-0 lg:top-0 lg:w-[45%] lg:h-[100%] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative z-0"
          >
            <div className="w-full h-full bg-[#F8F8F8] flex items-end justify-center relative">
               <div className="absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none xl:block hidden"></div>
               <img src={ilkerPic} className="w-full h-full object-cover object-top" alt="Fırat İlker Türk"/>
            </div>
          </motion.div>
      </div>

      {/* Footer Bar */}
      <div className="flex justify-between items-center px-5 lg:px-16 py-8 md:py-6 border-t border-[#F8F8F8] bg-white z-10 relative mt-0 lg:mt-auto order-3">
        <div className="small-caps opacity-50 whitespace-nowrap overflow-hidden text-ellipsis mr-4">ONSITE • CLIENT-FACING • RESULTS-DRIVEN</div>
        <div className="text-[11px] font-medium tracking-widest text-[#7B7B7B]">2026</div>
      </div>
    </section>
  );
};
