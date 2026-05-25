import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { ArrowUpRight, Mail, Linkedin, MapPin, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = content.contact;

  return (
    <section id="contact" className="bg-primary text-white py-32 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-7xl font-display font-light mb-6">{t.heading[language]}</h2>
        <p className="text-secondary/80 text-lg max-w-lg mb-16">{t.subheading[language]}</p>
        
        <a 
          href={`mailto:${t.email}`} 
          className="bg-white text-primary px-8 py-4 rounded-none font-medium hover:bg-white/90 transition-colors flex items-center group mb-24"
        >
          {t.button[language]} 
          <ArrowUpRight size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>

        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm text-secondary/80 w-full pb-16 border-b border-white/10">
          <a href={`mailto:${t.email}`} className="flex items-center hover:text-white transition-colors">
             <Mail size={16} className="mr-2" /> {t.email}
          </a>
          <a href={`https://${t.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition-colors">
             <Linkedin size={16} className="mr-2" /> LinkedIn
          </a>
          <span className="flex items-center">
             <Phone size={16} className="mr-2" /> {t.phone}
          </span>
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
