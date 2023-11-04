import React from "react";
import logo from "../Assets/logo.svg";

const Header = () => {
  const imageStyle1 = {
    width: "250px",
    height: "40px",
  };

  return (
    <div className="flex items-center justify-center h-full">
      <img
        className="mx-auto my-auto absolute"
        src={logo}
        alt="logo"
        style={imageStyle}
      />
    </div>
  );
};

export default Header;
