import type { InferGetStaticPropsType, NextPage } from "next";
import HeaderSection from "../components/header";
import data from "../data/unser-plus.json";
import staticData from "../data/static.json";
import { generateImagePlaceholders } from "../lib/helpers";
import Carousel from "../components/carousel";
import FeaturesSection from "../components/unser-plus/features";
import Head from "next/head";

export const getStaticProps = async () => ({
  props: {
    data: (await generateImagePlaceholders(data)) as typeof data,
    staticData: (await generateImagePlaceholders(
      staticData
    )) as typeof staticData,
  },
});

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const UnserPlus: NextPage<PageProps> = ({ data }: PageProps) => {
  return (
    <>
      <Head>
        <title>Unser Plus – bremergrundwasser</title>
      </Head>

      <div>
        <HeaderSection data={data.header} />
        <FeaturesSection data={data.features} />
        <Carousel carousel={data.carousel.carousel} />
      </div>
    </>
  );
};

export default UnserPlus;
