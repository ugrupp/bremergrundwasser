import type { InferGetStaticPropsType, NextPage } from "next";
import HeaderSection from "../components/header";
import data from "../data/unser-plus.json";
import staticData from "../data/static.json";
import { generateImagePlaceholders } from "../lib/helpers";
import FeaturesSection from "../components/unser-plus/features";

export const getStaticProps = async () => ({
  props: {
    data: (await generateImagePlaceholders(data)) as typeof data,
    staticData: (await generateImagePlaceholders(
      staticData
    )) as typeof staticData,
  },
});

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const UnserPlus: NextPage<PageProps> = ({ data }: PageProps) => {
  return (
    <div>
      <HeaderSection data={data.header} />
      <FeaturesSection data={data.features} />
    </div>
  );
};

export default UnserPlus;
