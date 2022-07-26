import type { InferGetStaticPropsType, NextPage } from "next";
import FeaturesSection from "../components/bewaesserung/features";
import IntroSection from "../components/grundwasser/intro";
import data from "../data/grundwasser.json";
import staticData from "../data/static.json";
import { generateImagePlaceholders } from "../lib/helpers";

export const getStaticProps = async () => ({
  props: {
    data: await generateImagePlaceholders(data),
    staticData: await generateImagePlaceholders(staticData),
  },
});

const Grundwasser: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  data,
}) => {
  return (
    <div>
      <IntroSection data={data.intro} className="-mb-30 lg:mb-0" />
      <FeaturesSection data={data.features} className="z-20" />
    </div>
  );
};

export default Grundwasser;
