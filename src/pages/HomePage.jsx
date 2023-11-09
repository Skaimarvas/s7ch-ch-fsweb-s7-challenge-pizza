import { Link } from "react-router-dom";
import logo from "../Assets/logo.svg";
import logo1 from "../Assets/adv-aseets/icons/1.svg";
import logo2 from "../Assets/adv-aseets/icons/2.svg";
import logo3 from "../Assets/adv-aseets/icons/3.svg";
import logo4 from "../Assets/adv-aseets/icons/4.svg";
import logo5 from "../Assets/adv-aseets/icons/5.svg";
import logo6 from "../Assets/adv-aseets/icons/6.svg";
import food1 from "../Assets/adv-aseets/food-1.png";
import food2 from "../Assets/adv-aseets/food-2.png";
import food3 from "../Assets/adv-aseets/food-3.png";

const HomePage = () => {
  return (
    <>
      <div className="pt-10 flex flex-col items-center mainimg">
        <img className="mx-auto imgstyle" src={logo} alt="logo" />{" "}
        <div className="mt-10 mb-0">
          <p className="express"> fırsatı kaçırma </p>
        </div>
        <div className="advert mt-0">
          <p> KOD ACIKTIRIR </p>
          <p> PİZZA, DOYURUR</p>{" "}
        </div>
        <div className="mt-3">
          <button className="hero">ACIKTIM</button>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly  midbar">
        <div className="flex items-center">
          {" "}
          <img src={logo1} alt="logo" />
          <p>YENİ! Kore</p>
        </div>
        <div className="flex items-center">
          {" "}
          <img src={logo2} alt="logo" />
          <p>Pizza</p>
        </div>
        <div className="flex items-center">
          {" "}
          <img src={logo3} alt="logo" />
          <p>Burger</p>
        </div>
        <div className="flex items-center">
          {" "}
          <img src={logo4} alt="logo" />
          <p>Kızartmalar</p>
        </div>
        <div className="flex items-center">
          {" "}
          <img src={logo5} alt="logo" />
          <p>Fast food</p>
        </div>
        <div className="flex items-center">
          {" "}
          <img src={logo6} alt="logo" />
          <p>Gazlı içecek</p>
        </div>
      </div>
      <div className="flex flex-col mainsection ">
        <div className="flex flex-wrap justify-center content mt-10">
          <div className="flex card1">
            <div className="flex flex-col special">
              <h3 className="specialh3">Özel Lezzetus</h3>
              <p className="specialp">Position:Absolute Acı Pizza</p>
              <Link to="/pizza">
                <button
                  id="createorder"
                  className="flex flex-left purbutton mt-5"
                >
                  SİPARİŞ VER
                </button>{" "}
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="card2">
              <div className="flex flex-col special">
                <h3 className="specialh3oth">Hackatholon</h3>
                <h3 className="specialh3oth">Burger Menü</h3>
                <a>
                  <button className="flex flex-left purbutton mt-5">
                    SİPARİŞ VER
                  </button>{" "}
                </a>
              </div>
            </div>
            <div className="card3">
              <div className="flex flex-col special">
                <h3 className="specialh3oth1">
                  {" "}
                  <span className="kurye">Çoooook</span> hızlı
                </h3>
                <h3 className="specialh3oth1">npm gibi kurye</h3>
                <a>
                  <button className="flex flex-left purbutton mt-5">
                    SİPARİŞ VER
                  </button>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10">
          <p className="express1">en çok paketlenen menüler</p>
          <h3 className="midh3">Acıktıran Karın Doyuran Lezzetler</h3>
        </div>
        <div className="flex flex-wrap justify-evenly my-5">
          <button className="flex items-center midbuttons">
            {" "}
            <img src={logo1} className="buttonimg" alt="logo" />
            <p>Ramen</p>
          </button>
          <button className="flex items-center midbuttons">
            {" "}
            <img src={logo2} className="buttonimg" alt="logo" />
            <p>Pizza</p>
          </button>
          <button className="flex items-center midbuttons">
            {" "}
            <img src={logo3} className="buttonimg" alt="logo" />
            <p>Burger</p>
          </button>
          <button className="flex items-center midbuttons">
            {" "}
            <img src={logo4} className="buttonimg" alt="logo" />
            <p>French Fries</p>
          </button>
          <button className="flex items-center midbuttons">
            {" "}
            <img src={logo5} className="buttonimg" alt="logo" />
            <p>Fast food</p>
          </button>
          <button className="flex items-center midbuttons">
            {" "}
            <img src={logo6} className="buttonimg" alt="logo" />
            <p>Soft Drinks</p>
          </button>
        </div>
        <div className="flex flex-wrap justify-around">
          <div>
            <a>
              <button className="pspec">
                <img src={food1} />
                <div>
                  <h4 className="prodh4">Terminal Pizza</h4>
                  <div className="flex justify-between mt-5">
                    <p>4.9</p>
                    <p>(200) </p>
                    <p> 60₺ </p>
                  </div>
                </div>
              </button>
            </a>
          </div>
          <div>
            <a>
              <button className="pspec">
                <img src={food2} />
                <div>
                  <h4 className="prodh4">Position Absolute Acı Pizza</h4>
                  <div className="flex justify-between mt-5">
                    <p>4.9</p>
                    <p>(928)</p>
                    <p>85₺</p>
                  </div>
                </div>
              </button>
            </a>
          </div>
          <div>
            <a>
              <button className="pspec">
                <img src={food3} />
                <div>
                  <h4 className="prodh4">useEffect Tavuklu Burger</h4>
                  <div className="flex justify-between mt-5">
                    <p>4.9</p>
                    <p>(462)</p>
                    <p>75₺</p>
                  </div>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
