import classNames from "classnames";
import parse from "html-react-parser";
import { HTMLAttributes } from "react";
import data from "../../data/verkauf.json";
import { resolveEquipment, resolvePumps } from "../../lib/helpers";
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
      {/* Content */}
      <Container className="relative">
        <div className="grid grid-cols-16 gap-y-70">
          {/* Intro */}
          <div
            className={classNames(
              "col-start-1 col-end-[-1] md:col-start-3 md:col-end-[-3]"
            )}
          >
            <div
              className={classNames(
                richtextStyles.root,
                "text-20 md:text-25 leading-normal"
              )}
            >
              {parse(data.intro__html)}
            </div>
          </div>

          {/* Pumps */}
          <div className="col-start-2 col-end-[-2] md:col-start-3 md:col-end-[-3] lg:col-start-1 lg:col-end-[-1] lg:row-start-2">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-30 md:gap-60">
              {resolvePumps(data.pumps).map((pump) => (
                <Pump key={pump.id} pump={pump} />
              ))}
            </div>
          </div>

          {/* Hint */}
          <div className="col-start-2 col-end-[-2] md:col-start-3 md:col-end-[-3] lg:col-start-1 lg:col-end-9 lg:row-start-2 lg:self-end">
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
