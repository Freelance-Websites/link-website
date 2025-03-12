import React from 'react';

import Main from '@/components/Main';
import Slider, { SliderProps } from '@/components/Slider';
import TextAndImage, { TextAndImageProps } from '@/components/TextAndImage';

import { attributes } from '@/content/index.md';
import { ButtonProps } from '@/components/Button';
import { BulletProps } from '@/components/Heading';

interface SectionProps {
  type: string;
  slider?: SliderProps[];
  textAndImage?: TextAndImageProps;
  byline?: string;
  title?: string;
  description?: string;
  image?: string;
  imageLocation?: 'left' | 'right';
  colorScheme?: 'primary' | 'light' | 'dark' | 'secondary';
  ctas?: ButtonProps[];
  decorations?: boolean;
  bullets?: BulletProps[];
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
          case 'textAndImage':
            return (
              <TextAndImage
                key={`text-and-image-${index}`}
                byline={section.byline}
                title={section.title}
                description={section.description}
                image={section.image}
                imageLocation={section.imageLocation || 'left'}
                colorScheme={section.colorScheme || 'primary'}
                ctas={section.ctas}
                decorations={section.decorations}
                bullets={section.bullets}
              />
            );
        }
      })}
    </Main>
  );
}
