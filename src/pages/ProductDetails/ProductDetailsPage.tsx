import { Link, useParams } from "react-router-dom";
import { Star, ArrowLeft } from "lucide-react";
import { useProduct } from "@/hooks/useProduct";
import { Loader } from "@/components/common/Loader";
import { ErrorMessage } from "@/components/common/ErrorMessage";
import Navbar from "@/components/layout/Navbar";

export function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { data: product, isPending, isError, error, refetch } = useProduct(id);

  return (
   <>
   <Navbar />
    <main className="mx-auto max-w-4xl px-4 py-8 space-y-6">
      <Link to="/products" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" />
        Back to products
      </Link>

      {isPending ? (
        <Loader />
      ) : isError ? (
        <ErrorMessage
          message={error instanceof Error ? error.message : "Failed to load this product."}
          onRetry={() => refetch()}
        />
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="aspect-square w-full overflow-hidden rounded-lg border border-border bg-secondary">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                {product.category}
                {product.brand ? ` · ${product.brand}` : ""}
              </p>
              <h1 className="text-2xl font-semibold">{product.title}</h1>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-2xl font-semibold">${product.price.toFixed(2)}</span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Star className="h-4 w-4 fill-primary text-primary" />
                {product.rating.toFixed(1)}
              </span>
              <span className="text-sm text-muted-foreground">
                {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
              </span>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {product.description}
            </p>
          </div>
        </div>
      )}
    </main>
   </>
  );
}
