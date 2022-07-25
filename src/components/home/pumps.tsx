import classNames from "classnames";
import parse from "html-react-parser";
import { HTMLAttributes } from "react";
import data from "../../data/index.json";
import richtextStyles from "../../styles/richtext.module.css";
import styles from "../../styles/pumps.module.css";
import Container from "../container";

interface PumpsSectionProps extends HTMLAttributes<HTMLElement> {
  data: typeof data.pumps;
}

const PumpsSection = ({ data, className }: PumpsSectionProps): JSX.Element => {
  return (
    <section className={classNames(className, "relative")} id={data.id}>
      {/* BG */}
      <div
        className={classNames(
          styles.bg,
          "absolute inset-x-0 bottom-0 -top-150 lg:-top-200 opacity-5"
        )}
      />

      {/* Content */}
      <Container className="relative">
        <div className="grid grid-cols-16 gap-y-60">
          {/* Headline */}
          <h2 className="col-start-1 col-end-[-1] text-25 md:text-30 leading-snug text-teal-300">
            {data.headline}
          </h2>

          {/* Intro */}
          <div
            className={classNames(
              "col-start-1 col-end-[-1] md:col-start-3 md:col-end-[-3] lg:col-start-9 lg:col-end-[-1]"
            )}
          >
            <div
              className={classNames(
                richtextStyles.root,
                "text-15 md:text-20 leading-normal"
              )}
            >
              {parse(data.intro__html)}
            </div>
          </div>

          {/* Pumps */}
          <div className="col-start-5 col-end-[-1] lg:col-start-1">Pumps</div>
        </div>
      </Container>
    </section>
  );
};

export default PumpsSection;
