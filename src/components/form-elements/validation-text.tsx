import React from "react";
import classNames from "classnames";

interface ValidationTextProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string;
}

const ValidationText = ({
  text,
  className,
  ...props
}: ValidationTextProps): JSX.Element => (
  <p
    className={classNames(className, "text-sm leading-snug text-sun-red-700")}
    {...props}
  >
    {text}
  </p>
);

export default ValidationText;
