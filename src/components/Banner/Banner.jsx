import React from "react";

import bookimage from "../../../public/assets/books.jpg";

const Banner = () => {
  return (
    <div className="flex w-full justify-between items-center p-2">
      <div>
        <h1>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio?
        </h1>
        <button className="btn btn-primary">Test</button>
      </div>
      <div>
        <img src={bookimage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
