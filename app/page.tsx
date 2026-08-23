import Link from "next/link";

export default function HomePage() {
  return (
    <div className="py-24 text-center">
      <h1 className="mb-4 text-4xl font-bold">Welcome to EZbasket</h1>
      <p className="mb-8 text-gray-600">Your new favorite place to shop.</p>
      <Link
        href="/products"
        className="inline-block rounded bg-black px-6 py-3 text-white"
      >
        Shop Now
      </Link>
    </div>
  );
}
