"use client";
import Link from "next/link";
import { useBasket } from "@/lib/basket-context";
import { formatPrice } from "@/lib/format";

export default function BasketPage() {
  const { items, updateQuantity, removeItem, subtotal } = useBasket();

  if (items.length === 0) {
    return (
      <div className="py-24 text-center">
        <h1 className="mb-4 text-2xl font-bold">Your basket is empty</h1>
        <Link
          href="/products"
          className="inline-block rounded bg-black px-6 py-3 text-white"
        >
          Browse products
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Your Basket</h1>
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div
            key={item.productId}
            className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 pb-4"
          >
            <div className="min-w-0">
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-600">{formatPrice(item.price)} each</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center rounded border border-gray-300">
                <button
                  onClick={() =>
                    updateQuantity(item.productId, item.quantity - 1)
                  }
                  className="flex h-10 w-10 items-center justify-center text-lg"
                  aria-label={`Decrease quantity of ${item.name}`}
                >
                  −
                </button>
                <span className="w-8 text-center tabular-nums">
                  {item.quantity}
                </span>
                <button
                  onClick={() =>
                    updateQuantity(item.productId, item.quantity + 1)
                  }
                  className="flex h-10 w-10 items-center justify-center text-lg"
                  aria-label={`Increase quantity of ${item.name}`}
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeItem(item.productId)}
                className="p-2 text-sm text-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xl font-bold">Subtotal: {formatPrice(subtotal)}</p>
        <button
          disabled
          className="w-full cursor-not-allowed rounded bg-gray-300 px-6 py-3 text-gray-500 sm:w-auto"
        >
          Checkout — Coming soon
        </button>
      </div>
    </div>
  );
}
