import React from 'react';
import Link from 'next/link';

import { Linkedin, Youtube, Mail } from 'lucide-react';
import Image from 'next/image';

const Footer: React.FC = ({
}) => {
  return (
    <footer
      className={
        `
          py-4 md:py-8
          container mx-auto
        `
      }
    >
      <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
        <ul
          className='flex flex-col md:flex-row gap-4 items-center'
        >
          <li>
            <Link
              href='#top'
              className='transition duration-300 hover:opacity-80'
            >
              <Image
                src="/images/logo.svg"
                alt="Red Link Logo"
                width={42}
                height={42}
              />
            </Link>
          </li>
          <li
            className='text-dark'
          >
            <Link
              href='#quienes-somos'
              className={`
                transition duration-300 hover:opacity-80 text-sm
              `}
            >
              Sobre nosotros
            </Link>
          </li>
          <li
            className='text-dark'
          >
            <Link
              href='#servicios'
              className={`
                transition duration-300 hover:opacity-80 text-sm
              `}
            >
              Servicios
            </Link>
          </li>
          <li
            className='text-dark'
          >
            <Link
              href='#carreras'
              className={`
                transition duration-300 hover:opacity-80 text-sm
              `}
            >
              Carreras
            </Link>
          </li>
          <li
            className='text-dark'
          >
            <Link
              href='#top'
              className={`
                transition duration-300 hover:opacity-80 text-sm
              `}
            >
              Novedades
            </Link>
          </li>
        </ul>
        <ol
          className='flex gap-4 items-center justify-center flex-wrap md:flex-nowrap'
        >
          <li className='h-[40px]'>
            <a
              href="https://www.linkedin.com/company/red-link-s-a-"
              target="_blank"
              rel="noopener noreferrer"
              className='transition duration-300 hover:opacity-80 text-dark bg-primary p-2 rounded-full inline-block'
            >
              <Linkedin
                size={24}
              />
            </a>
          </li>
          <li className='h-[40px]'>
            <a
              href="https://www.youtube.com/@RedLinkArgentina"
              target="_blank"
              rel="noopener noreferrer"
              className='transition duration-300 hover:opacity-80 text-dark bg-primary p-2 rounded-full inline-block'
            >
              <Youtube
                size={24}
              />
            </a>
          </li>
          <li className='h-[40px]'>
            <a
              href="mailto:consultas@at.redlink.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className='transition duration-300 hover:opacity-80 text-dark bg-primary p-2 rounded-full inline-block'
            >
              <Mail
                size={24}
              />
            </a>
          </li>
          <li
            className='text-dark flex-[100%] md:flex-initial text-center'
          >
            <a
              className={`
                transition duration-300 hover:opacity-80 text-sm leading-none
              `}
              href="tel:08008885456"
            >
              0800-888-5456 (LINK)
            </a>
          </li>
        </ol>
      </div>
      <p className='text-dark text-sm mt-4 text-center md:text-left'>
        Copyright &copy; 2025 Red Link S.A. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;