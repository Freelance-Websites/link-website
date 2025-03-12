import React from 'react';
import Link from 'next/link';

import { Linkedin, Youtube, Mail } from 'lucide-react';

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
              href='/'
              className='transition duration-300 hover:opacity-80'
            >
              <svg
                fill="inherit"
                height="42"
                viewBox="0 0 42 42"
                width="42"
                xmlns="http://www.w3.org/2000/svg"
              >
                <clipPath id="a">
                  <path d="m0 0h42v42h-42z" />
                </clipPath>
                <g clipPath="url(#a)">
                  <path
                    d="m40.2684 12.7998c-1.0556-2.496-2.5666-4.73707-4.4907-6.66127-1.9242-1.9242-4.1654-3.43507-6.6614-4.49073-2.5849-1.093382-5.3297-1.64780763-8.1583-1.64780763s-5.5733.55442563-8.1583 1.64780763c-2.4959 1.05566-4.7371 2.56653-6.6613 4.49073-1.92408 1.9242-3.43507 4.16527-4.49073 6.66127-1.093386 2.5849-1.64768526 5.3297-1.64768526 8.1583s.55429926 5.5734 1.64768526 8.1585c1.05566 2.4958 2.56665 4.7369 4.49073 6.6611 1.9242 1.9242 4.1654 3.4351 6.6613 4.4907 2.585 1.0934 5.3297 1.6478 8.1583 1.6478s5.5734-.5544 8.1583-1.6478c2.496-1.0556 4.7372-2.5665 6.6614-4.4907 1.9241-1.9242 3.4351-4.1653 4.4907-6.6611 1.0934-2.5851 1.6477-5.3299 1.6477-8.1585s-.5543-5.5734-1.6477-8.1583z"
                    className='fill-logo'
                  />
                  <path d="m10.5914 27.3728.1832-.1832v-12.4623l-.1832-.1834h-2.19922l-.18321.1834v12.4623l.18321.1832zm8.2517 0 .1833-.1832v-4.5818c0-.8307.174-1.4355.5222-1.8143.3483-.3786.8459-.5682 1.4936-.5682.5499 0 .9316.1589 1.1455.4765.2136.3179.3208.7088.3208 1.173v5.3148l.1832.1832h2.1992l.1833-.1832v-5.4981c0-1.0997-.3055-1.9853-.9163-2.6573-.6111-.6719-1.4662-1.008-2.5658-1.008-.3179 0-.6048.0305-.8613.0915-.2567.0614-.4829.1375-.6782.2291-.1955.0916-.3637.1925-.504.3024-.1406.11-.2536.2079-.339.2933h-.1832l-.1833-.5499-.1833-.1832h-2.016l-.1832.1832v8.797l.1832.1832zm-4.1201 0 .1833-.1832v-8.797l-.1833-.1832h-2.1992l-.1832.1832v8.797l.1832.1832zm14.1182 0 .1832-.1832v-1.2829l.1833-.3666 1.0996-1.0995h.1832l2.5657 2.749.3666.1832h1.0997l.1832-.1832v-1.8328l-2.3826-2.749v-.1833l2.1994-2.1992v-1.8327l-.1834-.1832h-1.0996l-.3665.1832-3.6653 3.6653h-.1833v-7.3306l-.1832-.1834h-2.1993l-.1833.1834v12.4623l.1833.1832zm-16.3174-10.6295-.1832-.1834v-1.8326l.1832-.1834h2.1992l.1833.1834v1.8326l-.1833.1834z"
                    className='fill-light'
                  />
                </g>
              </svg>
            </Link>
          </li>
          <li
            className='text-dark'
          >
            <Link
              href='/sobre-nosotros'
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
              href='/servicios'
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
              href='/carreras'
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
              href='/novedades'
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