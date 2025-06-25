import { Image } from "./image";

export type Product = {
  id: string;
  title?: string;
  description__html?: string;
  priceHint?: string;
  price?: number;
  image?: Image;
  inlineImage?: boolean;
  related?: Product[];
};
