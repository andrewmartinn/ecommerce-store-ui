export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  catrgory: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ProductContextType {
  products: Product[];
  loading: boolean;
  error: string | null;
}
