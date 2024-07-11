import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../types";
import cartStore from "../stores/cartStore";

const ProductDetails = () => {
  const [product, setProduct] = useState<Product>();
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams() as { id: string };

  const fetchProductById = async (id: string) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
      }
      const data: Product = await response.json();
      setProduct(data);
      setError(null);
    } catch (error) {
      console.log("Error fetching data", error);
      setError("Failed to fetch product. Please try again later !");
    }
  };

  useEffect(() => {
    fetchProductById(id);
  }, [id]);

  if (error) {
    return (
      <section className="h-screen flex justify-center items-center">
        <p className="font-bold text-2xl">{error}</p>
      </section>
    );
  }

  return (
    <section className="h-screen pt-32 pb-12 lg: py-32 flex items-center justify-center">
      <div className="container mx-auto">
        {/* Product Details */}
        {product && (
          <div className="flex flex-col items-center lg:flex-row">
            {/* Image */}
            <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
              <img
                src={product.image}
                alt={product.title}
                className="max-w-[150px] lg:max-w-sm"
              />
            </div>
            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-2xl lg:text-[26px] font-medium mb-2 max-w-[450px] ">
                {product.title}
              </h1>
              <div className="text-xl text-gray-500">$ {product.price}</div>
              <div className="my-6 text-sm lg:text-base">
                {product.description}
              </div>
              <button
                onClick={() => cartStore.addProductToCart(product)}
                className="bg-zinc-800 text-white py-2 px-8"
              >
                Add To Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default ProductDetails;
