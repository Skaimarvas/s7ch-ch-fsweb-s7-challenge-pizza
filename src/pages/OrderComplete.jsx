import React from "react";
import logo from "../Assets/logo.svg";

const OrderComplete = ({ orders }) => {
  const imageStyle1 = {
    width: "250px",
    height: "40px",
  };

  return (
    <div className="mt-10 flex flex-col items-center">
      <img className="mx-auto" src={logo} alt="logo" style={imageStyle1} />{" "}
      <div
        style={{
          fontFamily: "Bebas Neue, sans-serif",
          fontSize: "3.5rem",
          lineHeight: "60px",
          color: "white",
        }}
      >
        {" "}
        <p> TEBRİKLER </p>
        <p> SİPARİŞİNİZ ALINDI</p>{" "}
      </div>
      <div>
        <h2>Sipariş Detayı</h2>
        <pre>{JSON.stringify(orders, null, 2)}</pre>
      </div>
    </div>
  );
};

export default OrderComplete;
