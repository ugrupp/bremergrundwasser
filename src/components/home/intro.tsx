import classNames from "classnames";
import { HTMLAttributes } from "react";
import parse from "html-react-parser";
import data from "../../data/index.json";
import Container from "../container";
import bgStyles from "../../styles/bg.module.css";
import richtextStyles from "../../styles/richtext.module.css";

interface IntroSectionProps extends HTMLAttributes<HTMLElement> {
  data: typeof data.intro;
}

const IntroSection = ({ data, className }: IntroSectionProps): JSX.Element => {
  return (
    <section
      className={classNames(
        className,
        bgStyles["teal-primary"],
        "relative py-80 lg:py-150 selection-inverted"
      )}
      id={data.id}
    >
      {/* Watermark */}
      <div className="bg-cover pointer-events-none overflow-hidden absolute left-0 inset-y-0 w-3/4 bg-left-bottom opacity-25">
        <img
          src="/images/watermark.png"
          className="absolute inset-x-0 bottom-0 w-full h-auto"
        />
      </div>

      <Container className="relative">
        <div className="grid grid-cols-16 gap-y-80">
          {/* Primary content */}
          <article
            className={classNames(
              "col-start-1 col-end-[-1] md:col-start-9 md:row-start-1",
              richtextStyles.root,
              richtextStyles["on-teal"],
              // Text
              "text-15 lg:text-20 leading-normal",
              // Headlines
              "[&>h2]:text-25 lg:[&>h2]:text-30"
            )}
          >
            <h2>{data.headline}</h2>
            {parse(data.body__html)}
          </article>

          {/* Secondary content */}
          <article
            className={classNames(
              "col-start-5 col-end-[-1] md:col-start-1 md:col-end-6 xl:col-end-5 md:row-start-1 md:mt-150",
              richtextStyles.root,
              richtextStyles["on-teal"],
              // Text
              "text-15 lg:text-20 leading-normal",
              // Headlines
              "[&>h3]:text-20 lg:[&>h3]:text-25"
            )}
          >
            <h3 className="underline decoration-dashed decoration-1 underline-offset-[.4em] decoration-white/75">
              {data.secondaryHeadline}
            </h3>
            {parse(data.secondaryBody__html)}
            <h3 className="underline decoration-dashed decoration-1 underline-offset-[.4em] decoration-white/75">
              {data.opentimesHeadline}
            </h3>
            {parse(data.opentimesBody__html)}
          </article>
        </div>
      </Container>
    </section>
  );
};

export default IntroSection;
