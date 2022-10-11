import classNames from "classnames";
import parse from "html-react-parser";
import { HTMLAttributes, useEffect, useRef, useState } from "react";
import data from "../../data/index.json";
import PlayIcon from "../../assets/icons/play.svg";
import richtextStyles from "../../styles/richtext.module.css";
import Container from "../container";

interface VideoSectionProps extends HTMLAttributes<HTMLElement> {
  data: typeof data.video;
}

const VideoSection = ({ data, className }: VideoSectionProps): JSX.Element => {
  const [hasPlayed, setHasPlayed] = useState<boolean>(false);
  const [activeVideo, setActiveVideo] = useState<string>(
    data.videos?.[0]?.url ?? ""
  );

  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("play", () => {
        setHasPlayed(true);
      });
    }
  }, []);

  // Trigger load event after URL has changed
  useEffect(() => {
    videoRef.current?.load();
  }, [activeVideo]);

  return (
    <section className={classNames(className, "relative")} id={data.id}>
      <Container>
        <div className="grid grid-cols-16">
          <div
            className={classNames(
              "col-start-1 col-end-[-1] md:col-start-3 md:col-end-[-3]"
            )}
          >
            <div className="aspect-video bg-brown-700 text-teal-300 relative">
              <video
                ref={videoRef}
                className="absolute h-full w-full object-cover"
                controls={hasPlayed}
                autoPlay={hasPlayed}
                playsInline
              >
                <source src={activeVideo} type="video/mp4" />
                Download the <a href={activeVideo}>MP4</a> video.
              </video>

              {/* Play button */}
              {!hasPlayed && (
                <button
                  className="absolute inset-0 z-10"
                  onClick={() => {
                    videoRef.current?.play();
                  }}
                >
                  <span className="absolute h-40 w-40 md:h-60 md:w-60 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-300 rounded-full flex items-center justify-center">
                    <PlayIcon className="h-2/5 w-2/5 text-white translate-x-[10%]" />
                  </span>
                </button>
              )}
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
                    "underline decoration-dashed decoration-1 underline-offset-[.4em]":
                      url === activeVideo,
                  })}
                  onClick={(e) => {
                    setActiveVideo(url);
                    e.preventDefault();
                  }}
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
