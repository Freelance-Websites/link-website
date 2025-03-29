import React from 'react';

import FakeSlider from '@/components/FakeSlider';
import Hero from '@/components/Hero';
import TextAndImage from '@/components/TextAndImage';
import CardGrid from '@/components/CardGrid';
import Phrase from '@/components/Phrase';
import Stats from '@/components/Stats';
import LogoStrip from '@/components/LogoStrip';
import FakeTestimonials from '@/components/FakeTestimonials';
import Features from '@/components/Features';
import AccordionPanel from '@/components/Accordion';
import { SectionProps } from '@/components/MainPage';
import Footer from '@/components/Footer';

export default function PagePreview({ entry } : any) {
  const sections = entry?.getIn(['data', 'sections'])?.toJS() as SectionProps[] || [];
  return (
    <>
      {sections.map((section: SectionProps, index: number) => {
        switch(section.type) {
          case 'hero':
            return (
              <Hero
                media={section.media}
                byline={section.byline}
                title={section.title}
                description={section.description}
                decorations={section.decorations}
                ctas={section.ctas}
                colorScheme={section.colorScheme || 'primary'}
                key={`hero-${index}`}
              />
            )
          case 'slider':
            return section.slider ? (
              <FakeSlider
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
              <FakeTestimonials
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
            default:
              break;
        }
      })}
      <Footer />
    </>
  );
}
