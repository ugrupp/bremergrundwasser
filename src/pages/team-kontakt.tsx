import type { InferGetStaticPropsType, NextPage } from "next";
import data from "../data/team-kontakt.json";
import staticData from "../data/static.json";
import { generateImagePlaceholders } from "../lib/helpers";
import styles from "../styles/team-kontakt.module.css";
import classNames from "classnames";
import HeroSection from "../components/team-kontakt/hero";
import TeamSection from "../components/team-kontakt/team";

export const getStaticProps = async () => ({
  props: {
    data: (await generateImagePlaceholders(data)) as typeof data,
    staticData: (await generateImagePlaceholders(
      staticData
    )) as typeof staticData,
  },
});

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const TeamKontakt: NextPage<PageProps> = ({ data }: PageProps) => {
  return (
    <div className="relative pb-80 lg:pb-120 selection-inverted">
      {/* BG */}
      <div className={classNames(styles.bg, "absolute inset-0")} />

      {/* Content */}
      <HeroSection data={data.hero} />
      <TeamSection data={data.team} className="mt-80 lg:mt-120" />
    </div>
  );
};

export default TeamKontakt;
