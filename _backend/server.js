const fs = require("fs");
const express = require("express");
const { dirname } = require("path");

const app = express();

const books = JSON.parse(fs.readFileSync(`${__dirname}/DB/books.json`));

app.get("/api/books", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      results: books.length,
      data: {
        books: books,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message || "Could not fetch books",
    });
  }
});

app.get("/api/books/:id", (req, res) => {
  try {
    const id = req.params.id;
    const book = books.find((book) => book.id === id);

    res.status(200).json({
      status: "success",
      data: {
        book: book,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message || "Could not fetch book",
    });
  }
});

app.listen(8000, () => {
  console.log("Listening on port 8000...");
});
