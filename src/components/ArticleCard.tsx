import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/Button';

export interface CardProps {
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

const ArticleCard: React.FC<CardProps> = ({
  id,
  timestamp,
  hero
}) => {
  return (
    <Link
      href={hero?.ctas?.[0]?.link || '#'}
      className='group grid gap-4'
    >
      <div className='relative aspect-video w-full h-auto'>
        <Image
          src={hero?.media?.startsWith('/') ? hero?.media : `/${hero?.media}`}
          alt={hero?.title || ''}
          fill
          className="w-full h-auto object-cover rounded-lg group-hover:opacity-80 transition-opacity duration-300"
        />
      </div>
      <div className='grid gap-2'>
        {timestamp && (
          <p className={`
            text-lg
            ${hero?.colorScheme === 'dark' ? 'text-light' : 'text-dark'}
          `}
          >
            {new Date(timestamp).toLocaleDateString('en-GB').replace(/\//g, '/')}
          </p>
        )}
        <h3
          className={`
            text-xl md:text-2xl font-bold
            ${hero?.colorScheme === 'dark' ? 'text-light' : 'text-dark'}
          `}
        >
          {hero?.title}
        </h3>
        {hero?.description && (
            <p
            className={`
              font-serif
              ${hero?.colorScheme === 'dark' ? 'text-light' : 'text-dark'}
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
    </Link>
  )
}

export default ArticleCard;