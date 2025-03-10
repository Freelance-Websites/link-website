import React from 'react';

import Main from '@/components/Main';
import Slider from '@/components/Slider';

import { attributes } from '@/content/index.md';

interface SectionProps {
  type: string;
  slider?: SlideProps[];
}

interface SlideProps {
  type: string;
  media?: string;
  title: string;
  description?: string;
  colorScheme?: 'primary' | 'light' | 'dark';
  ctaText?: string;
  ctaLink?: string;
  decorations?: boolean;
}

export default function Home() {
  return (
    <Main
      tabTitle='Inicio • Link'
    >
      {attributes.sections.map((section: SectionProps, index: Number) => {
        switch(section.type) {
          case 'slider':
            return section.slider ? (
              <Slider
                slider={section.slider}
                key={`slider-${index}`}
              />
            ) : null;
        }
      })}
    </Main>
  );
}
