import type { InferGetStaticPropsType, NextPage } from "next";
import data from "../data/verkauf.json";
import staticData from "../data/static.json";
import { generateImagePlaceholders } from "../lib/helpers";
import PumpsSection from "../components/verkauf/pumps";
import styles from "../styles/pumps.module.css";
import classNames from "classnames";
import HeroSection from "../components/verkauf/hero";

export const getStaticProps = async () => ({
  props: {
    data: (await generateImagePlaceholders(data)) as typeof data,
    staticData: (await generateImagePlaceholders(
      staticData
    )) as typeof staticData,
  },
});

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Verkauf: NextPage<PageProps> = ({ data }: PageProps) => {
  return (
    <div className="relative pb-80 lg:pb-120">
      {/* BG */}
      <div className={classNames(styles.bg, "absolute inset-0 opacity-5")} />

      {/* Content */}
      <HeroSection data={data.hero} />
      <PumpsSection data={data.pumps} className="mt-80 lg:mt-120" />
    </div>
  );
};

export default Verkauf;
