import React from "react";
import OrderForm from "../components/OrderForm";
import Header from "../layouts/Header";

const OrderPage = () => {
  return (
    <div className="bg-white px-20">
      <Header />
      <div>
        <h3 className="text-2xl font-semibold ml-0">
          Position Absolute Acı Pizza
        </h3>
        <h2 className="text-3xl font-bold">85,50 ₺</h2>
        <p>
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
        </p>
        <OrderForm />
      </div>
    </div>
  );
};

export default OrderPage;
