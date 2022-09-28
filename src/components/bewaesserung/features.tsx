import classNames from "classnames";
import parse from "html-react-parser";
import { Fragment, HTMLAttributes, useState } from "react";
import data from "../../data/grundwasser.json";
import richtextStyles from "../../styles/richtext.module.css";
import Container from "../container";
import LinkButton from "../link-button";
import TextDialog from "../text-dialog";

interface FeaturesSectionProps extends HTMLAttributes<HTMLElement> {
  data: typeof data.features;
}

const FeaturesSection = ({
  data,
  className,
}: FeaturesSectionProps): JSX.Element => {
  const [dialogs, setDialogs] = useState<boolean[]>(
    data.features.map(() => false)
  );

  return (
    <section
      className={classNames(
        className,
        "relative py-80 lg:py-120 bg-white bg-gradient-to-b from-brown-700/5"
      )}
      id={data.id}
    >
      <Container>
        <div className="grid grid-cols-16 gap-y-50 md:gap-y-120">
          {data.features.map(
            ({ headline, body__html, moreLink, dialog__html }, index) => (
              <Fragment key={index}>
                <article
                  className={classNames(
                    "col-start-2 col-end-[-2]",
                    {
                      "md:col-start-1 md:col-end-8 lg:col-start-3":
                        index % 2 === 0,
                      "md:col-start-10 md:col-end-[-1] lg:col-end-[-3]":
                        index % 2 === 1,
                    },
                    richtextStyles.root,
                    // Text
                    "text-15 md:text-20 leading-normal",
                    // Headlines
                    "[&>h2]:text-20 md:[&>h2]:text-25"
                  )}
                >
                  <h2>{headline}</h2>
                  {parse(body__html)}
                  {moreLink && (
                    <LinkButton
                      link={moreLink}
                      onClick={() => {
                        setDialogs((previousDialogs) =>
                          previousDialogs.map((dialogOpen, dialogIndex) =>
                            dialogIndex === index ? !dialogOpen : dialogOpen
                          )
                        );
                      }}
                    />
                  )}
                </article>

                {/* Content dialog */}
                {!!dialog__html && (
                  <TextDialog
                    open={dialogs[index]}
                    setOpen={(newOpen) => {
                      setDialogs((previousDialogs) =>
                        previousDialogs.map((dialogOpen, dialogIndex) =>
                          dialogIndex === index ? newOpen : dialogOpen
                        )
                      );
                    }}
                  >
                    <article
                      className={classNames(
                        richtextStyles.root,
                        // Text
                        "text-15 md:text-20 leading-normal",
                        // Headlines
                        "[&>h3]:text-20 md:[&>h3]:text-25"
                      )}
                    >
                      {parse(dialog__html)}
                    </article>
                  </TextDialog>
                )}
              </Fragment>
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
