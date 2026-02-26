import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';

import MouseGlow from '@/components/MouseGlow'
import ParallaxProvider from '@/components/ParallaxProvider'
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {

    const revealOnScroll = () => {

      const windowHeight = window.innerHeight;

      // Fade Up
      document.querySelectorAll('.reveal').forEach((el) => {

        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 80) {
          el.classList.add('reveal-visible');
        }

      });

      // Slide Left
      document.querySelectorAll('.reveal-left').forEach((el) => {

        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 80) {
          el.classList.add('reveal-left-visible');
        }

      });

      // Slide Right
      document.querySelectorAll('.reveal-right').forEach((el) => {

        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 80) {
          el.classList.add('reveal-right-visible');
        }

      });

    };

    window.addEventListener('scroll', revealOnScroll);

    revealOnScroll();

    return () => window.removeEventListener('scroll', revealOnScroll);

  }, []);


  return (
    <>

      <Head>

        <link rel="icon" href="/favicon.ico" />

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

      <MouseGlow />

      <ParallaxProvider />
      
      <Navigation />

      <Component {...pageProps} />

      <Footer />

    </>
  );
}
