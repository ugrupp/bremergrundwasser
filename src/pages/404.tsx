import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import data from "../data/404.json";
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

const Error404: NextPage<PageProps> = ({ data }: PageProps) => {
  const { text__html } = data;

  return (
    <>
      <Head>
        <title>bremergrundwasser</title>
      </Head>

      <p>{text__html}</p>
    </>
  );
};

export default Error404;
