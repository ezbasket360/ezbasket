import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await prisma.product.findUnique({ where: { slug } });

  if (!product || !product.active) {
    notFound();
  }

  const price = Number(product.price);

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="flex aspect-square items-center justify-center rounded bg-gray-100 text-gray-400">
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
      <div>
        <h1 className="mb-2 text-2xl font-bold">{product.name}</h1>
        <p className="mb-4 text-gray-700">${price.toFixed(2)}</p>
        <p className="mb-6 text-gray-600">{product.description}</p>
      </div>
    </div>
  );
}
