import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface ButtonProps {
  text?: string;
  link?: string;
  colorScheme?: 'primary' | 'light' | 'dark';
  isLink?: boolean;
  isExternal?: boolean;
  action?: () => void;
  isAboveImage?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  link,
  colorScheme,
  isLink,
  isExternal,
  isAboveImage,
  action
}) => {
  const defaultStyles = `
    flex items-center gap-3 px-4 py-3 rounded-full transition duration-300 hover:opacity-80 text-base md:text-lg
    ${colorScheme === 'primary' && isAboveImage || colorScheme === 'light'
      ? 'bg-primary text-dark'
      : 'bg-dark text-light'
    }
  `;
  return (
    isLink
      ?  <Link
        href={link || '/'}
        className={defaultStyles}
      >
        {text || 'Conocé más'}
        <ArrowRight
          size={16}
          color='currentColor'
        />
      </Link>
      : isExternal
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