"use client";

import Image from "next/image";
import BookRating from "./BookRating";
import Link from "next/link";
import { useStore } from "@/store/CartProvider";
import { BsCart4 } from "react-icons/bs";
import { TiInputChecked } from "react-icons/ti";

export default function Book({
  id,
  image,
  title,
  author,
  rating,
  price,
  stockAvailable,
}) {
  const cart = useStore((state) => state.cart);
  const addCart = useStore((state) => state.addCart);

  const handleAddToCart = () => {
    const newBook = {
      id,
      title,
      author,
      price,
      image,
      stockAvailable,
    };

    addCart(newBook);
  };

  const isAddedToCart = cart.some((book) => book.id === id);

  return (
    <li className="flex flex-col items-center p-4 hover:bg-slate-50 hover:scale-105 duration-300 shadow-md hover:shadow-xl">
      <Link href={`/books/${id}`} className="flex flex-col items-center h-105">
        <Image
          src={image}
          alt={title + "book cover"}
          className="w-48 h-72 mb-3 rounded-sm"
          width={200}
          height={200}
        />
        <div className="flex flex-col items-center h-full justify-between">
          <div className="flex flex-col items-center">
            <h4 className="text-lg text-center mx-5 leading-5 mb-1">{title}</h4>
            <p className="font-extralight text-sm mb-2">{author}</p>
            <BookRating rating={rating} />
          </div>
          <span className="font-light">{`RM ${price.toFixed(2)}`}</span>
        </div>
      </Link>
      {isAddedToCart ? (
        <p className="mt-1 bg-slate-200 py-2 px-8 rounded-full flex items-center gap-2">
          <TiInputChecked className="text-2xl text-green-700" />
          Added to cart
        </p>
      ) : (
        <button
          className="mt-1 bg-amber-400 hover:bg-amber-300 py-2 px-8 cursor-pointer rounded-full flex item-center gap-2"
          onClick={handleAddToCart}
        >
          <BsCart4 className="text-lg" />
          Add to cart
        </button>
      )}
    </li>
  );
}
