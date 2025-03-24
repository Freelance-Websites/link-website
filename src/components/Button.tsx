import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface ButtonProps {
  text?: string;
  link?: string;
  colorScheme?: 'primary' | 'light' | 'dark' | 'secondary' | 'transparent';
  isLink?: boolean;
  isExternal?: boolean;
  action?: () => void;
  isAboveImage?: boolean;
  showArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  link,
  colorScheme,
  isLink,
  isExternal,
  isAboveImage,
  action,
  showArrow = true
}) => {
  const defaultStyles = `
    flex items-center gap-3 px-4 py-3 rounded-full transition duration-300 hover:opacity-80 text-base md:text-lg
    ${colorScheme === 'primary' && isAboveImage || colorScheme === 'light' || colorScheme === 'dark' && !isAboveImage
      ? 'bg-primary text-dark'
      : colorScheme === 'transparent'
        ? 'bg-transparent text-dark'
        : 'bg-dark text-light'
    }
  `;
  return (
    isLink && !isExternal
      ?  <Link
        href={link || '/'}
        className={defaultStyles}
      >
        {text || 'Conocé más'}
        {showArrow &&
          <ArrowRight
            size={16}
            color='currentColor'
          />
        }
      </Link>
      : isLink && isExternal
        ? <a
          href={link || '#'}
          target='_blank'
          rel='noopener noreferrer'
          className={defaultStyles}
        >
          {text || 'Conocé más'}
          <ArrowRight
            size={16}
            color='currentColor'
          />
        </a>
        : <button
          className={defaultStyles}
          onClick={action}
        >
          {text || 'Conocé más'}
          <ArrowRight
            size={16}
            color='currentColor'
          />
        </button>
  )
}

export default Button;