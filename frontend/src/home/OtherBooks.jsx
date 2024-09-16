import React, { useEffect, useState } from "react";
import Bookcards from "../components/Bookcards";

const OtherBooks = () => {
  const [books, setbooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setbooks(data.slice(0, 8)));
  }, []);
  return (
    <div>
      <Bookcards books={books} headLine="Other Books" />
    </div>
  );
};

export default OtherBooks;
