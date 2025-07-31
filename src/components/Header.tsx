import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header: React.FC = ({
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();
  const active = router.asPath.split('/')[1];

  useEffect(() => {
    if (active === 'carreras' || active === 'servicios' || active === 'novedades') {
      setIsScrolled(true);
    }

    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsScrolled(true);
      } else if (window.scrollY < 600 && active !== 'carreras' && active !== 'servicios' && active !== 'novedades') {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [active]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
      setIsMobile(true);
      } else {
      setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  return (
    <header
      id='top'
      className={
        `
          ${active === 'carreras' ? 'sticky' : 'fixed'} top-0 left-0 w-full z-50 transition-all duration-300 py-4
          ${isScrolled || isMenuOpen ? 'bg-light border-b border-b-gray-300' : 'bg-transparent'}
        `
      }
    >
      <div
        className='flex items-center justify-between container mx-auto px-4'
      >
        <Link
          href='/'
          className='transition duration-300 hover:opacity-80'
        >
          <Image
            src="/images/logo.svg"
            alt="Red Link Logo"
            width={42}
            height={42}
          />
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='block md:hidden transition duration-300 hover:opacity-80'
        >
          <svg
            fill="inherit"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              className={isScrolled || isMenuOpen ? 'stroke-dark' : 'stroke-light'}
            />
          </svg>
        </button>
        <ul
          className={`
            gap-6
            ${isMobile
              ? `flex-col justify-center fixed top-0 left-0 w-full h-screen bg-light ${isMenuOpen ? 'flex' : 'hidden'}`
              : 'flex'
            }
          `}
        >
          <li className='block md:hidden absolute top-6 right-6'>
            <button
              onClick={() => setIsMenuOpen(false)}
              className='transition duration-300 hover:opacity-80'
            >
              <svg
                fill="inherit"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  className={isScrolled || isMobile ? 'stroke-dark' : 'stroke-light'}
                />
              </svg>
            </button>
          </li>
          <li
            className={isScrolled || isMobile ? 'text-dark text-center' : 'text-light'}
          >
            <Link
              href='/quienes-somos'
              className={`
                transition duration-300 hover:opacity-80
                ${active === 'quienes-somos' ? 'underline' : ''}
              `}
            >
              Qui&eacute;nes somos
            </Link>
          </li>
            <li
            className={isScrolled || isMobile ? 'text-dark text-center relative group' : 'text-light text-center relative group'}
            >
            <span
              className={`
              transition duration-300 hover:opacity-80 cursor-pointer
              ${active === 'servicios' ? 'underline' : ''}
              `}
            >
              Servicios
            </span>
            <ul
              className='md:absolute left-0 w-full md:w-52 top-full bg-light md:shadow-lg rounded-md p-2 hidden group-hover:block text-dark md:text-left'
            >
              <li className='py-1 px-4 hover:bg-gray-200'>
                <Link href='/servicios/soluciones-de-pago' className='block'>
                  Soluciones de pago
                </Link>
              </li>
              <li className='py-1 px-4 hover:bg-gray-200'>
                <Link href='/servicios/soluciones-de-cobro' className='block'>
                  Soluciones de cobro
                </Link>
              </li>
              <li className='py-1 px-4 hover:bg-gray-200'>
                <Link href='/servicios/banking-as-a-service' className='block'>
                  Banking as a Service
                </Link>
              </li>
              <li className='py-1 px-4 hover:bg-gray-200'>
                <Link href='/servicios/api-banco' className='block'>
                  API banco
                </Link>
              </li>
              <li className='py-1 px-4 hover:bg-gray-200'>
                <Link href='/servicios/plataformas-digitales' className='block'>
                  Plataformas digitales
                </Link>
              </li>
              <li className='py-1 px-4 hover:bg-gray-200'>
                <Link href='/servicios/atm' className='block'>
                  ATM
                </Link>
              </li>
              <li className='py-1 px-4 hover:bg-gray-200'>
                <Link href='/servicios/seguridad' className='block'>
                  Seguridad
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={isScrolled || isMobile ? 'text-dark text-center' : 'text-light'}
          >
            <Link
              href='/carreras'
              className={`
                transition duration-300 hover:opacity-80
                ${active === 'carreras' ? 'underline' : ''}
              `}
            >
              Carreras
            </Link>
          </li>
          <li
            className={isScrolled || isMobile ? 'text-dark text-center' : 'text-light'}
          >
            <Link
              href='/novedades'
              className={`
                transition duration-300 hover:opacity-80
                ${active === 'novedades' ? 'underline' : ''}
              `}
            >
              Novedades
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;