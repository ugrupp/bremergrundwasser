import classNames from "classnames";
import PlusIcon from "../../assets/icons/plus.svg";
import parse from "html-react-parser";
import { HTMLAttributes } from "react";
import data from "../../data/preise.json";
import richtextStyles from "../../styles/richtext.module.css";
import Container from "../container";

interface PricesSectionProps extends HTMLAttributes<HTMLElement> {
  data: typeof data.prices;
}

const PricesSection = ({
  data,
  className,
}: PricesSectionProps): JSX.Element => {
  return (
    <section
      className={classNames(
        className,
        "relative py-80 lg:py-120 bg-white bg-gradient-to-b from-brown-700/5"
      )}
      id={data.id}
    >
      <Container>
        <div className="grid grid-cols-16 gap-y-50">
          {data.features.map(({ headline, body__html }, index) => (
            <article
              key={index}
              className={classNames(
                "col-start-2 col-end-[-2] relative",
                {
                  "md:col-start-1 md:col-end-8 lg:col-start-3": index % 2 === 0,
                  "md:col-start-10 md:col-end-[-1] lg:col-end-[-3]":
                    index % 2 === 1,
                },
                richtextStyles.root,
                // Text
                "text-15 md:text-20 leading-normal",
                // Headlines
                "[&>h2]:text-20 md:[&>h2]:text-25 [&>h2>span]:text-brown-700"
              )}
            >
              {!!headline && <h2>{parse(headline)}</h2>}

              {parse(body__html)}
            </article>
          ))}

          {/* Hint */}
          {!!data.hint__html && (
            <div
              className={classNames(
                "col-start-1 col-end-[-5] md:col-end-7 xl:col-end-5",
                richtextStyles.root,
                // Text
                "text-15 md:text-20 leading-normal"
              )}
            >
              {parse(data.hint__html)}
            </div>
          )}

          {/* Contact hint */}
          {!!data.contactHint__html && (
            <div
              className={classNames(
                "col-start-1 col-end-[-5] md:col-end-7 xl:col-end-5",
                richtextStyles.root,
                // Text
                "text-20 md:text-25 leading-snug [&>p]:text-teal-300"
              )}
            >
              {parse(data.contactHint__html)}
            </div>
          )}

          {/* Disclaimer */}
          {!!data.disclaimer__html && (
            <>
              {/* Grid positioning helper on > md */}
              <div className="hidden md:block md:col-start-9" />

              <div className="col-start-1 col-end-[-1] md:col-start-9 space-y-20 md:space-y-30">
                {/* Icon */}
                <div
                  className={classNames(
                    "flex items-center gap-x-20 md:gap-x-40",
                    "after:grow after:border-t after:border-dashed after:border-brown-700"
                  )}
                >
                  <PlusIcon
                    className="h-30 w-30 md:h-60 md:w-60 text-teal-300"
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <div>
                  <div
                    className={classNames(
                      richtextStyles.root,
                      // Text
                      "text-15 md:text-20 leading-normal"
                    )}
                  >
                    {parse(data.disclaimer__html)}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
};

export default PricesSection;
