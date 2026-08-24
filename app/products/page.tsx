import { prisma } from "@/lib/prisma";
import { ProductCard } from "@/components/ProductCard";

export default async function ShopPage() {
  const products = await prisma.product.findMany({
    where: { active: true },
    orderBy: { createdAt: "desc" },
  });

  if (products.length === 0) {
    return (
      <div className="py-24 text-center text-gray-500">
        Nothing here yet — check back soon.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={{
            id: product.id,
            slug: product.slug,
            name: product.name,
            price: Number(product.price),
            imageUrl: product.imageUrl,
          }}
        />
      ))}
    </div>
  );
}
