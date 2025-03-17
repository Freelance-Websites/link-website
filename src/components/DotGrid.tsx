import React, { useEffect, useRef } from "react";

interface MainProps {
  colorScheme?: 'primary' | 'light' | 'dark' | 'secondary';
}

const DotGrid: React.FC<MainProps> = ({
  colorScheme
}) => {
  const gridRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = Array.from(entry.target.querySelectorAll('.opacity-0'));
            const shuffledElements = shuffleArray(elements);
            shuffledElements.forEach((el, index) => {
              (el as HTMLElement).style.animationDelay = `${index * 0.0125}s`;
              (el as HTMLElement).classList.add('animate-fade-in');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, []);

  const shuffleArray = <T,>(array: T[]): T[] => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const indices = shuffleArray(Array.from({ length: 81 }, (_, index) => index));

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
      <ul ref={gridRef} className="grid grid-cols-9 grid-rows-9 gap-1 md:gap-4 aspect-square min-w-[120px] min-h-[120px] md:min-w-[230px] md:min-h-[230px]">
        {indices.map((index) => (
          <li
            key={index}
            className={`
              h-1 w-1 md:w-3 md:h-3 rounded-full opacity-0
              ${colorScheme === 'primary' || colorScheme === 'light'
                ? 'bg-primary'
                : 'bg-dark'
              }
            `}
          />
        ))}
      </ul>
    </>
  )
}

export default DotGrid;