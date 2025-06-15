import React from "react";
import { useLoaderData, useParams } from "react-router";
import Book from "../../pages/Book/Book";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();

  const book = data.find((book) => book.bookId === bookId);

  const { bookName, image } = book;

  //   const

  console.log(book);

  return (
    <div className="w-2/3 mx-auto">
      {/* <Book key={book.bookId} singleBook={book}></Book> */}

      <img className="w-48" src={image} alt="" />
      <h5>{bookName}</h5>

      <button className="btn btn-accent">Read</button>
      <button className="btn btn-info">Wish List</button>
    </div>
  );
};

export default BookDetails;
