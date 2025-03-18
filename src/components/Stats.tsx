import React from 'react';
import CountUp from 'react-countup';

import Heading from '@/components/Heading';

import { ButtonProps } from './Button';

export interface StatsProps {
  byline?: string;
  title?: string;
  description?: string;
  colorScheme: 'primary' | 'light' | 'dark' | 'secondary';
  ctas?: ButtonProps[];
  stats: StatProp[];
}

export interface StatProp {
  content: string;
  value: number;
}

const Stats: React.FC<StatsProps> = ({
  byline,
  title,
  description,
  colorScheme,
  ctas,
  stats
}) => {
  const statCount = stats.length;
  const gridLayout = statCount > 4 ? 'grid-cols-1 md:grid-cols-4' : `grid-cols-1 md:grid-cols-${statCount}`;

  return statCount ? (
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
      id={byline?.toLowerCase().replaceAll(' ', '-') || title?.toLowerCase().replaceAll(' ', '-')}
    >
      <div
        className={`
          container mx-auto
          px-4 md:px-0
          py-8 lg:py-16 xl:py-24
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
        <ul
          className={`
            grid gap-4
            ${gridLayout}
            py-4 lg:py-8 xl:py-12
          `}
        >
          {stats.map((stat: StatProp, index: number) => (
            <li
              key={`stat-${index}`}
              className='flex flex-col gap-2 md:gap-4'
            >
              <CountUp
                className={`
                  text-7xl lg:text-9xl
                  font-bold leading-none font-numbers
                  ${colorScheme === 'dark'
                    ? 'text-primary'
                    : colorScheme === 'light' || colorScheme === 'primary'
                      ? 'text-dark'
                      : 'text-dark'
                  }
                `}
                end={stat.value}
                enableScrollSpy={true}
              />
              <p
                className={`
                  md:text-lg
                  ${colorScheme === 'dark'
                    ? 'text-light'
                    : colorScheme === 'light' || colorScheme === 'primary' || colorScheme === 'secondary'
                      ? 'text-dark'
                      : 'text-light'
                  }
                `}
              >
                {stat.content}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  ) : null;
}

export default Stats;