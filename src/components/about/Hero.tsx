import React from 'react';
import Image from 'next/image';

import Heading from '@/components/Heading';
import DotGrid from '@/components/DotGrid';
import { ButtonProps } from '@/components/Button';

export interface HeroProps {
  type: string;
  media?: string;
  byline?: string;
  title?: string;
  description?: string;
  colorScheme?: 'primary' | 'light' | 'dark' | 'secondary';
  ctas?: ButtonProps[];
  decorations?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  media,
  byline,
  title,
  description,
  decorations = false,
  ctas,
  colorScheme = 'primary'
}) => {
  const isVideo = (media: string) => {
    const videoExtensions = ['mp4', 'webm', 'ogg'];
    const extension = media.split('.').pop();
    return videoExtensions.includes(extension || '');
  };

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
        <>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-10"></div>
          {isVideo(media) ?
          <video
            controls
            autoPlay
            muted
            loop
            className="object-cover w-full h-full z-0 absolute top-0 left-0"
          >
            <source src={media} type={`video/${media.split('.').pop()}`} />
            Your browser does not support the video tag.
          </video>
          :
          <Image
            src={media}
            alt={title || 'Slider Image'}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />}
        </>
      )}
      {/* Content */}
      <div
        className="container mx-auto px-4 md:px-0 relative z-10 absolute top-0 left-0 w-full h-full flex items-center"
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
            isAboveImage={media ? true : false}
            byline={byline}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;