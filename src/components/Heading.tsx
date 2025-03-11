import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface MainProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  colorScheme?: 'primary' | 'light' | 'dark';
  children?: React.ReactNode;
}

const Heading: React.FC<MainProps> = ({
  title,
  description,
  ctaText,
  ctaLink,
  colorScheme,
  children
}) => {
  return (
    <div className="flex flex-col justify-center gap-4">
      {title && (
        <h1
          className={`
            text-3xl md:text-4xl font-bold leading-none
            ${colorScheme === 'primary'
              ? 'text-primary'
              : colorScheme === 'light'
                ? 'text-dark'
                : 'text-dark'
            }
          `}
        >
          {title}
        </h1>
      )}
      {description && (
        <p
          className={`
            md:text-lg font-serif md:leading-none
            ${colorScheme === 'primary'
              ? 'text-light'
              : colorScheme === 'light'
                ? 'text-dark'
                : 'text-light'
            }
          `}
        >
          {description}
        </p>
      )}
      <ul className='flex gap-4 mt-4 md:mt-8'>
        <li>
          <Link
            href={ctaLink || '/'}
            className={`
              flex items-center gap-3 px-4 py-3 rounded-full transition duration-300 hover:opacity-80 text-base md:text-lg
              ${colorScheme === 'primary' || colorScheme === 'light'
                ? 'bg-primary text-dark'
                : 'bg-dark text-light'
              }
            `}
          >
            {ctaText || 'Conocé más'}
            <ArrowRight
              size={16}
              color='currentColor'
            />
          </Link>
        </li>
      </ul>
      {children}
    </div>
  )
}

export default Heading;