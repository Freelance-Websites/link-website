import React from 'react';

import Main from '@/components/Main';
import Slider, { SliderProps } from '@/components/Slider';
import Hero from '@/components/Hero';
import TextAndImage, { TextAndImageProps } from '@/components/TextAndImage';
import CardGrid from '@/components/CardGrid';
import Phrase from '@/components/Phrase';
import Stats, { StatProp } from '@/components/Stats';
import LogoStrip, { LogosProp } from '@/components/LogoStrip';
import Testimonials, { TestimonialProp } from '@/components/Testimonials';
import Features from '@/components/Features';
import AccordionPanel, { AccordionPanelProps } from '@/components/Accordion';

import { CardProps } from '@/components/Card';
import { ButtonProps } from '@/components/Button';
import { BulletProps } from '@/components/Heading';

export interface SectionProps {
  type: string;
  slider?: string[];
  hero?: SliderProps;
  textAndImage?: TextAndImageProps;
  byline?: string;
  title?: string;
  description?: string;
  media?: string;
  layout?: 'boxed' | 'full';
  mediaPlacement?: 'left' | 'right';
  mediaSize?: 'full' | 'boxed';
  colorScheme?: 'primary' | 'light' | 'dark' | 'secondary';
  ctas?: ButtonProps[];
  decorations?: boolean;
  bullets?: BulletProps[];
  cards?: CardProps[];
  cardLayout?: 'horizontal' | 'vertical';
  phrase?: string;
  stats?: StatProp[];
  logos?: LogosProp[];
  testimonials?: TestimonialProp[];
  avatar?: string;
  username?: string;
  role?: string;
  features?: CardProps[];
  accordion?: AccordionPanelProps[];
}

export interface MainPageProps {
  title: string;
  sections: SectionProps[];
}

export default function MainPage({
  title,
  sections
}: MainPageProps) {

  return (
    <Main
      tabTitle={`${title ? title : 'Inicio'} • Link`}
    >
      {sections && sections.map((section: SectionProps, index: number) => {
        switch(section.type) {
          case 'hero':
            return (
              <Hero
                media={section.media}
                byline={section.byline}
                title={section.title}
                layout={section.layout || 'full'}
                description={section.description}
                decorations={section.decorations}
                ctas={section.ctas}
                colorScheme={section.colorScheme || 'primary'}
                key={`slider-${index}`}
              />
            )
          case 'slider':
            return section.slider ? (
              <Slider
                slider={section.slider || []}
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
                media={section.media}
                mediaPlacement={section.mediaPlacement || 'left'}
                mediaSize={section.mediaSize || 'full'}
                colorScheme={section.colorScheme || 'primary'}
                ctas={section.ctas}
                decorations={section.decorations}
                bullets={section.bullets}
                layout={section.layout || 'full'}
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
          case 'phrase':
            return (
              <Phrase
                key={`phrase-${index}`}
                colorScheme={section.colorScheme || 'primary'}
                phrase={section.phrase || ''}
                title={title || ''}
              />
            );
          case 'stats':
            return (
              <Stats
                key={`stats-${index}`}
                byline={section.byline || ''}
                title={section.title || ''}
                description={section.description || ''}
                colorScheme={section.colorScheme || 'primary'}
                stats={section.stats || []}
              />
            )
          case 'logos':
            return (
              <LogoStrip
                key={`logos-${index}`}
                byline={section.byline || ''}
                title={section.title || ''}
                description={section.description || ''}
                colorScheme={section.colorScheme || 'primary'}
                logos={section.logos || []}
                ctas={section.ctas || []}
              />
            )
          case 'quote':
            return (
              <Testimonials
                key={`testimonial-${index}`}
                byline={section.byline || ''}
                title={section.title || ''}
                description={section.description || ''}
                testimonials={section.testimonials || []}
                colorScheme={section.colorScheme || 'primary'}
                decorations={section.decorations || true}
                ctas={section.ctas || []}
              />
            )
            case 'features':
              return (
                <Features
                  key={`features-${index}`}
                  byline={section.byline || ''}
                  title={section.title || ''}
                  description={section.description || ''}
                  colorScheme={section.colorScheme || 'primary'}
                  ctas={section.ctas || []}
                  cards={section.cards || []}
                />
              )
            case 'accordion':
              return (
                <AccordionPanel
                  key={`accordion-${index}`}
                  byline={section.byline || ''}
                  title={section.title || ''}
                  description={section.description || ''}
                  colorScheme={section.colorScheme || 'primary'}
                  ctas={section.ctas || []}
                  accordion={section.accordion || []}
                />
              )
        }
      })}
    </Main>
  );
}
