import type { InferGetStaticPropsType, NextPage } from "next";
import IntroSection from "../components/bewaesserung/intro";
import Carousel from "../components/carousel";
import data from "../data/bewaesserung.json";
import staticData from "../data/static.json";
import { generateImagePlaceholders } from "../lib/helpers";

export const getStaticProps = async () => ({
  props: {
    data: await generateImagePlaceholders(data),
    staticData: await generateImagePlaceholders(staticData),
  },
});

const Bewaesserung: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ data }) => {
  return (
    <div>
      <main>
        <IntroSection data={data.intro} className="z-10 -mb-30 lg:mb-0" />
        <Carousel carousel={data.carousel.carousel} />
      </main>
    </div>
  );
};

export default Bewaesserung;
