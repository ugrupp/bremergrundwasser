import classNames from "classnames";
import parse from "html-react-parser";
import { HTMLAttributes } from "react";
import data from "../../data/partner.json";
import { NEXT_IMAGE_DEFAULT_QUALITY } from "../../lib/constants";
import richtextStyles from "../../styles/richtext.module.css";
import Container from "../container";
import Image from "../image";

interface PartnerSectionProps extends HTMLAttributes<HTMLElement> {
  data: typeof data.partner;
}

const PartnerSection = ({
  data,
  className,
}: PartnerSectionProps): JSX.Element => {
  return (
    <section
      className={classNames(
        className,
        "relative py-80 lg:py-120 bg-white bg-gradient-to-b from-brown-700/5"
      )}
      id={data.id}
    >
      <Container>
        <div className="grid grid-cols-16">
          <ul className="col-start-2 col-end-[-5] sm:col-end-[-1] md:col-start-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-40 md:gap-x-50 gap-y-50 md:gap-y-70">
            {data.partner.map(({ title, body__html, image }, index) => (
              <li key={index}>
                {/* Image */}
                {!!image && (
                  <Image
                    wrapperProps={{
                      className: "w-full",
                    }}
                    quality={NEXT_IMAGE_DEFAULT_QUALITY}
                    layout="responsive"
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                  />
                )}

                {/* Info */}
                <div
                  className={classNames(
                    {
                      "mt-25 md:mt-30": !!image,
                    },
                    richtextStyles.root,
                    // Text
                    "text-15 md:text-20 leading-normal",
                    // Headlines
                    "[&>h2_span]:text-brown-700",
                    // Links
                    "[&_a]:!text-inherit [&_a:hover]:!text-teal-300"
                  )}
                >
                  {!!title && <h2>{parse(title)}</h2>}
                  {!!body__html && parse(body__html)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default PartnerSection;
