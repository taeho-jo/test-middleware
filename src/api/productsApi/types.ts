export interface ProductList {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: number;
  rating: {
    rate: number;
    count: number;
  };
}

export interface MultiRequestType {
  queryKey: string;
  path: string;
  config: {
    [key: string]: any;
  };
}
