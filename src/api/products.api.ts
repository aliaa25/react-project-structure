import axios from "axios";
import type { Product, ProductsResponse } from "@/types/product.types";

export const productsClient = axios.create({
  baseURL: "https://dummyjson.com/products",
});

export interface GetProductsParams {
  limit: number;
  skip: number;
}

export const productsApi = {

  getProducts: ({ limit, skip }: GetProductsParams): Promise<ProductsResponse> =>
    productsClient
      .get<ProductsResponse>("", { params: { limit, skip } })
      .then((res) => res.data),

  searchProducts: (
    query: string,
    { limit, skip }: GetProductsParams
  ): Promise<ProductsResponse> =>
    productsClient
      .get<ProductsResponse>("/search", { params: { q: query, limit, skip } })
      .then((res) => res.data),
 
  getProductById: (id: string | number): Promise<Product> =>
    productsClient.get<Product>(`/${id}`).then((res) => res.data),
};
