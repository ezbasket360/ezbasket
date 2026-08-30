"use client";
import Link from "next/link";
import { useBasket } from "@/lib/basket-context";

export function Header() {
  const { totalCount } = useBasket();
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold">
          EZbasket
        </Link>

        {/* Full nav on tablet and up */}
        <nav className="hidden items-center gap-6 sm:flex">
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

        {/* On phones the bottom bar handles navigation; show just a basket shortcut */}
        <Link
          href="/basket"
          className="relative flex h-10 w-10 items-center justify-center sm:hidden"
          aria-label={`Basket${totalCount > 0 ? `, ${totalCount} items` : ""}`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-6 w-6"
            aria-hidden
          >
            <path
              d="M5 9h14l-1.2 10.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 9Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M9 9 12 4l3 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {totalCount > 0 && (
            <span className="absolute right-0 top-1 rounded-full bg-black px-1.5 text-[10px] font-semibold text-white">
              {totalCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
