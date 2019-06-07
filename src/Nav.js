import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <h3>
        <Link to={`/`}>Logo </Link>
      </h3>
      <ul>
        <li>about</li>
        <li>contract</li>
      </ul>
    </nav>
  );
}
export default Nav;
