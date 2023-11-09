import React from "react";
import Footer from "./Footer";
import PageContent from "./PageContent";

const Main = ({ fetchorders, orders, setOrders }) => {
  return (
    <div>
      <PageContent
        fetchorders={fetchorders}
        orders={orders}
        setOrders={setOrders}
      />

      <Footer />
    </div>
  );
};

export default Main;
