import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { ArrowUpRight, Mail, Linkedin, MapPin, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = content.contact;

  const emailSubject = language === 'en' ? 'Inquiry from Portfolio' : 'Portföy Sitenizden İletişim';
  const emailBody = language === 'en' ? 'Hi Fırat,\n\nI am reaching out regarding...\n\nBest,' : 'Merhaba Fırat,\n\nŞu konu hakkında ulaşıyorum...\n\nİyi çalışmalar,';
  const mailtoHref = `mailto:${t.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <section id="contact" className="bg-primary text-white py-24 md:py-32 px-5 lg:px-6 pb-40 lg:pb-32">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-[clamp(3.5rem,8vw,5.5rem)] font-display font-light mb-6 tracking-tighter leading-none">{t.heading[language]}</h2>
        <p className="text-secondary/80 text-[clamp(1.1rem,3vw,1.25rem)] max-w-lg mb-12 sm:mb-16 leading-relaxed font-light">{t.subheading[language]}</p>
        
        <a 
          href={mailtoHref} 
          className="bg-white text-primary px-8 py-4 rounded-none font-medium hover:bg-white/90 transition-colors flex items-center group mb-24"
        >
          {t.button[language]} 
          <ArrowUpRight size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>

        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm text-secondary/80 w-full pb-16 border-b border-white/10">
          <a href={mailtoHref} className="flex items-center hover:text-white transition-colors">
             <Mail size={16} className="mr-2" /> {t.email}
          </a>
          <a href="https://www.linkedin.com/in/firatilker/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition-colors">
             <Linkedin size={16} className="mr-2" /> LinkedIn
          </a>
          <a href={`tel:${t.phone.replace(/\s+/g, '')}`} className="flex items-center hover:text-white transition-colors">
             <Phone size={16} className="mr-2" /> {t.phone}
          </a>
          <span className="flex items-center">
             <MapPin size={16} className="mr-2" /> {t.location}
          </span>
        </div>

        <div className="mt-8 text-xs text-secondary/60">
           © 2026 Fırat İlker Türk.
        </div>
      </div>
    </section>
  );
};
