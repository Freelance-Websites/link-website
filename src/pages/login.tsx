import React, { useEffect } from 'react';
import Head from 'next/head';

export default function Page() {
  useEffect(() => {
    netlifyIdentity.open();
  }, []);
  
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" async />
      </Head>
      {/* <main>
        <p>Login</p>
      </main> */}
    </>
  );
}
