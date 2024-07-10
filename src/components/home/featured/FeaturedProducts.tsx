import { Product } from "../../../types";
import useEmblaCarousel from "embla-carousel-react";
import ProductCard from "../product/ProductCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useCallback } from "react";

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);
  return (
    <section className="py-20">
      <p className="text-3xl">Featured Products</p>
      <div>
        <div className="embla relative">
          <div className="embla__viewport h-[450px] mt-8" ref={emblaRef}>
            <div className="embla__container h-full">
              {products.map((product) => (
                <div className="embla__slide px-[1rem]">
                  <ProductCard key={product.id} product={product} />
                </div>
              ))}
            </div>
          </div>
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
        </div>
      </div>
    </section>
  );
};
export default FeaturedProducts;
