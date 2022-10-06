import classNames from "classnames";
import ValidationText from "./validation-text";
import styles from "../../styles/form-elements.module.css";
import { useEffect, useRef } from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  hasValidationError?: boolean;
  validationErrorText?: string;
  helpText?: string;
}

const Textarea = ({
  id,
  hasValidationError = false,
  validationErrorText,
  rows = 5,
  className,
  ...props
}: TextareaProps): JSX.Element => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto resize
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.boxSizing = "border-box";
      const offset = textarea.offsetHeight - textarea.clientHeight;

      const applyResize = () => {
        textarea.style.height = "auto";
        textarea.style.height = textarea.scrollHeight + offset + "px";
      };

      const throttledApplyResize = () => {
        window.requestAnimationFrame(() => {
          applyResize();
        });
      };
      window.addEventListener("resize", throttledApplyResize);
      textarea.addEventListener("input", throttledApplyResize);

      return () => {
        window.removeEventListener("resize", throttledApplyResize);
        textarea.removeEventListener("input", throttledApplyResize);
      };
    }
  }, []);

  return (
    <div className={classNames(className)}>
      {/* Input box */}
      <div className={classNames("relative")}>
        <textarea
          ref={textareaRef}
          id={id}
          aria-invalid={hasValidationError ? "true" : undefined}
          rows={rows}
          className={classNames(
            "block w-full text-base md:text-20 leading-normal resize-none",
            "px-10 bg-transparent focus:outline-none",
            styles.textarea,
            hasValidationError && styles["textarea-with-validation-error"]
          )}
          {...props}
        />
      </div>

      {/* Validation error text */}
      {hasValidationError && !!validationErrorText && (
        <ValidationText className="mt-20" text={validationErrorText} />
      )}
    </div>
  );
};

export default Textarea;
