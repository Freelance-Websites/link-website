import React from 'react';
import ReactMarkdown from 'react-markdown';

import { HeroProps } from '@/components/Hero';
import TextAndImage from '@/components/TextAndImage';
import Footer from '@/components/Footer';

export default function PagePreview({ entry } : any) {
  const hero = entry?.getIn(['data', 'hero']).toJS() as HeroProps || {};
  const text = entry?.getIn(['data', 'text']) as string || '';
  const timestamp = entry?.getIn(['data', 'timestamp']) as string || '';

  return (
    <>
      {hero && (
        <TextAndImage
          media={hero.media}
          byline={timestamp ? new Date(timestamp).toLocaleDateString('en-GB').replace(/\//g, '/') : undefined}
          title={hero.title}
          description={hero.description}
          decorations={hero.decorations}
          mediaSize={hero.mediaSize}
          layout={hero.layout}
          ctas={[]}
          colorScheme={hero.colorScheme || 'primary'}
        />
      )}
      {text && (
        <div
          className={`
          prose rich-text max-w-3xl mx-auto
          px-4 py-8 md:py-16 lg:py-24
          grid gap-4
          text-dark font-serif
          `}
        >
          <ReactMarkdown>
            {text}
          </ReactMarkdown>
        </div>
      )}
      <Footer />
    </>
  );
}
  