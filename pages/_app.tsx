import type { AppProps } from 'next/app';
import Head from 'next/head';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import '../styles/globals.css';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>

      <Head>

        {/* Primary Font — Plus Jakarta Sans */}
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Secondary Font — Manrope */}
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Tertiary Font — Inter */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />

      </Head>

      <Navigation />

      <Component {...pageProps} />

      <Footer />

    </>
  );
}
