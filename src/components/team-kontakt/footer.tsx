import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { HTMLAttributes } from "react";
import ArrowIcon from "../../assets/icons/arrow.svg";
import Image from "../../components/image";
import staticData from "../../data/static.json";
import { NEXT_IMAGE_DEFAULT_QUALITY } from "../../lib/constants";
import Container from "../container";

interface FooterProps {
  data: typeof staticData.footer;
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(({ data }, ref) => {
  const year = String(new Date().getFullYear());

  return (
    <footer
      className="bg-teal-200 text-white selection-inverted relative"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden flex items-end">
        {/* Image */}
        <Image
          wrapperProps={{
            className: classNames("w-full h-1/2"),
          }}
          quality={NEXT_IMAGE_DEFAULT_QUALITY}
          layout="fill"
          src={data.bgImage.src}
          alt={data.bgImage.alt}
          objectFit="cover"
          objectPosition={data.bgImage.objectPosition}
          dominantColor={data.bgImage.dominantColor}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-teal-200 via-teal-200 to-teal-200/50" />
      </div>

      {/* Content */}
      <div className="relative">
        <Container className="pt-80 lg:pt-120 pb-[300px] md:pb-[400px]">
          <div className="grid grid-cols-16 items-end">
            <div className="col-start-2 col-end-[-2] md:col-start-3 md:col-end-[-3] lg:col-start-10 xl:col-start-11 text-12 md:text-16 space-y-25 border-l border-dashed border-white/75 pl-20 lg:pl-30">
              {/* Links */}
              <div className="flex flex-col items-start gap-y-2">
                {[data.privacyLink, data.imprintLink].map((link) => (
                  <Link href={link.href} key={link.href}>
                    <a className="leading-normal inline-flex gap-x-[0.5em] items-center whitespace-nowrap group">
                      <span>{link.label}</span>
                      <ArrowIcon className="h-[0.75em] w-[0.75em] rotate-180 group-hover:translate-x-4 transition-transform" />
                    </a>
                  </Link>
                ))}
              </div>

              {/* Legal hint */}
              <p>{data.legalHint.replace("{year}", year)}</p>

              {/* Copyright */}
              <p>{data.copyright.replace("{year}", year)}</p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
export default Footer;

const Headline = ({
  label,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement> & { label: string }) => (
  <h4
    className={classNames(
      "text-15 lg:text-20 underline decoration-dashed decoration-1 underline-offset-[.4em] decoration-white/75",
      className
    )}
    {...props}
  >
    {label}
  </h4>
);
