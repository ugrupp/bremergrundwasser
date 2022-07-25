import classNames from "classnames";
import React, { AnchorHTMLAttributes } from "react";
import Image from "../components/image";
import { Image as ImageType } from "../types/image";
import { NEXT_IMAGE_DEFAULT_QUALITY } from "../lib/constants";
import styles from "../styles/teaser.module.css";
import ArrowIcon from "../assets/icons/arrow.svg";

type TeaserProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label: string;
  linkText?: string;
  image?: ImageType;
};

const Teaser = React.forwardRef<HTMLAnchorElement, TeaserProps>(
  ({ label, linkText, image, className, ...props }, ref) => {
    return (
      <a
        className={classNames(
          className,
          styles.root,
          "block aspect-square relative selection-inverted group"
        )}
        ref={ref}
        {...props}
      >
        {!!image && (
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
            dominantColor={image.dominantColor}
          />
        )}

        {/* Bg gradient */}
        <span className={classNames("absolute inset-0", styles.bg)}></span>

        <span className="absolute inset-0 z-10 flex flex-col gap-20 lg:gap-25 p-30 lg:p-40">
          {/* Label */}
          <span className="text-20 lg:text-25 leading-snug text-brown-700">
            {label}
          </span>

          {/* Linktext */}
          {!!linkText && (
            <span className="text-15 lg:text-20 leading-none text-white inline-flex gap-x-[0.5em] items-center whitespace-nowrap">
              <span>{linkText}</span>
              <ArrowIcon className="h-[0.75em] w-[0.75em] rotate-180 group-hover:translate-x-4 transition-transform" />
            </span>
          )}
        </span>
      </a>
    );
  }
);

Teaser.displayName = "Teaser";
export default Teaser;
