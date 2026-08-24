"use client";
import Link from "next/link";
import { useBasket } from "@/lib/basket-context";

export function Header() {
  const { totalCount } = useBasket();
  return (
    <header className="border-b border-gray-200">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold">
          EZbasket
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/products">Shop</Link>
          <Link href="/basket" className="relative">
            Basket
            {totalCount > 0 && (
              <span className="ml-1 rounded-full bg-black px-2 py-0.5 text-xs text-white">
                {totalCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
