import classNames from "classnames";
import parse from "html-react-parser";
import Link from "next/link";
import { HTMLAttributes } from "react";
import data from "../../data/index.json";
import richtextStyles from "../../styles/richtext.module.css";
import Container from "../container";
import Teaser from "../teaser";

interface ContactSectionProps extends HTMLAttributes<HTMLElement> {
  data: typeof data.contact;
}

const ContactSection = ({
  data,
  className,
}: ContactSectionProps): JSX.Element => {
  return (
    <section className={classNames(className, "relative")} id={data.id}>
      <Container>
        <div className="grid grid-cols-16 gap-y-60">
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

          {/* Teasers */}
          <div className="col-start-5 col-end-[-1] lg:col-start-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-30 md:gap-60">
              {data.links.map(({ href, label, image }) => (
                <Link href={href} key={href} passHref>
                  <Teaser label={label} linkText="weiter" image={image} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
