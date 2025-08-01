import React, { useEffect, useRef } from 'react';
import slugify from 'react-slugify';

export interface PhraseProps {
  colorScheme: 'primary' | 'light' | 'dark' | 'secondary';
  phrase: string;
  title: string;
}

const Phrase: React.FC<PhraseProps> = ({
  colorScheme,
  phrase,
  title
}) => {
  const phraseRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const elements = Array.from(entry.target.querySelectorAll('.opacity-0'));
              elements.forEach((el, index) => {
                (el as HTMLElement).style.animationDelay = `${index * 0.05}s`;
                (el as HTMLElement).classList.add('animate-fade-in');
              });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
  
      if (phraseRef.current) {
        observer.observe(phraseRef.current);
      }
  
      return () => {
        if (phraseRef.current) {
          observer.unobserve(phraseRef.current);
        }
      };
    }, []);

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          .animate-fade-in {
            animation-name: fadeIn;
            animation-duration: .4s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: forwards;
          }
        `}
      </style>
      <section
        id={slugify(title)}
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
        <div className='container mx-auto px-4 py-8 lg:py-16 xl:py-24'>
          <h2
            className={`
              text-3xl md:text-5xl lg:text-6xl xl:text-7xl
              font-bold leading-none
              ${colorScheme === 'dark'
                ? 'text-primary'
                : colorScheme === 'light'
            ? 'text-dark'
            : 'text-dark'
              }
            `}
            ref={phraseRef}
          >
            {phrase.split(' ').map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block">
                {word.split('').map((char, charIndex) => (
                  <span
                    key={`${wordIndex}-${charIndex}`}
                    className="inline-block opacity-0"
                    style={{
                    animationDelay: `${(wordIndex * 0.5) + (charIndex * 0.05)}s`,
                    animationFillMode: 'forwards',
                    }}
                  >
                    {char}
                  </span>
                ))}
                <span className="inline-block">
                  &nbsp;
                </span>
              </span>
            ))}
          </h2>
        </div>
      </section>
    </>
  );
};

export default Phrase;