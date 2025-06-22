const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getBooks = async () => {
  try {
    const res = await fetch("http://localhost:8000/api/books/");

    if (!res.ok) throw new Error("Failed to retrieve books");

    //Simulate delay effect
    await delay(500);

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getBook = async (bookId) => {
  try {
    const res = await fetch(`http://localhost:8000/api/books/${bookId}`);

    if (!res.ok) throw new Error("Failed to retrieve book");

    //Simulate delay effect
    await delay(500);

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error.message);
  }
};
