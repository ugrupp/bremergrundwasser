import classNames from "classnames";
import type { HTMLAttributes } from "react";

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  classNameInner?: string;
  px?: string;
  maxW?: string;
};

export const Container = ({
  children,
  className,
  classNameInner,
  px = "px-20 sm:px-40",
  maxW = "max-w-container-lg",
}: ContainerProps): JSX.Element => (
  <div className={classNames(px, className)}>
    <div className={classNames("mx-auto", maxW, classNameInner)}>
      {children}
    </div>
  </div>
);

export default Container;
