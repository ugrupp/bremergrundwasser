import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Head from "next/head";
import Layout from "../layouts/default";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  if (router.pathname === "_error" || !pageProps.staticData) {
    return <Component {...pageProps} />;
  }

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

      <Layout
        id={pageProps?.data?.id}
        footerBgImage={pageProps?.data?.footerBgImage}
        staticData={pageProps.staticData}
      >
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
