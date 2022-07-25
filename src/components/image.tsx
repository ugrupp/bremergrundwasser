import { Transition } from "@headlessui/react";
import classNames from "classnames";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import React, { useState } from "react";

interface ImageProps {
  wrapperProps?: React.HTMLProps<HTMLDivElement>;
  dominantColor?: string;
}

const Image: React.FC<
  ImageProps & Omit<NextImageProps, "onLoadingComplete">
> = ({ wrapperProps, dominantColor, ...props }) => {
  // Handle loading state
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const onLoadingComplete: NextImageProps["onLoadingComplete"] = () => {
    setIsLoadingComplete(true);
  };

  return (
    // Wrapper
    <div
      {...wrapperProps}
      className={classNames("relative", wrapperProps?.className)}
    >
      {/* Image */}
      <NextImage {...props} onLoadingComplete={onLoadingComplete} />

      {/* Dominant color overlay */}
      {!!dominantColor && (
        <Transition
          as="div"
          className="absolute inset-0"
          style={{ backgroundColor: dominantColor }}
          show={!isLoadingComplete}
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        />
      )}
    </div>
  );
};

export default Image;
