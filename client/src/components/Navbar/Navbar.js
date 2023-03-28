import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <h1>Karaoke Rock and Beer</h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/songlist">Songlist</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
