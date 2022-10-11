import classNames from "classnames";
import parse from "html-react-parser";
import NextImage from "next/image";
import { HTMLAttributes } from "react";
import data from "../../data/verkauf.json";
import richtextStyles from "../../styles/richtext.module.css";
import Container from "../container";

interface HeroSectionProps extends HTMLAttributes<HTMLElement> {
  data: typeof data.hero;
}

const HeroSection = ({ data, className }: HeroSectionProps): JSX.Element => {
  return (
    <section
      className={classNames(className, "relative overflow-hidden")}
      id={data.id}
    >
      <Container className="pt-80 lg:pt-120" classNameInner="relative">
        <div className="grid grid-cols-16 gap-y-25 md:gap-y-60">
          {/* Content */}
          <article
            className={classNames(
              "col-start-1 col-end-[-5] md:col-end-7 xl:col-end-5",
              richtextStyles.root,
              // Text
              "text-15 md:text-20 leading-normal",
              // Headlines
              "[&>h1]:text-20 md:[&>h1]:text-25",
              "[&>h2]:text-20 md:[&>h2]:text-25"
            )}
          >
            <h1 className="underline decoration-dashed decoration-1 underline-offset-[.4em]">
              {data.headline}
            </h1>
            {parse(data.body__html)}
            <h2 className="underline decoration-dashed decoration-1 underline-offset-[.4em]">
              {data.opentimesHeadline}
            </h2>
            {parse(data.opentimesBody__html)}
          </article>

          {/* Image */}
          <div className="col-start-1 col-end-[-1] lg:col-start-9">
            <div className="max-w-sm md:max-w-[650px] ml-auto flex flex-col relative -mr-20 sm:-mr-40 lg:-mt-120 lg:pb-20">
              <div className="aspect-square relative">
                <div className="absolute inset-0 -right-80 lg:-right-50 lg:-inset-y-20">
                  {/* Image */}
                  <NextImage
                    quality={95}
                    layout="fill"
                    src={data.image.src}
                    alt={data.image.alt}
                    objectFit="contain"
                    objectPosition={data.image.objectPosition}
                    priority={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
