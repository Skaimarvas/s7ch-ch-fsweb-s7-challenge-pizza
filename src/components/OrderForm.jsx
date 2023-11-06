import React, { useEffect, useState } from "react";
import axios from "axios";

const toppings = [
  "Pepperoni",
  "Tavuk Izgara",
  "Mısır",
  "Sarımsak",
  "Ananas",
  "Sosis",
  "Soğan",
  "Sucuk",
  "Biber",
  "Kabak",
  "Kanada Jambonu",
  "Domates",
  "Jalepeno",
  "Salam",
];

const emptyOrder = {
  size: "",
  dough: "",
  addIng: "",
  orderNote: "",
  extra: "",
  totalPrice: "",
};

const OrderForm = ({ order = emptyOrder }) => {
  const [counter, setCounter] = useState(1);

  const [size, setSize] = useState("md");

  const [price, setPrice] = useState(85.5);

  const [selecttops, setSelecttops] = useState([]);

  const [dough, setDough] = useState("nl");

  const [purorder, setPurorder] = useState(order);

  const inputChangeHandler = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const updatedAddIng = checked
        ? [...purorder.addIng, name]
        : purorder.addIng.filter((item) => item !== name);

      setPurorder((prevPurorder) => ({
        ...prevPurorder,
        addIng: updatedAddIng,
        extra: updatedAddIng.length * 5,
      }));
    } else {
      setPurorder((prevPurorder) => ({
        ...prevPurorder,
        [name]: value,
        extra: prevPurorder.extra,
      }));
    }

    console.log("Checked", checked);
    console.log("Name", name);
    console.log("Value", value);
  };

  const addOrder = () => {
    setCounter(counter + 1);
  };
  const remOrder = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    console.log("Purorder", purorder);
  }, [purorder]);

  useEffect(() => {
    const doughFactor = dough === "th" ? 0.8 : dough === "nl" ? 1 : 1.2;
    const sizeFactor = size === "sm" ? 0.8 : size === "md" ? 1 : 1.2;
    const newTotal =
      price * counter * doughFactor * sizeFactor + purorder.extra;

    setPurorder((prevPurorder) => ({
      ...prevPurorder,
      totalPrice: newTotal,
    }));
    console.log("extra", purorder.extra);
    console.log("Purorder", purorder);
  }, [price, counter, size, dough, purorder.extra]);

  return (
    <div className="bg-white">
      <form id="pizza-form">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <label>
              <h4> Boyut Seç </h4>
            </label>
            <div>
              <input
                id="radio-sm"
                name="size"
                type="radio"
                checked={size === "sm" ? true : false}
                value={"sm"}
                onChange={(e) => {
                  setSize(e.target.value);
                  inputChangeHandler(e);
                }}
              />
              Küçük
            </div>
            <div>
              <input
                id="radio-md"
                name="size"
                type="radio"
                checked={size === "md" ? true : false}
                value={"md"}
                onChange={(e) => {
                  setSize(e.target.value);
                  inputChangeHandler(e);
                }}
              />
              Orta
            </div>

            <div>
              <input
                id="radio-lg"
                name="size"
                type="radio"
                checked={size === "lg" ? true : false}
                value={"lg"}
                onChange={(e) => {
                  setSize(e.target.value);
                  inputChangeHandler(e);
                }}
              />
              Büyük
            </div>
          </div>

          <div className="flex flex-col">
            <label>
              {" "}
              <h4> Hamur Seç </h4>{" "}
            </label>
            <select
              id="dough-thick"
              value={dough}
              name="dough"
              onChange={(e) => {
                setDough(e.target.value);
                inputChangeHandler(e);
              }}
            >
              <option value={"th"}>İnce</option>
              <option value={"nl"}>Normal</option>
              <option value={"tc"}>Kalın</option>
            </select>
          </div>
        </div>

        <label>
          <h4>Ek Malzemeler</h4>
          En fazla 10 malzeme seçebilirsiniz. 5₺
        </label>
        <div className="flex flex-wrap ">
          {toppings.map((top, index) => (
            <div className="flex  items-baseline w-1/3">
              {" "}
              <input
                key={index}
                type="checkbox"
                name={top}
                onClick={(e) => {
                  inputChangeHandler(e);
                }}
              />{" "}
              {top}{" "}
            </div>
          ))}
        </div>
        <label>
          {" "}
          <h4>Sipariş Notu</h4>
          <input
            className="w-full border border-black border-2"
            id="special-text"
            type="text"
            name="orderNote"
            value={purorder.orderNote}
            onChange={inputChangeHandler}
            placeholder="Siparişine eklemek istediğin bir not var mı?"
          />
        </label>
        <button id="submit-button" type="submit">
          {" "}
          Sipariş Ver
        </button>
      </form>

      <div className="flex justify-between">
        <div>
          <button className="bg-blue-500 text-white" onClick={remOrder}>
            {" "}
            <div>-</div>{" "}
          </button>
          {counter}
          <button className="bg-blue-500 text-white" onClick={addOrder}>
            {" "}
            <div>+</div>
          </button>
        </div>
        <div> Ek Malzemeler {purorder.extra ? purorder.extra : "0"}₺ </div>
        <div>
          {" "}
          Toplam Fiyat {purorder.totalPrice ? purorder.totalPrice : "0"}₺{" "}
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
