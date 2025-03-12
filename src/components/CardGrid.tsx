import React from 'react';

import Heading from '@/components/Heading';
import { ButtonProps } from '@/components/Button';
import Card, { CardProps } from '@/components/Card';

export interface CardGridProps {
  byline?: string;
  title?: string;
  description?: string;
  colorScheme?: 'primary' | 'light' | 'dark' | 'secondary';
  ctas?: ButtonProps[];
  cards: CardProps[];
  cardLayout?: 'horizontal' | 'vertical';
}

const CardGrid: React.FC<CardGridProps> = ({
  byline,
  title,
  description,
  colorScheme,
  ctas,
  cards,
  cardLayout
}) => {
  const cardCount = cards.length;
  const gridLayout = cardCount === 1 ? 'grid-cols-1' : cardCount < 4 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-3';

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
    >
      <div
        className={`
          container mx-auto
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
          {cards.map((card: CardProps, index: Number) => (
            <li
              key={`card-${index}`}
            >
              <Card
                layout={cardLayout || 'horizontal'}
                title={card.title}
                content={card.content}
                icon={card.icon}
                ctaText={card.ctaText}
                ctaLink={card.ctaLink}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  ) : null;
}

export default CardGrid;