import type { InferGetStaticPropsType, NextPage } from "next";
import HeaderSection from "../components/header";
import data from "../data/partner.json";
import staticData from "../data/static.json";
import { generateImagePlaceholders } from "../lib/helpers";
import Head from "next/head";
import PartnerSection from "../components/partner/partner";

export const getStaticProps = async () => ({
  props: {
    data: (await generateImagePlaceholders(data)) as typeof data,
    staticData: (await generateImagePlaceholders(
      staticData
    )) as typeof staticData,
  },
});

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Partner: NextPage<PageProps> = ({ data }: PageProps) => {
  return (
    <>
      <Head>
        <title>Partner – bremergrundwasser</title>
      </Head>

      <div>
        <HeaderSection data={data.header} />
        <PartnerSection data={data.partner} />
      </div>
    </>
  );
};

export default Partner;
