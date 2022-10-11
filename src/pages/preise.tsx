import type { InferGetStaticPropsType, NextPage } from "next";
import HeaderSection from "../components/header";
import data from "../data/preise.json";
import staticData from "../data/static.json";
import { generateImagePlaceholders } from "../lib/helpers";
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
        <PricesSection data={data.prices} />
      </div>
    </>
  );
};

export default Preise;
