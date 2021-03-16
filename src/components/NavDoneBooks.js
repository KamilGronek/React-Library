import React from "react";

const NavDoneBooks = props => {
  const { length } = props.doneBooks.props.children;
  return (
    <div className="done">
      <h1>
        Książki oddane:<em>({length ? length : 0})</em>
      </h1>
      <section className="gallery">{props.doneBooks}</section>
    </div>
  );
};

export default NavDoneBooks;
