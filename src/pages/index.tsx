import type { InferGetStaticPropsType, NextPage } from "next";
import IntroSection from "../components/home/intro";
import VideoSection from "../components/home/video";
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
        <IntroSection data={data.intro} className="pb-180 lg:pb-[350px]" />
        <VideoSection data={data.video} className="-mt-100 lg:-mt-200" />
      </main>
    </div>
  );
};

export default Home;
