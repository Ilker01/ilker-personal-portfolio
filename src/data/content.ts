import { ExperienceItem } from '../types';

export const content = {
  nav: {
    about: { en: 'About Me', tr: 'Hakkımda' },
    experience: { en: 'Experience', tr: 'Deneyim' },
    skills: { en: 'Skills', tr: 'Yetkinlikler' },
    contact: { en: 'Contact', tr: 'İletişim' },
    getInTouch: { en: 'Get In Touch ↗', tr: 'İletişime Geç ↗' }
  },
  hero: {
    label: { en: 'AI & Business Development', tr: 'AI & İş Geliştirme' },
    deployments: { en: '+10 / Deployments', tr: '+10 / Prodüksiyon AI Dağıtımı' },
    revenue: { en: '+$3M / Revenue', tr: '+$3M / Müşteri Gelirine Katkı' },
    greeting: { en: 'Hello,', tr: 'Merhaba,' },
    subtext: { en: "It's Fırat, an AI Project Manager & Business Development Professional", tr: "Ben Fırat, AI Proje Yöneticisi & İş Geliştirme Uzmanı" },
    scroll: { en: 'Scroll down ↓', tr: 'Aşağı kaydır ↓' }
  },
  about: {
    heading: { en: 'About Me', tr: 'Hakkımda' },
    bio: { 
      en: 'Deployment professional with two years of experience going onsite with enterprise clients, immersing in their workflows, identifying the real problem underneath the stated one, and building solutions that stick. I own every layer from discovery to go-live.',
      tr: 'Kurumsal müşterilerle yerinde çalışarak iş akışlarına dahil olan, asıl sorunu tespit edip kalıcı çözümler üreten, iki yıllık deneyime sahip dağıtım (deployment) profesyoneliyim. Keşif aşamasından canlıya geçişe kadar her katmanı yönetiyorum.'
    },
    link: { en: 'See My Work →', tr: 'Çalışmalarımı Gör →' },
    statTitle: { en: '10+', tr: '10+' },
    statSubtitle: { en: '/ Production AI Deployments', tr: '/ Prodüksiyon AI Dağıtımı' },
    bullet1: { en: 'With 2+ years of onsite AI deployment experience across healthcare, real estate, and hospitality, I own every layer from discovery to go-live.', tr: 'Sağlık, gayrimenkul ve konaklama sektörlerinde sahada 2 yılı aşkın AI dağıtım deneyimi ile, keşiften canlıya geçişe kadar tüm süreci yönetiyorum.' },
    bullet2: { en: 'I translate complex system behaviour into plain language that informs business decisions — from operational teams to C-suite.', tr: 'Karmaşık sistem davranışlarını, operasyonel ekiplerden üst yöneticilere kadar iş kararlarına yön veren yalın bir dile çeviriyorum.' }
  },
  experience: {
    sectionLabel: { en: '• Experience', tr: '• Deneyim' },
    heading: { en: 'Explore My AI Journey', tr: 'AI Yolculuğumu Keşfet' },
    link: { en: 'Get In Touch ↗', tr: 'İletişime Geç ↗' },
    cta: { en: 'Open to new opportunities. Let\'s talk. ↗', tr: 'Yeni fırsatlara, iş birliklerine ve ilgi çekici projelere açığım. ↗' }
  },
  impact: {
    stats: [
      { value: '$3M+', label: { en: '/ Client Revenue Attributed', tr: '/ Müşteri Gelirine Katkı' } },
      { value: '40%', label: { en: '/ First-Touch Conversion Lift', tr: '/ İlk Temas Dönüşüm Artışı' } },
      { value: '$300K+', label: { en: '/ Revenue, Single Deployment', tr: '/ Tek Dağıtımdan Gelir' } },
      { value: '10,000', label: { en: '/ Contacts Autonomously Surveyed', tr: '/ Otonom Anket Yapılan Kişi' } },
      { value: '10+', label: { en: '/ Production AI Deployments', tr: '/ Prodüksiyon AI Dağıtımı' } },
      { value: '$46K ARR', label: { en: '/ Generated in 60 Days', tr: '/ 60 Günde Elde Edildi' } }
    ]
  },
  skills: {
    categories: [
      {
        title: { en: 'AI & Systems', tr: 'AI Sistemleri' },
        items: ['Conversational AI Architecture', 'Prompt Engineering', 'LLM Deployment', 'Voice AI', 'Retell AI', 'ElevenLabs', 'n8n', 'Make.com', 'Agent Performance Monitoring']
      },
      {
        title: { en: 'Project Management & Delivery', tr: 'Proje Yönetimi & Teslimat' },
        items: ['End-to-end Deployment', 'Workflow Mapping', 'Solution Design', 'User Training', 'Technical Team Direction', 'Post-Go-Live Analysis']
      },
      {
        title: { en: 'Business Development & Sales', tr: 'İş Geliştirme & Satış' },
        items: ['B2B Discovery', 'Enterprise Account Acquisition', 'Cold Outreach', 'Proposal Writing', 'EMEA Market', 'Value Proposition Design']
      },
      {
        title: { en: 'Client Relations & Stakeholder Management', tr: 'Müşteri İlişkileri' },
        items: ['C-Suite Presentation', 'Executive Reporting', 'Account Development', 'Onsite Engagement', 'CRM (HubSpot, Zoho, Salesforce)']
      }
    ]
  },
  education: {
    items: [
      {
        degree: 'MBA, International Business',
        school: 'University of Greenwich, London',
        period: '2019–2021',
        details: 'Merit (Honours)'
      },
      {
        degree: 'BA, Political Science & International Relations',
        school: 'Yeditepe University, Istanbul',
        period: '2015–2019',
        details: 'Academic Scholarship'
      }
    ]
  },
  contact: {
    heading: { en: 'Let\'s Talk', tr: 'Konuşalım' },
    subheading: { en: 'Open to new opportunities, partnerships, and interesting problems.', tr: 'Yeni fırsatlara, iş birliklerine ve ilgi çekici projelere açığım.' },
    button: { en: 'Send Me an Email', tr: 'E-posta Gönder' },
    email: 'firatilker.turk1@gmail.com',
    phone: '+90 530 513 09 93',
    linkedin: 'linkedin.com/in/firatilker',
    location: 'Istanbul, Türkiye'
  }
};

