import React from "react";
import "../styles/Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink exact to="/borrowedBooks">
            Książki wypożyczone
          </NavLink>
        </li>
        <li>
          <NavLink to="/returnedBooks">Książki oddane</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
