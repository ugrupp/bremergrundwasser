import type { InferGetStaticPropsType, NextPage } from "next";
import IntroSection from "../components/bewaesserung/intro";

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
        <IntroSection data={data.intro} />
      </main>
    </div>
  );
};

export default Bewaesserung;
