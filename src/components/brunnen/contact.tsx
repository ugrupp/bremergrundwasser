import classNames from "classnames";
import parse from "html-react-parser";
import Link from "next/link";
import { HTMLAttributes } from "react";
import data from "../../data/brunnen.json";
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
        <div className="grid grid-cols-16 gap-y-80">
          <article
            className={classNames(
              "col-start-1 col-end-[-1] lg:col-end-9 lg:pt-50",
              richtextStyles.root,
              // Text
              "text-15 md:text-20 leading-normal"
            )}
          >
            {parse(data.body__html)}
          </article>

          {/* Teaser */}
          <div className="col-start-5 col-end-[-1] lg:col-start-11">
            <div className="max-w-xs ml-auto">
              <Link href={data.teaser.href} passHref>
                <Teaser
                  label={data.teaser.label}
                  linkText={data.teaser.linkText}
                  image={data.teaser.image}
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
