import React from 'react';
import slugify from 'react-slugify';

import Heading from '@/components/Heading';
import ArticleCard from '@/components/ArticleCard';

export interface RelatedArticlesProps {
  articles: ArticleProps[];
  colorScheme?: 'primary' | 'light' | 'secondary' | 'dark';
  title?: string;
}

export interface ArticleProps {
  id: string;
  timestamp?: string;
  description?: string;
  hero?: {
    media?: string;
    title?: string;
    description?: string;
    colorScheme?: 'primary' | 'light' | 'secondary' | 'dark';
    ctas?: {
      text?: string;
      link?: string;
    }[];
  };
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({
  articles,
  colorScheme = 'primary',
  title = 'Artículos relacionados',
}) => {
  const articleCount = articles.length;

  const gridLayout = articleCount === 1
    ? 'grid-cols-1'
    : articleCount < 3
      ? 'grid-cols-1 md:grid-cols-2'
      : 'grid-cols-1 md:grid-cols-3';

  return articleCount ? (
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
      id={slugify(title) || 'articulos-relacionados'}
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
            colorScheme={colorScheme}
          />
        </div>
        <ul
          className={`
            grid gap-8 md:gap-4
            ${gridLayout}
            py-4 lg:py-8 xl:py-12
          `}
        >
            {articles.map((article: ArticleProps, index: number) => (
              <ArticleCard 
                key={index}
                {...article}
              />
            ))}
        </ul>
      </div>
    </section>
  ) : null;
}

export default RelatedArticles;