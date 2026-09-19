import { useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import { useDebounce } from "@/hooks/useDebounce";
import { SearchBar } from "@/components/products/SearchBar";
import { ProductsGrid } from "@/components/products/ProductsGrid";
import { ProductsGridSkeleton } from "@/components/products/ProductsGridSkeleton";
import { Pagination } from "@/components/products/Pagination";
import { EmptyState } from "@/components/common/EmptyState";
import { ErrorMessage } from "@/components/common/ErrorMessage";
import Navbar from "@/components/layout/Navbar";

const PAGE_SIZE = 12;

export function ProductsPage() {
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);

  const debouncedSearch = useDebounce(searchInput, 400);

  const { data, isPending, isFetching, isError, error, refetch } = useProducts({
    page,
    limit: PAGE_SIZE,
    search: debouncedSearch,
  });

  const totalPages = data ? Math.max(1, Math.ceil(data.total / PAGE_SIZE)) : 1;

  function handleSearchChange(value: string) {
    setSearchInput(value);
    setPage(1); // reset to first page whenever the search term changes
  }

  return (
    <>
    <Navbar />
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold">Products</h1>
        <SearchBar value={searchInput} onChange={handleSearchChange} />
      </div>

      {isPending ? (
        <ProductsGridSkeleton />
      ) : isError ? (
        <ErrorMessage
          message={error instanceof Error ? error.message : "Failed to load products."}
          onRetry={() => refetch()}
        />
      ) : data.products.length === 0 ? (
        <EmptyState
          title="No products found"
          message={
            debouncedSearch
              ? `No results for "${debouncedSearch}". Try a different keyword.`
              : "There are no products to show."
          }
        />
      ) : (
        <>
          <div
            className={isFetching ? "opacity-60 transition-opacity" : "transition-opacity"}
            aria-live="polite"
          >
            <ProductsGrid products={data.products} />
          </div>
          <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
        </>
      )}
    </main>
    </>
    
  );
}
