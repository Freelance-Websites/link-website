import React from 'react';
import Marquee from "react-fast-marquee";

import Heading from '@/components/Heading';
import { ButtonProps } from '@/components/Button';
import Image from 'next/image';

export interface LogosProp {
  logo: string;
  content?: string;
}

interface LogoStripProp {
  byline?: string;
  title?: string;
  description?: string;
  colorScheme?: 'primary' | 'light' | 'dark' | 'secondary';
  logos: LogosProp[];
  ctas?: ButtonProps[];
}

const LogoStrip: React.FC<LogoStripProp> = ({
  byline,
  title,
  description,
  colorScheme = 'primary',
  logos,
  ctas
}) => {
  return (
    <section
      className={`
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
          container mx-auto
          px-4
          py-8 lg:py-16 xl:py-24
          text-center
        `}
      >
        <Heading
          title={title}
          titleHierarchy='h2'
          description={description}
          ctas={ctas}
          colorScheme={colorScheme}
          byline={byline}
        />
        <Marquee
          className={`
            py-4 lg:py-8 xl:py-12
            max-w-2xl mx-auto mix-blend-multiply
          `}
          gradient={true}
          autoFill={true}
        >
          {logos.map((logo: LogosProp, index: number) => (
            <div
              key={`stat-${index}`}
              className='mx-4 md:mx-8'
            >
              <Image
                src={logo.logo}
                alt={logo.content || 'Logo'}
                width={90}
                height={90}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default LogoStrip;