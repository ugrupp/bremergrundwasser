import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import FeaturesSection from "../components/bewaesserung/features";
import IntroSection from "../components/grundwasser/intro";
import Carousel from "../components/carousel";
import HeroSection from "../components/hero";
import data from "../data/grundwasser.json";
import staticData from "../data/static.json";
import { generateImagePlaceholders } from "../lib/helpers";

export const getStaticProps = async () => ({
  props: {
    data: (await generateImagePlaceholders(data)) as typeof data,
    staticData: (await generateImagePlaceholders(
      staticData
    )) as typeof staticData,
  },
});

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Grundwasser: NextPage<PageProps> = ({ data }: PageProps) => {
  return (
    <>
      <Head>
        <title>Grundwasser – bremergrundwasser</title>
      </Head>

      <div>
        <HeroSection data={data.hero} />
        <IntroSection data={data.intro} className="-mb-30 lg:mb-0" />
        <Carousel carousel={data.carousel.carousel} />
        <FeaturesSection data={data.features} className="z-20" />
      </div>
    </>
  );
};

export default Grundwasser;
