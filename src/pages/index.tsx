import type { InferGetStaticPropsType, NextPage } from "next";
import ContactSection from "../components/home/contact";
import IntroSection from "../components/home/intro";
import PumpsSection from "../components/home/pumps";
import VideoSection from "../components/home/video";
import data from "../data/index.json";
import staticData from "../data/static.json";
import { generateImagePlaceholders } from "../lib/helpers";

export const getStaticProps = async () => ({
  props: {
    data: await generateImagePlaceholders(data),
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
        <ContactSection data={data.contact} className="mt-80 lg:mt-120 z-10" />
        <PumpsSection data={data.pumps} className="mt-80 lg:mt-120" />
      </main>
    </div>
  );
};

export default Home;
