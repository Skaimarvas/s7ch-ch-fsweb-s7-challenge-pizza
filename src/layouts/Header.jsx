import React from "react";
import logo from "../Assets/logo.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  return (
    <div className="py-5 headerbg">
      <Link to="/">
        <img className="mx-auto my-auto" src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Header;
