import React, { ReactNode } from 'react';
import Head from 'next/head';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface MainProps {
  tabTitle: string;
  children: ReactNode;
  shouldPreventScroll?: boolean;
}

const Main: React.FC<MainProps> = ({ 
  tabTitle = 'Link',
  children,
  shouldPreventScroll
}) => {
  return (
    <>
      <Head>
        <title>
          {tabTitle}
        </title>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" async />
      </Head>
      <main
        className={`flex flex-col h-screen ${shouldPreventScroll ? 'overflow-hidden' : 'overflow-auto'}`}
      >
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Main;