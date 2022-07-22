import type { InferGetStaticPropsType, NextPage } from "next";
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
      <main>Home</main>
    </div>
  );
};

export default Home;
