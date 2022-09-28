import { ForwardedRef, forwardRef } from "react";
import ArrowIcon from "../assets/icons/arrow.svg";
import { Link } from "../types/link";

type LinkButtonProps = JSX.IntrinsicElements["button"] & {
  link: Link;
};

const LinkButton = forwardRef<HTMLButtonElement, LinkButtonProps>(
  (props, ref): JSX.Element => {
    return (
      <button
        {...props}
        className="leading-normal inline-flex gap-x-[0.5em] items-center whitespace-nowrap group"
        ref={ref as ForwardedRef<HTMLButtonElement>}
        type={props.type ?? "button"}
      >
        <span>{props.link.label}</span>
        <ArrowIcon className="h-[0.75em] w-[0.75em] rotate-180 group-hover:translate-x-4 transition-transform" />
      </button>
    );
  }
);

LinkButton.displayName = "LinkButton";
export default LinkButton;
