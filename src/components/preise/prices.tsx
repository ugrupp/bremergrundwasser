import classNames from "classnames";
import AlertIcon from "../../assets/icons/alert-filled.svg";
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
        "relative pt-30 pb-80 lg:pt-50 lg:pb-120 bg-white bg-gradient-to-b from-brown-700/5"
      )}
      id={data.id}
    >
      <Container>
        <div className="grid grid-cols-16 gap-y-50">
          {/* Intro */}
          {!!data.intro__html && (
            <div
              className={classNames(
                "col-start-1 col-end-[-5] md:col-end-9",
                richtextStyles.root,
                // Text
                "text-20 md:text-25 leading-normal"
              )}
            >
              {parse(data.intro__html)}
            </div>
          )}

          {/* Hint */}
          {!!data.hint__html && (
            <div
              className={classNames(
                "col-start-1 col-end-[-5] md:col-end-9",
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
                "col-start-1 col-end-[-5] md:col-end-9",
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
                  <AlertIcon
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

          {/* Content */}
          {!!data.content__html && (
            <div
              className={classNames(
                "col-start-1 col-end-[-1] pt-20 md:col-start-2 md:col-end-[-2] md:pt-60 xl:col-start-3 xl:col-end-[-3] xl:pt-120",
                richtextStyles.root,
                // Text
                "text-15 md:text-20 leading-normal"
              )}
            >
              {parse(data.content__html)}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default PricesSection;
