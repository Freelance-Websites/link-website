import React from 'react';
import Image from 'next/image';

import Button from '@/components/Button';

export interface CardProps {
  title?: string;
  content?: string;
  icon?: string;
  ctaText?: string;
  ctaLink?: string;
  layout?: 'horizontal' | 'vertical';
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  icon,
  ctaText,
  ctaLink,
  layout
}) => {
  return (
    <div
      className={`
        bg-light rounded-lg
        px-4 md:px-6 py-6 md:py-8
        flex gap-4
        ${layout === 'horizontal'
          ? 'flex-col md:flex-row md:items-start'
          : 'flex-col'
        }
      `}
    >
      {icon && (
        <Image
          src={icon}
          alt={title || ''}
          width={120}
          height={120}
        />
      )}
      {(title || content || (ctaText && ctaLink)) &&
        <div className='flex flex-col gap-2'>
          {title &&
            <h3 className='text-xl font-bold text-dark'>{title}</h3>
          }
          {content &&
            <p className='font-serif text-dark'>{content}</p>
          }
          {ctaText && ctaLink && (
            <Button
              text={ctaText}
              link={ctaLink}
              colorScheme='primary'
              isLink
              isExternal={ctaLink.includes('http') || ctaLink.includes('www')}
            />
          )}
        </div>
      }
    </div>
  )
}

export default Card;