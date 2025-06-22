"use client";

import { useStore } from "@/store/CartProvider";
import Button from "./Button";
import { BsCart4 } from "react-icons/bs";
import { TiInputChecked } from "react-icons/ti";

export default function AddToCartButton({ book }) {
  const cart = useStore((state) => state.cart);
  const addCart = useStore((state) => state.addCart);

  const bookAdded = cart.some((addedBook) => addedBook.id === book.id);

  const handleClick = () => {
    const newBook = {
      id: book.id,
      title: book.title,
      author: book.author,
      price: book.price,
      image: book.image,
      stockAvailable: book.stockAvailable,
    };

    addCart(newBook);
  };

  return (
    <div className="flex">
      {!bookAdded ? (
        <Button type="button" addStyle="px-5 py-3" onClick={handleClick}>
          <BsCart4 />
          Add to cart
        </Button>
      ) : (
        <p className="p-6 py-2 rounded-full bg-slate-200 flex items-center gap-1">
          <TiInputChecked className="text-3xl text-green-800" />
          Book added to cart
        </p>
      )}
    </div>
  );
}
