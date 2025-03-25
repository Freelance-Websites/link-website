import React from 'react';
import Image from 'next/image';

import Button from '@/components/Button';

export interface CardProps {
  title?: string;
  content?: string;
  icon?: string;
  ctaText?: string;
  ctaLink?: string;
  layout?: 'horizontal' | 'vertical' | 'list';
  features?: [{
    title?: string;
    text: string;
    icon?: string;
  }]
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  icon,
  ctaText,
  ctaLink,
  layout,
  features
}) => {
  return (
    <div
      className={`
        bg-light rounded-lg
        h-full
        px-4 md:px-6 py-6 md:py-8
        flex gap-4
        ${layout === 'horizontal'
          ? 'flex-col md:flex-row md:items-start'
          : 'flex-col'
        }
      `}
    >
      {layout === 'list' &&
        <div className='flex flex-col md:flex-row md:items-center gap-4'>
          {icon &&
            <Image
              src={icon}
              alt={title || ''}
              width={52}
              height={52}
            />
          }
          {title &&
            <h3 className='text-xl md:text-2xl font-bold text-dark'>{title}</h3>
          }
        </div>
      }
      {icon && layout !== 'list' && (
        <Image
          src={icon}
          alt={title || ''}
          width={layout === 'vertical' ? 90 : 120}
          height={layout === 'vertical' ? 90 : 120}
        />
      )}
      {features &&
        <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:mt-6'>
          {features.map((feature, index) => (
            <li key={`feature-${index}`}>
              <div className='flex gap-3 items-start'>
                {feature.icon &&
                  <Image
                    src={feature.icon}
                    alt={feature.title || ''}
                    width={42}
                    height={42}
                  />
                }
                <div className='flex flex-col'>
                  {feature.title &&
                    <h4 className='text-lg font-bold text-dark'>{feature.title}</h4>
                  }
                  <p className='font-serif text-dark'>{feature.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      }
      {(title || content || (ctaText && ctaLink)) &&
        <div className='flex flex-col gap-2'>
          {title && layout !== 'list' &&
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