import React from 'react';
import slugify from 'react-slugify';

import Heading from '@/components/Heading';
import Card, { CardProps } from '@/components/Card';
import { CardGridProps } from '@/components/CardGrid';

const Features: React.FC<CardGridProps> = ({
  byline,
  title,
  description,
  colorScheme,
  ctas,
  cards
}) => {
  const cardCount = cards.length;
  const gridLayout = cardCount === 1
    ? 'grid-cols-1'
    : cardCount < 4
      ? 'grid-cols-1 md:grid-cols-2'
      : 'grid-cols-1 md:grid-cols-3';

  return cardCount ? (
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
      id={slugify(byline || title)}
    >
      <div
        className={`
          container mx-auto
          px-4 md:px-0
          py-8 lg:py-16 xl:py-24
        `}
      >
        <div className='md:max-w-2xl'>
          <Heading
            title={title}
            titleHierarchy='h2'
            description={description}
            ctas={ctas}
            colorScheme={colorScheme}
            byline={byline}
          />
        </div>
        <ul
          className={`
            grid gap-4
            ${gridLayout}
            py-4 lg:py-8 xl:py-12
          `}
        >
            {cards.map((card: CardProps, index: number) => (
            <li
              key={`card-${index}`}
              className="opacity-0 transition-opacity duration-1000"
              ref={(el) => {
              if (el) {
                const observer = new IntersectionObserver(
                ([entry]) => {
                  if (entry.isIntersecting) {
                  el.classList.add('opacity-100');
                  observer.unobserve(el);
                  }
                },
                { threshold: 0.1 }
                );
                observer.observe(el);
              }
              }}
            >
              <Card
                title={card.title}
                content={card.content}
                icon={card.icon}
                ctaText={card.ctaText}
                ctaLink={card.ctaLink}
                layout='list'
                features={card.features}
              />
            </li>
            ))}
        </ul>
      </div>
    </section>
  ) : null;
}

export default Features;