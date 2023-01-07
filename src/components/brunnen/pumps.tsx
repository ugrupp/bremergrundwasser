import classNames from "classnames";
import parse from "html-react-parser";
import { HTMLAttributes } from "react";
import data from "../../data/brunnen.json";
import { resolveEquipment, resolvePumps } from "../../lib/helpers";
import styles from "../../styles/pumps.module.css";
import richtextStyles from "../../styles/richtext.module.css";
import Container from "../container";
import Equipment from "../equipment";
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
          {/* Pumps */}
          <div className="col-start-2 col-end-[-2] md:col-start-3 md:col-end-[-3] lg:col-start-1 lg:col-end-[-1]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-30 md:gap-60">
              {resolvePumps(data.pumps).map((pump) => (
                <Pump key={pump.id} pump={pump} />
              ))}
            </div>
          </div>

          {/* Hint */}
          <div className="col-start-2 col-end-[-2] md:col-start-3 md:col-end-[-3] lg:col-start-1 lg:col-end-9">
            <div
              className={classNames(
                richtextStyles.root,
                "text-15 md:text-20 leading-normal"
              )}
            >
              {parse(data.hint__html)}
            </div>
          </div>

          {/* Equipment */}
          <div className="col-start-2 col-end-[-2] md:col-start-3 md:col-end-[-3] lg:col-start-1 lg:col-end-[-1]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-30 md:gap-60">
              {resolveEquipment(data.equipment).map((equipment) => (
                <Equipment key={equipment.id} equipment={equipment} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PumpsSection;
