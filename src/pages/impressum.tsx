import type { InferGetStaticPropsType, NextPage } from "next";
import HeaderSection from "../components/header";
import data from "../data/impressum.json";
import staticData from "../data/static.json";
import { generateImagePlaceholders } from "../lib/helpers";
import Head from "next/head";
import TextSection from "../components/text";

export const getStaticProps = async () => ({
  props: {
    data: (await generateImagePlaceholders(data)) as typeof data,
    staticData: (await generateImagePlaceholders(
      staticData
    )) as typeof staticData,
  },
});

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Impressum: NextPage<PageProps> = ({ data }: PageProps) => {
  return (
    <>
      <Head>
        <title>Impressum – bremergrundwasser</title>
      </Head>

      <div>
        <HeaderSection data={data.header} />
        <TextSection data={data.text} />
      </div>
    </>
  );
};

export default Impressum;
