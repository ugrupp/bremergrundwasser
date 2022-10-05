import classNames from "classnames";
import parse from "html-react-parser";
import NextImage from "next/image";
import { HTMLAttributes } from "react";
import data from "../../data/team-kontakt.json";
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
              "col-start-2 col-end-[-2] lg:col-start-1 lg:col-end-8",
              richtextStyles.root,
              richtextStyles["on-teal"],
              // Text
              "text-20 md:text-25 leading-normal",
              // Headlines
              "[&>h1]:!leading-normal [&>h1]:text-15 md:[&>h1]:text-20 [&>h1]:underline [&>h1]:decoration-dashed [&>h1]:decoration-1 [&>h1]:underline-offset-8 [&>h1]:!mt-[2em] [&>h1]:!mb-[0.9em]",
              "[&>h2]:!leading-normal [&>h2]:text-15 md:[&>h2]:text-20 [&>h2]:underline [&>h2]:decoration-dashed [&>h2]:decoration-1 [&>h2]:underline-offset-8 [&>h2]:!mt-[2em] [&>h2]:!mb-[0.9em]",
              // Links
              "[&_a]:!text-brown-700 [&_a:hover]:!text-white"
            )}
          >
            {parse(data.body__html)}
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
