import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Main from "./layouts/Main";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab.faTwitter);

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
      <Main orders={orders} fetchorders={fetchorders} />
    </>
  );
}

export default App;
