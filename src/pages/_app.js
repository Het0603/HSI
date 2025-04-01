import ScrollToTopButton from '@/components/ScrollToTopButton';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Humane World Apps</title>
        <meta name="description" content="Empowering Animal Welfare Through Technology Driven Innovation" />
        <meta property="og:title" content="Humane World Apps" />
        <meta property="og:description" content="Empowering Animal Welfare Through Technology Driven Innovation" />
        <meta property="og:image" content="/blog1.jpg" />
        <meta property="og:image:alt" content="Humane World Apps Logo or Image" />
      </Head>
      <Component {...pageProps} />
      <ScrollToTopButton />
    </>
  );
}

export default MyApp;
