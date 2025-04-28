import classNames from "classnames";
import parse from "html-react-parser";
import { HTMLAttributes } from "react";
import data from "../../data/index.json";
import { NEXT_IMAGE_DEFAULT_QUALITY } from "../../lib/constants";
import richtextStyles from "../../styles/richtext.module.css";
import Container from "../container";
import Image from "../image";

interface HunterSectionProps extends HTMLAttributes<HTMLElement> {
  data: typeof data.hunter;
}

const HunterSection = ({
  data,
  className,
}: HunterSectionProps): JSX.Element => {
  return (
    <section
      className={classNames(className, "relative bg-brown-700/5")}
      id={data.id}
    >
      {/* Content */}
      <Container classNameInner="grid grid-cols-16">
        {/* Left column */}
        <div className="col-start-1 col-end-[-1] lg:col-start-1 lg:col-end-9 lg:pb-120">
          <Image
            wrapperProps={{
              className: "w-[175px] h-[95px] md:w-200 md:h-[109px]",
            }}
            quality={NEXT_IMAGE_DEFAULT_QUALITY}
            src={data.logo.image}
            alt={data.logo.alt}
            layout="fill"
            objectFit="contain"
          />
          {/* Headline */}
          <h2 className="text-20 mt-[56px] md:text-25 leading-snug text-teal-300">
            {data.headline}
          </h2>

          {/* Body content */}
          <div className={classNames("mt-30 md:mt-40")}>
            <div
              className={classNames(
                richtextStyles.root,
                "text-15 md:text-20 leading-normal"
              )}
            >
              {parse(data.body__html)}
            </div>
          </div>
        </div>

        {/* Image mobile */}
        <div className="col-start-1 col-end-[-1] mt-[57px] lg:hidden">
          <Image
            wrapperProps={{
              className:
                "relative w-[calc(100%+40px)] left-[-20px] h-[300px] sm:h-[500px] sm:w-[calc(100%+80px)] sm:left-[-40px]",
            }}
            quality={NEXT_IMAGE_DEFAULT_QUALITY}
            layout="fill"
            src={data.image.src}
            alt={data.image.alt}
            objectFit="cover"
            objectPosition={data.image.objectPosition}
          />
        </div>
      </Container>
      {/* Image Desktop */}
      <div className="hidden lg:block">
        <Image
          wrapperProps={{
            className: "lg:absolute lg:right-0 lg:top-0 lg:w-[43%] lg:h-full",
          }}
          quality={NEXT_IMAGE_DEFAULT_QUALITY}
          layout="fill"
          src={data.image.src}
          alt={data.image.alt}
          objectFit="cover"
          objectPosition={data.image.objectPosition}
        />
      </div>
    </section>
  );
};

export default HunterSection;
