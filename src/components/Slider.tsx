import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import Heading from '@/components/Heading';
import DotGrid from '@/components/DotGrid';
import { ButtonProps } from '@/components/Button';

import { isVideo } from '@/utils/media';

interface MainProps {
  slider: string[];
}

export interface SliderProps {
  type: string;
  media?: string;
  byline?: string;
  title?: string;
  description?: string;
  colorScheme?: 'primary' | 'light' | 'dark' | 'secondary';
  ctas?: ButtonProps[];
  decorations?: boolean;
  layout?: 'full' | 'boxed';
}

export interface SliderContent {
  hero?: SliderProps[];
  title: string;
  timestamp: string;
  text?: string;
}

const Slider: React.FC<MainProps> = ({
  slider
}) => {
  const [slides, setSlides] = useState<SliderProps[]>([]);
  
  useEffect(() => {
    async function fetchContent(slug: string) {
      const content = await import(`@/content/novedades/${slug || 'index'}.md`);
      setSlides((prev) => [...prev, content.attributes.hero]);
    }
    if (slider) {
      slider.forEach((slide) => fetchContent(slide));
    }
  }, [slider]);

  const splideRef = React.useRef<{ splide: { go: (direction: string) => void } } | null>(null);
  return (
    <section className='slider'>
      <Splide
        options={{
          type: 'loop',
          perPage: 1,
          arrows: false,
          pagination: false,
          autoplay: true,
          interval: 6000
        }}
        ref={splideRef}
        aria-label="Main Slider"
      >
        {slides.map((slide, index) => (
          <SplideSlide
            key={index}
          >
            <div className={`
              w-full h-screen relative
              flex flex-col justify-center items-center
              ${slide.colorScheme === 'primary'
                ? 'bg-primary'
                : slide.colorScheme === 'light'
                  ? 'bg-light'
                  : 'bg-dark'
              }
            `}
            >
              {/* Image/Video content with overlay */}
              {slide.media && slide.layout !== 'boxed' && (
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
                      src={slide.media.startsWith('/') ? slide.media : `/${slide.media}`}
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
                      colorScheme={slide.media ? 'primary' : slide.colorScheme}
                    />
                  )}
                  {/* Title, description, CTA */}
                  <Heading
                    byline={slide.byline}
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
                        src={slide.media.startsWith('/') ? slide.media : `/${slide.media}`}
                        alt={slide.title || 'Slider Image'}
                        fill
                        style={{ objectFit: 'contain', objectPosition: 'center' }}
                      />
                    }
                  </div>
                }
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