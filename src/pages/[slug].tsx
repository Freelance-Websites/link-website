import React from 'react';
import { useRouter } from 'next/router';

import Main from '@/components/Main';
import Slider, { SliderProps } from '@/components/Slider';
import Hero from '@/components/Hero';
import TextAndImage, { TextAndImageProps } from '@/components/TextAndImage';
import CardGrid from '@/components/CardGrid';
import Phrase from '@/components/Phrase';
import Stats, { StatProp } from '@/components/Stats';
import LogoStrip, { LogosProp } from '@/components/LogoStrip';

import { CardProps } from '@/components/Card';
import { ButtonProps } from '@/components/Button';
import { BulletProps } from '@/components/Heading';

interface SectionProps {
  type: string;
  slider?: SliderProps[];
  hero?: SliderProps;
  textAndImage?: TextAndImageProps;
  byline?: string;
  title?: string;
  description?: string;
  media?: string;
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
}

export default function Page() {
  const router = useRouter();
  const { slug } = router.query;
  const [attributes, setAttributes] = React.useState<{ title?: string; sections: SectionProps[] } | null>(null);

  React.useEffect(() => {
    async function fetchContent() {
      const content = await import(`@/content/${slug || 'index'}.md`);
      setAttributes(content.attributes);
    }
    if (slug) {
      fetchContent();
    }
  }, [slug]);
  
  return (
    <Main
      tabTitle={`${attributes && attributes.title} • Link`}
    >
      {attributes && attributes.sections.map((section: SectionProps, index: number) => {
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
                key={`slider-${index}`}
              />
            )
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
        }
      })}
    </Main>
  );
}
