import { Link } from "react-router-dom";
import { Product } from "../../../types";
import { BsPlus } from "react-icons/bs";
import { observer } from "mobx-react-lite";
import cartStore from "../../../stores/cartStore";

interface ProductCardProps {
  product: Product;
}

const ProductCard = observer(({ product }: ProductCardProps) => {
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
            />
          </div>
        </div>
        <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => cartStore.addProductToCart(product)}>
            <div className="flex justify-center items-center text-white bg-red-500 w-10 h-10">
              <BsPlus className="text-3xl" />
            </div>
          </button>
        </div>
      </div>
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">
          {product.category}
        </div>
        <Link
          to={`/products/${product.id}`}
          className="font-semibold mb-1 text-md"
        >
          {product.title}
        </Link>
        <div>${product.price}</div>
      </div>
    </div>
  );
});
export default ProductCard;
