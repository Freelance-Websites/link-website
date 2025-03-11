import React from 'react';
import Image from 'next/image';

import Heading from './Heading';
import { ButtonProps } from './Button';
import DotGrid from './DotGrid';

export interface TextAndImageProps {
  byline?: string;
  title?: string;
  description?: string;
  image?: string;
  imageLocation?: 'left' | 'right';
  colorScheme?: 'primary' | 'light' | 'dark' | 'secondary';
  ctas?: ButtonProps[];
  decorations?: boolean;
}

const TextAndImage: React.FC<TextAndImageProps> = ({
  byline,
  title,
  description,
  image,
  imageLocation,
  colorScheme,
  ctas,
  decorations
}) => {
  return (
    <section
      className={`
        flex items-center justify-center flex-col md:flex-row
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
          relative md:flex-1 w-full
          ${colorScheme === 'secondary'
            ? 'h-96 md:h-[560px]'
            : 'h-96 md:h-[710px]'
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
          md:flex-1 p-8 lg:p-12 xl:p-16
          ${imageLocation === 'left'
            ? 'order-first md:order-last'
            : 'order-first'
          }
        `}
      >
        <Heading
          title={title}
          description={description}
          ctas={ctas}
          colorScheme={colorScheme}
          byline={byline}
        />
      </div>
    </section>
  );
}

export default TextAndImage;