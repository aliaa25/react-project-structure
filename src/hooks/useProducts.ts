import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { productsApi } from "@/api/products.api";

interface UseProductsOptions {
  page: number;
  limit: number;
  search: string;
}

export function useProducts({ page, limit, search }: UseProductsOptions) {
  const skip = (page - 1) * limit;
  const trimmedSearch = search.trim();

  return useQuery({
    // queryKey changes whenever page, limit or the (debounced) search term
    // change, so React Query fetches/caches each combination independently.
    queryKey: ["products", { page, limit, search: trimmedSearch }],
    queryFn: () =>
      trimmedSearch
        ? productsApi.searchProducts(trimmedSearch, { limit, skip })
        : productsApi.getProducts({ limit, skip }),
    placeholderData: keepPreviousData, // keeps old page's data on screen while the next page loads
    staleTime: 60_000,
  });
}
