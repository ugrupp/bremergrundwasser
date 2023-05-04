import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import FormConfirmationSection from "../components/form-confirmation";
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

const AnfrageServiceReparaturDankeSeite: NextPage<PageProps> = ({ data }: PageProps) => {
  return (
    <>
      <Head>
        <title>Anfrage Service + Reparatur – bremergrundwasser - Danke für Ihre Anfrage</title>
      </Head>

      <div>
        <FormConfirmationSection data={data.formConfirmationPage} />
      </div>
    </>
  );
};

export default AnfrageServiceReparaturDankeSeite;
