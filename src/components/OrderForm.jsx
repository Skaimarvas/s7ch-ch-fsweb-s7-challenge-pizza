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
  size: "md",
  dough: "nl",
  addIng: [],
  name: "",
  orderNote: "",
  extra: "",
  totalPrice: "",
};

const OrderForm = ({ order = emptyOrder, fetchorders }) => {
  const [counter, setCounter] = useState(1);

  const [size, setSize] = useState("md");

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

    if (type === "checkbox") {
    } else {
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
      .max(50, "En fazla 10 malzeme seçebilirsiniz"),
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
      <form id="pizza-form" onSubmit={formSubmit}>
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
            <div className="flex  items-baseline w-1/3" key={index}>
              {" "}
              <input
                type="checkbox"
                name="addIng"
                value={top}
                onClick={(e) => {
                  inputChangeHandler(e);
                }}
              />{" "}
              {top}
            </div>
          ))}
        </div>
        {formErrors.extra && (
          <div className="text-red-500">{formErrors.extra}</div>
        )}
        <hr />
        <label>
          {" "}
          İsim alanı{" "}
          <input
            id="name-input"
            className="border border-black border-2"
            type="text"
            name="name"
            onKeyDown={handleKeyPress}
            value={purorder.name}
            onChange={inputChangeHandler}
            placeholder="Lütfen isminizi yazınız."
          />{" "}
        </label>
        {formErrors.name && (
          <div className="text-red-500"> {formErrors.name} </div>
        )}
        <label>
          {" "}
          <h4>Sipariş Notu</h4>
          <input
            className="w-full border border-black border-2"
            id="special-text"
            type="text"
            name="orderNote"
            value={purorder.orderNote}
            onKeyDown={handleKeyPress}
            onChange={inputChangeHandler}
            placeholder="Siparişine eklemek istediğin bir not var mı?"
          />
        </label>

        <div className="flex justify-between">
          <div>
            <button
              className="bg-blue-500 text-white"
              disabled={counter === 0}
              onClick={(e) => {
                decOrder();
                e.preventDefault();
              }}
            >
              {" "}
              <div>-</div>{" "}
            </button>
            {counter}
            <button
              className="bg-blue-500 text-white"
              onClick={(e) => {
                incOrder();
                e.preventDefault();
              }}
            >
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
        <button id="order-button" type="submit">
          {" "}
          Sipariş Ver
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
