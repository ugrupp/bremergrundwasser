import classNames from "classnames";
import ValidationText from "./validation-text";
import styles from "../../styles/form-elements.module.css";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: React.ReactNode;
  hasValidationError?: boolean;
  validationErrorText?: string;
}

const Checkbox = ({
  id,
  disabled,
  label,
  className,
  hasValidationError = false,
  validationErrorText,
  ...props
}: CheckboxProps): JSX.Element => (
  <div className={classNames(className)}>
    <div className={classNames("relative flex items-center group")}>
      {/* Input box */}
      <input
        id={id}
        type="checkbox"
        disabled={disabled}
        className={classNames(
          // Reset
          "appearance-none p-0 inline-block align-middle bg-origin-border select-none shrink-0",

          // Base
          styles.checkbox,
          "h-40 w-40 border border-dashed disabled:cursor-not-allowed",
          disabled
            ? "text-brown-700/50 border-brown-700/50"
            : hasValidationError
            ? "text-red-400 border-red-400 group-hover:border-red-400"
            : "text-brown-700 border-brown-700 group-hover:brown-700",

          // Focus
          "focus:outline-none focus-visible:ring-4 focus-visible:ring-brown-700/25",

          // Checked state
          "checked:bg-no-repeat checked:bg-cover"
        )}
        {...props}
      />

      {/* Label */}
      {label && (
        <label
          htmlFor={id}
          className={classNames(
            "ml-20",
            disabled ? "text-brown-700/50" : "text-brown-700"
          )}
        >
          {label}
        </label>
      )}
    </div>

    {/* Validation error text */}
    {hasValidationError && !!validationErrorText && (
      <ValidationText
        className="pl-40 ml-20 mt-20"
        text={validationErrorText}
      />
    )}
  </div>
);

export default Checkbox;
