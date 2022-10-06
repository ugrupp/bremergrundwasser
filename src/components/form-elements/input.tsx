import classNames from "classnames";
import ValidationText from "./validation-text";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  hasValidationError?: boolean;
  validationErrorText?: string;
}

const Input = ({
  type = "text",
  id,
  label,
  hasValidationError = false,
  validationErrorText,
  className,
  ...props
}: InputProps): JSX.Element => {
  return (
    <div className={classNames(className)}>
      {/* Input box */}
      <div className={classNames("relative")}>
        <input
          id={id}
          type={type}
          aria-invalid={hasValidationError ? "true" : undefined}
          className={classNames(
            "block w-full text-base md:text-20 leading-normal",
            "p-10 bg-transparent border-l border-b border-dashed focus:outline-none",
            hasValidationError
              ? "border-red-400 focus:border-red-400"
              : "border-brown-700 focus:border-brown-700"
          )}
          {...props}
        />
      </div>

      {/* Label */}
      {label && (
        <label
          htmlFor={id}
          className={classNames(
            "mt-15 block text-15 md:text-20 leading-normal"
          )}
        >
          {label}
        </label>
      )}

      {/* Validation error text */}
      {hasValidationError && !!validationErrorText && (
        <ValidationText className="mt-20" text={validationErrorText} />
      )}
    </div>
  );
};

export default Input;
