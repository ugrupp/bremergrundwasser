import classNames from "classnames";
import NextImage from "next/image";
import Image from "./image";
import { HTMLAttributes } from "react";
import data from "../data/bewaesserung.json";
import Container from "./container";
import { NEXT_IMAGE_DEFAULT_QUALITY } from "../lib/constants";
import styles from "../styles/hero.module.css";

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
      <Container classNameInner="relative">
        <div
          className={classNames(
            "flex items-center justify-center",
            styles.frame
          )}
        >
          <div className="h-[115%] md:h-[150%] w-[115%] shrink-0 flex items-center justify-center">
            <div className="aspect-square min-w-full min-h-full relative shrink-0">
              <Image
                wrapperProps={{
                  className: "w-full h-full rounded-full overflow-hidden",
                }}
                quality={NEXT_IMAGE_DEFAULT_QUALITY}
                layout="fill"
                src={data.image.src}
                alt={data.image.alt}
                objectFit="cover"
                objectPosition={data.image.objectPosition}
                dominantColor={data.image.dominantColor}
              />

              <div className="!absolute inset-0">
                <NextImage
                  quality={NEXT_IMAGE_DEFAULT_QUALITY}
                  layout="fill"
                  src={"/images/schwung_bottom.png"}
                  alt=""
                  objectFit="contain"
                  objectPosition={"100% 100%"}
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
