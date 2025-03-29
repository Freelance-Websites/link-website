import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import Heading from '@/components/Heading';
import { ButtonProps } from '@/components/Button';

export interface TestimonialsProp {
  byline?: string;
  title?: string;
  description?: string;
  testimonials: TestimonialProp[];
  decorations?: boolean;
  colorScheme?: 'primary' | 'light' | 'dark' | 'secondary';
  ctas?: ButtonProps[];
}

export interface TestimonialProp {
  phrase: string;
  avatar?: string;
  name?: string;
  role?: string;
}

const Testimonials: React.FC<TestimonialsProp> = ({
  byline,
  title,
  description,
  ctas,
  testimonials,
  decorations,
  colorScheme = 'primary'
}) => {
  const quoteRef = useRef<SVGSVGElement>(null);
  const splideRef = React.useRef<{ splide: { go: (direction: string) => void } } | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );
    if (quoteRef.current) {
      observer.observe(quoteRef.current);
    }

    return () => {
      if (quoteRef.current) {
        observer.unobserve(quoteRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`
        py-8 lg:py-16 xl:py-24
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
      <div
        className={`
          container mx-auto relative
          px-4 md:px-0
        `}
      >
        {decorations &&
          <svg
            width="197"
            height="137"
            viewBox="0 0 197 137"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`
              opacity-0 transition-opacity duration-1000
              w-24 md:w-auto
              ${colorScheme === 'primary'
                ? 'text-dark'
                : colorScheme === 'light'
                  ? 'text-primary'
                  : colorScheme === 'secondary'
                    ? 'text-dark'
                    : 'text-light'
              }
            `}
            ref={quoteRef}
          >
            <path
              d="M115.317 66.1379L120.122 51.9655L158.561 4.72413L168.171 0H197V9.44829L168.171 56.6896V61.4138L172.976 66.1379H187.39L192.195 70.8621V132.276L187.39 137H120.122L115.317 132.276V66.1379ZM0 66.1379L4.80488 51.9655L43.2439 4.72413L52.8537 0H81.6829V9.44829L52.8537 56.6896V61.4138L57.6585 66.1379H72.0732L76.8781 70.8621V132.276L72.0732 137H4.80488L0 132.276V66.1379Z"
              fill="currentColor"
            />
          </svg>
        }
        <div
          className={`
            grid grid-cols-1 md:grid-cols-2
            gap-4 md:gap-16 lg:gap-24
            mt-0 md:mt-12 lg:mt-16
          `}
        >
          {title &&
            <Heading
              byline={byline}
              title={title}
              description={description}
              ctas={ctas}
              titleHierarchy='h2'
              colorScheme={colorScheme}
            />
          }
            <Splide
            options={{
              type: 'loop',
              perPage: 1,
              arrows: false,
              pagination: false,
              height: 'auto',
              autoplay: true,
              interval: 6000
            }}
            ref={splideRef}
            aria-label="Testimonial Slider"
            className="flex items-start md:items-end"
            >
            {testimonials.map((testimonial, index) => (
              <SplideSlide
              key={index}
              className="flex flex-col justify-start md:justify-end"
              >
              <blockquote
              className={`
              text-lg md:text-xl font-serif italic
              ${colorScheme === 'primary'
                ? 'text-dark'
                : colorScheme === 'dark'
                ? 'text-light'
                : 'text-dark'
              }
              `}
              >
              {testimonial.phrase}
              </blockquote>
              {(testimonial.name || testimonial.role) &&
              <div className='flex items-center gap-4 mt-4 md:mt-8'>
              {testimonial.avatar &&
                <Image
                src={testimonial.avatar}
                alt={testimonial.name || 'Avatar'}
                width={52}
                height={52 }
                className='rounded-full'
                />
              }
              <div className='flex flex-col'>
                {testimonial.name &&
                <span
                className={`
                text-lg md:text-xl font-bold
                ${colorScheme === 'primary'
                  ? 'text-dark'
                  : colorScheme === 'dark'
                  ? 'text-light'
                  : 'text-dark'
                }
                `}
                >
                {testimonial.name}
                </span>
                }
                {testimonial.role &&
                <span
                className={`
                text-base md:text-lg font-serif italic
                ${colorScheme === 'primary'
                  ? 'text-dark'
                  : colorScheme === 'dark'
                  ? 'text-light'
                  : 'text-dark'
                }
                `}
                >
                {testimonial.role}
                </span>
                }
              </div>
              </div>
              }
              <ul
              className={`
              flex items-center gap-2 w-full mt-4 md:mt-8
              ${colorScheme === 'primary'
                ? 'text-dark'
                : colorScheme === 'dark'
                ? 'text-light'
                : 'text-dark'
              }
              `}
              >
              <li className="flex items-center">
              <button
                className="transition duration-300 hover:opacity-80"
                onClick={() => splideRef.current?.splide.go('-1')}
              >
                <ArrowLeft />
              </button>
              </li>
              <li>
              <span className="md:text-lg leading-none">
                {testimonials.findIndex(slide => slide === testimonials[index]) + 1} / {testimonials.length}
              </span>
              </li>
              <li className="flex items-center">
              <button
                className="transition duration-300 hover:opacity-80"
                onClick={() => splideRef.current?.splide.go('+1')}
              >
                <ArrowRight />
              </button>
              </li>
              </ul>
              </SplideSlide>
            ))}
            </Splide>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;