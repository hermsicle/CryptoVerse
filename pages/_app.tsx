import "../styles/globals.scss";
import "../styles/counter.scss";
import type { AppProps } from "next/app";
import { AppContextProvider } from "../context/AppContext"
import Header from "../layouts/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Header />
      <Component {...pageProps} />
    </AppContextProvider>
  )
}

export default MyApp;
