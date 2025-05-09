import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import FormErrorSection from "../components/form-error";
import data from "../data/anfrage-service-reparatur.json";
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

const AnfrageServiceReparaturFehler: NextPage<PageProps> = ({
  data,
}: PageProps) => {
  return (
    <>
      <Head>
        <title>
          Anfrage Service + Reparatur – bremergrundwasser - Ein Fehler ist
          aufgetreten
        </title>
      </Head>

      <div>
        <FormErrorSection data={data.formErrorPage} />
      </div>
    </>
  );
};

export default AnfrageServiceReparaturFehler;
