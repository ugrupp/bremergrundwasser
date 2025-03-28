import type { InferGetStaticPropsType, NextPage } from "next";
import HeaderSection from "../components/header";
import data from "../data/preise.json";
import staticData from "../data/static.json";
import { generateImagePlaceholders } from "../lib/helpers";
import BrunnenSection from "../components/brunnen/brunnen";
import PricesSection from "../components/preise/prices";
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

const Preise: NextPage<PageProps> = ({ data }: PageProps) => {
  return (
    <>
      <Head>
        <title>Preise – bremergrundwasser</title>
      </Head>

      <div>
        <HeaderSection data={data.header} />
        <div className="relative pt-30 lg:pt-50 bg-white bg-gradient-to-b from-brown-700/5">
          <BrunnenSection data={data.brunnen} />
          <PricesSection data={data.prices} />
        </div>
      </div>
    </>
  );
};

export default Preise;
