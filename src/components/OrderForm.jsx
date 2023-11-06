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
  total: "",
};

const OrderForm = ({ start = 1, order = emptyOrder }) => {
  const [counter, setCounter] = useState(1);

  const [extra, setExtra] = useState(0);

  const [size, setSize] = useState("md");

  const [price, setPrice] = useState(85.5);

  const [total, setTotal] = useState(price * start);

  const [selectedToppings, setSelectedtoppings] = useState([]);

  const [dough, setDough] = useState("nl");

  const [purorder, setPurorder] = useState(emptyOrder);

  const inputChangeHandler = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const updatedAddIng = checked
        ? [...purorder.addIng, name]
        : purorder.addIng.filter((item) => item !== name);

      setPurorder({
        ...purorder,
        addIng: updatedAddIng,
        extra: updatedAddIng.length * 5,
      });
    }
    setPurorder({ ...purorder, [name]: value });
    console.log("Checked", checked);
    console.log("Name", name);
    console.log("Value", value);
  };

  const toggleTopping = (tops) => {
    if (selectedToppings.includes(tops)) {
      setSelectedtoppings(selectedToppings.filter((item) => tops !== item));
      setExtra(extra - 5);
    } else {
      setSelectedtoppings([...selectedToppings, tops]);
      setExtra(extra + 5);
    }
  };
  // const toggleTopping = (tops) => {
  //   if (selectedToppings.includes(tops)) {
  //     setSelectedtoppings((prevToppings) => prevToppings.filter((item) => tops !== item));
  //     setExtra(extra - 5);
  //   } else {
  //     setSelectedtoppings((prevToppings) => [...prevToppings, tops]);
  //     setExtra(extra + 5);
  //   }
  // }; Burası önemli tekrar gözden geçir

  // const formSubmit = (e)=> {
  //   e.preventDefault()
  //   axios
  //   .post("https://reqres.in/api/users/", order)
  //   .then((res)=> {
  //     if (res.status === 201) {
  //       console.log("Sipariş başarıyla oluşturuldu.");
  //       console.log("Api tarafından dönen veri:", res.data, res.status);

  //     }
  //   })
  //   .catch((err)=>{
  //     console.error{"Sipariş oluşturulurken bir hata oluştu", err}
  //   })

  // }

  const addOrder = () => {
    setCounter(counter + 1);
  };
  const remOrder = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    if (dough === "th") {
      if (size === "sm") {
        setTotal(price * counter * 0.8 * 0.8 + extra);
      } else if (size === "md") {
        setTotal(price * counter * 0.8 + extra);
      } else {
        setTotal(price * counter * 0.8 * 1.2 + extra);
      }
    } else if (dough === "nl") {
      if (size === "sm") {
        setTotal(price * counter * 0.8 + extra);
      } else if (size === "md") {
        setTotal(price * counter + extra);
      } else {
        setTotal(price * counter * 1.2 + extra);
      }
    } else {
      if (size === "sm") {
        setTotal(price * counter * 1.2 * 0.8 + extra);
      } else if (size === "md") {
        setTotal(price * counter * 1.2 + extra);
      } else {
        setTotal(price * counter * 1.2 * 1.2 + extra);
      }
    }

    console.log("Purorder", purorder);
  }, [price, counter, extra, selectedToppings, size, dough, purorder]);

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
                value={"sm"}
                onChange={inputChangeHandler}
              />
              Küçük
            </div>
            <div>
              <input
                id="radio-md"
                name="size"
                type="radio"
                value={"md"}
                onChange={inputChangeHandler}
              />
              Orta
            </div>

            <div>
              <input
                id="radio-lg"
                name="size"
                type="radio"
                value={"lg"}
                onChange={inputChangeHandler}
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
                  toggleTopping(top);
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
        <div> Ek Malzemeler {extra}₺ </div>
        <div> Toplam Fiyat {total.toFixed(2)}₺ </div>
      </div>
    </div>
  );
};

export default OrderForm;
