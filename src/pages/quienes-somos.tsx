import React from 'react';

import Main from '@/components/Main';
import Hero from '@/components/about/Hero';
import Phrase from '@/components/Phrase';
import Stats, { StatProp } from '@/components/Stats';
import TextAndImage, { TextAndImageProps } from '@/components/TextAndImage';
import CardGrid from '@/components/CardGrid';

import { attributes } from '@/content/quienes-somos.md';

import { CardProps } from '@/components/Card';
import { ButtonProps } from '@/components/Button';
import { BulletProps } from '@/components/Heading';

interface SectionProps {
  type: string;
  colorScheme?: 'primary' | 'light' | 'dark' | 'secondary';
  phrase?: string;
  stats?: StatProp[];
  byline?: string;
  title?: string;
  description?: string;
  ctas?: ButtonProps[];
  media?: string;
  mediaPlacement?: 'left' | 'right';
  mediaSize?: 'full' | 'boxed';
  decorations?: boolean;
  bullets?: BulletProps[];
  cards?: CardProps[];
  cardLayout?: 'horizontal' | 'vertical';
  textAndImage?: TextAndImageProps;
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
            );
          case 'phrase':
            return (
              <Phrase
                key={`phrase-${index}`}
                colorScheme={section.colorScheme || 'primary'}
                phrase={section.phrase || ''}
              />
            );
          case 'stats':
            return (
              <Stats
                key={`stats-${index}`}
                colorScheme={section.colorScheme || 'primary'}
                stats={section.stats || []}
                title={section.title || ''}
                description={section.description || ''}
                byline={section.byline || ''}
              />
            );
            case 'textAndImage':
              return (
                <TextAndImage
                  key={`text-and-image-${index}`}
                  byline={section.byline}
                  title={section.title}
                  description={section.description}
                  media={section.media}
                  mediaPlacement={section.mediaPlacement || 'left'}
                  mediaSize={section.mediaSize || 'full'}
                  colorScheme={section.colorScheme || 'primary'}
                  ctas={section.ctas}
                  decorations={section.decorations}
                  bullets={section.bullets}
                />
              );
            case 'cards':
              return (
                <CardGrid
                  key={`cards-${index}`}
                  byline={section.byline}
                  title={section.title}
                  description={section.description}
                  ctas={section.ctas}
                  cards={section.cards || []}
                  cardLayout={section.cardLayout || 'horizontal'}
                  colorScheme={section.colorScheme || 'dark'}
                />
              );
        }
      })}
    </Main>
  );
}
