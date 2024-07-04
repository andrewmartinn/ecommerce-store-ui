import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { ProductContextType } from "../types";

const useProductContext = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};

export default useProductContext;
