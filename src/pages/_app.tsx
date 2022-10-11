import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Head from "next/head";
import Layout from "../layouts/default";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Unser Spezialität: Förderung von Grundwasser durch Spülbrunnen und gezielte, sparsame Bewässerung von Gärten, Rasenflächen, Blumen- und Gemüsebeeten."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="bremergrundwasser → Ihr Spezialist für Beregnungssanlagen und Brunnenbau in Bremen"
        />
        <meta property="og:url" content="https://www.bremergrundwasser.de/" />
        <meta property="og:image" content="/images/social-share.jpg" />
        <meta
          property="og:description"
          content="Unser Spezialität: Förderung von Grundwasser durch Spülbrunnen und gezielte, sparsame Bewässerung von Gärten, Rasenflächen, Blumen- und Gemüsebeeten."
        />
        <meta name="keywords" content="" />
      </Head>

      <Layout id={pageProps?.data?.id} staticData={pageProps.staticData}>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
