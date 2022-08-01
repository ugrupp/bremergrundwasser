import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import data from "../data/404.json";
import staticData from "../data/static.json";
import { generateImagePlaceholders } from "../lib/helpers";

export const getStaticProps = async () => {
  return {
    props: {
      data: await generateImagePlaceholders(data),
      staticData: await generateImagePlaceholders(staticData),
    },
  };
};

const Error404: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  data,
}) => {
  const { text__html } = data;

  return (
    <>
      <Head>
        <title>Gasthaus »zur Mühle«</title>
      </Head>

      <p>{text__html}</p>
    </>
  );
};

export default Error404;
