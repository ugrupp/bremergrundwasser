import classNames from "classnames";
import parse from "html-react-parser";
import Image from "../components/image";
import { NEXT_IMAGE_DEFAULT_QUALITY } from "../lib/constants";
import { numberFormat } from "../lib/helpers";
import richtextStyles from "../styles/richtext.module.css";
import { Product } from "../types/product";
import products from "../data/products.json";

type PumpProps = {
  pump: Product;
};

const Pump = ({ pump }: PumpProps): JSX.Element => {
  const { id, image, multi, related, inlineImage } = pump;

  return (
    <div className="relative" id={id}>
      {/* Image */}
      {!!image && (
        <div
          className={classNames(
            inlineImage ? "-mb-80 md:-mb-90 w-1/2 lg:w-4/6 ml-auto" : "-mb-50 md:-mb-60 max-w-sm mx-auto",
          )}
        >
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
        </div>
      )}

      {/* Content */}
      <div className="bg-white rounded-[20px] p-30 pt-50 md:pt-60">
        {multi ? (
          <div className="space-y-40">
            {multi.map((pump) => (
              <PumpInfo pump={pump} key={pump.id} />
            ))}
          </div>
        ) : (
          <PumpInfo pump={pump} />
        )}
      </div>

      {/* Related content */}
      {!!related && (
        <div>
          <p className="px-30 pb-15 pt-30 text-15 md:text-20 text-teal-300">Dazu passend</p>
          <div className="bg-white rounded-[20px] p-30">
            <div className="space-y-40">
              {related.map((pump) => (
                <PumpInfo pump={pump} key={pump.id} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pump;

type PumpInfoProps = {
  pump: Product;
};

const PumpInfo = ({ pump }: PumpInfoProps): JSX.Element => {
  const { description__html, price, priceHint, title, inlineImage } = pump;

  return (
    <div className="space-y-20 md:space-y-25">
      {/* Headline */}
      <h3
        className={classNames(
          "text-20 md:text-25 leading-snug text-teal-300",
          inlineImage ? "w-4/6" : "",
        )}
      >{title}</h3>

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
        <div>
          {/* Price hint */}
          {!!priceHint && (
            <p className="text-12 md:text-16 leading-normal">{priceHint}</p>
          )}

          {/* Price */}
          <p className="text-20 md:text-25 leading-snug text-teal-300">
            nur {numberFormat.format(price / 100)}
          </p>

          {/* Price disclaimer */}
          {!!products.disclaimer && (
            <div
              className={classNames(
                "text-12 md:text-16 leading-normal",
                "opacity-50"
              )}
            >
              <p>{products.disclaimer}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
