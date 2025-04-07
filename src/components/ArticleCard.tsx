import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Button from '@/components/Button';

export interface ArticleProps {
  id: string;
  timestamp?: string;
  description?: string;
  hero?: {
    media?: string;
    title?: string;
    description?: string;
    colorScheme?: 'primary' | 'light' | 'secondary' | 'dark';
    mediaSize?: 'full' | 'boxed' | 'cover';
    ctas?: {
      text?: string;
      link?: string;
    }[];
  };
}

const ArticleCard: React.FC<ArticleProps> = ({
  id,
  timestamp,
  hero
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(hero?.ctas?.[0]?.link || '#')}
      className='relative group grid gap-4 content-start cursor-pointer'
    >
      <div
        className={`
          relative w-full h-64 md:h-80 rounded-xl
          ${hero?.colorScheme === 'primary'
            ? 'bg-primary'
            : hero?.colorScheme === 'secondary'
            ? 'bg-secondary'
            : hero?.colorScheme === 'dark'
            ? 'bg-dark'
            : 'bg-light'
          }
        `}
      >
        <Image
          src={hero?.media?.startsWith('/') ? hero?.media : `/${hero?.media}`}
          alt={hero?.title || ''}
          fill
          className={`
            w-full h-full group-hover:opacity-80 transition-opacity duration-300 rounded-xl
            ${hero?.mediaSize === 'full' ? 'object-cover' : 'object-contain'}
          `}
        />
      </div>
      <div className='grid gap-2'>
        {timestamp && (
          <p className={`
            text-lg font-serif italic
            text-dark
          `}
          >
            {new Date(timestamp).toLocaleDateString('en-GB').replace(/\//g, '/')}
          </p>
        )}
        <h3
          className={`
            text-xl md:text-2xl font-bold
            text-dark
          `}
        >
          {hero?.title}
        </h3>
        {hero?.description && (
            <p
            className={`
              font-serif
              text-dark
            `}
            >
            {hero?.description?.slice(0, 200)}
            </p>
        )}
        
        {hero?.ctas && hero?.ctas.length > 0 && (
          <Button
            text={hero?.ctas[0]?.text || 'Conocé más'}
            link={hero?.ctas[0]?.link || '#'}
            colorScheme='transparent'
            isLink
            showArrow={true}
          />
        )}
      </div>
    </div>
  )
}

export default ArticleCard;