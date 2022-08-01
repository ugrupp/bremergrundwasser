import type { InferGetStaticPropsType, NextPage } from "next";
import HeroSection from "../components/unser-plus/hero";
import data from "../data/wissenswertes.json";
import staticData from "../data/static.json";
import { generateImagePlaceholders } from "../lib/helpers";
import FeaturesSection from "../components/unser-plus/features";

export const getStaticProps = async () => ({
  props: {
    data: await generateImagePlaceholders(data),
    staticData: await generateImagePlaceholders(staticData),
  },
});

const Wissenswertes: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ data }) => {
  return (
    <div>
      <HeroSection data={data.hero} />
      <FeaturesSection data={data.features} />
    </div>
  );
};

export default Wissenswertes;
