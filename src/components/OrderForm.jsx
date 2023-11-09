import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

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
  size: "M",
  dough: "nl",
  addIng: [],
  name: "",
  orderNote: "",
  extra: 0,
  totalPrice: 0,
};

const pizzaSize = ["S", "M", "L"];
const doughSize = ["th", "nl", "tc"];

const OrderForm = ({ order = emptyOrder, fetchorders }) => {
  const [counter, setCounter] = useState(1);

  const [size, setSize] = useState("M");

  const [price, setPrice] = useState(85.5);

  const [dough, setDough] = useState("nl");

  const [purorder, setPurorder] = useState(order);

  const [formErrors, setFormErrors] = useState({
    size: "",
    dough: "",
    addIng: "",
    name: "",
    orderNote: "",
    extra: "",
    totalPrice: "",
  });

  const [formValid, setFormValid] = useState(true);

  const history = useHistory();

  const inputChangeHandler = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const updatedAddIng = checked
        ? [...purorder.addIng, value]
        : purorder.addIng.filter((item) => item !== value);

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

    checkValidationFor(name, value);

    console.log("Name", name);
    console.log("Value", value);
  };

  const incOrder = () => {
    setCounter(counter + 1);
  };
  const decOrder = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();

    for (let key in purorder) {
      console.log("checkValidationFor(key, member[key] >", key, purorder[key]);
      checkValidationFor(key, purorder[key]);
    }

    if (formValid) {
      console.log("FORM SUBMİT EDİLDİ");
      console.log("Order", purorder);

      axios
        .post("https://reqres.in/api/orders", purorder)
        .then((res) => {
          console.log("Sipariş başarıyla kaydedildi");
          console.log("Data", res.data);
          console.log("Status", res.status);

          history.push("/order-complete");
        })
        .catch((err) => console.log("Error", err));
    }
  };

  const orderFormSchema = Yup.object().shape({
    size: Yup.string(),
    dough: Yup.string(),
    extra: Yup.number()
      .min(20, "En az 4 malzeme seçmeniz gerekir")
      .max(50, "En fazla 10 malzeme seçebilirsiniz")
      .required("Malzeme seçmeniz gerekiyor"),
    addIng: Yup.mixed(),
    name: Yup.string()
      .min(3, "En az 3 karakter girmeniz gerekiyor")
      .required("İsim girmeniz gerekiyor"),
    orderNote: Yup.string(),

    totalPrice: Yup.number(),
  });

  const checkValidationFor = (field, value) => {
    Yup.reach(orderFormSchema, field)
      .validate(value)
      .then(() => {
        setFormErrors((prevFormErrors) => ({
          ...prevFormErrors,
          [field]: "",
        }));
      })
      .catch((err) => {
        console.log("HATA!", field, err.errors[0]);
        setFormErrors((prevFormErrors) => ({
          ...prevFormErrors,
          [field]: err.errors[0],
        }));
      });
  };

  useEffect(() => {
    console.error("form error", formErrors);
  }, [formErrors]);

  useEffect(() => {
    console.log("Purorder", purorder);
    console.log("orderFormSchema is valid >", formValid);
    orderFormSchema.isValid(purorder).then((valid) => setFormValid(valid));
  }, [purorder]);

  useEffect(() => {
    const doughFactor = dough === "th" ? 0.8 : dough === "nl" ? 1 : 1.2;
    const sizeFactor = size === "S" ? 0.8 : size === "M" ? 1 : 1.2;
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
      <form id="pizza-form" onSubmit={formSubmit}>
        <div className="flex flex-wrap  mb-10">
          <div className="flex flex-col " style={{ marginRight: "7rem" }}>
            <h4 className="font-bold text-left">
              {" "}
              Boyut Seç <span className="text-red-500">*</span>{" "}
            </h4>

            <div className="flex items-baseline">
              {pizzaSize.map((psize, index) => (
                <label>
                  <div key={index} className="pb-2">
                    {" "}
                    <input
                      id={`radio-${psize}`}
                      name="size"
                      className={`pizzasize ${
                        size === psize ? "selected" : ""
                      }`}
                      type="button"
                      value={psize}
                      onClick={(e) => {
                        setSize(e.target.value);
                        inputChangeHandler(e);
                      }}
                    />{" "}
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="dough-thick">
              {" "}
              <h4 className="font-bold text-left">
                {" "}
                Hamur Seç <span className="text-red-500">*</span>{" "}
              </h4>{" "}
            </label>
            <select
              id="dough-thick"
              className="doughsize"
              value={dough}
              name="dough"
              onChange={(e) => {
                setDough(e.target.value);
                inputChangeHandler(e);
              }}
            >
              {doughSize.map((dough) => (
                <option value={dough}>
                  {" "}
                  {dough === "th"
                    ? "İnce"
                    : dough === "nl"
                    ? "Normal"
                    : "Kalın"}{" "}
                </option>
              ))}
            </select>
          </div>
        </div>

        <h4 className="text-left font-bold pb-2">Ek Malzemeler</h4>
        <p className="text-left  pb-2" style={{ color: "#5F5F5F" }}>
          En fazla 10 malzeme seçebilirsiniz. 5₺
        </p>

        <div className="flex flex-wrap  items-baseline  pb-10">
          {toppings.map((top, index) => (
            <div key={index} className="pr-20">
              <label className="malzemeler ">
                {" "}
                <input
                  id="add"
                  type="checkbox"
                  name="addIng"
                  value={top}
                  onClick={(e) => {
                    inputChangeHandler(e);
                  }}
                />{" "}
                <span className="checkmark"></span>
                {top}
              </label>
            </div>
          ))}
        </div>
        {formErrors.extra && (
          <div className="text-red-500">{formErrors.extra}</div>
        )}

        <label className="mb-3">
          {" "}
          <h4 className="text-left  font-bold mb-3">İsim</h4>
          <input
            id="name-input"
            className="namearea w-full p-2 mb-3"
            type="text"
            name="name"
            onKeyDown={handleKeyPress}
            value={purorder.name}
            onChange={inputChangeHandler}
            placeholder="Lütfen isminizi yazınız."
          />{" "}
        </label>
        {formErrors.name && (
          <div className="text-red-500 mb-3"> {formErrors.name} </div>
        )}

        <h4 className="text-left font-bold mb-3">Sipariş Notu</h4>
        <textarea
          className="w-full h-20 textarea p-4 mb-5"
          name="orderNote"
          value={purorder.orderNote}
          onChange={inputChangeHandler}
          onKeyDown={handleKeyPress}
          placeholder="Siparişinize eklemek istediğin bir not var mı?"
        ></textarea>
        <hr />

        <div className="flex flex-wrap justify-between">
          <div className="mt-3 mb-10 mx-3">
            <button
              className="text-white font-bold py-3 px-6 rounded-lg shadow-md "
              style={{ backgroundColor: "#FDC913" }}
              onClick={(e) => {
                incOrder();
                e.preventDefault();
              }}
            >
              {" "}
              <div>+</div>{" "}
            </button>
            <span className="py-3 px-6 counterspan">{counter}</span>

            <button
              className="text-white font-bold py-3 px-6 rounded-lg shadow-md"
              style={{ backgroundColor: "#FDC913" }}
              disabled={counter === 0}
              onClick={(e) => {
                decOrder();
                e.preventDefault();
              }}
            >
              {" "}
              <div>-</div>
            </button>
          </div>
          <div className="flex flex-col  mt-3 mb-10 mx-3  ordertotal">
            <div className="m-10">
              <div className="flex justify-between mb-5">
                <h3 className="text-1xl font-semibold">Sipariş Toplamı</h3>
              </div>
              <div className="flex justify-between py-2">
                <p>Seçimler</p>
                <p>{purorder.extra ? purorder.extra : "0"}₺</p>{" "}
              </div>
              <div className="flex justify-between py-2 ">
                <p className="text-red-500"> Toplam Fiyat</p>
                <p className="text-red-500">
                  {" "}
                  {purorder.totalPrice ? purorder.totalPrice : "0"}₺{" "}
                </p>
              </div>
            </div>
            <div>
              {" "}
              <button
                id="order-button"
                className="w-full  font-bold py-2 px-20  shadow-md m-0 "
                style={{ backgroundColor: "#FDC913" }}
                type="submit"
              >
                {" "}
                SİPARİŞ VER
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
