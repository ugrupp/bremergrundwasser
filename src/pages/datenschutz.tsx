import type { InferGetStaticPropsType, NextPage } from "next";
import HeaderSection from "../components/header";
import data from "../data/datenschutz.json";
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

const Datenschutz: NextPage<PageProps> = ({ data }: PageProps) => {
  return (
    <>
      <Head>
        <title>Datenschutz – bremergrundwasser</title>
      </Head>

      <div>
        <HeaderSection data={data.header} />
        <TextSection data={data.text} />
      </div>
    </>
  );
};

export default Datenschutz;
