import React from 'react';
import slugify from 'react-slugify';
import { useRouter } from 'next/router';

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
  referral?: string;
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
  const router = useRouter();
  const cardCount = cards.length;
  const isPlatforms = router.asPath.includes('plataformas-digitales') && !router.asPath.includes('home');

  const gridLayout = cardCount === 1
    ? 'grid-cols-1'
    : cardCount < 4 || isPlatforms
      ? 'grid-cols-1 md:grid-cols-2'
      : cardCount <= 4 && cardLayout === 'vertical' && !isPlatforms
        ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
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
      id={slugify(byline || title) || 'cards'}
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
                layout={cardLayout || 'horizontal'}
                title={card.title}
                content={card.content}
                icon={card.icon}
                ctaText={card.ctaText}
                ctaLink={card.ctaLink}
                features={card.features}
              />
            </li>
            ))}
        </ul>
      </div>
    </section>
  ) : null;
}

export default CardGrid;