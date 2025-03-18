import React from 'react';

import Main from '@/components/Main';
import Hero from '@/components/about/Hero';
import Phrase from '@/components/Phrase';

import { attributes } from '@/content/quienes-somos.md';

interface SectionProps {
  type: string;
  colorScheme?: 'primary' | 'light' | 'dark' | 'secondary';
  phrase?: string;
}

export default function Home() {
  return (
    <Main
      tabTitle='Quienes somos • Link'
    >
      {attributes.sections.map((section: SectionProps, index: number) => {
        switch(section.type) {
          case 'hero':
            return (
              <Hero
                key={`hero-${index}`}
                {...section}
              />
            )
          case 'phrase':
            return (
              <Phrase
                key={`phrase-${index}`}
                colorScheme={section.colorScheme || 'primary'}
                phrase={section.phrase || ''}
              />
            )
        }
      })}
    </Main>
  );
}
