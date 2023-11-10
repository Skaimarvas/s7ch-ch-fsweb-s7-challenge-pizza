import React from "react";
import Footer from "./Footer";
import PageContent from "./PageContent";

const Main = ({ orders, setOrders }) => {
  return (
    <div>
      <PageContent orders={orders} setOrders={setOrders} />
      {window.location.pathname !== "/order-complete" ? <Footer /> : ""}
    </div>
  );
};

export default Main;
