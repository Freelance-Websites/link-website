import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
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
}

const Slider: React.FC<MainProps> = ({
  slider
}) => {
  const splideRef = React.useRef<{ splide: { go: (direction: string) => void } } | null>(null);

  return (
    <section className='slider'>
      <Splide
        options={{
          type: 'loop',
          perPage: 1,
          arrows: false,
          pagination: false
        }}
        ref={splideRef}
        aria-label="Main Slider"
      >
        {slider.map((slide, index) => (
          <SplideSlide
            key={index}
          >
            <div className={`
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
              {slide.media && (
                <>
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>
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
                className="container mx-auto px-4 md:px-0 relative z-10 absolute top-0 left-0 w-full h-full flex items-center"
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
                <ul className='flex items-center gap-2 absolute bottom-4 md:bottom-8 w-full justify-center'>
                  <li className="flex items-center">
                    <button
                      className="text-light transition duration-300 hover:opacity-80"
                      onClick={() => splideRef.current?.splide.go('-1')}
                    >
                      <ArrowLeft />
                    </button>
                  </li>
                  <li>
                    <span className="md:text-lg leading-none text-light">
                        {slider.findIndex(slide => slide === slider[index]) + 1} / {slider.length}
                    </span>
                  </li>
                  <li className="flex items-center">
                    <button
                      className="text-light transition duration-300 hover:opacity-80"
                      onClick={() => splideRef.current?.splide.go('+1')}
                    >
                      <ArrowRight />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}

export default Slider;