import classNames from "classnames";
import type { HTMLAttributes } from "react";
import { useState } from "react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { NEXT_IMAGE_DEFAULT_QUALITY } from "../lib/constants";
import styles from "../styles/carousel.module.css";
import { Image as ImageType } from "../types/image";
import Container from "./container";
import Image from "./image";

export type CarouselProps = HTMLAttributes<HTMLDivElement> & {
  carousel: {
    image: ImageType;
  }[];
};

export const Carousel = ({
  className,
  carousel,
  ...props
}: CarouselProps): JSX.Element => {
  const [paginationEl, setPaginationEl] = useState<HTMLDivElement | null>(null);

  return (
    <div className={classNames(className, styles.root, "relative")} {...props}>
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={true}
        slidesPerView={1}
        centeredSlides={true}
        autoHeight={true}
        spaceBetween={30}
        speed={1000}
        grabCursor={true}
        preloadImages={false}
        pagination={{
          el: paginationEl,
          type: "bullets",
        }}
      >
        {carousel.map(({ image }, idx) => (
          <SwiperSlide key={idx}>
            <Image
              wrapperProps={{
                className: "swiper-image h-[375px] md:h-[600px]",
              }}
              quality={NEXT_IMAGE_DEFAULT_QUALITY}
              layout="fill"
              src={image.src}
              alt={image.alt}
              objectFit="cover"
              objectPosition={image.objectPosition}
              dominantColor={image.dominantColor}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-20 md:bottom-40 z-10 pointer-events-none">
        <Container>
          {/* Pagination */}
          <div ref={(node) => setPaginationEl(node)} />
        </Container>
      </div>
    </div>
  );
};

export default Carousel;
