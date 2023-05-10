import classNames from "classnames";
import parse from "html-react-parser";
import { numberFormat } from "../lib/helpers";
import richtextStyles from "../styles/richtext.module.css";

type InstallationFlatrateProps = {
  installationFlatrate: {
    id: string;
    title?: string;
    description__html?: string;
    priceHint?: string;
    price?: number;
  }
};

const InstallationFlatrate = (installationFlatrate: InstallationFlatrateProps): JSX.Element => {
  const {title, description__html, price, priceHint} = installationFlatrate.installationFlatrate
  return (
    <div
      className={classNames(
        "col-start-1 col-end-[-1] md:col-start-3 md:col-end-[-3] mt-20 lg:mt-60"
      )}
    >
      <div className="grid grid-cols-16">
        {/* Headline */}
        <h3
          className="col-start-2 col-end-[-2] md:col-start-1 md:col-end-[-1] lg:col-end-[7] text-20 md:text-25 leading-snug text-teal-300"
        >{title}</h3>

        <div className="col-start-2 col-end-[-2] md:col-start-1 md:col-end-[-1] lg:col-start-9 mt-20 lg:mt-0">
          {/* Description */}
          {!!description__html && (
            <div
              className={classNames(
                richtextStyles.root,
                "text-15 md:text-20 leading-normal"
              )}
            >
              {parse(description__html)}
            </div>
          )}
          {/* Price & price hint */}
          {!!price && (
            <div className="mt-25">
              {/* Price hint */}
              {!!priceHint && (
                <p className="text-12 md:text-16 leading-normal">{priceHint}</p>
              )}

              {/* Price */}
              <p className="text-20 md:text-25 leading-snug text-teal-300">
                nur {numberFormat.format(price / 100)}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstallationFlatrate;
