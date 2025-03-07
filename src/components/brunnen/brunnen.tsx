import classNames from "classnames";
import parse from "html-react-parser";
import { HTMLAttributes } from "react";
import data from "../../data/brunnen.json";
import { numberFormat } from "../../lib/helpers";
import richtextStyles from "../../styles/richtext.module.css";
import Container from "../container";

interface BrunnenSectionProps extends HTMLAttributes<HTMLElement> {
  data: typeof data.brunnen;
}

const BrunnenSection = ({
  data,
  className,
}: BrunnenSectionProps): JSX.Element => {
  return (
    <section className={classNames(className, "relative")} id={data.id}>
      <Container>
        {/* Head */}
        <div className="grid grid-cols-16 mb-80 lg:mb-120">
          {/* Headline */}
          <h1
            className={classNames(
              "col-start-1 col-end-[-1] md:col-end-9",
              "text-25 md:text-30 leading-snug font-normal text-teal-300",
              "[&>span]:text-15 md:[&>span]:text-20 [&>span]:text-brown-700"
            )}
          >
            {parse(data.headline__html)}
          </h1>
        </div>

        {/* Brunnen */}
        <div className="grid grid-cols-16 gap-y-50 md:gap-y-120">
          {data.brunnen.map(
            ({ title, subtitle, content__html, prices }, index) => (
              <article
                key={index}
                className={classNames(
                  "col-start-2 col-end-[-2] relative space-y-20 md:space-y-25",
                  {
                    "md:col-start-1 md:col-end-8 lg:col-start-3":
                      index % 2 === 0,
                    "md:col-start-10 md:col-end-[-1] lg:col-end-[-3]":
                      index % 2 === 1,
                  }
                )}
              >
                {/* Headlines */}
                <div
                  className={classNames(
                    richtextStyles.root,
                    // Text
                    "text-12 md:text-16 leading-normal",
                    // Headline
                    "[&>h2]:text-20 md:[&>h2]:text-25"
                  )}
                >
                  <h2 className="!my-0">{title}</h2>
                  {!!subtitle && <p>{subtitle}</p>}
                </div>

                {/* Content */}
                <div
                  className={classNames(
                    richtextStyles.root,
                    // Text
                    "text-16 md:text-20 leading-normal",
                    // Headline
                    "[&>h3]:text-12 md:[&>h3]:text-16 [&>h3]:uppercase [&>h3]:!mb-[1em]"
                  )}
                >
                  {parse(content__html)}
                </div>

                {/* Price & price hint */}
                {prices &&
                  prices.length > 0 &&
                  prices.map(
                    ({ priceHint, price, priceDisclaimer__html }, index) => (
                      <div key={index}>
                        {!!price && (
                          <div>
                            {/* Price hint */}
                            {!!priceHint && (
                              <p className="text-12 md:text-16 leading-normal">
                                {priceHint}
                              </p>
                            )}

                            {/* Price */}
                            <p className="flex items-baseline gap-x-10 text-20 md:text-25 leading-snug text-teal-300 after:grow after:border-t after:border-dashed after:border-teal-300">
                              ab {numberFormat.format(price / 100)}
                            </p>

                            {!!priceDisclaimer__html && (
                              <div
                                className={classNames(
                                  "text-12 md:text-16 leading-normal [&_a]:underline",
                                  "opacity-50"
                                )}
                              >
                                {parse(priceDisclaimer__html)}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )
                  )}
              </article>
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default BrunnenSection;
