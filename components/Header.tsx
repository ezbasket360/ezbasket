import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold">
          EZbasket
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/products">Shop</Link>
          <Link href="/basket">Basket</Link>
        </nav>
      </div>
    </header>
  );
}
