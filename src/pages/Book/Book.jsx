import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";

const Book = ({ singleBook }) => {
  //     [
  //   {
  //     "bookId": 1,
  //     "bookName": "The Great Gatsby",
  //     "author": "F. Scott Fitzgerald",
  //     "image": "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
  //     "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
  //     "totalPages": 192,
  //     "rating": 4.5,
  //     "category": "Classic",
  //     "tags": ["Fiction", "Romance"],
  //     "publisher": "Scribner",
  //     "yearOfPublishing": 1925
  //   },
  const {
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    yearOfPublishing,
    publisher,
  } = singleBook;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm border gap-5 p-6">
        <figure className="p-4 bg-gray-100 w-2/3 mx-auto">
          <img src={image} className="h-[168px]" alt="Shoes" />
        </figure>

        <div className="flex justify-center gap-10">
          {tags.map((tag) => (
            <button className="btn">{tag}</button>
          ))}
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>Book by: {publisher}</p>

          <div className="border-t-1 border-dashed"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating} <FaStarHalfAlt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
