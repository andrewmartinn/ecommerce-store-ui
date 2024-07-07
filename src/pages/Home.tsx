import { useEffect, useState } from "react";
import ProductCard from "../components/home/product/ProductCard";
import { Product } from "../types";
import HeroSection from "../components/home/hero/HeroSection";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProductsData = async (): Promise<void> => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.statusText}`);
        }
        const data: Product[] = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchProductsData();
  }, []);

  const filteredProducts = products?.filter((product) => {
    return (
      product.category === "men's clothing" ||
      product.category === "women's clothing"
    );
  });
  console.log(filteredProducts);
  return (
    <div>
      <HeroSection />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-auto">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
