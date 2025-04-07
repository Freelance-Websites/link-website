import React, { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';

import Button, { ButtonProps } from '@/components/Button';
import { CheckCircle2 } from 'lucide-react';

interface MainProps {
  title?: string;
  description?: string;
  ctas?: ButtonProps[];
  colorScheme?: 'primary' | 'light' | 'dark' | 'secondary';
  children?: React.ReactNode;
  isAboveImage?: boolean;
  byline?: string;
  bullets?: BulletProps[];
  titleHierarchy?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export interface BulletProps {
  content: string;
  title?: string;
}

const Heading: React.FC<MainProps> = ({
  title,
  titleHierarchy,
  description,
  ctas,
  colorScheme,
  children,
  isAboveImage,
  byline,
  bullets
}) => {
  const listRef = useRef<HTMLUListElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = Array.from(entry.target.querySelectorAll('.opacity-0'));
            elements.forEach((el, index) => {
              (el as HTMLElement).style.animationDelay = `${index * 0.0125}s`;
              (el as HTMLElement).classList.remove('opacity-0');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (listRef.current) {
      observer.observe(listRef.current);
    }

    return () => {
      if (listRef.current) {
        observer.unobserve(listRef.current);
      }
    };
  }, []);

  const createTitle = (titleHierarchy: string | undefined) => {
    const baseClasses = `
      font-bold leading-none
      ${isAboveImage ? 'drop-shadow-md' : ''}
      ${colorScheme === 'primary' && isAboveImage || colorScheme === 'dark'
        ? 'text-primary'
        : colorScheme === 'light'
          ? 'text-dark'
          : 'text-dark'
      }
    `

    switch (titleHierarchy) {
      case 'h1':
        return <h1
          className={`${baseClasses} text-3xl md:text-5xl`}
        >
          {title}
        </h1>
      case 'h2':
        return <h2
        className={`${baseClasses} text-2xl md:text-4xl`}
        >
          {title}
        </h2>
      case 'h3':
        return <h3
        className={`${baseClasses} text-2xl md:text-3xl`}
        >
          {title}
        </h3>
      case 'h4':
        return <h4
        className={`${baseClasses} text-xl md:text-2xl`}
        >
          {title}
        </h4>
      case 'h5':
        return <h5
        className={`${baseClasses} text-lg md:text-xl`}
        >
          {title}
        </h5>
      case 'h6':
        return <h6
        className={`${baseClasses} text-base md:text-lg`}
        >
          {title}
        </h6>
      default:
        return <h1
          className={`${baseClasses} text-3xl md:text-5xl`}
        >
          {title}
        </h1>
    }
  }
  
  return (
    <div
      className={`
        flex flex-col justify-center
        ${titleHierarchy === 'h1'
          ? 'gap-4'
          : 'gap-2'
        }
      `}
    >
      {byline && (
        <span
          className={`
            italic font-serif md:text-lg
            ${isAboveImage ? 'drop-shadow-sm' : ''}
            ${colorScheme === 'primary' && !isAboveImage
              ? 'text-dark'
              : colorScheme === 'light'
                ? 'text-dark'
                : colorScheme === 'dark' || colorScheme === 'primary' && isAboveImage
                  ? 'text-light'
                  : 'text-dark'
            }
          `}
        >
          {byline}
        </span>
      )}
      {title && createTitle(titleHierarchy)}
      {description && (
        <div
          className={`
            grid gap-4
            rich-text
            md:text-lg font-serif
            ${isAboveImage ? 'drop-shadow-sm' : ''}
            ${colorScheme === 'primary' && isAboveImage || colorScheme === 'dark'
              ? 'text-light'
              : colorScheme === 'light' && !isAboveImage || colorScheme === 'primary' && !isAboveImage || colorScheme === 'secondary'
                ? 'text-dark'
                : 'text-light'
            }
          `}
        >
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
      )}
      {bullets && (
        <ul className='mt-2 md:mt-4 flex flex-col gap-2 md:gap-4' ref={listRef}>
          {bullets?.map((bullet, index) => (
            <li
              key={index}
              className='mb-1 flex gap-1 opacity-0 transition-opacity duration-1000'
            >
              <div
                className={`
                  flex items-center justify-center w-6 h-6 mr-2
                  ${colorScheme === 'primary' || colorScheme === 'light'
                    ? 'text-dark'
                    : colorScheme === 'dark'
                      ? 'text-primary'
                      : 'text-light'
                  }
                `}
              >
                <CheckCircle2 />
              </div>
              <div className='flex flex-col gap-1'>
                {bullet.title &&
                  <h4
                    className={`
                      md:text-lg font-sans font-bold
                      ${isAboveImage ? 'drop-shadow-sm' : ''}
                      ${colorScheme === 'primary' && isAboveImage
                        ? 'text-primary'
                        : colorScheme === 'light'
                          ? 'text-dark'
                          : colorScheme === 'dark'
                            ? 'text-light'
                            : 'text-dark'
                      }
                    `}
                  >
                    {bullet.title}
                  </h4>
                }
                <div
                  className={`
                    md:text-lg font-serif rich-text
                    ${isAboveImage ? 'drop-shadow-sm' : ''}
                    ${colorScheme === 'primary' && isAboveImage || colorScheme === 'dark'
                      ? 'text-light'
                      : colorScheme === 'light' && !isAboveImage || colorScheme === 'primary' && !isAboveImage || colorScheme === 'secondary'
                        ? 'text-dark'
                        : 'text-light'
                    }
                  `}
                >
                  <ReactMarkdown>{bullet.content}</ReactMarkdown>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {ctas && ctas.length > 0 &&
        <ul className='flex items-center gap-4 mt-4 md:mt-8'>
          {ctas.map((cta, index) => {
            const isLink = cta.link?.startsWith('http') || cta.link?.startsWith('#') || cta.link?.startsWith('/') || cta.link?.startsWith('www');
            const isExternal = cta.link?.startsWith('http') || cta.link?.startsWith('www');

            return (
              <li key={index}>
                <Button
                  text={cta.text}
                  link={cta.link}
                  isLink={isLink}
                  isExternal={isExternal}
                  colorScheme={
                    index === 0 && !isAboveImage ? colorScheme
                    : index === 0 && isAboveImage ? 'primary'
                    : 'transparent'

                  }
                  isAboveImage={isAboveImage}
                  showArrow={index === 0}
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