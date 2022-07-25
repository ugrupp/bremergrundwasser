import classNames from "classnames";
import parse from "html-react-parser";
import { HTMLAttributes } from "react";
import data from "../../data/index.json";
import richtextStyles from "../../styles/richtext.module.css";
import Container from "../container";

interface VideoSectionProps extends HTMLAttributes<HTMLElement> {
  data: typeof data.video;
}

const VideoSection = ({ data, className }: VideoSectionProps): JSX.Element => {
  return (
    <section className={classNames(className, "relative")} id={data.id}>
      <Container>
        <div className="grid grid-cols-16">
          <div
            className={classNames(
              "col-start-1 col-end-[-1] md:col-start-3 md:col-end-[-3]"
            )}
          >
            <div className="aspect-video bg-brown-700 text-teal-300">
              {/* TODO: sources / YouTube / Vimeo / ... */}
            </div>

            <div
              className={classNames(
                "mt-25 md:mt-30 text-15 md:text-20 leading-normal flex justify-center gap-x-40",
                richtextStyles.root
              )}
            >
              {data.videos.map(({ label__html, url }, index) => (
                <a
                  href={url}
                  key={url}
                  className={classNames("relative !text-inherit", {
                    "before:h-full before:border-l before:border-dashed before:border-teal-300 before:absolute before:-left-20 before:inset-y-0 before:pointer-events-none":
                      index > 0,
                  })}
                >
                  {parse(label__html)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VideoSection;
