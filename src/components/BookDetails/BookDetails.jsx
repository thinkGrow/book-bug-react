import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Book from "../../pages/Book/Book";
import { addToStoredDB } from "../../utilities/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();

  const book = data.find((book) => book.bookId === bookId);

  const { bookName, image } = book;

  //   const

  const handleMarkAsRead = (id) => {
    // store with id
    // where to store
    // array or collection
    // check if book alreaedy exist, alert
    // if book does not exist, push in the collection or array

    addToStoredDB(id);
  };

  return (
    <div className="w-2/3 mx-auto">
      {/* <Book key={book.bookId} singleBook={book}></Book> */}

      <img className="w-48" src={image} alt="" />
      <h5>{bookName}</h5>

      <button onClick={() => handleMarkAsRead(id)} className="btn btn-accent">
        Mark as read
      </button>
      <button className="btn btn-info">Wish List</button>
    </div>
  );
};

export default BookDetails;
