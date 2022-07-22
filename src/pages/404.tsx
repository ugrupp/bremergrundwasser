import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import data from "../data/404.json";
import staticData from "../data/static.json";

export const getStaticProps = async () => {
  return {
    props: {
      data,
      staticData,
    },
  };
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
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

export default Home;
