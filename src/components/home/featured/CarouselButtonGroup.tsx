import { EmblaCarouselType } from "embla-carousel";
import { useCallback } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface CarouselButtonGroupProps {
  emblaApi: EmblaCarouselType | undefined;
}

const CarouselButtonGroup = ({ emblaApi }: CarouselButtonGroupProps) => {
  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <button
        className="absolute top-40 md:-left-8 lg:-left-10 -left-4"
        onClick={scrollPrev}
      >
        <FaAngleLeft className="text-2xl text-gray-500" />
      </button>
      <button
        className="absolute top-40  md:-right-8 lg:-right-10 -right-4"
        onClick={scrollNext}
      >
        <FaAngleRight className="text-2xl text-gray-500" />
      </button>
    </>
  );
};
export default CarouselButtonGroup;
