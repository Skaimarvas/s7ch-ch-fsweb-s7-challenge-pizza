import React, { useState } from "react";

import "./App.css";
import PageContent from "./layouts/PageContent";
import axios from "axios";

function App() {
  const [orders, setOrders] = useState([]);

  const fetchorders = () => {
    axios.get("https://reqres.in/api/orders/").then((res) => {
      setOrders(res.data);
      return res.data;
    });
  };

  return (
    <>
      <PageContent orders={orders} fetchorders={fetchorders} />
    </>
  );
}

export default App;
