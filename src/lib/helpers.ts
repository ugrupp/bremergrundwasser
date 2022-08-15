import path from "path";
import { Product } from "../types/product";
import products from "../data/products.json";
import { find } from "lodash";
const ColorThief = require("colorthief");

// Set up dominant color for images
export const generateImagePlaceholders = async (data: any) => {
  const deepCustomize = async (inObject: any): Promise<any> => {
    if (typeof inObject !== "object" || inObject === null) {
      return inObject; // Return the value if inObject is not an object
    }

    let value,
      key,
      outObject: any = Array.isArray(inObject) ? [] : {};

    for (key in inObject) {
      value = inObject[key];

      // Update dominant color values
      if (typeof value?.dominantColor !== "undefined" && !!value?.src) {
        const [r, g, b] = await ColorThief.getColor(
          path.join("./public/", value.src)
        );
        const dominantColor = `rgb(${r},${g},${b})`;

        if (!!dominantColor) {
          value = {
            ...value,
            dominantColor,
          };
        }
      }

      outObject[key] = await deepCustomize(value);
    }

    return outObject;
  };

  return await deepCustomize(data);
};

export const resolvePumps = (pumpIDs: string[]): Product[] =>
  pumpIDs.flatMap((id) => {
    const resolvedProduct = find(products.pumps, { id });
    return resolvedProduct ? [resolvedProduct] : [];
  });

export const resolveEquipment = (equipmentIDs: string[]): Product[] =>
  equipmentIDs.flatMap((id) => {
    const resolvedProduct = find(products.equipment, { id });
    return resolvedProduct ? [resolvedProduct] : [];
  });

export const numberFormat = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});
