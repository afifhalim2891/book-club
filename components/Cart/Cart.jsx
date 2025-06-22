"use client";

import { useStore } from "@/store/CartProvider";
import CartList from "./CartList";
import Image from "next/image";
import cartImage from "@/public/empty-cart.jpg";
import Link from "next/link";
import { GiSecretBook } from "react-icons/gi";

export default function Cart() {
  const cart = useStore((state) => state.cart);

  return (
    <section className=" col-span-8 pt-48 border-slate-300 border-r ">
      <div className=" px-10">
        <h2 className="text-2xl font-light mb-3">Shopping Cart</h2>
        <div className="grid grid-cols-[40px_150px_1fr_80px_80px_100px]  grid-rows-1 gap-1 font-extralight text-xs border-y-[0.7px] py-2">
          <span></span>
          <span></span>
          <span className="ml-3">Product</span>
          <span className="">Price</span>
          <span className="justify-self-center">Quantity</span>
          <span className="justify-self-center">Subtotal</span>
        </div>
        {cart.length > 0 ? <CartList /> : <EmptyCart />}
      </div>
    </section>
  );
}

function EmptyCart() {
  return (
    <div className="flex flex-col items-center my-10">
      <Image
        src={cartImage}
        alt="An empty cart image"
        height={1000}
        className="h-96 w-96"
      />
      <h3 className="font-extralight text-lg mb-4">Your cart is empty!</h3>
      <Link
        href="/books"
        className="font-extralight bg-green-600 hover:bg-green-500 px-10 py-3 rounded-md text-white text-sm flex gap-3 place-items-center duration-100"
      >
        Purchase your favourite books now
        <GiSecretBook className="text-2xl" />
      </Link>
    </div>
  );
}
