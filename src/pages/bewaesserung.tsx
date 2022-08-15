import type { InferGetStaticPropsType, NextPage } from "next";
import FeaturesSection from "../components/bewaesserung/features";
import IntroSection from "../components/bewaesserung/intro";
import Carousel from "../components/carousel";
import data from "../data/bewaesserung.json";
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

const Bewaesserung: NextPage<PageProps> = ({ data }: PageProps) => {
  return (
    <div>
      <IntroSection data={data.intro} className="z-10 -mb-30 lg:mb-0" />
      <Carousel carousel={data.carousel.carousel} />
      <FeaturesSection data={data.features} />
    </div>
  );
};

export default Bewaesserung;
