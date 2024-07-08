import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import FormErrorSection from "../components/form-error";
import data from "../data/anfrage-brunnen.json";
import staticData from "../data/static.json";
import { generateImagePlaceholders } from "../lib/helpers";

export const getStaticProps = async () => ({
  props: {
    data: data,
    staticData: (await generateImagePlaceholders(
      staticData
    )) as typeof staticData,
  },
});

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const AnfrageBrunnenFehler: NextPage<PageProps> = ({ data }: PageProps) => {
  return (
    <>
      <Head>
        <title>
          Anfrage Brunnen – bremergrundwasser - Ein Fehler ist aufgetreten
        </title>
      </Head>

      <div>
        <FormErrorSection data={data.formErrorPage} />
      </div>
    </>
  );
};

export default AnfrageBrunnenFehler;
