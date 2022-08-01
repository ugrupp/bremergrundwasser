import type { InferGetStaticPropsType, NextPage } from "next";
import HeroSection from "../components/unser-plus/hero";
import data from "../data/unser-plus.json";
import staticData from "../data/static.json";
import { generateImagePlaceholders } from "../lib/helpers";
import FeaturesSection from "../components/unser-plus/features";

export const getStaticProps = async () => ({
  props: {
    data: await generateImagePlaceholders(data),
    staticData: await generateImagePlaceholders(staticData),
  },
});

const UnserPlus: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  data,
}) => {
  return (
    <div>
      <HeroSection data={data.hero} />
      <FeaturesSection data={data.features} />
    </div>
  );
};

export default UnserPlus;
