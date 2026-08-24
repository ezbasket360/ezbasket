import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-24 text-center">
      <h1 className="mb-4 text-2xl font-bold">We couldn&apos;t find that page</h1>
      <p className="mb-8 text-gray-600">
        It may have been removed or the link is incorrect.
      </p>
      <Link
        href="/products"
        className="inline-block rounded bg-black px-6 py-3 text-white"
      >
        Back to Shop
      </Link>
    </div>
  );
}
