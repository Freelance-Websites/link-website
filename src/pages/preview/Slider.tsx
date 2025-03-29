import React from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import Heading from '@/components/Heading';
import DotGrid from '@/components/DotGrid';
import { ButtonProps } from '@/components/Button';

import { isVideo } from '@/utils/media';

interface MainProps {
  slider: SliderProps[];
}

export interface SliderProps {
  type: string;
  media?: string;
  title?: string;
  description?: string;
  colorScheme?: 'primary' | 'light' | 'dark' | 'secondary';
  ctas?: ButtonProps[];
  decorations?: boolean;
  layout?: 'full' | 'boxed';
}

const FakeSlider: React.FC<MainProps> = ({
  slider
}) => {

  return (
    <section className='slider'>
      {slider.map((slide, index) => (
        <div key={index} className={`
          w-full h-screen relative
          flex flex-col justify-center items-center
          ${slide.colorScheme === 'primary'
            ? 'bg-dark'
            : slide.colorScheme === 'light'
              ? 'bg-light'
              : 'bg-primary'
          }
        `}
        >
          {/* Image/Video content with overlay */}
          {slide.media && slide.layout !== 'boxed' && (
            <>
              <div className="absolute top-0 left-0 w-full h-full opacity-40 z-10"></div>
              {isVideo(slide.media) ?
                <video
                  autoPlay
                  muted
                  loop
                  className="object-cover w-full h-full z-0 absolute top-0 left-0"
                >
                  <source src={slide.media} type={`video/${slide.media.split('.').pop()}`} />
                  Your browser does not support the video tag.
                </video>
              :
                <Image
                  src={slide.media}
                  alt={slide.title || 'Slider Image'}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              }
            </>
          )}
          {/* Content */}
          <div
            className="container mx-auto px-4 md:px-0 relative z-10 w-full h-full flex justify-center md:justify-start md:items-center flex-col md:flex-row gap-4 md:gap-12"
          >
            <div className="md:max-w-4xl flex gap-4 md:gap-8 items-start flex-col md:flex-row">
              {/* Decorations */}
              {slide.decorations && (
                <DotGrid
                  colorScheme={slide.colorScheme}
                />
              )}
              {/* Title, description, CTA */}
              <Heading
                title={slide.title}
                titleHierarchy={'h1'}
                description={slide.description}
                ctas={slide.ctas}
                colorScheme={slide.colorScheme}
                isAboveImage={slide.media ? true : false}
              />
            </div>
            {slide.media && slide.layout === 'boxed' &&
              <div className='relative order-first h-96 md:aspect-video md:order-last'>
                {isVideo(slide.media) ?
                  <video
                    autoPlay
                    muted
                    loop
                    className="object-contain w-full h-full"
                  >
                    <source src={slide.media} type={`video/${slide.media.split('.').pop()}`} />
                    Your browser does not support the video tag.
                  </video>
                :
                  <Image
                    src={slide.media}
                    alt={slide.title || 'Slider Image'}
                    fill
                    style={{ objectFit: 'contain', objectPosition: 'center' }}
                  />
                }
              </div>
            }
          </div>
        </div>
      ))}
    </section>
  );
}

export default FakeSlider;