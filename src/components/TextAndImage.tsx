import React from 'react';
import Image from 'next/image';

import Heading from '@/components/Heading';
import { ButtonProps } from '@/components/Button';
import { BulletProps } from '@/components/Heading';
import DotGrid from '@/components/DotGrid';

export interface TextAndImageProps {
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

const TextAndImage: React.FC<TextAndImageProps> = ({
  byline,
  title,
  description,
  image,
  imageLocation,
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
    >
      {image &&
        <div className={`
          relative md:flex-1 w-full h-full
          ${colorScheme === 'secondary'
            ? 'min-h-96 md:min-h-[560px]'
            : 'min-h-96 md:min-h-[710px]'
          }
          ${imageLocation === 'left'
            ? 'order-first'
            : 'order-first md:order-last'
          }
        `}
        >
          {decorations && <div className='absolute inset-0 flex items-center justify-center z-10'>
            <DotGrid colorScheme={colorScheme} />
          </div>}
          <Image
            src={image}
            alt={title || 'Link'}
            fill
            style={{
              objectFit: colorScheme === 'secondary' ? 'contain' : 'cover',
              objectPosition: 'center'
            }}
          />
        </div>
      }
      <div
        className={`
          md:flex-1 p-8 lg:p-16 xl:p-24
          ${imageLocation === 'left'
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