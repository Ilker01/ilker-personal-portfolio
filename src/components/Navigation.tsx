import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const t = content.nav;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-tertiary">
      <div className="flex justify-between items-center px-6 lg:px-16 py-6 lg:py-10">
        <div className="font-bold text-xl tracking-tighter w-32">
          F.I.T
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12 text-[13px] font-medium text-primary">
          <a href="#about" className="hover:opacity-70 transition-colors">{t.about[language]}</a>
          <a href="#experience" className="hover:opacity-70 transition-colors">{t.experience[language]}</a>
          <a href="#skills" className="hover:opacity-70 transition-colors">{t.skills[language]}</a>
          <a href="#contact" className="hover:opacity-70 transition-colors">{t.contact[language]}</a>
        </div>

        <div className="hidden md:flex items-center space-x-8 w-64 justify-end">
          <div className="text-[11px] font-bold cursor-pointer tracking-widest text-primary flex items-center">
            <span onClick={() => { if(language !== 'en') toggleLanguage() }} className={`transition-opacity ${language === 'en' ? 'border-b border-[#222222]' : 'opacity-30 hover:opacity-100'}`}>EN</span>
            <span className="mx-2 font-normal">|</span>
            <span onClick={() => { if(language !== 'tr') toggleLanguage() }} className={`transition-opacity ${language === 'tr' ? 'border-b border-[#222222]' : 'opacity-30 hover:opacity-100'}`}>TR</span>
          </div>
          <a href="#contact" className="text-[13px] font-medium flex items-center group text-primary">
            <span>{t.getInTouch[language].replace(' ↗', '')}</span>
            <span className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">↗</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center space-x-6 z-50">
           <div className="text-[11px] font-bold cursor-pointer tracking-widest text-primary flex items-center pt-[2px]">
            <span onClick={() => { if(language !== 'en') toggleLanguage() }} className={`transition-opacity ${language === 'en' ? 'border-b border-primary' : 'opacity-30'}`}>EN</span>
            <span className="mx-2 font-normal opacity-30">|</span>
            <span onClick={() => { if(language !== 'tr') toggleLanguage() }} className={`transition-opacity ${language === 'tr' ? 'border-b border-primary' : 'opacity-30'}`}>TR</span>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="text-primary focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 text-2xl font-display pt-20">
          <a href="#about" onClick={() => setIsOpen(false)}>{t.about[language]}</a>
          <a href="#experience" onClick={() => setIsOpen(false)}>{t.experience[language]}</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>{t.skills[language]}</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>{t.contact[language]}</a>
        </div>
      )}

      {/* Mobile Floating CTA - Fixed to bottom */}
      <div className="md:hidden fixed bottom-6 left-5 right-5 z-40">
         <a href="#contact" className="flex items-center justify-center w-full bg-primary text-white text-center h-[56px] text-sm font-medium shadow-2xl">
            {t.getInTouch[language].replace(' ↗', '')} <span className="ml-2">↗</span>
         </a>
      </div>
    </nav>
  );
};
