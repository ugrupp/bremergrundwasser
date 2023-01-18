import classNames from "classnames";
import parse from "html-react-parser";
import { HTMLAttributes } from "react";
import richtextStyles from "../styles/richtext.module.css";
import data from "../data/impressum.json";
import Container from "./container";

interface TextSectionProps extends HTMLAttributes<HTMLElement> {
  data: typeof data.text;
}

const TextSection = ({ data, className }: TextSectionProps): JSX.Element => {
  return (
    <section
      className={classNames(
        className,
        "relative pt-60 pb-80 lg:pt-80 lg:pb-120 bg-white bg-gradient-to-b from-brown-700/5"
      )}
      id={data.id}
    >
      <Container>
        <div className="grid grid-cols-16">
          <article
            className={classNames(
              "col-start-1 col-end-[-1] lg:col-start-3 lg:col-end-[-3]",
              richtextStyles.root,
              // Text
              "text-15 md:text-20 leading-normal",
              // Headlines
              "[&>h2]:text-20 md:[&>h2]:text-25",
              "[&>h3]:text-20 md:[&>h3]:text-25 [&>h3]:!mb-0 [&>h3]:!text-inherit",
              // Links
              "[&_a]:!text-inherit [&_a:hover]:!text-teal-300",
              // Small text
              "[&_small]:text-12 [&_small]:md:text-16"
            )}
          >
            {parse(data.body__html)}
          </article>
        </div>
      </Container>
    </section>
  );
};

export default TextSection;
