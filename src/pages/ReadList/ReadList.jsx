import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utilities/addToDB";
import Book from "../Book/Book";

const ReadList = () => {
  //worst case
  const [readList, setReadList] = React.useState([]);
  const [sort, setSort] = React.useState([]);

  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBook();
    const ConvertedStoredBooks = storedBookData.map((id) => parseInt(id));

    const myReadList = data.filter((book) =>
      ConvertedStoredBooks.includes(book.bookId)
    );

    setReadList(myReadList);
    // console.log(myReadList);
  }, [data]);

  const handleSort = (type) => {
    setSort(type);

    if (type === "pages") {
      const sortedByPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedByPage);
    }
    if (type === "ratings") {
      const sortedByRating = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedByRating);
    }
  };

  return (
    <div>
      <details className="dropdown">
        <summary className="btn m-1">Sort By : {sort ? sort : ""}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={() => handleSort("pages")}>Page</a>
          </li>
          <li>
            <a onClick={() => handleSort("ratings")}>Rating</a>
          </li>
        </ul>
      </details>
      <Tabs className="my-10">
        <TabList>
          <Tab>Read Books List</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          <h2 className="my-5">Books I have read : {readList.length}</h2>

          <div className="space-y-10">
            {readList.map((read) => (
              <div key={read.bookId}>
                <Book singleBook={read}></Book>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>My Wishlist</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
