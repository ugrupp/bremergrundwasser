import classNames from "classnames";
import NextImage from "next/image";
import { HTMLAttributes, useState } from "react";
import data from "../data/bewaesserung.json";
import { NEXT_IMAGE_DEFAULT_QUALITY } from "../lib/constants";
import styles from "../styles/hero.module.css";
import Container from "./container";

interface HeroSectionProps extends HTMLAttributes<HTMLElement> {
  data: typeof data.hero;
}

const HeroSection = ({ data, className }: HeroSectionProps): JSX.Element => {
  const [isImageLoadingComplete, setIsImageLoadingComplete] =
    useState<boolean>(false);
  const [isSchwungLoadingComplete, setIsSchwungLoadingComplete] =
    useState<boolean>(false);

  const imagesLoaded = isImageLoadingComplete && isSchwungLoadingComplete;

  return (
    <section
      className={classNames(
        className,
        "relative bg-brown-700/5 overflow-hidden"
      )}
      id={data.id}
    >
      <Container classNameInner="relative">
        <div
          className={classNames(
            "flex items-center justify-center",
            styles.frame
          )}
        >
          <div className="h-[115%] md:h-[150%] w-[115%] shrink-0 flex items-center justify-center">
            <div className="aspect-square min-w-full min-h-full relative shrink-0 rounded-full overflow-hidden">
              <div className="!absolute inset-0 bg-brown-700/5"></div>

              <div
                className={classNames(
                  "relative w-full h-full rounded-full overflow-hidden z-10 transition-opacity duration-500",
                  {
                    "opacity-0": !imagesLoaded,
                  }
                )}
              >
                <NextImage
                  quality={NEXT_IMAGE_DEFAULT_QUALITY}
                  layout="fill"
                  src={data.image.src}
                  alt={data.image.alt}
                  objectFit="cover"
                  objectPosition={data.image.objectPosition}
                  priority
                  onLoadingComplete={() => {
                    setIsImageLoadingComplete(true);
                  }}
                />
              </div>

              <div
                className={classNames(
                  "!absolute inset-0 z-20 transition-opacity duration-500",
                  {
                    "opacity-0": !imagesLoaded,
                  }
                )}
              >
                <NextImage
                  quality={NEXT_IMAGE_DEFAULT_QUALITY}
                  layout="fill"
                  src={"/images/schwung_bottom.png"}
                  alt=""
                  objectFit="contain"
                  objectPosition={"100% 100%"}
                  priority
                  onLoadingComplete={() => {
                    setIsSchwungLoadingComplete(true);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
