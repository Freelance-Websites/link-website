import React, { useEffect } from 'react';
import Head from 'next/head';

export default function Page() {
  useEffect(() => {
    // @ts-expect-error: Suppressing TypeScript error for netlifyIdentity as its type definitions are not available
    netlifyIdentity.open();
    // @ts-expect-error: Suppressing TypeScript error for netlifyIdentity as its type definitions are not available
    netlifyIdentity.on('login', window.location.replace('/admin'));
  }, []);
  
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" async />
      </Head>
    </>
  );
}
