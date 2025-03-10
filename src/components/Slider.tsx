import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface MainProps {
  slider: SliderProps[];
}

interface SliderProps {
  type: string;
  media?: string;
  title?: string;
  description?: string;
  colorScheme?: 'primary' | 'light' | 'dark';
  ctaText?: string;
  ctaLink?: string;
  decorations?: boolean;
}

const Slider: React.FC<MainProps> = ({
  slider
}) => {
  const isVideo = (media: string) => {
    const videoExtensions = ['mp4', 'webm', 'ogg'];
    const extension = media.split('.').pop();
    return videoExtensions.includes(extension || '');
  };

  const splideRef = React.useRef<Splide>(null);

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
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-10"></div>
                  {isVideo(slide.media) ?
                    <video controls>
                      <source src={slide.media} type={`video/${slide.media.split('.').pop()}`} />
                      Your browser does not support the video tag.
                    </video>
                  :
                    <Image
                      src={slide.media}
                      alt={slide.title || 'Slider Image'}
                      layout='fill'
                      objectFit='cover'
                      objectPosition='center'
                    />}
                </>
              )}
              {/* Content */}
              <div
                className="container mx-auto px-4 md:px-0 relative z-10 absolute top-0 left-0 w-full h-full flex items-center"
              >
                <div className="md:max-w-3xl flex gap-4 md:gap-8 items-start flex-col md:flex-row">
                  {/* Decorations */}
                  {slide.decorations && (
                    <ul className="grid grid-cols-9 grid-rows-9 gap-1 md:gap-4 aspect-square min-w-[120px] min-h-[120px] md:min-w-[230px] md:min-h-[230px]">
                      {Array.from({ length: 81 }).map((_, index) => (
                        <li
                          key={index}
                          className={`
                            h-1 w-1 md:w-3 md:h-3 rounded-full
                            ${slide.colorScheme === 'primary'
                            ? 'bg-primary'
                            : slide.colorScheme === 'light'
                            ? 'bg-dark'
                            : 'bg-dark'
                            }
                          `}
                          />
                      ))}
                    </ul>
                  )}
                  {/* Title, description, CTA */}
                  <div className="flex flex-col justify-center gap-4">
                    {slide.title && (
                      <h1
                        className={`
                          text-3xl md:text-4xl font-bold leading-none
                          ${slide.colorScheme === 'primary'
                            ? 'text-primary'
                            : slide.colorScheme === 'light'
                              ? 'text-dark'
                              : 'text-dark'
                          }
                        `}
                      >
                        {slide.title}
                      </h1>
                    )}
                    {slide.description && (
                      <p
                        className={`
                          md:text-lg font-serif md:leading-none
                          ${slide.colorScheme === 'primary'
                            ? 'text-light'
                            : slide.colorScheme === 'light'
                              ? 'text-dark'
                              : 'text-light'
                          }
                        `}
                      >
                        {slide.description}
                      </p>
                    )}
                    <ul className='flex gap-4 mt-4 md:mt-8'>
                      <li>
                        <Link
                          href={slide.ctaLink || '/'}
                          className={`
                            flex items-center gap-3 px-4 py-3 rounded-full transition duration-300 hover:opacity-80 text-base md:text-lg
                            ${slide.colorScheme === 'primary' || slide.colorScheme === 'light'
                              ? 'bg-primary text-dark'
                              : 'bg-dark text-light'
                            }
                          `}
                        >
                          {slide.ctaText || 'Conocé más'}
                          <ArrowRight
                            size={16}
                            color='currentColor'
                          />
                        </Link>
                      </li>
                    </ul>
                    {/* Arrows and pagination */}
                    <ul className='flex items-center gap-2 mt-4 md:mt-12'>
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
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}

export default Slider;