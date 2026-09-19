import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/product.types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <div className="aspect-square w-full bg-secondary overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
        <p className="text-xs uppercase tracking-wide text-muted-foreground">
          {product.category}
        </p>
      </CardHeader>

      <CardContent className="flex items-center justify-between">
        <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
        <span className="flex items-center gap-1 text-sm text-muted-foreground">
          <Star className="h-4 w-4 fill-primary text-primary" />
          {product.rating.toFixed(1)}
        </span>
      </CardContent>

      <CardFooter>
        <Link
          to={`/products/${product.id}`}
          className={cn(buttonVariants({ size: "sm" }), "w-full")}
        >
          View details
        </Link>
      </CardFooter>
    </Card>
  );
}
