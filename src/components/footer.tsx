import classNames from "classnames";
import parse from "html-react-parser";
import Link from "next/link";
import { HTMLAttributes } from "react";
import Image from "../components/image";
import staticData from "../data/static.json";
import { NEXT_IMAGE_DEFAULT_QUALITY } from "../lib/constants";
import richtextStyles from "../styles/richtext.module.css";
import Container from "./container";
import ArrowIcon from "../assets/icons/arrow.svg";
import React from "react";
import { useRouter } from "next/router";
import { Image as ImageType } from "../types/image";

interface FooterProps {
  data: typeof staticData.footer;
  bgImage?: ImageType;
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ data, bgImage }, ref) => {
    const year = String(new Date().getFullYear());
    const resolvedBgImage = bgImage ?? data.bgImage;
    const router = useRouter();

    return (
      <footer
        className="bg-teal-300 text-white selection-inverted relative"
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
            src={resolvedBgImage.src}
            alt={resolvedBgImage.alt}
            objectFit="cover"
            objectPosition={resolvedBgImage.objectPosition}
            dominantColor={resolvedBgImage.dominantColor}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-teal-300 via-teal-300 to-teal-200/50" />
        </div>

        {/* Content */}
        <div className="relative">
          <Container className="pt-80 lg:pt-120 pb-[300px] md:pb-[400px]">
            <div className="grid grid-cols-16 gap-y-80 items-end">
              <div className="col-start-2 col-end-[-2] md:col-start-3 md:col-end-[-3] lg:col-end-9 space-y-50 lg:space-y-60">
                {/* Contact */}
                {!!data.contact && (
                  <div>
                    <Headline label={data.contact.headline} />

                    <div
                      className={classNames(
                        "mt-20",
                        richtextStyles.root,
                        richtextStyles["on-teal"],
                        // Text
                        "text-20 lg:text-25 leading-normal"
                      )}
                    >
                      {parse(data.contact.content)}
                    </div>
                  </div>
                )}

                {/* Address */}
                {!!data.address && (
                  <div>
                    <Headline label={data.address.headline} />

                    <div
                      className={classNames(
                        "mt-20",
                        richtextStyles.root,
                        richtextStyles["on-teal"],
                        // Text
                        "text-20 lg:text-25 leading-normal",
                        // Links
                        "[&_a]:!text-brown-700 [&_a:hover]:!text-white"
                      )}
                    >
                      {parse(data.address.content)}
                    </div>
                  </div>
                )}

                {/* Message */}
                {!!data.message && (
                  <div>
                    <Headline label={data.message.headline} />

                    <div
                      className={classNames(
                        "mt-20",
                        richtextStyles.root,
                        richtextStyles["on-teal"],
                        // Text
                        "text-20 lg:text-25 leading-normal",
                        // Links
                        "[&_a]:!text-brown-700 [&_a:hover]:!text-white"
                      )}
                    >
                      {parse(data.message.content)}
                    </div>
                  </div>
                )}
              </div>

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

                {/*
                  Guarantee
                  Show the guarantee only on the homepage or the brunnen page
                  because are the only pages with a link to the guarantee.
                */}
                {(router.pathname === "/" ||
                  router.pathname === "/brunnen") && <p>{data.guarantee}</p>}

                {/* Copyright */}
                <p>{data.copyright.replace("{year}", year)}</p>
              </div>
            </div>
          </Container>
        </div>
      </footer>
    );
  }
);

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
