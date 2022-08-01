import classNames from "classnames";
import parse from "html-react-parser";
import NextImage from "next/image";
import { HTMLAttributes } from "react";
import PlusIcon from "../../assets/icons/plus.svg";
import data from "../../data/index.json";
import Container from "../container";

interface HeroSectionProps extends HTMLAttributes<HTMLElement> {
  data: typeof data.hero;
}

const HeroSection = ({ data, className }: HeroSectionProps): JSX.Element => {
  return (
    <section
      className={classNames(
        className,
        "relative bg-brown-700/5 overflow-hidden"
      )}
      id={data.id}
    >
      <Container
        className="pt-30 pb-15 md:pt-60 md:pb-50"
        classNameInner="relative"
      >
        <div className="grid grid-cols-16 gap-y-25 md:gap-y-60">
          {/* Headline */}
          <h1
            className={classNames(
              "col-start-1 col-end-[-1] md:col-end-[-5] lg:col-end-8",
              "text-20 md:text-30 leading-snug font-normal text-teal-300"
            )}
          >
            {parse(data.headline__html)}
          </h1>

          {/* Images */}
          <div className="col-start-1 col-end-[-1] lg:col-start-9">
            <div className="max-w-sm md:max-w-[650px] ml-auto flex flex-col gap-y-70 md:gap-y-25 relative">
              {/* Badge */}
              <div className="w-100 h-100 md:w-150 md:h-150 z-10">
                <NextImage
                  quality={95}
                  layout="responsive"
                  width={data.badgeImage.width}
                  height={data.badgeImage.height}
                  src={data.badgeImage.src}
                  alt={data.badgeImage.alt}
                  objectFit="cover"
                  objectPosition={data.badgeImage.objectPosition}
                  priority={true}
                />
              </div>

              {/* Offer */}
              <div className="w-[220px] md:w-[341px] h-auto z-10 ml-auto lg:translate-x-20">
                <NextImage
                  quality={95}
                  layout="responsive"
                  width={data.offerImage.width}
                  height={data.offerImage.height}
                  src={data.offerImage.src}
                  alt={data.offerImage.alt}
                  objectFit="cover"
                  objectPosition={data.offerImage.objectPosition}
                  priority={true}
                />
              </div>

              {/* Background */}
              <div className="absolute left-0 top-0 -bottom-15 md:-bottom-50 lg:-top-60 -right-20 lg:right-auto lg:aspect-square sm:-right-40 overflow-hidden lg:overflow-visible">
                <div className="absolute top-0 left-0 -right-30 -bottom-50 md:-bottom-10 lg:-top-20 lg:-bottom-20 lg:-right-50">
                  <NextImage
                    quality={95}
                    layout="fill"
                    src={data.image.src}
                    alt={data.image.alt}
                    objectFit="cover"
                    objectPosition={data.image.objectPosition}
                    priority={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Phone link */}
        <a
          href={data.phoneLink.href}
          className="absolute left-0 bottom-10 md:bottom-20 inline-flex gap-8 md:gap-12 items-center text-teal-300 bg-white rounded-full p-8 md:p-12"
        >
          <PlusIcon className="w-18 h-18 md:w-30 md:h-30 shrink-0" />
          <span className="text-13 md:text-20">{data.phoneLink.label}</span>
        </a>
      </Container>
    </section>
  );
};

export default HeroSection;
