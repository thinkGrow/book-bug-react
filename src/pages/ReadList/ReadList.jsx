import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utilities/addToDB";
import Book from "../Book/Book";

const ReadList = () => {
  //worst case
  const [readList, setReadList] = React.useState([]);

  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBook();
    const ConvertedStoredBooks = storedBookData.map((id) => parseInt(id));

    const myReadList = data.filter((book) =>
      ConvertedStoredBooks.includes(book.bookId)
    );

    setReadList(myReadList);
    // console.log(myReadList);
  }, []);

  return (
    <div>
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
