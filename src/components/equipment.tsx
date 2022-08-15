import classNames from "classnames";
import parse from "html-react-parser";
import Image from "./image";
import { NEXT_IMAGE_DEFAULT_QUALITY } from "../lib/constants";
import { numberFormat } from "../lib/helpers";
import richtextStyles from "../styles/richtext.module.css";
import { Product } from "../types/product";

type EquipmentProps = {
  equipment: Product;
};

const Equipment = ({ equipment }: EquipmentProps): JSX.Element => {
  const { id, image, title, price, priceHint, description__html } = equipment;

  return (
    <div className="relative" id={id}>
      <div className="space-y-20 md:space-y-25">
        {/* Headline */}
        <h3
          className={classNames(
            "text-20 md:text-25 leading-snug text-teal-300",
            {
              "!-mb-60 relative z-10": !!image,
            }
          )}
        >
          {title}
        </h3>

        {/* Optional image */}
        {!!image && (
          <div className="aspect-square w-10/12 ml-auto max-w-[260px]">
            <Image
              wrapperProps={{
                className: "w-full h-full",
              }}
              quality={NEXT_IMAGE_DEFAULT_QUALITY}
              layout="fill"
              src={image.src}
              alt={image.alt}
              objectFit="cover"
              objectPosition={image.objectPosition}
            />
          </div>
        )}

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
          </div>
        )}
      </div>
    </div>
  );
};

export default Equipment;
