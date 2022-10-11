import classNames from "classnames";
import parse from "html-react-parser";
import Link from "next/link";
import { HTMLAttributes } from "react";
import ArrowIcon from "../../assets/icons/arrow.svg";
import data from "../../data/anfrage-brunnen.json";
import richtextStyles from "../../styles/richtext.module.css";
import Container from "../container";
import Checkbox from "../form-elements/checkbox";
import Input from "../form-elements/input";
import Radio from "../form-elements/radio";
import Textarea from "../form-elements/textarea";

interface FormSectionProps extends HTMLAttributes<HTMLElement> {
  data: typeof data.form;
}

const FormSection = ({ data, className }: FormSectionProps): JSX.Element => {
  return (
    <section
      className={classNames(
        className,
        "relative py-80 lg:py-120 bg-white bg-gradient-to-b from-brown-700/5"
      )}
      id={data.id}
    >
      <Container>
        <div className="grid grid-cols-16">
          <form
            method="post"
            action="https://submit-form.com/8LJHvRJL"
            className="col-start-1 col-end-[-1] sm:col-end-[-5] lg:col-start-3 lg:col-end-[-3]"
          >
            <fieldset className="space-y-30 md:space-y-40">
              <Input required id="name" name="name" label="Vor- + Nachname" />
              <Input id="street" name="street" label="Straße + Hausnummer" />
              <Input id="city" name="city" label="Postleitzahl + Ort" />
              <Input
                required
                id="email"
                name="email"
                label="E-Mail-Adresse"
                type="email"
              />
              <Input id="phone" name="phone" label="Telefon" type="tel" />
            </fieldset>

            <fieldset className="mt-60 md:mt-70 space-y-30 md:space-y-40">
              <legend className="text-20 md:text-25 leading-tight text-teal-300">
                Brunnenanmeldung
              </legend>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-40 gap-x-60">
                <div className="lg:col-span-3 space-y-30 md:space-y-40 text-base md:text-20 leading-normal">
                  <Radio
                    id="register-client"
                    name="register"
                    required
                    label="durch Kunde"
                    value="Brunnenanmeldung durch Kunde"
                  />
                  <Radio
                    id="register-bremergrundwasser"
                    name="register"
                    required
                    label="durch bremergrundwasser* (+49,00 €)"
                    value="Brunnenanmeldung durch bremergrundwasser"
                  />
                </div>

                <div
                  className={classNames(
                    "lg:col-span-2",
                    richtextStyles.root,
                    // Text
                    "text-12 md:text-16 leading-normal"
                  )}
                >
                  {parse(data.hint__html)}
                </div>
              </div>
            </fieldset>

            <fieldset className="mt-60 md:mt-70 space-y-30 md:space-y-40">
              <legend className="text-20 md:text-25 leading-tight text-teal-300">
                Ihre Nachricht
              </legend>

              <Textarea id="message" name="message" />
            </fieldset>

            <div className="mt-60 md:mt-70 grid grid-cols-1 lg:grid-cols-2 gap-y-40 gap-x-60">
              <Checkbox
                required
                className="text-12 md:text-16 leading-normal"
                id="privacy-consent"
                name="_privacy"
                label={
                  <>
                    Ich erkläre mich mit den{" "}
                    <Link href={"/datenschutz"}>
                      <a target={"_blank"} className="underline">
                        Datenschutzbestimmungen
                      </a>
                    </Link>{" "}
                    einverstanden.
                  </>
                }
                value="Einverstanden"
              />

              {/* Submit */}
              <button
                type="submit"
                className="lg:ml-auto lg:text-right text-base md:text-20 leading-normal text-teal-300 inline-flex gap-x-[0.5em] items-center whitespace-nowrap group"
              >
                Anfrage senden
                <ArrowIcon className="h-[0.75em] w-[0.75em] rotate-180 group-hover:translate-x-4 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default FormSection;
