import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
  const isExternal = ctaLink && (ctaLink.startsWith('http://') || ctaLink.startsWith('https://') || ctaLink.startsWith('www'));
  const isLink = ctaLink && (ctaLink.startsWith('/') || ctaLink.startsWith('#'));

  const children = <div
    className={`
      bg-light rounded-lg
      h-full
      group
      transition ease-in-out duration-300
      px-4 md:px-6 py-6 md:py-8
      flex gap-4
      ${layout === 'horizontal'
        ? 'flex-col md:flex-row md:items-start'
        : 'flex-col'
      }
    `}
  >
    {layout === 'list' &&
      <div className='flex flex-col md:flex-row md:items-center gap-4 group-hover:opacity-80'>
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
        className='group-hover:opacity-80'
      />
    )}
    {features &&
      <ul
        className={`
          grid grid-cols-1 gap-4
          ${layout === 'list' ? 'mt-4 md:mt-6 md:grid-cols-2' : 'order-last'}
        `}
      >
        {features.map((feature, index) => (
          <li key={`feature-${index}`}>
            <div className='flex gap-3 items-start'>
              {feature.icon &&
                <Image
                  src={feature.icon}
                  alt={feature.title || ''}
                  width={layout === 'list' ? 42 : 21}
                  height={layout === 'list' ? 42 : 21}
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
      </div>
    }
    {ctaText && ctaLink &&
      <div className='mt-4 inline order-last'>
        <Button
          text={ctaText}
          link={ctaLink}
          colorScheme='primary'
          isExternal={isExternal || false}
          isLink={isLink || false}
        />
      </div>
    }
  </div>

  return (
    <>
      {isExternal ? (
        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : isLink ? (
        <Link
          href={ctaLink}
        >
          {children}
        </Link>
      ) : children
      }
    </>
  )
}

export default Card;