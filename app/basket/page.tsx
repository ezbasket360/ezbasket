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
            className="flex items-center justify-between border-b border-gray-200 pb-4"
          >
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-600">{formatPrice(item.price)} each</p>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="number"
                min={1}
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.productId, Number(e.target.value))
                }
                className="w-16 rounded border border-gray-300 px-2 py-1"
              />
              <button
                onClick={() => removeItem(item.productId)}
                className="text-sm text-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-xl font-bold">Subtotal: {formatPrice(subtotal)}</p>
        <button
          disabled
          className="cursor-not-allowed rounded bg-gray-300 px-6 py-3 text-gray-500"
        >
          Checkout — Coming soon
        </button>
      </div>
    </div>
  );
}
