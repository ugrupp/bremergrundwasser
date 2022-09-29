import { Image } from "./image";
import { Link } from "./link";

export interface Feature {
  headline?: string;
  body__html?: string;
  moreLink?: Link;
  dialog__html?: string;
  image?: Image;
}
