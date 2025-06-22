import Book from "@/components/Books/Book";
import { getBooks } from "@/services/http";

export default async function Books() {
  const {
    data: { books },
  } = await getBooks();

  return (
    <main>
      <ul className="p-3 grid grid-cols-4 gap-x-6 gap-y-16">
        {books.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </ul>
    </main>
  );
}
