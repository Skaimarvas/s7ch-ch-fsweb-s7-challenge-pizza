import React from "react";
import OrderForm from "../components/OrderForm";
import Header from "../layouts/Header";
import banner from "../Assets/adv-aseets/adv-form-banner.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const OrderPage = ({ fetchorders, setOrders }) => {
  return (
    <>
      <div className="orderdescription">
        <Header />

        <div className="flex  flex-col orderpage">
          <div className="flex justify-center">
            {" "}
            <img className="banner" src={banner} alt="logo" />{" "}
          </div>
          <div className="flex justify-start">
            <Link to="/">
              {" "}
              <p>Anasayfa</p>{" "}
            </Link>
            -<p className="createorder">Sipariş Oluştur</p>
          </div>
          <div>
            <h3 className="text-1xl font-semibold text-left py-5">
              Position Absolute Acı Pizza
            </h3>
            <div className="flex   items-center">
              <h2 className="flex flex-1 text-2xl font-bold  py-5">85,50 ₺</h2>
              <div className="flex flex-1 justify-around">
                {" "}
                <p className="">4.9</p>
                <p>(200)</p>{" "}
              </div>
            </div>

            <p className="text-left pb-10" style={{ color: "#5F5F5F" }}>
              Frontent Dev olarak hala position:absolute kullanıyorsan bu çok
              acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen
              pizzetta denir.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col orderpage">
        <OrderForm fetchorders={fetchorders} setOrders={setOrders} />
      </div>
    </>
  );
};

export default OrderPage;
