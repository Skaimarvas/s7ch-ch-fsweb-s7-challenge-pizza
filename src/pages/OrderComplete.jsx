import React from "react";
import logo from "../Assets/logo.svg";

const OrderComplete = ({ orders }) => {
  const total = orders.totalPrice;
  const extra = orders.extra;

  return (
    <div className=" flex flex-col items-center ordercomplete">
      <img className="mx-auto mt-10" src={logo} alt="logo" />
      <div className="mt-20">
        <div className="completemsg1">
          <p> lezzeting yolda </p>
        </div>
        <div className="completemsg mb-5 px-20 pb-5">
          <p> SİPARİŞ ALINDI</p>
        </div>
        <hr />
      </div>

      <div className="mt-10">
        <h3 className="text-2xl text-white">Position Absolute Acı Pizza</h3>
      </div>
      <div className="flex flex-col items-start mt-10 detail ">
        <p>
          İsim: <span> {orders.name} </span>
        </p>
        <p>
          Boyut: <span> {orders.size} </span>
        </p>
        <p>
          Hamur:
          <span>
            Süpper
            {orders.dough === "th"
              ? "İnce"
              : orders.dough === "nl"
              ? "Normal"
              : "Kalın"}
          </span>
        </p>
        <p className="flex flex-wrap">
          Ek Malzemeler:
          {orders.addIng.map((item, index) => (
            <span key={index}>
              {item}
              {index !== orders.addIng.length - 1 ? "," + " " : ""}
            </span>
          ))}
        </p>
        <p>
          Not: <span> {orders.orderNote} </span>
        </p>
      </div>
      <div className="flex flex-col justify-between  total px-20 py-7 mb-10">
        {" "}
        <div>
          <h4 className="text-2xl">Siparişler Toplamı</h4>
        </div>
        <div className="flex justify-between">
          <p>Seçimler:</p>
          <p>{extra.toFixed(2)}₺</p>
        </div>
        <div className="flex justify-between">
          <p>Toplam:</p>
          <p>{total.toFixed(2)}₺ </p>
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;
