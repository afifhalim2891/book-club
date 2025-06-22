import Image from "next/image";
import BookRating from "@/components/Books/BookRating";
import Rating from "@/components/UI/Rating";
import { getBook } from "@/services/http";
import BackButton from "@/components/UI/BackButton";
import Button from "@/components/UI/Button";

import AddToCartButton from "@/components/UI/AddToCartButton";

export default async function BookDetails({ params }) {

  const { bookId } = await params;
  const fetchedBook = await getBook(bookId);

  const {
    title,
    author,
    rating,
    description,
    price,
    image,
    genre,
    publication_year,
  } = fetchedBook.data.book;

  return (
    <>
      <main className="py-4 px-8 mt-8">
        <div className="flex gap-10 mb-10">
          <Image
            src={image}
            alt={title + "book cover"}
            width={400}
            height={400}
          />
          <div>
            <h2 className="text-5xl mb-8">{title}</h2>
            <p className="text-3xl mb-4">{price}</p>

            <BookRating rating={rating} size="text-3xl" />

            <div className="mt-10 mb-10">
              <p className="flex gap-2">
                <span>Author:</span>
                <span>{author}</span>
              </p>
              <p className="flex gap-2">
                <span>Genre:</span>
                <span>{genre}</span>
              </p>
              <p className="flex gap-2">
                <span>Publication year:</span>
                <span>{publication_year}</span>
              </p>
            </div>
            <AddToCartButton book={fetchedBook.data.book} />
          </div>
        </div>
        <div>
          <h4 className="text-2xl mb-3">Description</h4>
          <p className="mb-5 font-light">{description}</p>
        </div>
        <BackButton />
      </main>
    </>
  );
}