export const experiences: ExperienceItem[] = [
  {
    id: 'truedge',
    company: 'Truedge AI, San Francisco',
    location: 'San Francisco, USA',
    period: 'Dec 2025–Present',
    role: { en: 'Founding Advisor', tr: 'Kurucu Danışman' },
    description: { en: 'Onsite workflow discovery, bespoke AI design, C-level presentations', tr: 'Yerinde iş akışı keşfi, özel AI tasarımı, C-level sunumları' },
    tags: ['AI Strategy', 'BDev']
  },
  {
    id: 'integragen',
    company: 'IntegraGen Technologies, Istanbul / Austin',
    location: 'Istanbul, Türkiye / Austin, TX',
    period: 'Feb 2024–Nov 2025',
    role: { en: 'Founding Team | AI Deployment Lead', tr: 'Kurucu Ekip | AI Dağıtım Lideri' },
    description: { en: '10+ production deployments, $3M+ attributed revenue, 40% conversion lift', tr: '10+ prodüksiyon AI dağıtımı, $3M+ gelir katkısı, 40% dönüşüm artışı' },
    tags: ['Voice AI', 'Deployment', 'PM'],
    featured: true,
    featuredDetails: [
      { en: 'Conducted onsite and remote discovery sessions with customer teams across multiple verticals to locate the biggest pain points.', tr: 'Müşteri ekipleri ile birden fazla dikeyde yerinde ve uzaktan keşif oturumları düzenleyerek en büyük sorun noktalarını tespit ettim.' },
      { en: 'Personally designed all conversational flow architectures, prompt structures, and human handover conditions for each deployment.', tr: 'Her dağıtım için diyalog akış mimarisini, prompt yapılarını ve insana devir koşullarını bizzat tasarladım.' },
      { en: 'Deployed a voice AI system for a healthcare client... generating $300K+ in attributed revenue.', tr: 'Bir sağlık sektörü müşterisi için geliştirdiğim sesli AI asistan ile $300K+ gelir elde edilmesini sağladım.' }
    ]
  },
  {
    id: 'ucl',
    company: 'UCL, London',
    location: 'London, UK',
    period: 'Feb 2022–Jan 2024',
    role: { en: 'Client Relations & Operations Specialist', tr: 'Müşteri İlişkileri & Operasyon Uzmanı' },
    description: { en: 'Stakeholder management, 25% channel growth, £100K+ events', tr: 'Paydaş yönetimi, %25 kanal büyümesi, £100K+ bütçeli etkinlikler' },
    tags: ['Account Mgmt', 'Ops']
  },
  {
    id: 'lsb',
    company: 'LSB Group, London',
    location: 'London, UK',
    period: 'Nov 2020–Jul 2021',
    role: { en: 'Sales & Marketing Representative', tr: 'Satış & Pazarlama Temsilcisi' },
    description: { en: 'B2B outreach, 2 enterprise accounts in 4 months, EMEA market', tr: 'B2B erişimi, 4 ayda 2 kurumsal hesap kazanımı, EMEA pazarı' },
    tags: ['Sales', 'BDev']
  }
];
