import classNames from "classnames";
import type { HTMLAttributes } from "react";
import { useState } from "react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { NEXT_IMAGE_DEFAULT_QUALITY } from "../lib/constants";
import styles from "../styles/carousel.module.css";
import ArrowIcon from "../assets/icons/arrow-1.svg";
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
  const [navigationPrev, setNavigationPrev] = useState<HTMLButtonElement | null>(null);
  const [navigationNext, setNavigationNext] = useState<HTMLButtonElement | null>(null);

  return (
    <div className={classNames(className, styles.root, "relative")} {...props}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
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
          clickable: true,
        }}
        navigation={{
          prevEl: navigationPrev,
          nextEl: navigationNext,
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
      <div className="absolute inset-x-0 bottom-20 md:bottom-40 z-10 pointer-events-none lg:pointer-events-auto lg:cursor-pointer">
        <Container>
          {/* Pagination */}
          <div ref={(node) => setPaginationEl(node)} />
        </Container>
      </div>
      {/* Navigation */}
      <div className="hidden lg:block absolute inset-x-0 bottom-75 z-10">
        <Container classNameInner="flex space-x-20">
          <button ref={(node) => setNavigationPrev(node)}>
            <ArrowIcon className="rotate-180 text-white hover:text-teal-300 h-30 w-30" />
          </button>
          <button ref={(node) => setNavigationNext(node)}>
            <ArrowIcon className="text-white hover:text-teal-300 h-30 w-30" />
          </button>
        </Container>
      </div>
    </div>
  );
};

export default Carousel;
