import React from "react";
import logo from "../Assets/logo.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  const imageStyle1 = {
    width: "250px",
    height: "40px",
  };

  return (
    <div className="mt-10" style={{ backgroundColor: "#ce2829" }}>
      <img
        className="mx-auto my-auto"
        src={logo}
        alt="logo"
        style={imageStyle1}
      />
      <Link to="/">
        {" "}
        <p>Anasayfa</p>{" "}
      </Link>
      <p>Seçenekler</p>
      <p>Sipariş Oluştur</p>
    </div>
  );
};

export default Header;
