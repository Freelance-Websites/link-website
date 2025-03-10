import React, { ReactNode } from 'react';
import Head from 'next/head';

import Header from './Header';

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
      </Head>
      <main>
        <Header />
        {children}
      </main>
    </>
  );
};

export default Main;