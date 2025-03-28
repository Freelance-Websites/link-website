import React, { ReactNode } from 'react';
import Head from 'next/head';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface MainProps {
  tabTitle: string;
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ 
  tabTitle = 'Link',
  children,
}) => {
  return (
    <>
      <Head>
        <title>
          {tabTitle}
        </title>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </Head>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Main;