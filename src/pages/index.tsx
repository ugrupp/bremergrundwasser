import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import ContactSection from "../components/home/contact";
import HeroSection from "../components/home/hero";
import IntroSection from "../components/home/intro";
import PumpsSection from "../components/home/pumps";
import VideoSection from "../components/home/video";
import data from "../data/index.json";
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

const Home: NextPage<PageProps> = ({ data }: PageProps) => {
  return (
    <>
      <Head>
        <title>
          bremergrundwasser → Ihr Spezialist für Beregnungssanlagen und
          Brunnenbau in Bremen
        </title>
      </Head>

      <div className="pb-80 lg:pb-120">
        <HeroSection data={data.hero} />
        <IntroSection data={data.intro} className="pb-180 lg:pb-[350px]" />
        <VideoSection data={data.video} className="-mt-100 lg:-mt-200" />
        <ContactSection data={data.contact} className="mt-80 lg:mt-120 z-10" />
        <PumpsSection data={data.pumps} className="mt-80 lg:mt-120" />
      </div>
    </>
  );
};

export default Home;
