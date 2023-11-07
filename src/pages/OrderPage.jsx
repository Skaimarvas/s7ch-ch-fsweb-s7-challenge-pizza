import React from "react";
import OrderForm from "../components/OrderForm";
import Header from "../layouts/Header";

const OrderPage = ({ fetchorders }) => {
  return (
    <div className="bg-white">
      <Header />
      <div
        className="flex flex-start flex-col max-w-md"
        style={{ margin: "0 auto", height: "100vh" }}
      >
        <h3 className="text-2xl font-semibold text-left">
          Position Absolute Acı Pizza
        </h3>
        <h2 className="text-3xl font-bold text-left">85,50 ₺</h2>

        <p className="text-left">
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
        </p>

        <OrderForm fetchorders={fetchorders} />
      </div>
    </div>
  );
};

export default OrderPage;
