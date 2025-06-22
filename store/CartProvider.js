import { create } from "zustand";

// const temporaryData = [
//   {
//     id: "1",
//     title: "The Midnight Library ",
//     author: "Matt Haig",
//     price: 12.99,
//     image:
//       "https://litbooks.com.my/wp-content/uploads/2022/06/9781786892737.jpg.webp",
//     quantity: 1,
//     stockAvailable: 10,
//   },
//   {
//     id: "2",
//     title: "Atomic Habits",
//     author: "James Clear",
//     price: 16.0,
//     image: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
//     quantity: 1,
//     stockAvailable: 3,
//   },
//   {
//     id: "3",
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     price: 10.5,
//     image: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
//     quantity: 1,
//     stockAvailable: 1,
//   },
// ];

export const useStore = create((set, get) => ({
  cart: [],
  addCart: (newBook) => {
    const existingBook = get().cart.find(
      (addedBook) => addedBook.id === newBook.id
    );

    if (existingBook) {
      set((state) => ({
        cart: state.cart.map((book) =>
          book.id === newBook.id
            ? { ...book, quantity: book.quantity + 1 }
            : book
        ),
      }));
    } else {
      set((state) => ({
        cart: [...state.cart, { ...newBook, quantity: 1 }],
      }));
    }
  },
  deleteCart: (bookId, deleteAll = false) => {
    const existingBook = get().cart.find(
      (addedBook) => addedBook.id === bookId
    );

    if (!existingBook) return;

    if (deleteAll) {
      return set((state) => ({
        cart: state.cart.filter((book) => book.id !== bookId),
      }));
    } else {
      if (existingBook.quantity > 1) {
        set((state) => ({
          cart: state.cart.map((book) =>
            book.id === bookId ? { ...book, quantity: book.quantity - 1 } : book
          ),
        }));
      } else {
        set((state) => ({
          cart: state.cart.filter((book) => book.id !== bookId),
        }));
      }
    }
  },
  clearCart: () => {
    set({ cart: [] });
  },
}));

// export const useStore = create((set, get) => ({
//   cart: [],
//   addCart: (newBook) => {
//     const existingBook = get().cart.find(
//       (addedBook) => addedBook.id === newBook.id
//     );

//     if (existingBook) {
//       set({
//         cart: get().cart.map((book) =>
//           book.id === newBook.id
//             ? { ...book, quantity: book.quantity + 1 }
//             : book
//         ),
//       });
//     } else {
//       set({
//         cart: [...get().cart, { ...newBook, quantity: 1 }],
//       });
//     }
//   },
//   deleteCart: (bookId) => {
//     const existingBook = get().cart.find(
//       (addedBook) => addedBook.id === bookId
//     );

//     if (!existingBook) return;

//     if (existingBook.quantity > 1) {
//       set({
//         cart: get().cart.map((book) =>
//           book.id === bookId ? { ...book, quantity: book.quantity - 1 } : book
//         ),
//       });
//     } else {
//       set({
//         cart: get().cart.filter((book) => book.id !== bookId),
//       });
//     }
//   },
//   clearCart: () => {
//     set({ cart: [] });
//   },
// }));
