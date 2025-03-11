import React from 'react';

import Button, { ButtonProps } from './Button';

interface MainProps {
  title?: string;
  description?: string;
  ctas?: ButtonProps[];
  colorScheme?: 'primary' | 'light' | 'dark' | 'secondary';
  children?: React.ReactNode;
  isAboveImage?: boolean;
  byline?: string;
}

const Heading: React.FC<MainProps> = ({
  title,
  description,
  ctas,
  colorScheme,
  children,
  isAboveImage,
  byline
}) => {
  return (
    <div className="flex flex-col justify-center gap-4">
      {byline && (
        <span
          className={`
            italic font-serif md:text-lg
            ${colorScheme === 'primary' && isAboveImage || colorScheme === 'dark'
              ? 'text-primary'
              : colorScheme === 'light'
                ? 'text-dark'
                : 'text-dark'
            }
          `}
        >
          {byline}
        </span>
      )}
      {title && (
        <h1
          className={`
            text-3xl md:text-4xl font-bold leading-none
            ${colorScheme === 'primary' && isAboveImage || colorScheme === 'dark'
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
            ${colorScheme === 'primary' && isAboveImage || colorScheme === 'dark'
              ? 'text-light'
              : colorScheme === 'light' && !isAboveImage || colorScheme === 'primary' && !isAboveImage || colorScheme === 'secondary'
                ? 'text-dark'
                : 'text-light'
            }
          `}
        >
          {description}
        </p>
      )}
      {ctas &&
        <ul className='flex gap-4 mt-4 md:mt-8'>
          {ctas?.map((cta, index) => {
            const isLink = cta.link?.startsWith('http') || cta.link?.startsWith('#') || cta.link?.startsWith('/') || cta.link?.startsWith('www');
            const isExternal = cta.link?.startsWith('http') || cta.link?.startsWith('www');

            return (
              <li key={index}>
                <Button
                  text={cta.text}
                  link={cta.link}
                  isLink={isLink}
                  isExternal={isExternal}
                  colorScheme={colorScheme}
                  isAboveImage={isAboveImage}
                />
              </li>
            )
          })}
        </ul>
      }
      {children && children}
    </div>
  )
}

export default Heading;