import classNames from "classnames";
import parse from "html-react-parser";
import Link from "next/link";
import { HTMLAttributes } from "react";
import data from "../../data/bewaesserung.json";
import richtextStyles from "../../styles/richtext.module.css";
import Container from "../container";
import Teaser from "../teaser";

interface IntroSectionProps extends HTMLAttributes<HTMLElement> {
  data: typeof data.intro;
}

const IntroSection = ({ data, className }: IntroSectionProps): JSX.Element => {
  return (
    <section
      className={classNames(className, "relative pt-80 lg:py-120")}
      id={data.id}
    >
      <Container>
        <div className="grid grid-cols-16 gap-y-80 items-end">
          <article
            className={classNames(
              "col-start-1 col-end-[-1] lg:col-end-9",
              richtextStyles.root,
              // Text
              "text-15 md:text-20 leading-normal",
              // Headlines
              "[&>h2]:text-25 md:[&>h2]:text-30"
            )}
          >
            <h2>{data.headline}</h2>
            {parse(data.body__html)}
          </article>

          {/* Teaser */}
          <div className="col-start-5 col-end-[-1] lg:col-start-11">
            <div className="max-w-xs ml-auto lg:translate-y-200">
              <Link href={data.teaser.href} passHref>
                <Teaser
                  label={data.teaser.label}
                  linkText={data.teaser.linkText}
                  image={data.teaser.image}
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default IntroSection;
