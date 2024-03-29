import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import BrunnenSection from "../components/brunnen/brunnen";
import ContactSection from "../components/brunnen/contact";
import PumpsSection from "../components/brunnen/pumps";
import HeroSection from "../components/hero";
import CustomerTestimonial from "../components/customer-testimonial";
import data from "../data/brunnen.json";
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

const Brunnen: NextPage<PageProps> = ({ data }: PageProps) => {
  return (
    <>
      <Head>
        <title>Brunnen – bremergrundwasser</title>
      </Head>

      <div>
        <HeroSection data={data.hero} />
        <BrunnenSection data={data.brunnen} className="mt-80 lg:mt-120" />
        <ContactSection data={data.contact} className="mt-80 lg:mt-120" />
        <PumpsSection
          data={data.pumps}
          className="mt-80 lg:mt-120 pb-80 lg:pb-120"
        />
        <CustomerTestimonial testimonial={data.testimonial} />
      </div>
    </>
  );
};

export default Brunnen;
