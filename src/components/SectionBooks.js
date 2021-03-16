import React from "react";
import "../styles/SectionBooks.css";
import { Route } from "react-router-dom";
import NavActiveBooks from "./NavActiveBooks";
import NavDoneBooks from "./NavDoneBooks";

const SectionBooks = props => {
  return (
    <>
      <Route path="/" exact render={() => <NavActiveBooks {...props} />} />
      <Route path="/returnedBooks" render={() => <NavDoneBooks {...props} />} />
    </>
  );
};

export default SectionBooks;
