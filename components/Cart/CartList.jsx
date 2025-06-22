"use client";

import { useStore } from "@/store/CartProvider";

import CartListItem from "./CartListItem";
import Button from "../UI/Button";
import { GrClear } from "react-icons/gr";

export default function CartList() {
  const cart = useStore((state) => state.cart);
  const clearCart = useStore((state) => state.clearCart);

  return (
    <>
      <ul className="divide-y divide-slate-200 mb-4  border-b border-slate-700">
        {cart.map((item) => (
          <CartListItem key={item.id} item={item} />
        ))}
      </ul>
      <div className="flex justify-end">
        <Button type="button" addStyle="px-6 py-3" onClick={clearCart}>
          <GrClear className="text-lg" />
          Clear Cart
        </Button>
      </div>
    </>
  );
}
