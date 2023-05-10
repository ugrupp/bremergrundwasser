import classNames from "classnames";
import parse from "html-react-parser";
import Image from "../../components/image";
import { NEXT_IMAGE_DEFAULT_QUALITY } from "../../lib/constants";
import data from "../../data/verkauf.json";
import { numberFormat } from "../../lib/helpers";
import richtextStyles from "../../styles/richtext.module.css";
import Container from "../container";
import FscIcon from "../../assets/icons/fsc.svg";

type PumpnhusProps = {
  pumpnhus: typeof data.pumps.pumpnhus
};

const Pumpnhus = (pumpnhus: PumpnhusProps): JSX.Element => {
  const {body__html, headline, image, price, priceHint} = pumpnhus.pumpnhus
  return (
    <Container className="bg-teal-300 py-90 lg:py-[134px]">
      <div className="grid grid-cols-16">

        {/* Headline */}
        <div
          className={classNames(
            "col-start-2 col-end-[-2] md:col-start-3 md:col-end-[-3] lg:col-end-[7] mb-20"
          )}
        >
          <h3
            className="text-20 md:text-25 leading-snug text-white"
          >{headline}</h3>
        </div>

        {/* Image */}
        <div className="max-w-sm relative col-start-2 col-end-[-2] md:col-start-3 md:col-end-[-3] lg:col-end-[9]">
          <Image
            quality={NEXT_IMAGE_DEFAULT_QUALITY}
            layout="responsive"
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            objectFit="cover"
            objectPosition={image.objectPosition}
            dominantColor={image.dominantColor}
            />
          <FscIcon className="w-1/5 absolute bottom-30 md:bottom-40 left-20 md:left-30" />
        </div>

        {/* Description */}
        <div className="col-start-2 col-end-[-2] md:col-start-3 md:col-end-[-3] lg:col-start-9">
          <div
            className={classNames(
              richtextStyles.root,
              "text-15 md:text-20 leading-normal"
            )}
          >
            {parse(body__html)}
          </div>
          {/* Price & price hint */}
          <div className="mt-25">
            {/* Price hint */}
            <p className="text-12 md:text-16 leading-normal">{priceHint}</p>
            {/* Price */}
            <p className="text-20 md:text-25 leading-snug text-white">
              nur {numberFormat.format(price / 100)}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Pumpnhus;
