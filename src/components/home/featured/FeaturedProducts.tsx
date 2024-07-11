import { Product } from "../../../types";
import useEmblaCarousel from "embla-carousel-react";
import ProductCard from "../product/ProductCard";
import CarouselButtonGroup from "./CarouselButtonGroup";

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <section className="py-10">
      <p className="text-2xl lg:text-3xl">Featured Products</p>
      <div>
        <div className="embla relative">
          <div className="embla__viewport h-[450px] mt-8" ref={emblaRef}>
            <div className="embla__container h-full">
              {products.map((product) => (
                <div className="embla__slide px-[1rem]" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
          <CarouselButtonGroup emblaApi={emblaApi} />
        </div>
      </div>
    </section>
  );
};
export default FeaturedProducts;
