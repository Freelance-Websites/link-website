import React from 'react';
import Image from 'next/image';

import Heading from '@/components/Heading';
import DotGrid from '@/components/DotGrid';
import { ButtonProps } from '@/components/Button';
import { isVideo } from '@/utils/media';

export interface HeroProps {
  media?: string;
  byline?: string;
  title?: string;
  description?: string;
  layout?: 'full' | 'boxed';
  colorScheme?: 'primary' | 'light' | 'dark' | 'secondary';
  ctas?: ButtonProps[];
  decorations?: boolean;
  mediaSize?: 'full' | 'boxed';
}

const Hero: React.FC<HeroProps> = ({
  media,
  byline,
  title,
  description,
  layout,
  decorations = false,
  ctas,
  colorScheme = 'primary'
}) => {
  return (
    <section
      className={`
        w-full h-screen relative
        flex flex-col justify-center items-center
        ${colorScheme === 'primary'
          ? 'bg-dark'
          : colorScheme === 'light'
            ? 'bg-light'
            : 'bg-primary'
        }
      `}
    >
      {/* Image/Video content with overlay */}
      {media && (
        <div className='relative w-full h-full'>
          {/* Overlay */}
          {layout === 'full' && <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-10"></div>}
          {isVideo(media) ?
            <video
              controls
              autoPlay
              muted
              loop
              className={`
                object-cover w-full h-full z-0
                ${layout === 'full' ? 'absolute top-0 left-0' : 'relative aspect-video'}
              `}
            >
              <source src={media} type={`video/${media.split('.').pop()}`} />
              Your browser does not support the video tag.
            </video>
            :
            <Image
              src={media}
              alt={title || 'Slider Image'}
              fill
              className={`
                object-cover object-center w-full h-full z-0
                ${layout === 'full' ? 'absolute top-0 left-0' : 'relative aspect-video mt-16'}
              `}
            />
          }
        </div>
      )}
      {/* Content */}
      <div
        className={`
          container mx-auto px-4 z-10 w-full h-full flex items-center
          ${layout === 'full' ? 'absolute' : 'relative pt-4 md:pt-12 lg:pt-16'}
        `}
      >
        <div className="md:max-w-3xl flex gap-4 md:gap-8 items-start flex-col md:flex-row">
          {/* Decorations */}
          {decorations && (
            <DotGrid
              colorScheme={colorScheme}
            />
          )}
          {/* Title, description, CTA */}
          <Heading
            title={title}
            titleHierarchy={'h1'}
            description={description}
            ctas={ctas}
            colorScheme={colorScheme}
            isAboveImage={(media && layout === 'full') ? true : false}
            byline={byline}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;