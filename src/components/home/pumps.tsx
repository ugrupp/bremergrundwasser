import classNames from "classnames";
import parse from "html-react-parser";
import Link from "next/link";
import { HTMLAttributes } from "react";
import ArrowIcon from "../../assets/icons/arrow.svg";
import data from "../../data/index.json";
import { resolvePumps } from "../../lib/helpers";
import styles from "../../styles/pumps.module.css";
import richtextStyles from "../../styles/richtext.module.css";
import Container from "../container";
import Pump from "../pump";

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
        <div className="grid grid-cols-16 gap-y-70">
          {/* Headline */}
          <h2 className="col-start-1 col-end-[-1] text-25 md:text-30 leading-snug text-teal-300 -mb-10">
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

              {!!data.link && (
                <Link href={data.link.href}>
                  <a className="text-15 md:text-20 leading-none inline-flex gap-x-[0.5em] items-center whitespace-nowrap group">
                    <span>{data.link.label}</span>
                    <ArrowIcon className="h-[0.75em] w-[0.75em] rotate-180 group-hover:translate-x-4 transition-transform" />
                  </a>
                </Link>
              )}
            </div>
          </div>

          {/* Pumps */}
          <div className="col-start-2 col-end-[-2] md:col-start-3 md:col-end-[-3] lg:col-start-1 lg:col-end-[-1]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-30 md:gap-60">
              {resolvePumps(data.pumps).map((pump) => (
                <Pump key={pump.id} pump={pump} />
              ))}
            </div>
          </div>

          {/* Hint */}
          <div className="col-start-2 col-end-[-2] md:col-start-3 md:col-end-[-3] lg:col-start-9 lg:col-end-[-1]">
            <div
              className={classNames(
                richtextStyles.root,
                "text-15 md:text-20 leading-normal"
              )}
            >
              {parse(data.hint__html)}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PumpsSection;
