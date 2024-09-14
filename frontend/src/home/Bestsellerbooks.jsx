import React, { useEffect, useState } from "react";
import Bookcards from "../components/Bookcards";

const Bestsellerbooks = () => {
  const [books, setbooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setbooks(data.slice(0, 6)));
  }, []);
  return (
    <div>
      <Bookcards books={books} headLine="Best Seller Books" />
    </div>
  );
};

export default Bestsellerbooks;
