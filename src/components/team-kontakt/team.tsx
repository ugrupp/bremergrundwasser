import classNames from "classnames";
import parse from "html-react-parser";
import { HTMLAttributes } from "react";
import data from "../../data/team-kontakt.json";
import { NEXT_IMAGE_DEFAULT_QUALITY } from "../../lib/constants";
import richtextStyles from "../../styles/richtext.module.css";
import Container from "../container";
import Image from "../image";

interface TeamSectionProps extends HTMLAttributes<HTMLElement> {
  data: typeof data.team;
}

const TeamSection = ({ data, className }: TeamSectionProps): JSX.Element => {
  return (
    <section className={classNames(className, "relative")} id={data.id}>
      <Container>
        <div className="grid grid-cols-16">
          <ul className="col-start-2 col-end-[-5] sm:col-end-[-2] xl:col-start-3 xl:col-end-[-3] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-40 gap-y-50 md:gap-y-70">
            {data.team.map(({ name, description, image }, index) => (
              <li key={index}>
                {/* Image */}
                <div
                  className={classNames(
                    "aspect-square w-[100px] overflow-hidden rounded-full",
                    {
                      "bg-white/25": !image,
                    }
                  )}
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
                    />
                  )}
                </div>

                {/* Info */}
                <div
                  className={classNames(
                    "mt-25 md:mt-30",
                    richtextStyles.root,
                    richtextStyles["on-teal"],
                    // Text
                    "text-15 md:text-20 leading-normal",
                    // Headlines
                    "[&>h2]:text-20 md:[&>h2]:text-25 [&>h2]:!mb-0"
                  )}
                >
                  {!!name && <h2>{parse(name)}</h2>}
                  {!!description && <p>{parse(description)}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;
