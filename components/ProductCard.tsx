import Link from "next/link";
import { AddToBasketButton } from "@/components/AddToBasketButton";

export type ProductCardData = {
  id: string;
  slug: string;
  name: string;
  price: number;
  imageUrl: string | null;
};

export function ProductCard({ product }: { product: ProductCardData }) {
  return (
    <div className="flex flex-col gap-2 rounded border border-gray-200 p-4">
      <Link href={`/products/${product.slug}`}>
        <div className="mb-2 flex aspect-square items-center justify-center rounded bg-gray-100 text-gray-400">
          {product.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-full w-full rounded object-cover"
            />
          ) : (
            "No image"
          )}
        </div>
        <h2 className="font-semibold">{product.name}</h2>
      </Link>
      <p className="text-gray-700">${product.price.toFixed(2)}</p>
      <AddToBasketButton
        product={{
          productId: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          imageUrl: product.imageUrl,
        }}
      />
    </div>
  );
}
