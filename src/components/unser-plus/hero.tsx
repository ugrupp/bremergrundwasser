import classNames from "classnames";
import { HTMLAttributes } from "react";
import parse from "html-react-parser";
import data from "../../data/unser-plus.json";
import Container from "../container";
import richtextStyles from "../../styles/richtext.module.css";

interface HeroSectionProps extends HTMLAttributes<HTMLElement> {
  data: typeof data.hero;
}

const HeroSection = ({ data, className }: HeroSectionProps): JSX.Element => {
  return (
    <section
      className={classNames(
        className,
        "relative pt-80 lg:pt-120 bg-brown-700/5"
      )}
      id={data.id}
    >
      <Container>
        <div className="grid grid-cols-16 gap-y-60">
          {/* Headline */}
          <h1
            className={classNames(
              "col-start-1 col-end-[-1]",
              "text-25 md:text-30 leading-snug font-normal text-teal-300"
            )}
          >
            {data.headline}
          </h1>

          <article
            className={classNames(
              "col-start-1 col-end-[-1] lg:col-start-9",
              richtextStyles.root,
              // Text
              "text-15 md:text-20 leading-normal"
            )}
          >
            {parse(data.body__html)}
          </article>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
