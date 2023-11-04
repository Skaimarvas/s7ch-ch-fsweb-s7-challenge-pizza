import React from "react";

const OrderForm = () => {
  return (
    <div>
      <form id="pizza-form">
        <label>
          {" "}
          <h4> Boyut Seç </h4>
        </label>
        <input id="radio" name="radiobutton" type="radio" />
        Küçük
        <input id="radio" name="radiobutton" type="radio" />
        Orta
        <input id="radio" name="radiobutton" type="radio" />
        Büyük
        <label>
          {" "}
          <h4> Hamur Seç </h4>{" "}
        </label>
        <select id="hamur-kalınlıgı">
          <option>Hamur Kalınlığı</option>
          <option>İnce</option>
          <option>Normal</option>
          <option>Kalın</option>
        </select>
        <label>
          {" "}
          <h4>Ek Malzemeler</h4>
          En fazla 10 malzeme seçebilirsiniz. 5₺
        </label>
        <input id="checkbox" type="checkbox" /> Pepperoni
        <input id="checkbox" type="checkbox" /> Sosis
        <input id="checkbox" type="checkbox" /> Kanada Jambonu
        <input id="checkbox" type="checkbox" /> Tavuk Izgara
        <input id="checkbox" type="checkbox" /> Soğan
        <input id="checkbox" type="checkbox" /> Domates
        <input id="checkbox" type="checkbox" /> Mısır
        <input id="checkbox" type="checkbox" /> Sucuk
        <input id="checkbox" type="checkbox" /> Jalepeno
        <input id="checkbox" type="checkbox" /> Sarımsak
        <input id="checkbox" type="checkbox" /> Biber
        <input id="checkbox" type="checkbox" /> Sucuk
        <input id="checkbox" type="checkbox" /> Ananas
        <input id="checkbox" type="checkbox" /> Kabak
        <label>
          {" "}
          <h4>Sipariş Notu</h4>
          <input id="special-text" type="text" />
        </label>
      </form>
    </div>
  );
};

export default OrderForm;
