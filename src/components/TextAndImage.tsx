import React from 'react';
import Image from 'next/image';
import slugify from 'react-slugify';

import Heading from '@/components/Heading';
import { ButtonProps } from '@/components/Button';
import { BulletProps } from '@/components/Heading';
import DotGrid from '@/components/DotGrid';

import { isVideo } from '@/utils/media';

export interface TextAndImageProps {
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
}

const TextAndImage: React.FC<TextAndImageProps> = ({
  byline,
  title,
  description,
  media,
  mediaPlacement,
  mediaSize,
  colorScheme,
  ctas,
  decorations,
  bullets
}) => {
  return (
    <section
      className={`
        grid items-center justify-center grid-cols-1 md:grid-cols-2
        ${colorScheme === 'primary'
          ? 'bg-primary text-dark'
          : colorScheme === 'light'
            ? 'bg-light text-dark'
            : colorScheme === 'secondary'
              ? 'bg-secondary text-dark'
              : 'bg-dark text-light'
        }
      `}
      id={slugify(byline || title)}
    >
      {/* Image/Video content with overlay */}
      {media && (
        <div className={`
          relative md:flex-1 w-full h-full
          ${colorScheme === 'secondary'
            ? 'min-h-96 md:min-h-[560px]'
            : 'min-h-96 md:min-h-[710px]'
          }
          ${mediaPlacement === 'left'
            ? 'order-first'
            : 'order-first md:order-last'
          }
          ${mediaSize === 'boxed'
            ? 'p-4 md:p-8 lg:p-16 xl:p-20'
            : ''
          }
        `}
        >
          {decorations && <div className='absolute inset-0 flex items-center justify-center z-10'>
            <DotGrid colorScheme={colorScheme} />
          </div>}
          {isVideo(media) ?
            <video
              autoPlay
              muted
              loop
              className={`object-cover w-full h-full z-0 ${mediaSize === 'full' && 'absolute top-0 left-0'}`}
            >
              <source src={media} type={`video/${media.split('.').pop()}`} />
              Your browser does not support the video tag.
            </video>
          :
            mediaSize === 'full'
              ? <Image
                src={media}
                alt={title || 'Link'}
                fill
                style={{
                  objectFit: colorScheme === 'secondary' ? 'contain' : 'cover',
                  objectPosition: 'center'
                }}
              />
              : <Image
                src={media}
                alt={title || 'Link'}
                width={640}
                height={640}
                style={{
                  objectFit: colorScheme === 'secondary' ? 'contain' : 'cover',
                  objectPosition: 'center',
                  position: 'relative',
                  width: '100%',
                  height: '100%'
                }}
              />
          }
        </div>
      )}
      <div
        className={`
          md:flex-1 px-4 py-8 lg:p-16 xl:p-20
          ${mediaPlacement === 'left'
            ? 'order-first md:order-last'
            : 'order-first'
          }
        `}
      >
        <Heading
          title={title}
          titleHierarchy='h2'
          description={description}
          ctas={ctas}
          colorScheme={colorScheme}
          byline={byline}
          bullets={bullets}
        />
      </div>
    </section>
  );
}

export default TextAndImage;