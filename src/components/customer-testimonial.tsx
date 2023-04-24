import type { HTMLAttributes } from "react";
import { NEXT_IMAGE_DEFAULT_QUALITY } from "../lib/constants";
import Container from "./container";
import Image from "./image";
import { Image as ImageType } from "../types/image";

interface CustomerTestimonialProps extends HTMLAttributes<HTMLElement> {
  testimonial: {
    image: ImageType;
    headline: string;
    quote: string;
  }
}

export const CustomerTestimonial = ({ testimonial }: CustomerTestimonialProps): JSX.Element => {
  return (
    <section className="bg-gray-100">
      <Container className="py-90 md:pt-120 md:pb-[140px]">
        <div className="grid grid-cols-16">
          <div className="col-start-2 col-end-[-2] md:col-start-3 md:col-end-[-3]">
            <div className="md:flex md:items-center">
              <div
                className="h-100 w-100 rounded-full overflow-hidden md:mr-30"
              >
                <Image
                  quality={NEXT_IMAGE_DEFAULT_QUALITY}
                  dominantColor="#6ec1b5"
                  layout="fixed"
                  src={testimonial.image.src}
                  alt={`Kundenstimme ${testimonial.image.alt}`}
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="mt-25 md:mt-0 text-20 md:text-25 leading-[30px] md:leading-9">
                <span className="text-teal-300">Kundenstimme</span><br />
                {testimonial.headline}
              </h3>
            </div>
            <blockquote className="mt-12 md:mt-20 text-15 md:text-20 leading-8 md:leading-[42px] underline decoration-dashed decoration-1 underline-offset-[.4em]">{testimonial.quote}</blockquote>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CustomerTestimonial;
