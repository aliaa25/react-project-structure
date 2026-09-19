import { useQuery } from "@tanstack/react-query";
import { productsApi } from "@/api/products.api";

export function useProduct(id: string | undefined) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => productsApi.getProductById(id as string),
    enabled: Boolean(id), // don't fire until we actually have an id from the route
    staleTime: 60_000,
  });
}
