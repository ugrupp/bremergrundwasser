import type { InferGetStaticPropsType, NextPage } from "next";
import IntroSection from "../components/home/intro";
import data from "../data/index.json";
import staticData from "../data/static.json";

export const getStaticProps = () => ({
  props: {
    data,
    staticData,
  },
});

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  data,
}) => {
  return (
    <div>
      <main>
        <IntroSection data={data.intro} />
      </main>
    </div>
  );
};

export default Home;
