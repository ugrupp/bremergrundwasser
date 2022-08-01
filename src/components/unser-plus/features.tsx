import classNames from "classnames";
import parse from "html-react-parser";
import { HTMLAttributes } from "react";
import data from "../../data/unser-plus.json";
import { NEXT_IMAGE_DEFAULT_QUALITY } from "../../lib/constants";
import richtextStyles from "../../styles/richtext.module.css";
import Container from "../container";
import Image from "../image";

interface FeaturesSectionProps extends HTMLAttributes<HTMLElement> {
  data: typeof data.features;
}

const FeaturesSection = ({
  data,
  className,
}: FeaturesSectionProps): JSX.Element => {
  return (
    <section
      className={classNames(
        className,
        "relative py-80 lg:py-120 bg-white bg-gradient-to-b from-brown-700/5"
      )}
      id={data.id}
    >
      <Container>
        <div className="grid grid-cols-16 gap-y-50 md:gap-y-120">
          {data.features.map(({ headline, body__html, image }, index) => (
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
                "[&>h2]:text-20 md:[&>h2]:text-25"
              )}
            >
              {!!headline && (
                <h2
                  className={classNames({
                    "!-mb-60 relative z-10": !!image,
                  })}
                >
                  {headline}
                </h2>
              )}

              {/* Optional image */}
              {!!image && (
                <div className="aspect-square w-10/12 ml-auto max-w-[260px]">
                  <Image
                    wrapperProps={{
                      className: "w-full h-full",
                    }}
                    quality={NEXT_IMAGE_DEFAULT_QUALITY}
                    layout="fill"
                    src={image.src}
                    alt={image.alt}
                    objectFit="cover"
                    objectPosition={image.objectPosition}
                  />
                </div>
              )}

              {parse(body__html)}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
