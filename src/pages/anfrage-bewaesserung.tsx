import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import FormSection from "../components/anfrage-bewaesserung/form";
import HeaderSection from "../components/header";
import data from "../data/anfrage-bewaesserung.json";
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

const AnfrageBewaesserung: NextPage<PageProps> = ({ data }: PageProps) => {
  return (
    <>
      <Head>
        <title>Anfrage Bewässerung – bremergrundwasser</title>
      </Head>

      <div>
        <HeaderSection data={data.header} />
        <FormSection data={data.form} />
      </div>
    </>
  );
};

export default AnfrageBewaesserung;
