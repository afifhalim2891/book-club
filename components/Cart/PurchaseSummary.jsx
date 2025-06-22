"use client";

import { useStore } from "@/store/CartProvider";
import Button from "../UI/Button";
import { IoBagCheckOutline } from "react-icons/io5";

export default function PurchaseSummary() {
  const cart = useStore((state) => state.cart);

  const subTotal = cart.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  const discount = subTotal * 0.1;
  const tax = subTotal * 0.03;
  const total = subTotal - discount + tax;

  return (
    <section className="col-span-4 pt-48">
      <div className="px-10">
        <h2 className="text-2xl font-light mb-3">Cart Totals</h2>
        <div className="font-extralight text-md">
          {/* Row 1 */}
          <div className="grid grid-cols-[100px_1fr] border-y-[0.7px] border-slate-700 py-2">
            <span className="text-xs self-center">Subtotal</span>
            <span className="justify-self-end">{`RM ${subTotal.toFixed(
              2
            )}`}</span>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-[100px_1fr] border-b-[0.7px] border-slate-700 py-4">
            <span className="text-xs self-center">Discount (10%)</span>
            <span className="justify-self-end">{`RM ${discount.toFixed(
              2
            )}`}</span>
            <span className="text-xs self-center">Tax (SST 3%)</span>
            <span className="justify-self-end">{`RM ${tax.toFixed(2)}`}</span>
            <span className="text-xs self-center">Shipping</span>
            <span className="justify-self-end">RM 7.00</span>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-[100px_1fr] border-b-[0.7px] border-slate-700 py-2">
            <span className="text-xs self-center">Total</span>
            <span className="justify-self-end">{`RM ${total.toFixed(2)}`}</span>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          {cart.length > 0 && (
            <Button type="button" addStyle="py-3 px-10">
              <IoBagCheckOutline className="text-xl" />
              procced checkout
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
