import '../styles/globals.scss';
import '../styles/counter.scss';
import type { AppProps } from 'next/app';
import Header from '../layouts/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
