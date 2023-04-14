import classNames from "classnames";
import parse from "html-react-parser";
import NextImage from "next/image";
import { HTMLAttributes, useState } from "react";
import data from "../../data/grundwasser.json";
import { NEXT_IMAGE_DEFAULT_QUALITY } from "../../lib/constants";
import richtextStyles from "../../styles/richtext.module.css";
import Container from "../container";
import Image from "../image";
import LinkButton from "../link-button";
import TextDialog from "../text-dialog";

interface IntroSectionProps extends HTMLAttributes<HTMLElement> {
  data: typeof data.intro;
}

const IntroSection = ({ data, className }: IntroSectionProps): JSX.Element => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section
      className={classNames(className, "relative pt-80 lg:py-120")}
      id={data.id}
    >
      <Container>
        <div className="grid grid-cols-16 gap-y-80 items-end">
          {/* Content */}
          <article
            className={classNames(
              "col-start-1 col-end-[-1] lg:col-end-9",
              richtextStyles.root,
              // Text
              "text-15 md:text-20 leading-normal",
              // Headlines
              "[&>h2]:text-25 md:[&>h2]:text-30"
            )}
          >
            <h2>{data.headline}</h2>
            {parse(data.body__html)}
            {data.moreLink && (
              <LinkButton
                link={data.moreLink}
                onClick={() => {
                  setDialogOpen(!dialogOpen);
                }}
              />
            )}
          </article>

          {/* Image */}
          <div className="col-start-5 col-end-[-1] lg:col-start-11 z-10">
            <div className="max-w-xs ml-auto lg:translate-y-200">
              <div className="aspect-square relative">
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
                    src={"/images/schwung.png"}
                    alt=""
                    objectFit="contain"
                    objectPosition={"100% 100%"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Content dialog */}
      {!!data.dialog__html && (
        <TextDialog open={dialogOpen} setOpen={setDialogOpen}>
          <article
            className={classNames(
              richtextStyles.root,
              // Text
              "text-15 md:text-20 leading-normal",
              // Headlines
              "[&>h3]:text-20 md:[&>h3]:text-25"
            )}
          >
            {parse(data.dialog__html)}
          </article>
        </TextDialog>
      )}
    </section>
  );
};

export default IntroSection;
