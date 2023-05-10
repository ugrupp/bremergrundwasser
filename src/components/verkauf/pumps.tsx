import classNames from "classnames";
import parse from "html-react-parser";
import { HTMLAttributes } from "react";
import data from "../../data/verkauf.json";
import { resolveEquipment, resolvePumps } from "../../lib/helpers";
import richtextStyles from "../../styles/richtext.module.css";
import Container from "../container";
import Equipment from "../equipment";
import Pump from "../pump";
import Pumpnhus from "./pumpnhus";
import InstallationFlatrate from "../installationFlatrate";

interface PumpsSectionProps extends HTMLAttributes<HTMLElement> {
  data: typeof data.pumps;
}

const PumpsSection = ({ data, className }: PumpsSectionProps): JSX.Element => {
  return (
    <section className={classNames(className, "relative")} id={data.id}>
      {/* Content */}
      <Container className="relative mb-90 lg:mb-[134px]">
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

          {/* Pumps top */}
          <div className="col-start-2 col-end-[-2] md:col-start-3 md:col-end-[-3] lg:col-start-1 lg:col-end-[-1]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-30 md:gap-60">
              {resolvePumps(data.pumpsTop).map((pump) => (
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

          {/* Pumps bottom */}
          <div className="col-start-2 col-end-[-2] md:col-start-3 md:col-end-[-3] lg:col-start-1 lg:col-end-[-1]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-30 md:gap-60">
              {resolvePumps(data.pumpsBottom).map((pump) => (
                <Pump key={pump.id} pump={pump} />
              ))}
            </div>
          </div>

          {/* Installation flatrate */}
          {resolveEquipment(data.installationFlatrate).map((installationFlatrate) => (
            <InstallationFlatrate key={installationFlatrate.id} installationFlatrate={installationFlatrate} />
          ))}

        </div>
      </Container>

      {/* Pumpnhus */}
      <Pumpnhus pumpnhus={data.pumpnhus} />

      <Container className="mt-90 lg:mt-[134px]">
        {/* Equipment bottom */}
        <div className="col-start-2 col-end-[-2] md:col-start-3 md:col-end-[-3] lg:col-start-1 lg:col-end-[-1]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-30 md:gap-60">
            {resolveEquipment(data.equipment).map((equipment) => (
              <Equipment key={equipment.id} equipment={equipment} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PumpsSection;
