import ScrollToTopButton from '@/components/ScrollToTopButton';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Humane World Apps</title>
        <meta name="description" content="Empowering Animal Welfare Through Technology Driven Innovation" />
        <meta name="keywords" content="Animal Welfare, Technology, Humane World, Innovation, Apps for Animals" />
        <meta name="author" content="Humane World Apps" />
        
        <meta property="og:title" content="Humane World Apps" />
        <meta property="og:description" content="Empowering Animal Welfare Through Technology Driven Innovation." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1560807707-8cc77767d783" />
        <meta property="og:image:alt" content="Humane World Apps Logo or Image" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://human-animal-1.vercel.app/" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Humane World Apps" />
        <meta name="twitter:description" content="Empowering Animal Welfare Through Technology Driven Innovation" />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1560807707-8cc77767d783" />
        <meta name="twitter:image:alt" content="Humane World Apps Logo or Image" />
      </Head>
      <Component {...pageProps} />
      <ScrollToTopButton />
    </>
  );
}

export default MyApp;
