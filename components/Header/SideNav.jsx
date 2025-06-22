"use client";

import { useStore } from "@/store/CartProvider";
import Link from "next/link";

export default function SideNav() {
  const cart = useStore((state) => state.cart);

  const itemsInCart = cart.reduce((acc, book) => acc + book.quantity, 0);


  return (
    <nav>
      <ul className="flex items-center gap-3">
        <li>
          <Link href="/books" className="hover:text-amber-500">
            Shop Book
          </Link>
        </li>
        <li>
          <Link href="/cart" className="hover:text-amber-500">
            Cart ({itemsInCart})
          </Link>
        </li>
      </ul>
    </nav>
  );
}
