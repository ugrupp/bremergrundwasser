import type { InferGetStaticPropsType, NextPage } from "next";
import FormSection from "../components/anfrage-brunnen/form";
import HeaderSection from "../components/header";
import data from "../data/anfrage-brunnen.json";
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

const AnfrageBrunnen: NextPage<PageProps> = ({ data }: PageProps) => {
  return (
    <div>
      <HeaderSection data={data.header} />
      <FormSection data={data.form} />
    </div>
  );
};

export default AnfrageBrunnen;
