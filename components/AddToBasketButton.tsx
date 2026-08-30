"use client";
import { useState } from "react";
import { useBasket } from "@/lib/basket-context";

type Props = {
  product: {
    productId: string;
    slug: string;
    name: string;
    price: number;
    imageUrl: string | null;
  };
  quantity?: number;
};

export function AddToBasketButton({ product, quantity = 1 }: Props) {
  const { addItem } = useBasket();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <button
      onClick={handleClick}
      className="w-full rounded bg-black px-4 py-3 text-sm text-white sm:w-auto"
    >
      {added ? "Added!" : "Add to Basket"}
    </button>
  );
}
