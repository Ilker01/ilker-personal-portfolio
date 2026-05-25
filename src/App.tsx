/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Impact } from './components/Impact';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <LanguageProvider>
      <div className="font-body text-primary bg-white selection:bg-primary selection:text-white">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <Impact />
          <Skills />
          <Education />
        </main>
        <Contact />
      </div>
    </LanguageProvider>
  );
}
