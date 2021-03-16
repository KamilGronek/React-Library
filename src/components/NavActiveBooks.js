import React from "react";

const NavActiveBooks = props => {
  const { length } = props.activeBooks.props.children;
  return (
    <div className="active">
      <h1>
        Książki wypożyczone:
        <em>({length ? length : 0})</em>
      </h1>
      <section className="gallery">{props.activeBooks}</section>
    </div>
  );
};

export default NavActiveBooks;
