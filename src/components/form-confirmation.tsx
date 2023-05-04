import classNames from "classnames";
import parse from "html-react-parser";
import { HTMLAttributes } from "react";
import Link from "next/link";
import richtextStyles from "../styles/richtext.module.css";
import CheckIcon from "../assets/icons/check.svg";
import ArrowIcon from "../assets/icons/arrow-link.svg";
import data from "../data/anfrage-bewaesserung.json";
import Container from "./container";

interface FormConfirmationProps extends HTMLAttributes<HTMLElement> {
  data: Partial<typeof data.formConfirmationPage>;
}

const FormConfirmationSection = ({
  data,
  className,
}: FormConfirmationProps): JSX.Element => {
  return (
    <section
      className={classNames(
        className,
        "relative pt-80 lg:pt-120 bg-brown-700/5"
      )}
    >
      <Container>
        <div className="grid grid-cols-16">
          {/* Headline */}
          <h1
            className={classNames(
              "col-start-1 col-end-[-1]",
              "text-25 md:text-30 mb-40 md:mb-80 lg:mb-0 leading-snug font-normal text-teal-300 lg:max-w-[260px]"
            )}
          >
            Vielen Dank für Ihre Anfrage
            <CheckIcon className="h-25 w-25 inline-block ml-6 mb-5 md:h-[32px] md:w-[32px] md:ml-10" />
          </h1>

          {(data.body__html || data.link) && (
            <article
              className={classNames(
                "col-start-1 col-end-[-1] lg:col-start-9 mb-120",
                richtextStyles.root,
                // Text
                "text-15 md:text-20 leading-normal"
              )}
            >
              {data.body__html && (
                <div className="mb-80 md:mb-150 lg:mb-220">
                  {parse(data.body__html)}
                </div>
                )}
              {data.link && (
                <Link href={data.link.href}>
                  <a
                    className="text-teal-300 hover:text-brown-700"
                  >
                    {data.link.label}
                    <ArrowIcon className="inline-block h-10 w-25 md:h-[14px] md:w-[33px] ml-6 md:ml-10 mb-4 md:mb-5" />
                  </a>

                </Link>
              )}
            </article>
          )}
        </div>
      </Container>
    </section>
  );
};

export default FormConfirmationSection;
